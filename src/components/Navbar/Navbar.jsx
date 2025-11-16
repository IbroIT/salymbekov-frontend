import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import Logo1 from '../../assets/Logo.png';
import Logo2 from '../../assets/Logo_white.png';
const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const subDropdownTimeoutRef = useRef(null);

  // Track scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  }, [location]);

  const handleDropdownEnter = (menu) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menu);
    setActiveSubDropdown(null);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    }, 300);
  };

  const handleSubDropdownEnter = (sub) => {
    if (subDropdownTimeoutRef.current) {
      clearTimeout(subDropdownTimeoutRef.current);
    }
    setActiveSubDropdown(sub);
  };

  const handleSubDropdownLeave = () => {
    subDropdownTimeoutRef.current = setTimeout(() => {
      setActiveSubDropdown(null);
    }, 200);
  };

  // Menu data structure
  const menuData = {
    university: {
      items: [
        { key: 'appeal', link: '/university/appeal' },
        { key: 'history', link: '/university/history' },
        { key: 'mission', link: '/university/mission' },
        { key: 'videos', link: '/university/videos' },
        { key: 'vacancies', link: '/university/vacancies' },
        { key: 'contacts', link: '/university/contacts' },
        {
          key: 'structure',
          link: '/university/structure',
          subItems: [
            { key: 'universityMain', link: '/university/structure/university-main' },
            { key: 'internationalFaculty', link: '/university/structure/international-faculty' },
            { key: 'itCollege', link: '/university/structure/it-college' },
            { key: 'businessSchool', link: '/university/structure/business-school' }
          ]
        },
        {
          key: 'management',
          link: '/university/management',
          subItems: [
            { key: 'founder', link: '/university/management/founder' },
            { key: 'president', link: '/university/management/president' },
            { key: 'rectorate', link: '/university/management/rectorate' },
            { key: 'publicCouncils', link: '/university/management/public-councils' }
          ]
        },
        {
          key: 'departments',
          link: '/university/departments',
          subItems: [
            { key: 'financialDept', link: '/university/departments/financial' },
            { key: 'educationalDept', link: '/university/departments/educational' },
            { key: 'managementDept', link: '/university/departments/management' },
            { key: 'hrDept', link: '/university/departments/hr' },
            { key: 'qualityDept', link: '/university/departments/quality' },
            { key: 'scienceDept', link: '/university/departments/science' },
            { key: 'internationalDept', link: '/university/departments/international' },
            { key: 'studentDept', link: '/university/departments/student' },
            { key: 'careerCenter', link: '/university/departments/career' }
          ]
        },
        {
          key: 'accreditation',
          link: '/university/accreditation',
          subItems: [
            { key: 'national', link: '/university/accreditation/national' },
            { key: 'institutional', link: '/university/accreditation/institutional' },
            { key: 'program', link: '/university/accreditation/program' },
            { key: 'international', link: '/university/accreditation/international' }
          ]
        }
      ]
    },
    education: {
      items: [
        { key: 'ait', link: '/education/ait' },
        { key: 'mfm', link: '/education/mfm' },
        { key: 'itCollege', link: '/education/it-college' },
        { key: 'businessSchool', link: '/education/business-school' },
        { key: 'postgrad', link: '/education/postgrad' },
        { key: 'center', link: '/education/center' }
      ]
    },
    clinicalBase: {
      items: [
        { key: 'lazmed', link: '/clinical/lazmed' },
        { key: 'dordoi', link: '/clinical/dordoi' },
        { key: 'docClinic', link: '/clinical/doc-clinic' },
        { key: 'docHospital', link: '/clinical/doc-hospital' },
        { key: 'agreements', link: '/clinical/agreements' }
      ]
    },
    science: {
      items: [
        {
          key: 'management',
          link: '/science/management',
          subItems: [
            { key: 'scientificCouncil', link: '/science/management/scientific-council' },
            { key: 'bioethics', link: '/science/management/bioethics' },
            { key: 'youngScientists', link: '/science/management/young-scientists' }
          ]
        },
        { key: 'department', link: '/science/department' },
        { key: 'professors', link: '/science/professors' },
        { key: 'publications', link: '/science/publications' },
        { key: 'events', link: '/science/events' },
        { key: 'library', link: '/science/library' },
        { key: 'studentScience', link: '/science/student-science' },
        { key: 'labs', link: '/science/labs' },
        { key: 'projects', link: '/science/projects' }
      ]
    },
    student: {
      items: [
        { key: 'communities', link: '/student/communities' },
        { key: 'resources', link: '/student/resources' },
        { key: 'schedules', link: '/student/schedules' },
        { key: 'conditions', link: '/student/conditions' }
      ]
    },
    applicant: {
      items: [
        { key: 'commission', link: '/applicant/commission' },
        { key: 'rules', link: '/applicant/rules' },
        { key: 'directions', link: '/applicant/directions' },
        { key: 'entrance', link: '/applicant/entrance' },
        { key: 'cost', link: '/applicant/cost' },
        { key: 'orientation', link: '/applicant/orientation' },
        { key: 'documents', link: '/applicant/documents' },
        { key: 'admissionReg', link: '/applicant/admission-reg' },
        { key: 'schedule', link: '/applicant/schedule' },
        { key: 'transfer', link: '/applicant/transfer' },
        { key: 'scholarships', link: '/applicant/scholarships' }
      ]
    },
    infrastructure: {
      items: [
        { key: 'locations', link: '/infrastructure/locations' },
        { key: 'partners', link: '/infrastructure/partners' }
      ]
    }
  };

  const renderFullscreenDropdown = (menuKey, items) => (
    <div
      className={`fixed top-20 left-0 right-0 bg-white/98 backdrop-blur-2xl shadow-2xl border-t border-blue-100 transition-all duration-500 overflow-hidden ${
        activeDropdown === menuKey 
          ? 'h-[calc(100vh-80px)] opacity-100 visible' 
          : 'h-0 opacity-0 invisible'
      }`}
      onMouseEnter={() => handleDropdownEnter(menuKey)}
      onMouseLeave={handleDropdownLeave}
    >
      <div className="container mx-auto px-6 py-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 h-full overflow-y-auto">
          {items.map((item, index) => (
            <div 
              key={item.key} 
              className="group relative"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`p-6 rounded-2xl transition-all duration-500 ${
                item.subItems 
                  ? 'bg-blue-50 border-2 border-blue-100 hover:border-blue-300' 
                  : 'bg-white border border-gray-100 hover:border-blue-200 hover:shadow-lg'
              } ${activeDropdown === menuKey ? 'animate-fadeInUp' : ''}`}>
                
                {/* Main Item */}
                <Link
                  to={item.link}
                  className={`block mb-3 transition-all duration-300 group-hover:translate-x-2 ${
                    item.subItems ? 'text-blue-900' : 'text-gray-900'
                  }`}
                  onClick={() => setActiveDropdown(null)}
                >
                  <h3 className={`text-xl font-bold mb-2 ${
                    item.subItems ? 'text-blue-800' : 'text-gray-800'
                  }`}>
                    {t(`${menuKey}Sub.${item.key}`)}
                  </h3>
                  {!item.subItems && (
                    <p className="text-gray-600 text-sm">
                      {t(`${menuKey}Sub.${item.key}Desc`, `${menuKey}Sub.${item.key}`)}
                    </p>
                  )}
                </Link>

                {/* Sub Items */}
                {item.subItems && (
                  <div className="space-y-2">
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subItem.key}
                        to={subItem.link}
                        className="flex items-center py-2 px-3 text-gray-700 hover:text-blue-700 hover:bg-white rounded-xl transition-all duration-300 group/sub"
                        onClick={() => setActiveDropdown(null)}
                        style={{ animationDelay: `${(index * 50) + (subIndex * 20)}ms` }}
                      >
                        <div className={`w-2 h-2 bg-blue-400 rounded-full mr-3 transition-all duration-300 group-hover/sub:scale-150 ${
                          activeDropdown === menuKey ? 'animate-pulse' : ''
                        }`} />
                        <span className="text-sm font-medium">
                          {t(`${menuKey}Sub.${subItem.key}`)}
                        </span>
                        <svg 
                          className="w-4 h-4 ml-auto opacity-0 group-hover/sub:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover/sub:translate-x-0" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className={`mt-8 pt-8 border-t border-gray-200 transition-all duration-700 ${
          activeDropdown === menuKey ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to={`/${menuKey}`}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105"
              onClick={() => setActiveDropdown(null)}
            >
              {t('navbar.viewAll', 'View All')}
            </Link>
            <button
              onClick={() => setActiveDropdown(null)}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300"
            >
              {t('navbar.close', 'Close')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMobileMenu = () => (
    <div className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-blue-100 transition-all duration-500 ${
      isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
    }`}>
      <div className="container mx-auto px-6 py-6">
        {Object.entries(menuData).map(([menuKey, { items }]) => (
          <div key={menuKey} className="mb-4">
            <button
              onClick={() => setActiveDropdown(activeDropdown === menuKey ? null : menuKey)}
              className="flex items-center justify-between w-full py-4 text-lg font-semibold text-blue-900 hover:text-blue-700 transition-colors duration-200 bg-blue-50 rounded-xl px-4"
            >
              <span>{t(`navbar.${menuKey}`)}</span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${
                  activeDropdown === menuKey ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className={`overflow-hidden transition-all duration-500 ${
              activeDropdown === menuKey ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="pl-4 space-y-3 py-3">
                {items.map((item) => (
                  <div key={item.key} className="bg-white rounded-lg p-3 border border-gray-100">
                    <Link
                      to={item.link}
                      className="block py-2 text-gray-800 hover:text-blue-700 transition-colors duration-200 font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t(`${menuKey}Sub.${item.key}`)}
                    </Link>
                    {item.subItems && activeDropdown === menuKey && (
                      <div className="pl-3 space-y-2 mt-2 border-l-2 border-blue-200">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.key}
                            to={subItem.link}
                            className="block py-1 text-sm text-gray-600 hover:text-blue-700 transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            • {t(`${menuKey}Sub.${subItem.key}`)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        
        <div className="pt-6 border-t border-gray-200">
          <LanguageSwitcher variant="solid" />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-blue-100' 
          : 'bg-gradient-to-r from-blue-900 to-blue-800'
      }`}>
        <div className="">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center group">
                <div
                  className="h-14 px-3 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                >
                  <img
                    src={isScrolled ? Logo1 : Logo2}
                    alt="Logo"
                    className="h-10 w-auto object-contain transition-opacity duration-300"
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {Object.entries(menuData).map(([menuKey, { items }]) => (
                <div
                  key={menuKey}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(menuKey)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden group ${
                      isScrolled
                        ? 'text-blue-900 hover:text-blue-700'
                        : 'text-white hover:text-blue-100'
                    } ${activeDropdown === menuKey ? (isScrolled ? 'text-blue-700' : 'text-white') : ''}`}
                  >
                    <span className="relative z-10">{t(`navbar.${menuKey}`)}</span>
                    <div className={`absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl transition-all duration-300 ${
                      activeDropdown === menuKey 
                        ? 'opacity-20 scale-100' 
                        : 'opacity-0 scale-95 group-hover:opacity-10 group-hover:scale-100'
                    }`} />
                  </button>
                  {renderFullscreenDropdown(menuKey, items)}
                </div>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              <div className="hidden lg:block">
                <LanguageSwitcher variant={isScrolled ? "outline" : "default"} />
              </div>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-3 rounded-xl transition-all duration-300 relative overflow-hidden ${
                  isScrolled
                    ? 'text-blue-900 hover:bg-blue-50'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <div className="w-6 h-6 relative">
                  <span className={`absolute block w-6 h-0.5 transition-all duration-300 ${
                    isScrolled ? 'bg-blue-900' : 'bg-white'
                  } ${isMobileMenuOpen ? 'rotate-45 top-3' : 'top-1'}`} />
                  <span className={`absolute block w-6 h-0.5 transition-all duration-300 ${
                    isScrolled ? 'bg-blue-900' : 'bg-white'
                  } ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100 top-3'}`} />
                  <span className={`absolute block w-6 h-0.5 transition-all duration-300 ${
                    isScrolled ? 'bg-blue-900' : 'bg-white'
                  } ${isMobileMenuOpen ? '-rotate-45 top-3' : 'top-5'}`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {renderMobileMenu()}
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      {/* Overlay for fullscreen dropdown */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40 top-20"
          onClick={() => setActiveDropdown(null)}
        />
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Navbar;