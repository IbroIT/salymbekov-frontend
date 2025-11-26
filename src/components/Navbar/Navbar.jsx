import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo1 from '../../assets/Logo.png';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [lang, setLang] = useState('ru');
  const [expanded, setExpanded] = useState({});
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const hideTimer = useRef(null);
  const searchInputRef = useRef(null);

  const changeLang = (code) => {
    setLang(code);
    // если используешь i18next, здесь нужно вызывать i18n.changeLanguage(code)
    // i18n.changeLanguage(code);
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setActiveMenu(null);
    setExpanded({});
    setIsSearchOpen(false);
  }, [location]);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleEnter = (key) => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    setActiveMenu(key);
  };

  const handleLeave = () => {
    hideTimer.current = setTimeout(() => setActiveMenu(null), 120);
  };

  const isActive = (path) => location.pathname.startsWith(path);

  const toggleExpanded = (key) => {
    setExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const topItems = [
    { key: 'university', path: '/university', label: 'УНИВЕРСИТЕТ' },
    { key: 'education', path: '/education', label: 'ОБРАЗОВАНИЕ' },
    { key: 'clinical', path: '/clinical', label: 'КЛИНИЧЕСКАЯ БАЗА' },
    { key: 'science', path: '/science', label: 'НАУКА' },
    { key: 'student', path: '/student', label: 'СТУДЕНТУ' },
    { key: 'applicant', path: '/applicants', label: 'АБИТУРИЕНТУ' }
  ];

  // ========== НОВАЯ СТРУКТУРА МЕНЮ "УНИВЕРСИТЕТ" ==========
  const menuTree = {
    university: [
      // Колонка 1
      {
        label: 'Обращение учредителя',
        path: '/university/Appeal'
      },
      {
        label: 'История',
        path: '/university/history'
      },
      {
        label: 'Миссия и цели',
        path: '/university/mission'
      },
      {
        label: 'Видеоролики',
        path: '/university/videos'
      },
      {
        label: 'Вакансии',
        path: '/university/vacancies'
      },
      {
        label: 'Контакты',
        path: '/university/contacts'
      },
      {
        label: 'Брэндбук',
        path: 'https://salymbekov.com/wp-content/uploads/2023/10/brjendbuk_organized_new.pdf'
      },

      // Колонка 2
      {
        label: '🏛️ Структура университета',
        path: '',
        children: [
          { label: 'Университет', path: '/university/structure/University-main' },
          { label: 'Международный факультет медицины', path: '/university/structure/International-Faculty' },
          { label: 'Международный колледж IT и бизнеса', path: '/university/structure/it-college' }
        ]
      },
      {
        label: 'Учредительные документы',
        path: '',
        children: [
          { label: 'Устав', path: '/university/founding-docs/charter' },
          { label: 'Лицензии и свидетельства', path: '/university/founding-docs/licenses' },
          { label: 'Акты', path: '/university/founding-docs/acts' }
        ]
      },
      {
        label: 'Органы управления',
        path: '',
        children: [
          { label: 'Учредитель', path: '/university/management/founder' },
          { label: 'Президент', path: '/university/management/president' },
          { label: 'Ректорат', path: '/university/management/rectorate' }
        ]
      },
      {
        label: 'Общественные советы',
        path: '',
        children: [
          { label: 'Совет развития', path: '/university/Councils/dev-council' },
          { label: 'Ученый совет', path: '/university/Councils/acad-council' },
          { label: 'Совет по качеству образования', path: '/university/Councils/edu-councils' },
          { label: 'Учебно-методический совет', path: '/university/Councils/technical-council' },
          { label: 'Научно-технический совет', path: '/university/Councils/scien-council' },
          { label: 'Редакционный совет', path: '/university/Councils/edit-board' },
          { label: 'Приемная комиссия', path: '/university/Councils/admis-committee' },
          { label: 'Комиссия по социальной поддержке', path: '/university/Councils/commission-support' },
          { label: 'Биоэтический комитет', path: '/university/Councils/bioethics-committee' },
          { label: 'Совет молодых ученых', path: '/university/Councils/council-scients' },
          { label: 'Совет работодателей', path: '/university/Councils/employers-council' },
          { label: 'Совет родителей', path: '/university/Councils/parents-council' },
          { label: 'Студенческий совет', path: '/university/Councils/student-council' }
        ]
      },
      {
        label: 'Структурные подразделения',
        path: '',
        children: [
          { label: 'Финансово-экономический департамент', path: '/university/departments/financial' },
          { label: 'Учебно-методический отдел', path: '/university/departments/science' },
          { label: 'Департмент управления делами', path: '/university/departments/management' },
          { label: 'Департмент HR и делопроизводства', path: '/university/departments/hr' },
          { label: 'Департмент развития и качества образования', path: '/university/departments/quality' },
          { label: 'Департмент науки и перспективных исследований', path: '/university/departments' },
          { label: 'Международный отдел', path: '/university/departments/international' },
          { label: 'Студенческий отдел кадров', path: '/university/departments/student' },
          { label: 'Центр карьеры', path: '/university/departments/career' }
        ]
      },

      // Колонка 3
      {
        label: '✓ Аккредитация',
        path: '',
        children: [
          {
            label: 'Национальная',
            path: '',
            children: [
              { label: 'Аккредитация', path: '/university/accreditation/national' }
             
            ]
          },
          {
            label: 'Международная',
            path: '',
            children: [
              { label: 'Иституальная', path: '/university/accreditation/institutional' },
              { label: 'Програмная Аккредитация', path: '/university/accreditation/program' }
            ]
          }
        ]
      },
      {
        label: 'Стратегические документы',
        path: '',
        children: [
          { label: 'Видение', path: '/university/StrategicDocs/StrategicVision' },
          { label: 'Стратегический план развития', path: '/university/StrategicDocs/StrategicDevelopPlans' },
          { label: 'Комплексные планы', path: 'https://salymbekov.com/wp-content/uploads/2022/05/5.9.4.-kompleksnyj-plan-meroprijatij-za-2021-2022-gg.pdf' },
          { label: 'Учетная политика', path: '/university/StrategicDocs/AccountingPolicy' },
          { label: 'Кадровая политика', path: '/university/StrategicDocs/HR-Policy' }
        ]
      },
      {
        label: 'Нормативные документы',
        path: '',
        children: [
          { label: 'НПА КР', path: '/university/normative-docs/kr-acts' },
          { label: 'НПА Университета', path: '/university/normative-docs/internal-acts' },
        
        ]
      },
      {
        label: 'Система менеджмента качества',
        path: '',
        children: [
          { label: 'Политика в области качества', path: '/university/QualityManagSystem/QualityPolity' },
          { label: 'Мониторинг качества', path: '/university/QualityManagSystem/QualityMonitoring' }
        ]
      },
      {
        label: 'Сотрудничество',
        path: '',
        children: [
          { label: 'Сотрудничество с университетами', path: '/university/cooperation/universities' },
          { label: 'Сотрудничество с клиниками', path: '/university/cooperation/clinics' }
        ]
      }
    ]
  };

  // ========== РЕНДЕРЕР ПУНКТОВ МЕНЮ (РЕКУРСИВНЫЙ, С КЛИКОМ) ==========
  const renderMenuItems = (items, parentKey = '') => (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0, backgroundColor: '#ffffff' }}>
      {items.map((item, index) => {
        const key = `${parentKey}${index}-${item.label}`;
        const hasChildren = !!(item.children && item.children.length > 0);
        const isOpen = !!expanded[key];

        return (
          <li
            key={key}
            style={{
              paddingBottom: '4px',
              marginBottom: '6px',
              backgroundColor: '#ffffff'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              {item.path ? (
                <Link
                  to={item.path}
                  style={{
                    display: 'inline-block',
                    padding: '2px 4px',
                    color: '#111827',
                    textDecoration: 'none',
                    flex: '1 1 auto',
                    fontSize: '13px',
                    lineHeight: '1.4',
                    backgroundColor: 'transparent'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f3f4f6'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                  onClick={() => {
                    setActiveMenu(null);
                    setExpanded({});
                  }}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  type="button"
                  style={{
                    padding: '2px 4px',
                    color: '#111827',
                    flex: '1 1 auto',
                    fontSize: '13px',
                    lineHeight: '1.4',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f3f4f6'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                  onClick={() => toggleExpanded(key)}
                >
                  {item.label}
                </button>
              )}

              {hasChildren && (
                <button
                  type="button"
                  onClick={() => toggleExpanded(key)}
                  style={{
                    padding: '0 4px',
                    fontSize: '16px',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 120ms',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#111827'
                  }}
                >
                  ▾
                </button>
              )}
            </div>

            {hasChildren && isOpen && (
              <div style={{ marginTop: '4px', marginLeft: '12px', backgroundColor: '#ffffff' }}>
                {renderMenuItems(item.children, key + '-')}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );

  // ========== РЕНДЕРЕР МЕГАМЕНЮ "УНИВЕРСИТЕТ" ==========
  const renderUniversityMegaMenu = () => {
    const items = menuTree.university;
    const visible = activeMenu === 'university';

    if (!visible) {
      return null;
    }

    const col1 = items.slice(0, 7);
    const col2 = items.slice(7, 12);
    const col3 = items.slice(12);

    return (
      <div
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          top: '100px',
          zIndex: 100,
          pointerEvents: 'auto'
        }}
        onMouseEnter={() => handleEnter('university')}
        onMouseLeave={handleLeave}
      >
        <div style={{ 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'center'
        }}>
          <div
            style={{
              width: '1180px',
              backgroundColor: '#ffffff',
              padding: '24px 32px 28px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              borderRadius: '2px'
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                columnGap: '48px',
                fontSize: '13px',
                lineHeight: 1.5,
                backgroundColor: '#ffffff'
              }}
            >
              <div style={{ backgroundColor: '#ffffff' }}>
                <h3
                  style={{
                    margin: 0,
                    fontWeight: 700,
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    backgroundColor: '#ffffff',
                    marginBottom: '12px'
                  }}
                >
                  Университет
                </h3>
                <div
                  style={{
                    height: '0px',
                    backgroundColor: 'transparent',
                    marginTop: '4px',
                    marginBottom: '10px',
                  }}
                />
                {renderMenuItems(col1, 'col1-')}
              </div>

              <div style={{ backgroundColor: '#ffffff' }}>
                <h3
                  style={{
                    margin: 0,
                    fontWeight: 700,
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    backgroundColor: '#ffffff'
                  }}
                >
                  Структура и управление
                </h3>
                <div
                  style={{
                    height: '1px',
                    backgroundColor: '#111',
                    marginTop: '4px',
                    marginBottom: '10px',
                  }}
                />
                {renderMenuItems(col2, 'col2-')}
              </div>

              <div style={{ backgroundColor: '#ffffff' }}>
                <h3
                  style={{
                    margin: 0,
                    fontWeight: 700,
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    backgroundColor: '#ffffff'
                  }}
                >
                  Документы и сотрудничество
                </h3>
                <div
                  style={{
                    height: '1px',
                    backgroundColor: '#111',
                    marginTop: '4px',
                    marginBottom: '10px',
                  }}
                />
                {renderMenuItems(col3, 'col3-')}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // ========== СТАРЫЕ МЕГАМЕНЮ (ОБРАЗОВАНИЕ, КЛИНИЧЕСКАЯ БАЗА и т.д.) ==========
  const megaMenus = {
    // ================== ОБРАЗОВАНИЕ ==================
    education: {
      cols: [
        {
          type: 'multiGroup',
          groups: [
            {
              icon: '🏛',
              title: 'Американский институт технологий',
              items: [
                { label: 'Об Институте', path: '/education/ait/about' },
                { label: 'Руководство Института', path: '/education/ait/leadership' },
                { 
                  label: 'Дисциплины Института', 
                  path: '/education/ait/disciplines'
                  
                },
                { label: 'Преподаватели', path: '/education/ait/teachers' },
                { label: 'Контакты', path: '/education/ait/contacts' }
              ]
            },
            {
              icon: '💻',
              title: 'Международный колледж IT и бизнеса',
              items: [
                { label: 'О колледже', path: '/university/structure/it-college' },
                { label: 'Директор', path: '/education/itCollege/director' },
                { 
                  label: 'Специальности', 
                  path: '',
                  children: [
                    { label: 'Диплом в области компьютерных наук', path: '/education/itCollege/specialties/diplom-computer-science' },
                    { label: 'Диплом в мультимедийных приложениях', path: '/education/itCollege/specialties/diplom-multi-applications' },
                    { label: 'Диплом в области мобильных вычислений', path: '/education/itCollege/specialties/diplom-mobile-computing' }
                    
                  ]
                },
                {
                  label: 'Программа двойного диплома',
                  path: '/education/itCollege/double-diploma',
                  
                },

                {
                  label: 'Lincoin University College',
                  path: 'https://www.lincoln.edu.my/',
                  
                },
                { 
                  label: 'Отделения', 
                  path: '',
                  children: [
                    { label: 'Общеобразовательных дисциплин', path: '/education/itCollege/departments/general' },
                    { label: 'Информационных технологий', path: '/education/itCollege/departments/information' }
                  ]
                },
                { label: 'Педагогический совет', path: '/education/itCollege/pedagogical-council' },
                { label: 'Контакты и реквизиты', path: '/university/contacts' }
              ]
            }
          ]
        },
        {
          type: 'multiGroup',
          groups: [
            {
              icon: '➕',
              title: 'Международный факультет Медицины',
              items: [
                { label: 'О факультете', path: '/education/mfm/about' },
                { label: 'Деканат', path: '',
                  children: [
                    { label: 'Декан', path: '/education/mfm/dekanat/dean' },
                    { label: 'Учебный  план МФМ', path: '/education/mfm/dekanat/curriculum' },
                    { label: 'Кафедры', path: '/education/mfm/dekanat/departments' }
                  ]

                },
                { 
                  label: 'Программы', 
                  path: '',
                  children: [
                    { label: 'Лечебное дело 5 лет', path: '/education/mfm/programs/five-years' },
                    { label: 'Лечебное дело 6 лет', path: '/education/mfm/programs/six-years' }
                    
                  ]
                },
                { label: 'Контакты', path: '/university/contacts' }
              ]
            },
            {
              icon: '📊',
              title: 'Бизнес школа Салымбекова',
              items: [
                { label: 'О бизнес школе', path: '/education/business-school/about' },
                { label: 'Директор', path: '/education/business-school/director' },
                { label: 'Менеджеры', path: '/education/business-school/managers' },
                { 
                  label: 'Программы и курсы', 
                  path: '',
                  children: [
                    { label: 'Смартик (5-7 лет)', path: '/education/business-school/programs/smartik' },
                    { label: 'Будущие лидеры Кыргызстана (7-10 лет)', path: '/education/business-school/programs/future-leaders' },
                    { label: 'Юные лидеры Кыргызстана (10-16 лет)', path: '/education/business-school/programs/young-leaders' },
                    { label: 'Молодые лидеры Кыргызстана (от 16 лет)', path: '/education/business-school/programs/older-leaders' }
                  ]
                },
                { label: 'Тренеры и коучи', path: '/education/business-school/trainers' },
                { label: 'Контакты', path: '/university/contacts' }
              ]
            }
          ]
        },
        {
          type: 'multiGroup',
          groups: [
            {
              icon: '➕',
              title: 'Факультет последипломного образования',
              items: [
                { label: 'Интернатура', path: '/education/postgrad/internship' },
                { label: 'Ординатура', path: '/education/postgrad/residency' },
                { label: 'Аспирантура', path: '/education/postgrad/postgraduate' },
                { label: 'PhD', path: '/education/postgrad/phd' },
                {
                  label: 'Курсы повышения квалификации',
                  path: '/education/postgrad/courses'
                }
              ]
            },
            {
              icon: '🏫',
              title: 'Центр образования и инновации в г. Нарын',
              items: [
                { label: 'О центре', path: '/education/center/about' },
                { label: 'Директор Центра', path: '/education/center/director' },
                { label: 'Менеджеры', path: '/education/center/managers' },
                
              ]
            }
          ]
        }
      ]
    },

    // ================== КЛИНИЧЕСКАЯ БАЗА ==================
    clinical: {
      cols: [
        {
          type: 'multiGroup',
          groups: [
            {
              icon: null,
              title: 'Собственные клинические базы',
              items: [
                { label: 'Лазмед', path: '/clinical/lazmed' },
                {
                  label: 'Дордой офтальмик сервис',
                  path: '/clinical/dordoi'
                },
                { label: 'DOC university clinic', path: '/clinical/doc-clinic' },
                { label: 'DOC university hospital', path: '/clinical/doc-hospital' }
              ]
            },
            {
              icon: null,
              title: 'Соглашения с клиниками',
              items: [
                {
                  label: 'Соглашения с клиниками',
                  path: '/clinical/agreements'
                }
              ]
            }
          ]
        }
      ]
    },

    // ================== НАУКА ==================
    science: {
      cols: [
        {
          type: 'multiGroup',
          groups: [
            {
              icon: null,
              title: 'Органы управления',
              items: []
            },
            {
              icon: null,
              title: '',
              items: [
                { label: 'Публикации', path: '/science/publications' },
                {
                  label: 'Научный журнал',
                  path: '/science/publications/journal'
                },
                {
                  label: 'Периодические издания',
                  path: '/science/publications/periodicals'
                },
                { label: 'Научная библиотека', path: '/science/library' },
                { label: 'Лаборатории и центры', path: '/science/labs' }
              ]
            }
          ]
        },

        {
          type: 'multiGroup',
          groups: [
            {
              icon: null,
              title: 'Почетные профессора и лекторы',
              items: []
            },
            {
              icon: null,
              title: '',
              items: [
                { label: 'Мероприятия', path: '/science/events' },
                { label: 'Конференции', path: '/science/events/conferences' },
                { label: 'Мастер классы', path: '/science/events/master-classes' },
                { label: 'Круглые столы', path: '/science/events/round-tables' }
              ]
            }
          ]
        },

        {
          type: 'multiGroup',
          groups: [
            {
              icon: null,
              title: 'Студенческая наука',
              items: []
            },
            {
              icon: null,
              title: '',
              items: [
                { label: 'Научные проекты', path: '/science/projects' }
              ]
            }
          ]
        }
      ]
    },

    // ================== СТУДЕНТУ ==================
    student: {
      cols: [
        {
          type: 'multiGroup',
          groups: [
            {
              icon: null,
              title: 'Студенческие сообщества',
              items: [
                { label: 'Студенческий совет', path: '/student/community/council' },
                {
                  label: 'Студенческое научное объединение',
                  path: '/student/community/science'
                },
                { label: 'Дебатный клуб', path: '/student/community/debate' },
                { label: 'Тьюторское движение', path: '/student/community/tutor' },
                {
                  label: 'Творческие коллективы и кружки',
                  path: '/student/community/clubs'
                }
              ]
            },
            {
              icon: null,
              title: 'Учебные графики',
              items: [
                {
                  label: 'График учебного процесса',
                  path: '/student/schedule/study'
                },
                {
                  label: 'Графики модулей и экзаменов',
                  path: '/student/schedule/modules'
                },
                {
                  label: 'Графики производственной практики',
                  path: '/student/schedule/practice'
                },
                { label: 'Расписание МФМ', path: '/student/schedule/mfm' },
                { label: 'Расписание колледжа', path: '/student/schedule/college' }
              ]
            }
          ]
        },

        {
          type: 'multiGroup',
          groups: [
            {
              icon: null,
              title: 'Ресурсная база',
              items: [
                {
                  label: 'Инструкция и положения',
                  path: '/student/resources/instructions'
                },
                {
                  label: 'Информационная система',
                  path: '/student/resources/infosystem'
                },
                {
                  label: 'Электронная библиотека',
                  path: '/student/resources/elib'
                },
                {
                  label: 'Образовательные ресурсы',
                  path: '/student/resources/edu-resources'
                }
              ]
            },
            {
              icon: null,
              title: 'Условия и возможности',
              items: [
                {
                  label: 'Медицинский центр',
                  path: '/student/opportunities/medical'
                },
                { label: 'Общежитие', path: '/student/opportunities/dorm' },
                {
                  label: 'Социальная поддержка студентов',
                  path: '/student/opportunities/social'
                },
                { label: 'Курсы по выбору', path: '/student/opportunities/courses' },
                {
                  label: 'Академическая мобильность',
                  path: '/student/opportunities/mobility'
                },
                {
                  label: 'Психологическая поддержка',
                  path: '/student/opportunities/psychology'
                },
                {
                  label: 'Центр обслуживания студентов',
                  path: '/student/opportunities/service-center'
                },
                {
                  label: 'Адаптационные программы',
                  path: '/student/opportunities/adaptation'
                }
              ]
            }
          ]
        }
      ]
    },

    // ================== АБИТУРИЕНТУ ==================
    applicant: {
      cols: [
        {
          type: 'multiGroup',
          groups: [
            {
              icon: null,
              title: 'Приемная комиссия',
              items: []
            },
            {
              icon: null,
              title: '',
              items: [
                {
                  label: 'Направления подготовки',
                  path: '/applicants/directions'
                },
                {
                  label: 'Стоимость обучения',
                  path: '/applicants/cost'
                }
              ]
            },
            {
              icon: null,
              title: 'Порядок приема',
              items: [
                {
                  label: 'Необходимые документы',
                  path: '/applicants/admission/documents'
                },
                {
                  label: 'Положение приема',
                  path: '/applicants/admission/rules'
                },
                {
                  label: 'График отбора и зачисления',
                  path: '/applicants/admission/schedule'
                }
              ]
            }
          ]
        },

        {
          type: 'multiGroup',
          groups: [
            {
              icon: null,
              title: 'Правила и план приема',
              items: [
                {
                  label: 'Прием по ОРТ',
                  path: '/applicants/ort'
                },
                {
                  label: 'Профориентация',
                  path: '/applicants/career-guidance'
                }
              ]
            },
            {
              icon: null,
              title: 'Порядок перевода',
              items: [
                {
                  label: 'Необходимые документы',
                  path: '/applicants/transfer/documents'
                },
                {
                  label: 'Положение перевода',
                  path: '/applicants/transfer/rules'
                },
                {
                  label: 'График перевода',
                  path: '/applicants/transfer/schedule'
                }
              ]
            }
          ]
        },

        {
          type: 'multiGroup',
          groups: [
            {
              icon: null,
              title: 'Стипендии и льготы',
              items: [
                { label: 'Стипендии студентам', path: '/applicants/scholarships' }
              ]
            },
            {
              icon: null,
              title: 'Официальные дилеры',
              items: [
                { label: 'Официальные дилеры', path: '/applicants/dealers' }
              ]
            },
            {
              icon: null,
              title: 'Адаптационная программа',
              items: [
                {
                  label: 'Адаптационная программа',
                  path: '/applicants/adaptation'
                }
              ]
            },
            {
              icon: null,
              title: 'Инфраструктура университета',
              items: [
                {
                  label: 'Инфраструктура университета',
                  path: '/applicants/infrastructure'
                }
              ]
            }
          ]
        }
      ]
    },

    // ================== ИНФРАСТРУКТУРА ==================
    infrastructure: {
      cols: [
        {
          type: 'multiGroup',
          groups: [
            {
              icon: null,
              title: 'Инфраструктура',
              items: [
                { label: 'Локации', path: '/infrastructure/locations' },
                { label: 'Общежития', path: '/infrastructure/dorms' },
                { label: 'Спорт', path: '/infrastructure/sport' }
              ]
            }
          ]
        }
      ]
    }
  };

  const renderMega = (menuKey) => {
    // Для "university" используем новый рендерер
    if (menuKey === 'university') {
      return renderUniversityMegaMenu();
    }

    // Для остальных — старый код
    const data = megaMenus[menuKey];
    if (!data || !data.cols || data.cols.length === 0) return null;

    const visible = activeMenu === menuKey;
    
    // Не рендерим вообще, если меню неактивно
    if (!visible) return null;

    return (
      <div
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          top: '100px',
          zIndex: 100,
          pointerEvents: 'auto'
        }}
        onMouseEnter={() => handleEnter(menuKey)}
        onMouseLeave={handleLeave}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <div
            style={{
              width: '1180px',
              backgroundColor: '#ffffff',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              padding: '24px 32px 28px',
              borderRadius: '2px',
              minHeight: '200px'
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '48px',
                fontSize: '13px',
                lineHeight: '1.5'
              }}
            >
              {data.cols.map((col, idx) => {
                // Колонка с несколькими блоками
                if (col.type === 'multiGroup') {
                  return (
                    <div key={idx}>
                      {col.groups.map((group, gIdx) => (
                        <div
                          key={group.title}
                          style={{ marginBottom: gIdx === 0 ? '22px' : 0 }}
                        >
                          {/* Заголовок с иконкой и линией */}
                          <h3
                            style={{
                              margin: 0,
                              fontWeight: 700,
                              fontSize: '13px',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px'
                            }}
                          >
                            {group.icon && (
                              <span style={{ fontSize: '14px' }}>{group.icon}</span>
                            )}
                            <span>{group.title}</span>
                          </h3>
                          <div
                            style={{
                              height: '1px',
                              backgroundColor: '#111',
                              marginTop: '4px',
                              marginBottom: '10px'
                            }}
                          />

                          {/* Список ссылок */}
                          <ul
                            style={{
                              listStyle: 'none',
                              padding: 0,
                              margin: 0
                            }}
                          >
                            {group.items.map((item) => {
                              const itemKey = `${group.title}-${item.label}`;
                              const hasChildren = !!(item.children && item.children.length > 0);
                              const isOpen = !!expanded[itemKey];

                              return (
                                <li
                                  key={item.label}
                                  style={{
                                    borderBottom: '1px solid #e5e7eb',
                                    paddingBottom: '5px',
                                    marginBottom: '7px'
                                  }}
                                >
                                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Link
                                      to={item.path}
                                      onClick={() => setActiveMenu(null)}
                                      style={{
                                        display: 'inline-block',
                                        color: '#111',
                                        textDecoration: 'none',
                                        padding: '1px 2px',
                                        backgroundColor: 'transparent',
                                        transition: 'background-color 120ms, color 120ms',
                                        flex: '1 1 auto'
                                      }}
                                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f3f4f6'; }}
                                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                                    >
                                      {item.label}
                                    </Link>

                                    {hasChildren && (
                                      <button
                                        type="button"
                                        onClick={() => toggleExpanded(itemKey)}
                                        style={{
                                          padding: '0 4px',
                                          fontSize: '16px',
                                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                          transition: 'transform 120ms',
                                          background: 'transparent',
                                          border: 'none',
                                          cursor: 'pointer',
                                          color: '#111827'
                                        }}
                                      >
                                        ▾
                                      </button>
                                    )}
                                  </div>

                                  {/* Вложенные пункты */}
                                  {hasChildren && isOpen && (
                                    <ul
                                      style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: '4px 0 0 12px'
                                      }}
                                    >
                                      {item.children.map((c) => (
                                        <li
                                          key={c.label}
                                          style={{ marginBottom: '4px' }}
                                        >
                                          <Link
                                            to={c.path}
                                            onClick={() => setActiveMenu(null)}
                                            style={{
                                              display: 'inline-block',
                                              color: '#333',
                                              fontSize: '12px',
                                              textDecoration: 'none',
                                              padding: '1px 2px',
                                              backgroundColor: 'transparent'
                                            }}
                                            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f3f4f6'; }}
                                            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                                          >
                                            {c.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  );
                }

                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <nav
        style={{
          width: '100%',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e5e7eb',
          position: 'sticky',
          top: 0,
          zIndex: 50,
          transition: 'box-shadow 0.3s',
          boxShadow: isScrolled ? '0 4px 6px rgba(0,0,0,0.1)' : 'none'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
              <img src={Logo1} alt="Salymbekov University" style={{ height: '3rem', width: 'auto' }} />
            </Link>

            <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
              <ul style={{
                listStyle: 'none',
                margin: 0,
                padding: 0,
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '13px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                backgroundColor: '#ffffff'
              }} className="hidden lg:flex">
                {topItems.map((item) => (
                  <li
                    key={item.key}
                    style={{ position: 'relative', backgroundColor: '#ffffff' }}
                    onMouseEnter={() => handleEnter(item.key)}
                    onMouseLeave={handleLeave}
                  >
                    <Link
                      to={item.path}
                      style={{
                        display: 'block',
                        padding: '0.5rem 0.75rem',
                        transition: 'color 0.3s',
                        color: isActive(item.path) ? '#000000' : '#333333',
                        borderBottom: isActive(item.path) ? '2px solid #000000' : 'none',
                        textDecoration: 'none',
                        backgroundColor: '#ffffff'
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive(item.path)) {
                          e.currentTarget.style.color = '#2563eb';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive(item.path)) {
                          e.currentTarget.style.color = '#333333';
                        }
                      }}
                    >
                      {item.label}
                    </Link>
                    {renderMega(item.key)}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ alignItems: 'center', gap: '1rem', backgroundColor: '#ffffff' }} className="hidden lg:flex">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', backgroundColor: '#ffffff' }}>
                {['ru', 'en', 'kg'].map((code, idx) => (
                  <React.Fragment key={code}>
                    <button
                      type="button"
                      onClick={() => changeLang(code)}
                      style={{
                        color: code === lang ? '#000000' : '#4b5563',
                        textDecoration: code === lang ? 'underline' : 'none',
                        border: 'none',
                        background: 'transparent',
                        cursor: 'pointer',
                        padding: 0,
                        fontSize: 'inherit',
                        fontWeight: 'inherit'
                      }}
                      onMouseEnter={(e) => {
                        if (code !== lang) {
                          e.currentTarget.style.color = '#2563eb';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (code !== lang) {
                          e.currentTarget.style.color = '#4b5563';
                        }
                      }}
                    >
                      {code.toUpperCase()}
                    </button>
                    {idx < 2 && <span style={{ color: '#9ca3af' }}>/</span>}
                  </React.Fragment>
                ))}
              </div>
              {isSearchOpen ? (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '4px',
                  padding: '0.4rem 0.75rem',
                  border: '1px solid #e0e0e0'
                }}>
                  <svg width="16" height="16" fill="none" stroke="#666" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                  </svg>
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Поиск..."
                    style={{
                      border: 'none',
                      background: 'transparent',
                      outline: 'none',
                      fontSize: '14px',
                      width: '200px',
                      color: '#333'
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Escape') {
                        setIsSearchOpen(false);
                      }
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setIsSearchOpen(false)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '0',
                      display: 'flex',
                      alignItems: 'center',
                      color: '#666'
                    }}
                    aria-label="Close search"
                  >
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(true)}
                  style={{
                    width: '1.25rem',
                    height: '1.25rem',
                    border: '2px solid #000000',
                    borderRadius: '50%',
                    position: 'relative',
                    transition: 'border-color 0.3s',
                    background: 'transparent',
                    cursor: 'pointer',
                    padding: 0
                  }}
                  aria-label="Поиск"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#2563eb';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#000000';
                  }}
                >
                  <span style={{
                    display: 'block',
                    width: '10px',
                    height: '2px',
                    backgroundColor: '#000000',
                    position: 'absolute',
                    right: '-8px',
                    bottom: 0,
                    transform: 'rotate(45deg)'
                  }} />
                </button>
              )}
            </div>

            <button
              type="button"
              style={{
                padding: '0.5rem',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer'
              }}
              className="lg:hidden"
              aria-label="Меню"
              onClick={() => setIsMobileOpen(v => !v)}
            >
              <div style={{ width: '1.5rem', height: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <span style={{
                  display: 'block',
                  height: '2px',
                  backgroundColor: '#000000',
                  transition: 'transform 0.3s',
                  transform: isMobileOpen ? 'rotate(45deg) translateY(8px)' : 'none'
                }} />
                <span style={{
                  display: 'block',
                  height: '2px',
                  backgroundColor: '#000000',
                  transition: 'opacity 0.3s',
                  opacity: isMobileOpen ? 0 : 1
                }} />
                <span style={{
                  display: 'block',
                  height: '2px',
                  backgroundColor: '#000000',
                  transition: 'transform 0.3s',
                  transform: isMobileOpen ? 'rotate(-45deg) translateY(-8px)' : 'none'
                }} />
              </div>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
