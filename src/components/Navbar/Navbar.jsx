import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo1 from '../../assets/Logo.png';

const Navbar = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [lang, setLang] = useState(i18n.language);
  const [expanded, setExpanded] = useState({});
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const hideTimer = useRef(null);
  const searchInputRef = useRef(null);

  const changeLang = (code) => {
    i18n.changeLanguage(code);
  };

  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language]);

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
    { key: 'university', path: '/university', label: t('navbarSUB.university') },
    { key: 'education', path: '/education', label: t('navbarSUB.education') },
    { key: 'clinical', path: '/clinical', label: t('navbarSUB.clinical') },
    { key: 'science', path: '/science', label: t('navbarSUB.science') },
    { key: 'student', path: '/student', label: t('navbarSUB.student') },
    { key: 'applicant', path: '/applicants', label: t('navbarSUB.applicant') }
  ];

  const menuTree = {
    university: [
      {
        label: t('universitySUB.founderAppeal'),
        path: '/university/Appeal'
      },
      {
        label: t('universitySUB.history'),
        path: '/university/history'
      },
      {
        label: t('universitySUB.mission'),
        path: '/university/mission'
      },
      {
        label: t('universitySUB.videos'),
        path: '/university/videos'
      },
      {
        label: t('universitySUB.vacancies'),
        path: '/university/vacancies'
      },
      {
        label: t('universitySUB.contacts'),
        path: '/university/contacts'
      },
      {
        label: t('universitySUB.brandbook'),
        path: 'https://salymbekov.com/wp-content/uploads/2023/10/brjendbuk_organized_new.pdf'
      },
      {
        label: `🏛️ ${t('universitySUB.structure')}`,
        path: '',
        children: [
          { label: t('navbarSUB.university'), path: '/university/structure/University-main' },
          { label: t('educationSUB.mfm'), path: '/university/structure/International-Faculty' },
          { label: t('educationSUB.itCollege'), path: '/university/structure/it-college' }
        ]
      },
      {
        label: t('universitySUB.foundingDocs'),
        path: '',
        children: [
          { label: t('universitySUB.charter'), path: '/university/founding-docs/charter' },
          { label: t('universitySUB.licenses'), path: '/university/founding-docs/licenses' },
          { label: t('universitySUB.acts'), path: '/university/founding-docs/acts' }
        ]
      },
      {
        label: t('universitySUB.management'),
        path: '',
        children: [
          { label: t('universitySUB.founder'), path: '/university/management/founder' },
          { label: t('universitySUB.president'), path: '/university/management/president' },
          { label: t('universitySUB.rectorate'), path: '/university/management/rectorate' }
        ]
      },
      {
        label: t('universitySUB.councils'),
        path: '',
        children: [
          { label: t('universitySUB.devCouncil'), path: '/university/Councils/dev-council' },
          { label: t('universitySUB.acadCouncil'), path: '/university/Councils/acad-council' },
          { label: t('universitySUB.eduCouncil'), path: '/university/Councils/edu-councils' },
          { label: t('universitySUB.techCouncil'), path: '/university/Councils/technical-council' },
          { label: t('universitySUB.scienCouncil'), path: '/university/Councils/scien-council' },
          { label: t('universitySUB.editBoard'), path: '/university/Councils/edit-board' },
          { label: t('universitySUB.admisCommittee'), path: '/university/Councils/admis-committee' },
          { label: t('universitySUB.supportCommission'), path: '/university/Councils/commission-support' },
          { label: t('universitySUB.bioethicsCommittee'), path: '/university/Councils/bioethics-committee' },
          { label: t('universitySUB.youngScientists'), path: '/university/Councils/council-scients' },
          { label: t('universitySUB.employersCouncil'), path: '/university/Councils/employers-council' },
          { label: t('universitySUB.parentsCouncil'), path: '/university/Councils/parents-council' },
          { label: t('universitySUB.studentCouncil'), path: '/university/Councils/student-council' }
        ]
      },
      {
        label: t('universitySUB.departments'),
        path: '',
        children: [
          { label: t('universitySUB.financialDept'), path: '/university/departments/financial' },
          { label: t('universitySUB.scienceDept'), path: '/university/departments/science' },
          { label: t('universitySUB.managementDept'), path: '/university/departments/management' },
          { label: t('universitySUB.hrDept'), path: '/university/departments/hr' },
          { label: t('universitySUB.qualityDept'), path: '/university/departments/quality' },
          { label: t('universitySUB.researchDept'), path: '/university/departments' },
          { label: t('universitySUB.internationalDept'), path: '/university/departments/international' },
          { label: t('universitySUB.studentDept'), path: '/university/departments/student' },
          { label: t('universitySUB.careerCenter'), path: '/university/departments/career' }
        ]
      },
      {
        label: `✓ ${t('universitySUB.accreditation')}`,
        path: '',
        children: [
          {
            label: t('universitySUB.national'),
            path: '',
            children: [
              { label: t('universitySUB.accreditation'), path: '/university/accreditation/national' }
            ]
          },
          {
            label: t('universitySUB.international'),
            path: '',
            children: [
              { label: t('universitySUB.institutional'), path: '/university/accreditation/institutional' },
              { label: t('universitySUB.programAccreditation'), path: '/university/accreditation/program' }
            ]
          }
        ]
      },
      {
        label: t('universitySUB.strategicDocs'),
        path: '',
        children: [
          { label: t('universitySUB.vision'), path: '/university/StrategicDocs/StrategicVision' },
          { label: t('universitySUB.strategicPlan'), path: '/university/StrategicDocs/StrategicDevelopPlans' },
          { label: t('universitySUB.comprehensivePlans'), path: 'https://salymbekov.com/wp-content/uploads/2022/05/5.9.4.-kompleksnyj-plan-meroprijatij-za-2021-2022-gg.pdf' },
          { label: t('universitySUB.accountingPolicy'), path: '/university/StrategicDocs/AccountingPolicy' },
          { label: t('universitySUB.hrPolicy'), path: '/university/StrategicDocs/HR-Policy' }
        ]
      },
      {
        label: t('universitySUB.normativeDocs'),
        path: '',
        children: [
          { label: t('universitySUB.krActs'), path: '/university/normative-docs/kr-acts' },
          { label: t('universitySUB.internalActs'), path: '/university/normative-docs/internal-acts' },
        ]
      },
      {
        label: t('universitySUB.qualityManagement'),
        path: '',
        children: [
          { label: t('universitySUB.qualityPolicy'), path: '/university/QualityManagSystem/QualityPolity' },
          { label: t('universitySUB.qualityMonitoring'), path: '/university/QualityManagSystem/QualityMonitoring' }
        ]
      },
      {
        label: t('universitySUB.cooperation'),
        path: '',
        children: [
          { label: t('universitySUB.universitiesCoop'), path: '/university/cooperation/universities' },
          { label: t('universitySUB.clinicsCoop'), path: '/university/cooperation/clinics' }
        ]
      }
    ]
  };

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
                  {t('navbarSUB.university')}
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
                  {t('universitySUB.structureAndManagement')}
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
                  {t('universitySUB.docsAndCooperation')}
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

  const megaMenus = {
    education: {
      cols: [
        {
          type: 'multiGroup',
          groups: [
            {
              icon: '🏛',
              title: t('educationSUB.ait'),
              path: '',
              items: [
                { label: `${t('commonSUB.about')} ${t('educationSUB.ait')}`, path: '/education/ait/about' },
                { label: t('educationSUB.aitLeadership'), path: '/education/ait/leadership' },
                { 
                  label: t('educationSUB.aitDisciplines'), 
                  path: '/education/ait/disciplines'
                },
                { label: t('commonSUB.teachers'), path: '/education/ait/teachers' },
                { label: t('universitySUB.contacts'), path: '/education/ait/contacts' }
              ]
            },
            {
              icon: '💻',
              title: t('educationSUB.itCollege'),
              items: [
                { label: `${t('commonSUB.about')} ${t('educationSUB.itCollege')}`, path: '/university/structure/it-college' },
                { label: t('commonSUB.director'), path: '/education/itCollege/director' },
                { 
                  label: t('commonSUB.specialties'), 
                  
                  children: [
                    { label: t('educationSUB.computerScience'), path: '/education/itCollege/specialties/diplom-computer-science' },
                    { label: t('educationSUB.multimediaApps'), path: '/education/itCollege/specialties/diplom-multi-applications' },
                    { label: t('educationSUB.mobileComputing'), path: '/education/itCollege/specialties/diplom-mobile-computing' }
                  ]
                },
                {
                  label: 'Lincoln University College',
                  path: 'https://www.lincoln.edu.my/',
                },
                { 
                  label: t('commonSUB.departments'), 
                
                  children: [
                    { label: t('educationSUB.generalDisciplines'), path: '/education/itCollege/departments/general' },
                    { label: t('educationSUB.itDepartment'), path: '/education/itCollege/departments/information' }
                  ]
                },
                { label: t('educationSUB.pedagogicalCouncil'), path: '/education/itCollege/pedagogical-council' },
                { label: t('educationSUB.contactsAndRequisites'), path: '/university/contacts' }
              ]
            }
          ]
        },
        {
          type: 'multiGroup',
          groups: [
            {
              icon: '➕',
              title: t('educationSUB.mfm'),
              
              items: [
                { label: `${t('commonSUB.about')} ${t('educationSUB.mfm')}`, path: '/education/mfm/about' },
                { label: t('educationSUB.deanOffice'), path: '',
                  children: [
                    { label: t('commonSUB.dean'), path: '/education/mfm/dekanat/dean' },
                    { label: t('educationSUB.mfmCurriculum'), path: '/education/mfm/dekanat/curriculum' },
                    { label: t('educationSUB.departments'), path: '/education/mfm/dekanat/departments' }
                  ]
                },
                { 
                  label: t('commonSUB.programs'), 
              
                  children: [
                    { label: t('educationSUB.medicine5Years'), path: '/education/mfm/programs/five-years' },
                    { label: t('educationSUB.medicine6Years'), path: '/education/mfm/programs/six-years' }
                  ]
                },
                { label: t('universitySUB.contacts'), path: '/university/contacts' }
              ]
            },
            {
              icon: '📊',
              title: t('educationSUB.businessSchool'),
              items: [
                { label: `${t('commonSUB.about')} ${t('educationSUB.businessSchool')}`, path: '/education/business-school/about' },
                { label: t('commonSUB.director'), path: '/education/business-school/director' },
                { 
                  label: t('educationSUB.programsAndCourses'), 
                  path: '',
                  children: [
                    { label: t('educationSUB.smartik'), path: '/education/business-school/programs/smartik' },
                    { label: t('educationSUB.futureLeaders'), path: '/education/business-school/programs/future-leaders' },
                    { label: t('educationSUB.youngLeaders'), path: '/education/business-school/programs/young-leaders' },
                    { label: t('educationSUB.olderLeaders'), path: '/education/business-school/programs/older-leaders' }
                  ]
                },
                { label: t('universitySUB.contacts'), path: '/university/contacts' }
              ]
            }
          ]
        },
        {
          type: 'multiGroup',
          groups: [
            {
              icon: '➕',
              title: t('educationSUB.postgraduate'),
              items: [
                { label: t('commonSUB.internship'), path: '/education/postgrad/internship' },
                { label: t('commonSUB.residency'), path: '/education/postgrad/residency' },
                { label: t('commonSUB.postgraduate'), path: '/education/postgrad/postgraduate' },
                { label: t('commonSUB.phd'), path: '/education/postgrad/phd' },
              ]
            },
            {
              icon: '🏫',
              title: t('educationSUB.narynCenter'),
              items: [
                { label: `${t('commonSUB.about')} ${t('educationSUB.narynCenter')}`, path: '/education/center/about' },
                { label: t('universitySUB.contacts'), path: '/university/contacts' },
              ]
            }
          ]
        }
      ]
    },

    clinical: {
      cols: [
        {
          type: 'multiGroup',
          groups: [
            {
              icon: null,
              title: t('clinicalSUB.ownBases'),
              items: [
                { label: t('clinicalSUB.lazmed'), path: '/clinical/lazmed' },
                {
                  label: t('clinicalSUB.dordoiOphthalmic'),
                  path: '/clinical/dordoi-ophthalmic'
                },
                { label: t('clinicalSUB.docClinic'), path: '/clinical/doc-clinic' },
                { label: t('clinicalSUB.docHospital'), path: '/clinical/doc-hospital' }
              ]
            },
            {
              icon: null,
              title: t('clinicalSUB.agreements'),
              items: [
                {
                  label: t('clinicalSUB.agreements'),
                  path: '/clinical/agreements'
                }
              ]
            }
          ]
        }
      ]
    },

    science: {
      cols: [
        {
          type: 'multiGroup',
          groups: [
            {
              icon: null,
              title: '',
              items: [
                { 
                  label: t('scienceSUB.management'), 
                  path: '/science/management',
                  children: [
                    { label: t('scienceSUB.scientificCouncil'), path: '/science/management/scientific-technical-council' },
                    { label: t('scienceSUB.bioethics'), path: '/science/management/bioethics' },
                    { label: t('scienceSUB.youngScientists'), path: '/science/management/young-scientists' },
                    { label: t('scienceSUB.researchDepartment'), path: '/science/management/department' }
                  ]
                },
                { label: t('scienceSUB.journal'), path: '/science/publications/journal' },
                { label: t('scienceSUB.periodicals'), path: '/science/publications/periodicals' },
                { label: t('scienceSUB.library'), path: '/science/library' },
                { label: t('scienceSUB.labs'), path: '/science/labs' }
              ]
            }
          ]
        },
        {
          type: 'multiGroup',
          groups: [
            {
              icon: null,
              title: '',
              items: [
                { label: t('scienceSUB.honoredProfessors'), path: '/science/professors' },
                { 
                  label: t('scienceSUB.events'), 
                  path: '/science/events',
                  children: [
                    { label: t('scienceSUB.conferences'), path: '/science/events/conferences' },
                    { label: t('scienceSUB.masterClasses'), path: '/science/events/master-classes' },
                    { label: t('scienceSUB.roundTables'), path: '/science/events/round-tables' }
                  ]
                },
                { 
                  label: t('scienceSUB.studentScience'), 
                  path: '/science/student-science',
                  children: [
                    { label: t('scienceSUB.studentSociety'), path: '/science/student-society' },
                    { label: t('scienceSUB.scienceClubs'), path: '/science/student-science/clubs' },
                    { label: t('scienceSUB.studentConferences'), path: '/science/student-science/conferences' }
                  ]
                },
                { 
                  label: t('scienceSUB.researchProjects'), 
                  children: [
                    { label: t('scienceSUB.urology') },
                    { label: t('scienceSUB.gynecology') },
                    { label: t('scienceSUB.ophthalmology') },
                    { label: t('scienceSUB.oncology') }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    student: {
      cols: [
        {
          type: 'multiGroup',
          groups: [
            {
              icon: null,
              title: t('studentSUB.communities'),
              items: [
                { label: t('studentSUB.council'), path: '/student/community/council' },
                {
                  label: t('student.scienceSociety'),
                  path: '/student/community/science'
                },
                { label: t('studentSUB.debateClub'), path: '/student/community/debate' },
                { label: t('studentSUB.tutorMovement'), path: '/student/community/tutor' },
                {
                  label: t('studentSUB.creativeClubs'),
                  path: '/student/community/clubs'
                }
              ]
            },
            {
              icon: null,
              title: t('studentSUB.schedules'),
              items: [
                {
                  label: t('studentSUB.studySchedule'),
                  path: '/student/schedule/study'
                },
                {
                  label: t('studentSUB.modulesSchedule'),
                  path: '/student/schedule/modules'
                },
                {
                  label: t('studentSUB.practiceSchedule'),
                  path: '/student/schedule/practice'
                },
                { label: t('studentSUB.mfmSchedule'), path: '/student/schedule/mfm' },
                { label: t('studentSUB.collegeSchedule'), path: '/student/schedule/college' }
              ]
            }
          ]
        },
        {
          type: 'multiGroup',
          groups: [
            {
              icon: null,
              title: t('studentSUB.resources'),
              items: [
                {
                  label: t('studentSUB.instructions'),
                  path: '/student/resources/instructions'
                },
                {
                  label: t('studentSUB.infoSystem'),
                  path: '/student/resources/infosystem'
                },
                {
                  label: t('studentSUB.eLibrary'),
                  path: '/student/resources/elib'
                },
                {
                  label: t('studentSUB.eduResources'),
                  path: '/student/resources/edu-resources'
                }
              ]
            },
            {
              icon: null,
              title: t('studentSUB.opportunities'),
              items: [
                {
                  label: t('studentSUB.medicalCenter'),
                  path: '/student/opportunities/medical'
                },
                { label: t('studentSUB.dormitory'), path: '/student/opportunities/dorm' },
                {
                  label: t('studentSUB.socialSupport'),
                  path: '/student/opportunities/social'
                },
                { label: t('studentSUB.electiveCourses'), path: '/student/opportunities/courses' },
                {
                  label: t('studentSUB.academicMobility'),
                  path: '/student/opportunities/mobility'
                },
                {
                  label: t('studentSUB.psychologicalSupport'),
                  path: '/student/opportunities/psychology'
                },
                {
                  label: t('studentSUB.serviceCenter'),
                  path: '/student/opportunities/service-center'
                },
                {
                  label: t('studentSUB.adaptationPrograms'),
                  path: '/student/opportunities/adaptation'
                }
              ]
            }
          ]
        }
      ]
    },

    applicant: {
      cols: [
        {
          type: 'multiGroup',
          groups: [
            {
              icon: null,
              title: t('applicantSUB.admissionCommittee'),
              items: []
            },
            {
              icon: null,
              title: '',
              items: [
                {
                  label: t('applicantSUB.directions'),
                  path: '/applicants/directions'
                },
                {
                  label: t('applicantSUB.tuitionCost'),
                  path: '/applicants/cost'
                }
              ]
            },
            {
              icon: null,
              title: t('applicantSUB.admissionProcedure'),
              items: [
                {
                  label: t('applicantSUB.requiredDocuments'),
                  path: '/applicants/admission/documents'
                },
                {
                  label: t('applicantSUB.admissionRules'),
                  path: '/applicants/admission/rules'
                },
                {
                  label: t('applicantSUB.admissionSchedule'),
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
              title: t('applicantSUB.rulesAndPlan'),
              items: [
                {
                  label: t('applicantSUB.ortAdmission'),
                  path: '/applicants/ort'
                },
                {
                  label: t('applicantSUB.careerGuidance'),
                  path: '/applicants/career-guidance'
                }
              ]
            },
            {
              icon: null,
              title: t('applicantSUB.transferProcedure'),
              items: [
                {
                  label: t('applicantSUB.transferDocuments'),
                  path: '/applicants/transfer/documents'
                },
                {
                  label: t('applicantSUB.transferRules'),
                  path: '/applicants/transfer/rules'
                },
                {
                  label: t('applicantSUB.transferSchedule'),
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
              title: t('applicantSUB.scholarships'),
              items: [
                { label: t('applicantSUB.studentScholarships'), path: '/applicants/scholarships' }
              ]
            },
            {
              icon: null,
              title: t('applicantSUB.officialDealers'),
              items: [
                { label: t('applicantSUB.officialDealers'), path: '/applicants/dealers' }
              ]
            },
            {
              icon: null,
              title: t('applicantSUB.adaptationProgram'),
              items: [
                {
                  label: t('applicantSUB.adaptationProgram'),
                  path: '/applicants/adaptation'
                }
              ]
            },
            {
              icon: null,
              title: t('applicantSUB.infrastructure'),
              items: [
                {
                  label: t('applicantSUB.infrastructure'),
                  path: '/applicants/infrastructure'
                }
              ]
            }
          ]
        }
      ]
    }
  };

  const renderMega = (menuKey) => {
    if (menuKey === 'university') {
      return renderUniversityMegaMenu();
    }

    const data = megaMenus[menuKey];
    if (!data || !data.cols || data.cols.length === 0) return null;

    const visible = activeMenu === menuKey;
    
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
                if (col.type === 'multiGroup') {
                  return (
                    <div key={idx}>
                      {col.groups.map((group, gIdx) => (
                        <div
                          key={group.title}
                          style={{ marginBottom: gIdx === 0 ? '22px' : 0 }}
                        >
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
                          e.currentTarget.style.color = '#0B4C8C';
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
                        color: code === i18n.language ? '#000000' : '#4b5563',
                        textDecoration: code === i18n.language ? 'underline' : 'none',
                        border: 'none',
                        background: 'transparent',
                        cursor: 'pointer',
                        padding: 0,
                        fontSize: 'inherit',
                        fontWeight: 'inherit'
                      }}
                      onMouseEnter={(e) => {
                        if (code !== i18n.language) {
                          e.currentTarget.style.color = '#0B4C8C';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (code !== i18n.language) {
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
                    placeholder={t('navbar.search')}
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
                  aria-label={t('navbar.search')}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#0B4C8C';
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
              aria-label={t('navbar.menu')}
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