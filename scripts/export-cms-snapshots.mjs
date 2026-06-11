import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { createServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const appFile = path.resolve(projectRoot, 'src', 'App.jsx');
const defaultOutput = path.resolve(
  projectRoot,
  '..',
  'Salymbekov-backend-main',
  'cms_pages',
  'imports',
  'frontend-cms-snapshots.json'
);

const routePattern = /managedPage\('([^']+)',\s*<([A-Za-z0-9_]+)\s*\/?>\)/g;
const directImportPattern = /^import\s+([A-Za-z0-9_]+)\s+from\s+['"]([^'"]+)['"]/gm;
const lazyImportPattern = /^const\s+([A-Za-z0-9_]+)\s*=\s*lazy\(\(\)\s*=>\s*import\(['"]([^'"]+)['"]\)\)/gm;
const supportedExtensions = ['.jsx', '.js', '.tsx', '.ts'];
const languages = ['ru', 'en', 'kg'];

function ensureAbsoluteRoute(routePath) {
  if (!routePath) {
    return '/';
  }

  if (routePath.startsWith('/')) {
    return routePath;
  }

  return `/${routePath}`;
}

function stripTags(value = '') {
  return value
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

function collectMatches(pattern, source) {
  const results = [];
  let match = pattern.exec(source);

  while (match) {
    results.push(match);
    match = pattern.exec(source);
  }

  pattern.lastIndex = 0;
  return results;
}

function resolveModuleId(importPath) {
  const resolvedBase = path.resolve(path.dirname(appFile), importPath);
  const candidates = [resolvedBase, ...supportedExtensions.map((extension) => `${resolvedBase}${extension}`)];

  const found = candidates.find((candidate) => supportedExtensions.includes(path.extname(candidate)) || true);
  const existing = candidates.find((candidate) => {
    try {
      return path.extname(candidate) ? true : false;
    } catch {
      return false;
    }
  });

  const finalPath = supportedExtensions.includes(path.extname(resolvedBase))
    ? resolvedBase
    : candidates.find((candidate) => supportedExtensions.includes(path.extname(candidate)));

  const normalized = finalPath || found || existing || resolvedBase;
  const relativePath = path.relative(projectRoot, normalized).split(path.sep).join('/');
  return relativePath.startsWith('.') ? relativePath : `/${relativePath}`;
}

async function fileExists(targetPath) {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
}

function defineGlobal(name, value) {
  Object.defineProperty(globalThis, name, {
    configurable: true,
    writable: true,
    value,
  });
}

async function resolveExistingModuleId(importPath) {
  const basePath = path.resolve(path.dirname(appFile), importPath);
  const candidates = path.extname(basePath)
    ? [basePath]
    : supportedExtensions.map((extension) => `${basePath}${extension}`);

  for (const candidate of candidates) {
    if (await fileExists(candidate)) {
      const relativePath = path.relative(projectRoot, candidate).split(path.sep).join('/');
      return relativePath.startsWith('.') ? relativePath : `/${relativePath}`;
    }
  }

  throw new Error(`Unable to resolve module path for import: ${importPath}`);
}

function extractFirstMatch(html, tagName) {
  const pattern = new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, 'i');
  const match = html.match(pattern);
  return match ? stripTags(match[1]) : '';
}

function extractImages(html) {
  return [...html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"[^>]*>/gi)].map((match) => match[1]);
}

function extractAnchors(html) {
  return [...html.matchAll(/<a\b[^>]*\bhref="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi)].map((match) => ({
    href: match[1],
    text: stripTags(match[2]),
  }));
}

function sanitizeMarkup(html) {
  return html.replace(/<link\s+rel="preload"[\s\S]*?>/gi, '').trim();
}

function createStorage() {
  const store = new Map();
  return {
    getItem(key) {
      return store.has(key) ? store.get(key) : null;
    },
    setItem(key, value) {
      store.set(key, String(value));
    },
    removeItem(key) {
      store.delete(key);
    },
    clear() {
      store.clear();
    },
  };
}

