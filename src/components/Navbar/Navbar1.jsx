import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import Logo1 from '../../assets/Logo.png';
import Logo2 from '../../assets/Logo_white.png';

const Navbar = ({ isSplashVisible = false }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});
  const [mobileActiveMenu, setMobileActiveMenu] = useState(null);
  const navbarRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);

  // Плавный скролл эффект
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Закрытие при смене роута
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setExpandedItems({});
    setMobileActiveMenu(null);
  }, [location]);

  // Клик вне навбара
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Блокировка скролла при открытом мобильном меню
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isMobileMenuOpen]);

  const handleDropdownEnter = useCallback((menu) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menu);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  }, []);

  const toggleMobileMenu = (menuKey) => {
    setMobileActiveMenu(mobileActiveMenu === menuKey ? null : menuKey);
    setExpandedItems({});
  };

  const toggleItemExpansion = (menuKey, itemKey) => {
    setExpandedItems(prev => {
      const key = `${menuKey}-${itemKey}`;
      return { ...prev, [key]: !prev[key] };
    });
  };

  const isItemExpanded = (menuKey, itemKey) => {
    return expandedItems[`${menuKey}-${itemKey}`];
  };

  const menuData = {
    university: {
      items: [
        {
          key: 'structure',
          link: '/university/structure',
          subItems: [
            { key: 'universityMain', link: '/university/structure/University-main' },
            { key: 'internationalFaculty', link: '/university/structure/International-Faculty' },
            { key: 'itCollege', link: '/university/structure/it-college' }
          ]
        },
        {
          key: 'management',
          link: '/university/management',
          subItems: [
            { key: 'founder', link: '/university/management/founder' },
            { key: 'rectorate', link: '/university/management/rectorate' }
          ]
        },
        {
          key: 'councils',
          link: '/university/Councils',
          subItems: [
            { key: 'devCouncil', link: '/university/councils/development-council' },
            { key: 'acadCouncil', link: '/university/councils/academic-council' },
            { key: 'eduCouncil', link: '/university/councils/educational-council' },
            { key: 'techCouncil', link: '/university/councils/technical-council' },
            { key: 'scienCouncil', link: '/university/councils/scientific-council' },
            { key: 'editBoard', link: '/university/councils/editorial-board' },
            { key: 'admisCommittee', link: '/university/councils/admissions-committee' },
            { key: 'supportCommission', link: '/university/councils/commission-support' },
            { key: 'bioethicsCommittee', link: '/university/councils/bioethics-committee' },
            { key: 'youngScientists', link: '/university/councils/council-scients' },
            { key: 'employersCouncil', link: '/university/councils/employers-council' },
            { key: 'parentsCouncil', link: '/university/councils/parents-council' },
            { key: 'studentCouncil', link: '/university/councils/student-councils' }
          ]
        },
        {
          key: 'normativeDocs',
          link: '/university/normative-docs',
          subItems: [
            { key: 'krActs', link: '/university/normative-docs/kr-acts' },
            { key: 'internalActs', link: '/university/normative-docs/internal-acts' }
          ]
        },
        {
          key: 'qualityManagement',
          link: '/university/quality-management-system',
          subItems: [
            { key: 'qualityPolicy', link: '/university/quality-management-system/quality-policy' },
            { key: 'qualityMonitoring', link: '/university/quality-management-system/quality-monitoring' }
          ]
        },
        {
          key: 'mission',
          link: '/university/mission',
          subItems: [
            { key: 'viewMission', link: '/university/mission' }
          ]
        }
      ]
    },
    education: {
      items: [
        {
          key: 'ait',
          link: '/education/ait',
          subItems: [
            { key: 'aboutait', link: '/education/ait/about' },
            { key: 'aitLeadership', link: '/education/ait/leadership' },
            { key: 'aitDisciplines', link: '/education/ait/disciplines' },
            { key: 'aitTeachers', link: '/education/ait/teachers' },
            { key: 'contacts', link: '/education/ait/contacts' }
          ]
        },
        {
          key: 'mfm',
          link: '/education/mfm',
          subItems: [
            { key: 'aboutmfm', link: '/education/mfm/about' },
            { key: 'deanOffice', link: '/education/mfm/dekanat/dean' },
            { key: 'mfmCurriculum', link: '/education/mfm/dekanat/curriculum' },
            { key: 'departments', link: '/education/mfm/dekanat/departments' },
            { key: 'medicine5Years', link: '/education/mfm/programs/five-years' },
            { key: 'medicine6Years', link: '/education/mfm/programs/six-years' },
            { key: 'contacts', link: '/university/contacts' }
          ]
        },
        {
          key: 'itCollege',
          link: '/education/itCollege',
          subItems: [
            { key: 'aboutIt', link: '/university/structure/it-college' },
            { key: 'director', link: '/education/it-college/director' },
            { key: 'computerScience', link: '/education/it-college/specialties/diplom-computational-sciences' },
            { key: 'multimediaApps', link: '/education/it-college/specialties/diplom-multimedia-applications' },
            { key: 'mobileComputing', link: '/education/it-college/specialties/diplom-mobile-computing' },
            { key: 'lincolnUniversity', link: 'https://www.lincoln.edu.my/' },
            { key: 'generalDisciplines', link: '/education/it-college/departments/general' },
            { key: 'itDepartment', link: '/education/it-college/departments/information' },
            { key: 'pedagogicalCouncil', link: '/education/it-college/pedagogical-council' },
            { key: 'contacts', link: '/university/contacts' }
          ]
        },
        {
          key: 'postgraduatetitle',
          link: '/education/postgrad',
          subItems: [
            { key: 'internship', link: '/education/postgrad/internship' },
            { key: 'residency', link: '/education/postgrad/residency' },
            { key: 'postgraduate', link: '/education/postgrad/postgraduate' },
            { key: 'phd', link: '/education/postgrad/phd' }
          ]
        },
        {
          key: 'narynCenter',
          link: '/education/center',
          subItems: [
            { key: 'aboutCenter', link: '/education/center/about' },
            { key: 'contacts', link: '/university/contacts' }
          ]
        }
      ]
    },
    clinical: {
      items: [
        { 
          key: 'hospitals', 
          link: '/clinical/doc-clinic',
          subItems: [
            { key: 'docClinic', link: '/clinical/doc-clinic' },
            { key: 'docHospital', link: '/clinical/doc-hospital' },
            { key: 'simulationCenter', link: '/clinical/simulation-center' },
            { key: 'startups', link: '/clinical/startups' }
          ]
        }
      ]
    },
    science: {
      items: [
        {
          key: 'management',
          link: '/science/management',
          subItems: [
            { key: 'scientificCouncil', link: '/science/management/scientific-technical-council' },
            { key: 'bioethics', link: '/science/management/bioethics' },
            { key: 'youngScientists', link: '/science/management/young-scientists' },
            { key: 'researchDepartment', link: '/science/management/department' }
          ]
        },
        {
          key: 'labsAndCenters',
          link: '/science/labs',
          subItems: [
            { key: 'labs', link: '/science/labs' },
            { key: 'centers', link: '/science/centers' }
          ]
        },
        { 
          key: 'journal', 
          link: '/science/publications/journal',
          subItems: [
            { key: 'journalInfo', link: '/science/publications/journal' }
          ]
        },
        {
          key: 'events',
          link: '/science/events',
          subItems: [
            { key: 'conferences', link: '/science/events/conferences' }
          ]
        },
        {
          key: 'scholarships',
          link: '/science/scholarships',
          subItems: [
            { key: 'grants', link: '/science/scholarships' }
          ]
        }
      ]
    },
    cooperation: {
      items: [
        {
          key: 'partnership',
          link: '/cooperation/international-partners',
          subItems: [
            { key: 'internationalPartners', link: '/cooperation/international-partners' },
            { key: 'localPartners', link: '/cooperation/local-partners' }
          ]
        }
      ]
    },
    news: {
      items: [
        {
          key: 'allNews',
          link: '/news'
        }
      ]
    },
    contacts: {
      items: [
        {
          key: 'contactInfo',
          link: '/contacts'
        }
      ]
    },
    vacancies: {
      items: [
        {
          key: 'allVacancies',
          link: '/vacancies'
        }
      ]
    }
  };

  // Красивый dropdown для десктопа
  const renderDesktopDropdown = (menuKey, items) => {
    const itemsWithSubItems = items.filter(item => item.subItems?.length > 0);
    const itemsWithoutSubItems = items.filter(item => !item.subItems?.length);

    return (
      <div
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ease-out ${activeDropdown === menuKey
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-4'
          }`}
        style={{ top: isScrolled ? '4rem' : '5rem' }}
        onMouseEnter={() => handleDropdownEnter(menuKey)}
        onMouseLeave={handleDropdownLeave}
      >
        {/* Backdrop blur */}
        <div className={`absolute inset-0 ${isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-2xl shadow-blue-900/10'
            : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 backdrop-blur-lg'
          }`} />

        {/* Content */}
        <div className="relative container mx-auto px-4 sm:px-6 py-8">
          <div className="flex gap-8">
            {/* Main items with sub-items */}
            {itemsWithSubItems.length > 0 && (
              <div className="flex-1">
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {itemsWithSubItems.map((item, index) => (
                    <div
                      key={item.key}
                      className={`group rounded-2xl transition-all duration-300 ${isScrolled
                          ? 'bg-gradient-to-br from-blue-50 to-white border border-blue-100/50 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50'
                          : 'bg-blue-900/40 border border-blue-400/20 hover:bg-blue-900/60 hover:border-blue-400/40'
                        }`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="p-4">
                        {/* Category header */}
                        <Link
                          to={item.link}
                          onClick={() => setActiveDropdown(null)}
                          className={`flex items-center gap-3 mb-3 group/title hover:no-underline`}
                        >
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${isScrolled
                              ? 'bg-blue-500 group-hover/title:bg-blue-600 group-hover/title:scale-110'
                              : 'bg-blue-400/20 group-hover/title:bg-blue-400/30'
                            }`}>
                            <svg className={`w-5 h-5 ${isScrolled ? 'text-white' : 'text-blue-300'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                          <h3 className={`font-bold text-sm transition-colors ${isScrolled
                              ? 'text-gray-800 group-hover/title:text-blue-600'
                              : 'text-white group-hover/title:text-blue-200'
                            }`}>
                            {t(`${menuKey}SUB.${item.key}`)}
                          </h3>
                        </Link>

                        {/* Sub-items */}
                        <div className="space-y-1 max-h-48 overflow-y-auto custom-scrollbar">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.key}
                              to={subItem.link}
                              onClick={() => setActiveDropdown(null)}
                              className={`flex items-center py-2 px-3 rounded-lg transition-all duration-200 group/sub hover:no-underline ${isScrolled
                                  ? 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                                  : 'text-blue-100/80 hover:text-white hover:bg-white/10'
                                }`}
                            >
                              <span className={`w-1.5 h-1.5 rounded-full mr-2.5 transition-transform group-hover/sub:scale-150 ${isScrolled ? 'bg-blue-400' : 'bg-blue-400/60'
                                }`} />
                              <span className="text-sm font-medium truncate">
                                {t(`${menuKey}SUB.${subItem.key}`)}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quick links sidebar */}
            {itemsWithoutSubItems.length > 0 && (
              <div className="w-72 shrink-0">
                <div className={`rounded-2xl p-2 ${
                  isScrolled 
                    ? 'bg-gradient-to-br from-blue-500 to-blue-600' 
                    : 'bg-white/10 backdrop-blur-sm border border-white/10'
                }`}>
                  <h3 className="text-white font-bold mb-0 flex items-center gap-2">
                  </h3>
                  <div className="space-y-1">
                    {itemsWithoutSubItems.map((item) => (
                      <Link
                        key={item.key}
                        to={item.link}
                        onClick={() => setActiveDropdown(null)}
                        className="flex items-center py-2.5 px-3 rounded-xl text-white/90 hover:text-white hover:bg-white/20 transition-all duration-200 group/link hover:no-underline"
                      >
                        <svg className="w-4 h-4 mr-3 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        <span className="text-sm font-medium">{t(`${menuKey}SUB.${item.key}`)}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom border decoration */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 ${isScrolled
            ? 'bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30'
            : 'bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50'
          }`} />
      </div>
    );
  };

  // Красивое мобильное меню
  const renderMobileMenu = () => (
    <div
      className={`lg:hidden fixed inset-0 z-50 transition-all duration-500 ${isMobileMenuOpen ? 'visible' : 'invisible pointer-events-none'
        }`}
    >
      {/* Overlay с blur */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${isMobileMenuOpen ? 'bg-black/60 backdrop-blur-sm' : 'bg-transparent'
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Slide-in panel */}
      <div
        className={`absolute top-0 right-0 h-full w-full max-w-md transition-transform duration-500 ease-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className={`h-full overflow-hidden flex flex-col ${isScrolled
            ? 'bg-white'
            : 'bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900'
          }`}>
          {/* Header */}
          <div className={`flex items-center justify-between p-5 border-b ${isScrolled ? 'border-gray-100' : 'border-white/10'
            }`}>
            <div className="flex items-center gap-3">
              <img
                src={isScrolled ? Logo1 : Logo2}
                alt="Logo"
                className="h-8 w-auto"

              />
              <span className={`font-bold text-lg ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                {t('navbar.menu', 'Меню')}
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className={`p-2.5 rounded-xl transition-all duration-200 active:scale-90 ${isScrolled
                  ? 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu content */}
          <div className="flex-1 overflow-y-auto overscroll-contain">
            <div className="p-4 space-y-2">
              {Object.entries(menuData).map(([menuKey, { items }], menuIndex) => (
                <div
                  key={menuKey}
                  className={`rounded-2xl overflow-hidden transition-all duration-300 ${isScrolled
                      ? 'bg-gray-50 hover:bg-gray-100'
                      : 'bg-white/5 hover:bg-white/10'
                    }`}
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${menuIndex * 50}ms` : '0ms',
                    transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(20px)',
                    opacity: isMobileMenuOpen ? 1 : 0
                  }}
                >
                  {/* Menu header */}
                  <button
                    onClick={() => toggleMobileMenu(menuKey)}
                    className={`w-full flex items-center justify-between p-4 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'
                      }`}
                  >
                    <span className="font-semibold text-base">{t(`navbar.${menuKey}`)}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${mobileActiveMenu === menuKey
                        ? (isScrolled ? 'bg-blue-500 rotate-180' : 'bg-white/20 rotate-180')
                        : (isScrolled ? 'bg-gray-200' : 'bg-white/10')
                      }`}>
                      <svg
                        className={`w-4 h-4 transition-colors ${mobileActiveMenu === menuKey
                            ? 'text-white'
                            : (isScrolled ? 'text-gray-500' : 'text-white/70')
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Expandable content */}
                  <div className={`overflow-hidden transition-all duration-300 ease-out ${mobileActiveMenu === menuKey ? 'max-h-[60vh]' : 'max-h-0'
                    }`}>
                    <div className={`px-4 pb-4 space-y-1.5 max-h-[55vh] overflow-y-auto ${isScrolled ? 'border-t border-gray-200' : 'border-t border-white/10'
                      }`}>
                      {items.map((item) => (
                        <div key={item.key} className="pt-2">
                          {item.subItems ? (
                            <div className={`rounded-xl overflow-hidden ${isScrolled ? 'bg-white shadow-sm' : 'bg-white/5'
                              }`}>
                              <button
                                onClick={() => toggleItemExpansion(menuKey, item.key)}
                                className={`w-full flex items-center justify-between p-3 transition-colors ${isScrolled
                                    ? 'text-gray-700 hover:bg-blue-50'
                                    : 'text-white/90 hover:bg-white/5'
                                  }`}
                              >
                                <span className="font-medium text-sm">{t(`${menuKey}SUB.${item.key}`)}</span>
                                <svg
                                  className={`w-4 h-4 transition-transform duration-300 ${isItemExpanded(menuKey, item.key) ? 'rotate-180' : ''
                                    } ${isScrolled ? 'text-blue-500' : 'text-blue-300'}`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </button>

                              <div className={`overflow-hidden transition-all duration-300 ${isItemExpanded(menuKey, item.key) ? 'max-h-64' : 'max-h-0'
                                }`}>
                                <div className={`px-3 pb-3 space-y-1 ${isScrolled ? 'bg-blue-50/50' : 'bg-white/5'
                                  }`}>
                                  {/* All sections link */}
                                  <Link
                                    to={item.link}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`flex items-center py-2.5 px-3 rounded-lg transition-colors hover:no-underline ${isScrolled
                                        ? 'text-blue-600 font-medium hover:bg-blue-100'
                                        : 'text-blue-300 hover:bg-white/10'
                                      }`}
                                  >
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                    <span className="text-sm">{t('navbar.viewAll', 'Все разделы')}</span>
                                  </Link>

                                  {/* Sub-items */}
                                  {item.subItems.map((subItem) => (
                                    <Link
                                      key={subItem.key}
                                      to={subItem.link}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className={`flex items-center py-2.5 px-3 rounded-lg transition-colors hover:no-underline ${isScrolled
                                          ? 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                                          : 'text-white/70 hover:text-white hover:bg-white/10'
                                        }`}
                                    >
                                      <span className={`w-1.5 h-1.5 rounded-full mr-3 ${isScrolled ? 'bg-blue-400' : 'bg-blue-400/60'
                                        }`} />
                                      <span className="text-sm">{t(`${menuKey}SUB.${subItem.key}`)}</span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ) : (
                            <Link
                              to={item.link}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={`flex items-center justify-between p-3 rounded-xl transition-colors hover:no-underline ${isScrolled
                                  ? 'text-gray-700 hover:text-blue-600 bg-white shadow-sm hover:bg-blue-50'
                                  : 'text-white/90 hover:text-white bg-white/5 hover:bg-white/10'
                                }`}
                            >
                              <span className="font-medium text-sm">{t(`${menuKey}SUB.${item.key}`)}</span>
                              <svg className={`w-4 h-4 ${isScrolled ? 'text-gray-400' : 'text-white/50'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer with language switcher */}
          <div className={`p-5 border-t ${isScrolled ? 'border-gray-100 bg-gray-50' : 'border-white/10 bg-white/5'}`}>
            <LanguageSwitcher variant="solid" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Main Navbar */}
      <nav
        ref={navbarRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ease-out 
          ${isSplashVisible ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}
          ${isScrolled
            ? 'h-16 bg-white/95 backdrop-blur-xl shadow-lg shadow-gray-900/5 border-b border-gray-100'
            : 'h-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 backdrop-blur-lg'
          }`}
      >
        <div className="w-full h-full px-4 sm:px-6">
          <div className="flex items-center justify-between h-full gap-4">
            {/* Left - Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center group">
                <div className="relative">
                  <img
                    src={isScrolled ? Logo1 : Logo2}
                    alt="Salymbekov University"
                    className={`transition-all duration-500 ${isScrolled ? 'h-10' : 'h-12'} w-auto object-contain`}
                  />
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
                    isScrolled ? 'bg-blue-500/10' : 'bg-white/10'
                  } blur-xl`} />
                </div>
              </Link>
            </div>

            {/* Center - Desktop Navigation */}
            <div className="hidden lg:flex flex-1 justify-center items-center gap-1">
              {Object.entries(menuData).map(([menuKey, { items }]) => {
                // Для news, contacts, vacancies - прямая ссылка
                if (['news', 'contacts', 'vacancies'].includes(menuKey)) {
                  return (
                    <Link
                      key={menuKey}
                      to={items[0].link}
                      className={`relative px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 group hover:no-underline ${
                        isScrolled
                          ? 'text-gray-600 hover:text-blue-600'
                          : 'text-white/90 hover:text-white'
                      }`}
                    >
                      <span className="relative z-10">{t(`navbar.${menuKey}`)}</span>
                      
                      {/* Hover background */}
                      <span className={`absolute inset-0 rounded-xl transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                        isScrolled ? 'bg-blue-50' : 'bg-white/10'
                      }`} />
                    </Link>
                  );
                }
                
                // Для остальных - дропдаун
                return (
                  <div
                    key={menuKey}
                    className="relative"
                    onMouseEnter={() => handleDropdownEnter(menuKey)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      className={`relative px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 group ${
                        isScrolled
                          ? 'text-gray-600 hover:text-blue-600'
                          : 'text-white/90 hover:text-white'
                      } ${activeDropdown === menuKey ? (isScrolled ? 'text-blue-600 bg-blue-50' : 'text-white bg-white/10') : ''}`}
                    >
                      <span className="relative z-10">{t(`navbar.${menuKey}`)}</span>
                      
                      {/* Hover background */}
                      <span className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                        activeDropdown === menuKey 
                          ? 'opacity-100' 
                          : 'opacity-0 group-hover:opacity-100'
                      } ${isScrolled ? 'bg-blue-50' : 'bg-white/10'}`} />
                      
                      {/* Bottom indicator */}
                      <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300 ${
                        activeDropdown === menuKey ? 'w-6' : 'w-0'
                      } ${isScrolled ? 'bg-blue-500' : 'bg-white'}`} />
                    </button>
                    
                    {renderDesktopDropdown(menuKey, items)}
                  </div>
                );
              })}
            </div>

            {/* Right - Language Switcher & Mobile Menu */}
            <div className="flex items-center gap-3 flex-shrink-0">
              {/* Language Switcher - Desktop */}
              <div className="hidden lg:block">
                <LanguageSwitcher variant={isScrolled ? "outline" : "default"} />
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden relative w-12 h-12 rounded-xl transition-all duration-300 active:scale-90 ${isScrolled
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-white hover:bg-white/10'
                  }`}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-5 relative flex flex-col justify-between">
                    <span className={`block w-full h-0.5 rounded-full transition-all duration-300 origin-center ${isScrolled ? 'bg-gray-700' : 'bg-white'
                      } ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block w-full h-0.5 rounded-full transition-all duration-300 ${isScrolled ? 'bg-gray-700' : 'bg-white'
                      } ${isMobileMenuOpen ? 'opacity-0 scale-0' : ''}`} />
                    <span className={`block w-full h-0.5 rounded-full transition-all duration-300 origin-center ${isScrolled ? 'bg-gray-700' : 'bg-white'
                      } ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Desktop Dropdowns Portal */}
      {Object.entries(menuData).map(([menuKey, { items }]) => (
        <div key={menuKey}>
          {renderDesktopDropdown(menuKey, items)}
        </div>
      ))}

      {/* Mobile Menu */}
      {renderMobileMenu()}

      {/* Spacer */}
      <div className={`transition-all duration-500 ${isScrolled ? 'h-16' : 'h-20'}`} />

      <style jsx global>{`
        /* Custom scrollbar for dropdowns */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(59, 130, 246, 0.3) transparent;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.3);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.5);
        }

        /* Mobile menu animations */
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Touch improvements */
        @media (max-width: 1023px) {
          * {
            -webkit-tap-highlight-color: transparent;
          }
          
          .overscroll-contain {
            overscroll-behavior: contain;
            -webkit-overflow-scrolling: touch;
          }
        }

        /* Smooth transitions */
        .transition-gpu {
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        /* Focus visible styles */
        button:focus-visible,
        a:focus-visible {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
      `}</style>
    </>
  );
};

export default Navbar;