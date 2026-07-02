import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FlaskConical, GraduationCap, Stethoscope } from 'lucide-react';
import heroImage from '../assets/clinical/o-klinike5-1024x682.jpg';

const directions = [
  {
    title: 'Образовательные программы',
    description: 'Медицинское, IT и последипломное образование с практической подготовкой.',
    href: '/education/ait',
    icon: GraduationCap,
  },
  {
    title: 'Клиническая база',
    description: 'Университетские клиники, симуляционный центр и современные лечебные площадки.',
    href: '/clinical/doc-clinic',
    icon: Stethoscope,
  },
  {
    title: 'Наука и исследования',
    description: 'Лаборатории, научные проекты, публикации и академическое сотрудничество.',
    href: '/science/management',
    icon: FlaskConical,
  },
];

const Services = () => (
  <main className="min-h-screen bg-gray-50">
    <section
      className="relative flex min-h-[440px] items-end overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-[#023E8A]/80" />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 text-white sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-200">
          Salymbekov University
        </p>
        <h1 className="max-w-4xl text-4xl font-bold md:text-6xl">Образование, медицина и наука</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50">
          Университет объединяет образовательные программы, клиническую практику и научную работу в одной современной среде.
        </p>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-6 md:grid-cols-3">
        {directions.map(({ title, description, href, icon }) => (
          <article key={href} className="border-t-4 border-[#0077B6] bg-white p-7 shadow-sm">
            {React.createElement(icon, {
              className: 'mb-5 h-9 w-9 text-[#0077B6]',
              'aria-hidden': true,
            })}
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            <p className="mt-4 leading-7 text-gray-600">{description}</p>
            <Link className="mt-6 inline-flex items-center gap-2 font-semibold text-[#023E8A]" to={href}>
              Подробнее <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  </main>
);

export default Services;