function installDomStubs(language, routePath) {
  const localStorage = createStorage();
  const sessionStorage = createStorage();
  localStorage.setItem('i18nextLng', language);
  sessionStorage.setItem('splashAnimationShown', 'true');

  const location = {
    href: `http://localhost:5173${routePath}`,
    pathname: routePath,
    search: '',
    hash: '',
    origin: 'http://localhost:5173',
  };

  const windowObject = {
    location,
    navigator: {
      language,
      languages: [language],
      userAgent: 'node',
    },
    localStorage,
    sessionStorage,
    addEventListener() {},
    removeEventListener() {},
    dispatchEvent() {},
    scrollTo() {},
    innerWidth: 1440,
    innerHeight: 900,
    matchMedia() {
      return {
        matches: false,
        addListener() {},
        removeListener() {},
        addEventListener() {},
        removeEventListener() {},
        dispatchEvent() {
          return false;
        },
      };
    },
    requestAnimationFrame(callback) {
      return setTimeout(callback, 0);
    },
    cancelAnimationFrame(id) {
      clearTimeout(id);
    },
  };

  const documentObject = {
    body: {},
    documentElement: { lang: language },
    createElement() {
      return {
        style: {},
        setAttribute() {},
        removeAttribute() {},
        appendChild() {},
      };
    },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    addEventListener() {},
    removeEventListener() {},
  };

  defineGlobal('window', windowObject);
  defineGlobal('document', documentObject);
  defineGlobal('navigator', windowObject.navigator);
  defineGlobal('location', location);
  defineGlobal('localStorage', localStorage);
  defineGlobal('sessionStorage', sessionStorage);
  defineGlobal('self', windowObject);
  defineGlobal('HTMLElement', class HTMLElement {});
  defineGlobal('SVGElement', class SVGElement {});
  defineGlobal('Node', class Node {});
  defineGlobal('MutationObserver', class MutationObserver {
    disconnect() {}
    observe() {}
    takeRecords() {
      return [];
    }
  });
  defineGlobal('IntersectionObserver', class IntersectionObserver {
    disconnect() {}
    observe() {}
    unobserve() {}
  });
  defineGlobal('ResizeObserver', class ResizeObserver {
    disconnect() {}
    observe() {}
    unobserve() {}
  });
  defineGlobal('requestAnimationFrame', windowObject.requestAnimationFrame);
  defineGlobal('cancelAnimationFrame', windowObject.cancelAnimationFrame);
}

async function main() {
  const outputPath = process.argv[2] ? path.resolve(process.cwd(), process.argv[2]) : defaultOutput;
  const appSource = await fs.readFile(appFile, 'utf8');

  const imports = new Map();

  for (const match of collectMatches(directImportPattern, appSource)) {
    imports.set(match[1], await resolveExistingModuleId(match[2]));
  }

  for (const match of collectMatches(lazyImportPattern, appSource)) {
    imports.set(match[1], await resolveExistingModuleId(match[2]));
  }

  const routes = collectMatches(routePattern, appSource).map((match) => ({
    path: ensureAbsoluteRoute(match[1]),
    componentName: match[2],
    moduleId: imports.get(match[2]),
  }));

  const vite = await createServer({
    root: projectRoot,
    logLevel: 'error',
    server: {
      middlewareMode: true,
      hmr: false,
    },
    appType: 'custom',
  });

  try {
    const i18nModule = await vite.ssrLoadModule('/src/i18n.js');
    const i18n = i18nModule.default;
    const results = [];

    for (const route of routes) {
      if (!route.moduleId) {
        results.push({
          ...route,
          status: 'failed',
          error: `Missing module path for component ${route.componentName}`,
        });
        continue;
      }

      try {
        const pageModule = await vite.ssrLoadModule(route.moduleId);
        const Component = pageModule.default;

        if (typeof Component !== 'function') {
          throw new Error(`Component ${route.componentName} has no default export`);
        }

        const localized = {};

        for (const language of languages) {
          installDomStubs(language, route.path);
          await i18n.changeLanguage(language);

          const markup = sanitizeMarkup(
            renderToStaticMarkup(
            React.createElement(
              I18nextProvider,
              { i18n },
              React.createElement(
                MemoryRouter,
                { initialEntries: [route.path] },
                React.createElement(Component)
              )
            )
            )
          );

          localized[language] = {
            title: extractFirstMatch(markup, 'h1'),
            subtitle: extractFirstMatch(markup, 'p'),
            html: markup,
            images: extractImages(markup),
            anchors: extractAnchors(markup),
          };
        }

        results.push({
          ...route,
          status: 'ok',
          languages: localized,
        });
      } catch (error) {
        results.push({
          ...route,
          status: 'failed',
          error: error instanceof Error ? error.message : String(error),
        });
      }
    }

    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, JSON.stringify({ generated_at: new Date().toISOString(), routes: results }, null, 2));

    const okCount = results.filter((item) => item.status === 'ok').length;
    const failedCount = results.length - okCount;
    console.log(`Exported ${okCount} routes to ${outputPath}. Failed: ${failedCount}.`);
  } finally {
    await vite.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
