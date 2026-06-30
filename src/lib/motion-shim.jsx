import React from 'react';

// Lightweight drop-in replacement for `framer-motion`.
// Renders motion components as plain DOM/React elements with all animation
// props stripped, so content is always visible (no enter/appear animations).
// Wired in via a Vite alias so the whole site uses it without touching imports.

// framer-motion-specific props that must NOT reach the DOM / underlying element
const MOTION_PROPS = new Set([
  'initial', 'animate', 'exit', 'variants', 'transition', 'custom', 'inherit',
  'whileHover', 'whileTap', 'whileFocus', 'whileInView', 'whileDrag',
  'drag', 'dragConstraints', 'dragElastic', 'dragMomentum', 'dragTransition',
  'dragPropagation', 'dragControls', 'dragListener', 'dragSnapToOrigin',
  'dragDirectionLock', 'onDrag', 'onDragStart', 'onDragEnd', 'onDirectionLock',
  'layout', 'layoutId', 'layoutScroll', 'layoutRoot', 'layoutDependency',
  'viewport', 'transformTemplate', 'transformValues',
  'onAnimationStart', 'onAnimationComplete', 'onUpdate', 'onLayoutAnimationStart',
  'onLayoutAnimationComplete', 'onViewportEnter', 'onViewportLeave',
  'onHoverStart', 'onHoverEnd', 'onTapStart', 'onTap', 'onTapCancel',
  'onPan', 'onPanStart', 'onPanEnd',
]);

const stripMotionProps = (props) => {
  const clean = {};
  for (const key in props) {
    if (!MOTION_PROPS.has(key)) clean[key] = props[key];
  }
  return clean;
};

const createMotionComponent = (type) =>
  React.forwardRef((props, ref) =>
    React.createElement(type, { ref, ...stripMotionProps(props) })
  );

// Cache so each tag/component maps to a stable component
const cache = new Map();

const motionFactory = (type) => {
  if (!cache.has(type)) cache.set(type, createMotionComponent(type));
  return cache.get(type);
};

// `motion` supports both `motion.div` (proxy get) and `motion(Component)` (call)
export const motion = new Proxy(motionFactory, {
  get: (_target, tag) => motionFactory(tag),
});

// Alias used in a couple of files (`import { m } from 'framer-motion'`)
export const m = motion;

// Render children directly; no enter/exit animations
export const AnimatePresence = ({ children }) => React.createElement(React.Fragment, null, children);

// Pretend everything is in view so isInView-gated content is shown
export const useInView = () => true;

export default { motion, m, AnimatePresence, useInView };
