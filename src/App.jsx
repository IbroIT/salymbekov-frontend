
import React, { lazy, Suspense, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar1'
import ScrollToTop from './components/ScrollToTop'
import SplashScreen from './components/SplashScreen'
import Home from './pages/Home'
import Services from './pages/Services'
import FounderMessage from './pages/FounderMessage'
import MaterialBaseGallery from './pages/MaterialBaseGallery'
import Footer from './pages/Footer'
import ApplicantBase from './pages/applicant/ApplicantBase'
import ManagedPageRoute from './components/cms/ManagedPageRoute'


// Lazy imports for university

const NewsHome = lazy(() => import('./pages/university/HomeNewsSection'))
const NewsPage = lazy(() => import('./pages/university/NewsPage'))
const NewsDetail = lazy(() => import('./pages/university/NewsDetail'))

// Science lazy imports
const ScientificCouncil = lazy(() => import('./pages/science/management/ScientificCouncil'))
const ScientificTechnicalCouncil = lazy(() => import('./pages/science/management/ScientificTechnicalCouncil'))
const Bioethics = lazy(() => import('./pages/science/management/Bioethics'))
const YoungScientists = lazy(() => import('./pages/science/management/YoungScientists'))
const ScienceDepartmentMng = lazy(() => import('./pages/science/management/Department'))
const ScienceDepartment = lazy(() => import('./pages/science/Department'))
const Publications = lazy(() => import('./pages/science/Publications'))
const ScientificJournal = lazy(() => import('./pages/science/ScientificJournal'))
const ScienceEvents = lazy(() => import('./pages/science/Events'))
const StudentScience = lazy(() => import('./pages/science/StudentScience'))
const StudentSociety = lazy(() => import('./pages/science/StudentSociety'))
const Projects = lazy(() => import('./pages/science/Projects'))
const ManagementScience = lazy(() => import('./pages/science/Management'))
const Conferences = lazy(() => import('./pages/science/Conferences'))
const ConferenceDetail = lazy(() => import('./pages/science/ConferenceDetail'))
const ScienceScholarships = lazy(() => import('./pages/science/Scholarships'))
const Pendharkar = lazy(() => import('./pages/science/professors/Pendharkar'))
const Potapova = lazy(() => import('./pages/science/professors/Potapova'))
const Osmonov = lazy(() => import('./pages/science/professors/Osmonov'))
const Erkebaev = lazy(() => import('./pages/science/professors/Erkebaev'))
const Madaminov = lazy(() => import('./pages/science/professors/Madaminov'))
const Bilgaziev = lazy(() => import('./pages/science/professors/Bilgaziev'))
const Kubatov = lazy(() => import('./pages/science/professors/Kubatov'))
const Shaltakova = lazy(() => import('./pages/science/professors/Shaltakova'))
const Kachibek = lazy(() => import('./pages/science/professors/Kachibek'))

// News, Contacts, Vacancies lazy imports
const News = lazy(() => import('./pages/News'))
const Vacancies = lazy(() => import('./pages/Vacancies'))

// Student lazy imports
const StudentMain = lazy(() => import('./pages/student/StudentMain'))
const StudentCouncil = lazy(() => import('./pages/student/community/council'))
const StudentScienceCommunity = lazy(() => import('./pages/student/community/science'))
const StudentCommunities = lazy(() => import('./pages/student/communities/StudentCommunities'))
const DebateClub = lazy(() => import('./pages/student/communities/DebateClub'))
const Tutoring = lazy(() => import('./pages/student/communities/Tutoring'))
const CreativeGroups = lazy(() => import('./pages/student/communities/CreativeGroups'))

const Instructions = lazy(() => import('./pages/student/resources/Instructions'))
const InfoSystem = lazy(() => import('./pages/student/resources/InfoSystem'))
const ELibrary = lazy(() => import('./pages/student/resources/ELibrary'))
const EducationalResources = lazy(() => import('./pages/student/resources/EducationalResources'))
const Schedules = lazy(() => import('./pages/student/schedules/Schedules'))
const StudySchedule = lazy(() => import('./pages/student/schedules/StudySchedule'))
const ModuleSchedule = lazy(() => import('./pages/student/schedules/ModuleSchedule'))
const PracticeSchedule = lazy(() => import('./pages/student/schedules/PracticeSchedule'))
const MFMSchedule = lazy(() => import('./pages/student/schedules/MFMSchedule'))
const CollegeSchedule = lazy(() => import('./pages/student/schedules/CollegeSchedule'))
const Conditions = lazy(() => import('./pages/student/conditions/Conditions'))
const MedicalCenter = lazy(() => import('./pages/student/opportunities/MedicalCenter'))
const Dormitory = lazy(() => import('./pages/student/opportunities/Dormitory'))
const SocialSupport = lazy(() => import('./pages/student/opportunities/SocialSupport'))
const ElectiveCourses = lazy(() => import('./pages/student/opportunities/ElectiveCourses'))
const Mobility = lazy(() => import('./pages/student/opportunities/Mobility'))
const PsychologicalSupport = lazy(() => import('./pages/student/opportunities/PsychologicalSupport'))
const StudentService = lazy(() => import('./pages/student/opportunities/StudentService'))
const AdaptationPrograms = lazy(() => import('./pages/student/opportunities/AdaptationPrograms'))

// Applicant lazy imports
const Commission = lazy(() => import('./pages/applicant/Commission'))
const Dealers = lazy(() => import('./pages/applicant/Dealers'))
const Rules = lazy(() => import('./pages/applicant/Rules'))
const Directions = lazy(() => import('./pages/applicant/Directions'))
const Entrance = lazy(() => import('./pages/applicant/Entrance'))
const Cost = lazy(() => import('./pages/applicant/Cost'))
const Orientation = lazy(() => import('./pages/applicant/Orientation'))
const Documents = lazy(() => import('./pages/applicant/Documents'))
const AdmissionReg = lazy(() => import('./pages/applicant/AdmissionReg'))
const ScheduleApp = lazy(() => import('./pages/applicant/Schedule'))
const TransferBase = lazy(() => import('./pages/applicant/TransferBase'))
const TransferSchedule = lazy(() => import('./pages/applicant/TransferSchedule'))
const Scholarships = lazy(() => import('./pages/applicant/Scholarships'))
const CareerGuidance = lazy(() => import('./pages/applicant/CareerGuidance'))
const AdmissionProcedure = lazy(() => import('./pages/applicant/AdmissionProcedure'))
const AdmissionCom = lazy(() => import('./pages/applicant/AdmissionCom'))
const KnowledgeKarakol = lazy(() => import('./pages/applicant/KnowledgeKarakol'))
const KnowledgeOsh = lazy(() => import('./pages/applicant/KnowledgeOsh'))
const Cooperation1 = lazy(() => import('./pages/applicant/Cooperation'))
const Meeting = lazy(() => import('./pages/applicant/Meeting'))
const TeachersDay = lazy(() => import('./pages/applicant/events/TeachersDay'))
const StateLanguageDay = lazy(() => import('./pages/applicant/events/StateLanguageDay'))
const KoreanCenter = lazy(() => import('./pages/applicant/events/KoreanCenter'))
const MedicalMission = lazy(() => import('./pages/applicant/events/MedicalMission'))
const Graduation = lazy(() => import('./pages/applicant/events/Graduation2025'))
const DiplomaAward = lazy(() => import('./pages/applicant/events/DiplomaAward'))
const EurasianCongress = lazy(() => import('./pages/applicant/news/EurasianCongress'))
const ITSecurityMeeting = lazy(() => import('./pages/applicant/news/ITSecurityMeeting'))
const PaiChaiVisit = lazy(() => import('./pages/applicant/news/PaiChaiVisit'))
const Transfer = lazy(() => import('./pages/applicant/Transfer'))
const India = lazy(() => import('./pages/applicant/countries/India'))
const Pakistan = lazy(() => import('./pages/applicant/countries/Pakistan'))
const Uzbekistan = lazy(() => import('./pages/applicant/countries/Uzbekistan'))
const Infrastructure = lazy(() => import('./pages/applicant/Infrastructure'))
const Software = lazy(() => import('./pages/applicant/extrapages/Software'))
const MobileDev = lazy(() => import('./pages/applicant/extrapages/MobileDev'))
const MultimediaDev = lazy(() => import('./pages/applicant/extrapages/MultimediaDev'))
const Dicipline = lazy(() => import('./pages/applicant/extrapages/Dicipline'))
const GenerealMedFive = lazy(() => import('./pages/applicant/extrapages/GeneralMedFive'))
const GeneralMedSix = lazy(() => import('./pages/applicant/extrapages/GeneralMedSix'))
const AdmissionSchedule = lazy(() => import('./pages/applicant/Schedule'))
const RequiredDoc = lazy(() => import('./pages/applicant/extrapages/RequiredDoc'))
const OnlineReg = lazy(() => import('./pages/applicant/extrapages/OnlineReg'))





















const App = () => {
  const [showSplash, setShowSplash] = useState(() => {
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('splashAnimationShown');
    }
    return true;
  });

  // Новый стейт для управления анимацией входа контента
  // Инициализируем обратным значением от showSplash (если сплэш есть, контент скрыт)
  const [isContentHidden, setIsContentHidden] = useState(() => {
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('splashAnimationShown');
    }
    return true;
  });

  const handleSplashExitStart = () => {
    setIsContentHidden(false);
  };

  const handleSplashFinish = () => {
    console.log('Splash screen finished');
    setShowSplash(false);
    setIsContentHidden(false); // На всякий случай дублируем
  };

  const managedPage = (path, fallback) => (
    <ManagedPageRoute path={path} fallback={shouldUseCmsOnlyRoute(path) ? null : fallback} />
  );

  const cmsOnlyPage = (path) => (
    <ManagedPageRoute path={path} fallback={null} />
  );

  const shouldUseCmsOnlyRoute = (path) => (
    path === '/about' ||
    path === '/contact' ||
    path === '/contacts' ||
    path.startsWith('/university/') ||
    path.startsWith('/clinical/') ||
    path.startsWith('/infrastructure/') ||
    path.startsWith('/cooperation/') ||
    path.startsWith('/education/')
  );

  return (
    <Router>
      {showSplash && (
        <SplashScreen
          onFinish={handleSplashFinish}
          onAnimationStartExit={handleSplashExitStart}
        />
      )}
      <ScrollToTop />
      <div className="min-h-screen bg-gray-100">
        <Navbar isSplashVisible={isContentHidden} />
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div>Загрузка...</div></div>}>
          <Routes>
            <Route path="/" element={<Home isSplashVisible={isContentHidden} />} />
            <Route path='/press/news' element={<NewsPage />} />
            <Route path="/about" element={cmsOnlyPage('/about')} />
            <Route path="/services" element={managedPage('/services', <Services />)} />
            <Route path="/contact" element={cmsOnlyPage('/contact')} />
            <Route path='/founderMessege' element={managedPage('/founderMessege', <FounderMessage />)} />
            <Route path='/MaterialBaseGallery' element={managedPage('/MaterialBaseGallery', <MaterialBaseGallery />)} />
            <Route path='/news/NewsHome' element={<NewsHome />} />
            <Route path="/press/news/:id" element={<NewsDetail />} />
            <Route path="/university/mission" element={cmsOnlyPage('/university/mission')} />
            <Route path="/university/structure" element={cmsOnlyPage('/university/structure')} />
            <Route path="/university/structure/university-main" element={cmsOnlyPage('/university/structure/university-main')} />
            <Route path="/university/structure/international-faculty" element={cmsOnlyPage('/university/structure/international-faculty')} />
            <Route path="/university/structure/it-college" element={cmsOnlyPage('/university/structure/it-college')} />
            <Route path="/university/management" element={cmsOnlyPage('/university/management')} />
            <Route path="/university/management/founder" element={cmsOnlyPage('/university/management/founder')} />
            <Route path="/university/management/rectorate" element={cmsOnlyPage('/university/management/rectorate')} />
            <Route path="/university/management/public-councils" element={cmsOnlyPage('/university/management/public-councils')} />
            <Route path="/university/normative-docs" element={cmsOnlyPage('/university/normative-docs')} />
            <Route path="/university/normative-docs/kr-acts" element={cmsOnlyPage('/university/normative-docs/kr-acts')} />
            <Route path="/university/normative-docs/internal-acts" element={cmsOnlyPage('/university/normative-docs/internal-acts')} />
            <Route path="/university/councils/academic-council" element={cmsOnlyPage('/university/councils/academic-council')} />
            <Route path="/university/councils/admissions-committee" element={cmsOnlyPage('/university/councils/admissions-committee')} />
            <Route path="/university/councils/bioethics-committee" element={cmsOnlyPage('/university/councils/bioethics-committee')} />
            <Route path="/university/councils/commission-support" element={cmsOnlyPage('/university/councils/commission-support')} />
            <Route path="/university/councils/council-scients" element={cmsOnlyPage('/university/councils/council-scients')} />
            <Route path="/university/councils/development-council" element={cmsOnlyPage('/university/councils/development-council')} />
            <Route path="/university/councils/editorial-board" element={cmsOnlyPage('/university/councils/editorial-board')} />
            <Route path="/university/councils/educational-council" element={cmsOnlyPage('/university/councils/educational-council')} />
            <Route path="/university/councils/employers-council" element={cmsOnlyPage('/university/councils/employers-council')} />
            <Route path="/university/councils/scientific-council" element={cmsOnlyPage('/university/councils/scientific-council')} />
            <Route path="/university/councils/student-councils" element={cmsOnlyPage('/university/councils/student-councils')} />
            <Route path="/university/councils/technical-council" element={cmsOnlyPage('/university/councils/technical-council')} />
            <Route path="/university/councils/parents-council" element={cmsOnlyPage('/university/councils/parents-council')} />
            <Route path="/university/quality-management-system/quality-monitoring" element={cmsOnlyPage('/university/quality-management-system/quality-monitoring')} />
            <Route path="/university/quality-management-system/quality-policy" element={cmsOnlyPage('/university/quality-management-system/quality-policy')} />



            {/* Lazy Education */}
            <Route path="/education/ait" element={cmsOnlyPage('/education/ait')} />
            <Route path="/education/ait/about" element={cmsOnlyPage('/education/ait/about')} />
            <Route path="/education/ait/leadership" element={cmsOnlyPage('/education/ait/leadership')} />
            <Route path="/education/ait/disciplines" element={cmsOnlyPage('/education/ait/disciplines')} />
            <Route path="/education/ait/teachers" element={cmsOnlyPage('/education/ait/teachers')} />
            <Route path="/education/ait/contacts" element={cmsOnlyPage('/education/ait/contacts')} />
            <Route path="/education/mfm" element={cmsOnlyPage('/education/mfm')} />
            <Route path="/education/it-college" element={cmsOnlyPage('/education/it-college')} />
            <Route path="/education/postgrad" element={cmsOnlyPage('/education/postgrad')} />
            <Route path="/education/center" element={cmsOnlyPage('/education/center')} />
            <Route path="/education/mfm/about" element={cmsOnlyPage('/education/mfm/about')} />
            <Route path="/education/mfm/dekanat/dean" element={cmsOnlyPage('/education/mfm/dekanat/dean')} />
            <Route path="/education/mfm/dekanat/curriculum" element={cmsOnlyPage('/education/mfm/dekanat/curriculum')} />
            <Route path="/education/mfm/dekanat/departments" element={cmsOnlyPage('/education/mfm/dekanat/departments')} />
            <Route path="/education/mfm/programs/five-years" element={cmsOnlyPage('/education/mfm/programs/five-years')} />
            <Route path="/education/mfm/programs/six-years" element={cmsOnlyPage('/education/mfm/programs/six-years')} />
            <Route path="/education/it-college/departments/general" element={cmsOnlyPage('/education/it-college/departments/general')} />
            <Route path="/education/it-college/departments/information" element={cmsOnlyPage('/education/it-college/departments/information')} />
            <Route path="/education/it-college/specialties/diplom-computational-sciences" element={cmsOnlyPage('/education/it-college/specialties/diplom-computational-sciences')} />
            <Route path="/education/it-college/specialties/diplom-mobile-computing" element={cmsOnlyPage('/education/it-college/specialties/diplom-mobile-computing')} />
            <Route path="/education/it-college/specialties/diplom-multimedia-applications" element={cmsOnlyPage('/education/it-college/specialties/diplom-multimedia-applications')} />
            <Route path="/education/it-college/director" element={cmsOnlyPage('/education/it-college/director')} />
            <Route path="/education/it-college/double-diploma" element={cmsOnlyPage('/education/it-college/double-diploma')} />
            <Route path="/education/it-college/pedagogical-council" element={cmsOnlyPage('/education/it-college/pedagogical-council')} />

            <Route path="/education/postgrad/internship" element={cmsOnlyPage('/education/postgrad/internship')} />
            <Route path="/education/postgrad/phd" element={cmsOnlyPage('/education/postgrad/phd')} />
            <Route path="/education/postgrad/postgraduate" element={cmsOnlyPage('/education/postgrad/postgraduate')} />
            <Route path="/education/postgrad/residency" element={cmsOnlyPage('/education/postgrad/residency')} />
            <Route path="/education/center/about" element={cmsOnlyPage('/education/center/about')} />




            <Route path="/clinical/doc-clinic" element={cmsOnlyPage('/clinical/doc-clinic')} />
            <Route path="/clinical/doc-hospital" element={cmsOnlyPage('/clinical/doc-hospital')} />
            <Route path="/clinical/simulation-center" element={cmsOnlyPage('/clinical/simulation-center')} />
            <Route path="/clinical/startups" element={cmsOnlyPage('/clinical/startups')} />

            {/* Lazy Science */}
            <Route path="/science/management" element={managedPage('/science/management', <ManagementScience />)} />
            <Route path="/science/management/scientific-council" element={managedPage('/science/management/scientific-council', <ScientificCouncil />)} />
            <Route path="/science/management/scientific-technical-council" element={managedPage('/science/management/scientific-technical-council', <ScientificTechnicalCouncil />)} />
            <Route path="/science/management/bioethics" element={managedPage('/science/management/bioethics', <Bioethics />)} />
            <Route path="/science/management/young-scientists" element={managedPage('/science/management/young-scientists', <YoungScientists />)} />
            <Route path="/science/management/department" element={managedPage('/science/management/department', <ScienceDepartmentMng />)} />
            <Route path="/science/department" element={managedPage('/science/department', <ScienceDepartment />)} />
            <Route path="/science/events/conferences" element={<Conferences />} />
            <Route path="/science/events/conferences/:id" element={<ConferenceDetail />} />
            <Route path="/science/publications" element={managedPage('/science/publications', <Publications />)} />
            <Route path="/science/publications/journal" element={managedPage('/science/publications/journal', <ScientificJournal />)} />
            <Route path="/science/events" element={managedPage('/science/events', <ScienceEvents />)} />
            <Route path="/science/scholarships" element={managedPage('/science/scholarships', <ScienceScholarships />)} />
            <Route path="/science/labs" element={cmsOnlyPage('/science/labs')} />
            <Route path="/science/labs/anatomy" element={cmsOnlyPage('/science/labs/anatomy')} />
            <Route path="/science/labs/biochemistry" element={cmsOnlyPage('/science/labs/biochemistry')} />
            <Route path="/science/labs/biology" element={cmsOnlyPage('/science/labs/biology')} />
            <Route path="/science/labs/interactive" element={cmsOnlyPage('/science/labs/interactive')} />
            <Route path="/science/labs/computer" element={cmsOnlyPage('/science/labs/computer')} />
            <Route path="/science/labs/study" element={cmsOnlyPage('/science/labs/study')} />
            <Route path="/science/projects" element={managedPage('/science/projects', <Projects />)} />
            <Route path="/cooperation/international-partners" element={cmsOnlyPage('/cooperation/international-partners')} />
            <Route path="/cooperation/local-partners" element={cmsOnlyPage('/cooperation/local-partners')} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contacts" element={cmsOnlyPage('/contacts')} />
            <Route path="/vacancies" element={managedPage('/vacancies', <Vacancies />)} />
            <Route path="/infrastructure/locations" element={cmsOnlyPage('/infrastructure/locations')} />
            <Route path="/infrastructure/partners" element={cmsOnlyPage('/infrastructure/partners')} />
            <Route path="/infrastructure/*" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App
