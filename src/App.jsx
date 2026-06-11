
import React, { lazy, Suspense, useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar1'
import ScrollToTop from './components/ScrollToTop'
import SplashScreen from './components/SplashScreen'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import FounderMessage from './pages/FounderMessage'
import MaterialBaseGallery from './pages/MaterialBaseGallery'
import Footer from './pages/Footer'
import ApplicantBase from './pages/applicant/ApplicantBase'
import smth from './pages/vue-pretend/smth.vue'
import ManagedPageRoute from './components/cms/ManagedPageRoute'


// Lazy imports for university

const NewsHome = lazy(() => import('./pages/university/HomeNewsSection'))
const NewsPage = lazy(() => import('./pages/university/NewsPage'))
const NewsDetail = lazy(() => import('./pages/university/NewsDetail'))
const Mission = lazy(() => import('./pages/university/Mission'))
const Structure = lazy(() => import('./pages/university/Structure'))
const Management = lazy(() => import('./pages/university/Management'))
const NormativeDocs = lazy(() => import('./pages/university/NormativeDocs'))



// University Councils lazy imports
const AcadCouncil = lazy(() => import('./pages/university/сouncils/AcadCouncil'))
const AdmisCommittee = lazy(() => import('./pages/university/сouncils/AdmisCommittee'))
const BioethicsCommittee = lazy(() => import('./pages/university/сouncils/BioethicsCommittee'))
const CommissionSupport = lazy(() => import('./pages/university/сouncils/CommissionSupport'))
const CouncilScients = lazy(() => import('./pages/university/сouncils/CouncilScients'))
const DevCouncil = lazy(() => import('./pages/university/сouncils/DevCouncil'))
const EditBoard = lazy(() => import('./pages/university/сouncils/EditBoard'))
const EduCouncil = lazy(() => import('./pages/university/сouncils/EduCouncil'))
const EmployersCouncil = lazy(() => import('./pages/university/сouncils/EmployersCouncil'))
const ParentsCouncil = lazy(() => import('./pages/university/сouncils/ParentsCouncil'))
const Sciencouncil = lazy(() => import('./pages/university/сouncils/ScienCouncil'))
const UniversityStudentCouncil = lazy(() => import('./pages/university/сouncils/UniversityStudentCouncil'))
const TechnicalCouncil = lazy(() => import('./pages/university/сouncils/TechnicalCouncil'))

// Structure sub
const UniversityMain = lazy(() => import('./pages/university/structure/UniversityMain'))
const InternationalFaculty = lazy(() => import('./pages/university/structure/InternationalFaculty'))
const ITCollege = lazy(() => import('./pages/university/structure/ITCollege'))

// Management sub
const Founder = lazy(() => import('./pages/university/management/Founder'))
const Rectorate = lazy(() => import('./pages/university/management/Rectorate'))
const PublicCouncils = lazy(() => import('./pages/university/management/PublicCouncils'))

// NormativeDocs sub
const KRActs = lazy(() => import('./pages/university/normativeDocs/KRActs'))
const InternalActs = lazy(() => import('./pages/university/normativeDocs/InternalActs'))

// Education lazy imports
const AboutAIT = lazy(() => import('./pages/education/ait/About'))
const LeadershipAIT = lazy(() => import('./pages/education/ait/Leadership'))
const DisciplinesAIT = lazy(() => import('./pages/education/ait/Disciplines'))
const TeachersAIT = lazy(() => import('./pages/education/ait/Teachers'))
const ContactsAIT = lazy(() => import('./pages/education/ait/Contacts'))
const AIT = lazy(() => import('./pages/education/AIT'))
const MFM = lazy(() => import('./pages/education/MFM'))
const ITCollegeEdu = lazy(() => import('./pages/education/ITCollege'))
const Postgrad = lazy(() => import('./pages/education/Postgrad'))
const Center = lazy(() => import('./pages/education/Center'))

// Clinical lazy imports
const DocClinic = lazy(() => import('./pages/clinical/DocClinic'))
const DocHospital = lazy(() => import('./pages/clinical/DocHospital'))
const SimulationCenter = lazy(() => import('./pages/clinical/SimulationCenter'))
const Startups = lazy(() => import('./pages/clinical/Startups'))

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
const Labs = lazy(() => import('./pages/science/Labs'))
const Anatomy = lazy(() => import('./pages/science/labs/Anatomy'))
const Biochemistry = lazy(() => import('./pages/science/labs/Biochemistry'))
const Chemistry = lazy(() => import('./pages/science/labs/Chemistry'))
const Biology = lazy(() => import('./pages/science/labs/Biology'))
const Interactive = lazy(() => import('./pages/science/labs/Interactive'))
const Computer = lazy(() => import('./pages/science/labs/Computer'))
const Study = lazy(() => import('./pages/science/labs/Study'))
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

// Cooperation lazy imports
const InternationalPartners = lazy(() => import('./pages/cooperation/InternationalPartners'))
const LocalPartners = lazy(() => import('./pages/cooperation/LocalPartners'))

// News, Contacts, Vacancies lazy imports
const News = lazy(() => import('./pages/News'))
const Contacts = lazy(() => import('./pages/Contacts'))
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

// QualityMaganagementSystem lazy imports
const QualityMonitoring = lazy(() => import('./pages/university/qualitysystem/QualityMonitoring'))
const QualityPolity = lazy(() => import('./pages/university/qualitysystem/QualityPolity'))

// Infrastructure lazy imports
const Locations = lazy(() => import('./pages/infrastructure/Locations'))
const Partners = lazy(() => import('./pages/infrastructure/Partners'))

// Education MFM lazy imports
const Aboutmfm = lazy(() => import('./pages/education/mfm/About'))
const Dean = lazy(() => import('./pages/education/mfm/Dekanat/Dean'))
const Curriculum = lazy(() => import('./pages/education/mfm/Dekanat/Curriculum'))
const DepartmentsMFM = lazy(() => import('./pages/education/mfm/Dekanat/Departments'))
const FiveYears = lazy(() => import('./pages/education/mfm/Programs/FiveYears'))
const SixYears = lazy(() => import('./pages/education/mfm/Programs/SixYears'))

// Education IT College lazy imports
const GeneralDepartaments = lazy(() => import('./pages/education/itCollege/Departments/General'))
const DepartamentsInformation = lazy(() => import('./pages/education/itCollege/Departments/Information'))
const DiplomComSients = lazy(() => import('./pages/education/itCollege/Specialties/DiplomComScience'))
const DiplomMobComputing = lazy(() => import('./pages/education/itCollege/Specialties/DiplomMobComputing'))
const DiplomMultiApplications = lazy(() => import('./pages/education/itCollege/Specialties/DiplomMultiApplications'))
const DirectoritCollage = lazy(() => import('./pages/education/itCollege/Director'))
const DoubleDiploma = lazy(() => import('./pages/education/itCollege/DoubleDiploma'))
const PedagogicalCouncil = lazy(() => import('./pages/education/itCollege/PedagogicalCouncil'))



// Education Postgrad lazy imports 
const Internship = lazy(() => import('./pages/education/postgrad/Internship'))
const Phd = lazy(() => import('./pages/education/postgrad/PhD'))
const Postgraduate = lazy(() => import('./pages/education/postgrad/Postgraduate'))
const Residency = lazy(() => import('./pages/education/postgrad/Residency'))
const Universities = lazy(() => import('./pages/university/cooperation/Universities'))
const Clinics = lazy(() => import('./pages/university/cooperation/Clinics'))

// Education Center lazy imports
const AboutCenterEducation = lazy(() => import('./pages/education/center/About'))




















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
    <ManagedPageRoute path={path} fallback={fallback} />
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
            <Route path="/about" element={managedPage('/about', <About />)} />
            <Route path="/services" element={managedPage('/services', <Services />)} />
            <Route path="/contact" element={managedPage('/contact', <Contact />)} />
            <Route path='/founderMessege' element={managedPage('/founderMessege', <FounderMessage />)} />
            <Route path='/MaterialBaseGallery' element={managedPage('/MaterialBaseGallery', <MaterialBaseGallery />)} />
            <Route path='/news/NewsHome' element={<NewsHome />} />
            <Route path="/press/news/:id" element={<NewsDetail />} />
            <Route path="/university/mission" element={managedPage('/university/mission', <Mission />)} />
            <Route path="/university/structure" element={managedPage('/university/structure', <Structure />)} />
            <Route path="/university/structure/university-main" element={managedPage('/university/structure/university-main', <UniversityMain />)} />
            <Route path="/university/structure/international-faculty" element={managedPage('/university/structure/international-faculty', <InternationalFaculty />)} />
            <Route path="/university/structure/it-college" element={managedPage('/university/structure/it-college', <ITCollege />)} />
            <Route path="/university/management" element={managedPage('/university/management', <Management />)} />
            <Route path="/university/management/founder" element={managedPage('/university/management/founder', <Founder />)} />
            <Route path="/university/management/rectorate" element={managedPage('/university/management/rectorate', <Rectorate />)} />
            <Route path="/university/management/public-councils" element={managedPage('/university/management/public-councils', <PublicCouncils />)} />
            <Route path="/university/normative-docs" element={managedPage('/university/normative-docs', <NormativeDocs />)} />
            <Route path="/university/normative-docs/kr-acts" element={managedPage('/university/normative-docs/kr-acts', <KRActs />)} />
            <Route path="/university/normative-docs/internal-acts" element={managedPage('/university/normative-docs/internal-acts', <InternalActs />)} />
            <Route path="/university/councils/academic-council" element={managedPage('/university/councils/academic-council', <AcadCouncil />)} />
            <Route path="/university/councils/admissions-committee" element={managedPage('/university/councils/admissions-committee', <AdmisCommittee />)} />
            <Route path="/university/councils/bioethics-committee" element={managedPage('/university/councils/bioethics-committee', <BioethicsCommittee />)} />
            <Route path="/university/councils/commission-support" element={managedPage('/university/councils/commission-support', <CommissionSupport />)} />
            <Route path="/university/councils/council-scients" element={managedPage('/university/councils/council-scients', <CouncilScients />)} />
            <Route path="/university/councils/development-council" element={managedPage('/university/councils/development-council', <DevCouncil />)} />
            <Route path="/university/councils/editorial-board" element={managedPage('/university/councils/editorial-board', <EditBoard />)} />
            <Route path="/university/councils/educational-council" element={managedPage('/university/councils/educational-council', <EduCouncil />)} />
            <Route path="/university/councils/employers-council" element={managedPage('/university/councils/employers-council', <EmployersCouncil />)} />
            <Route path="/university/councils/scientific-council" element={managedPage('/university/councils/scientific-council', <Sciencouncil />)} />
            <Route path="/university/councils/student-councils" element={managedPage('/university/councils/student-councils', <UniversityStudentCouncil />)} />
            <Route path="/university/councils/technical-council" element={managedPage('/university/councils/technical-council', <TechnicalCouncil />)} />
            <Route path="/university/councils/parents-council" element={managedPage('/university/councils/parents-council', <ParentsCouncil />)} />
            <Route path="/university/quality-management-system/quality-monitoring" element={managedPage('/university/quality-management-system/quality-monitoring', <QualityMonitoring />)} />
            <Route path="/university/quality-management-system/quality-policy" element={managedPage('/university/quality-management-system/quality-policy', <QualityPolity />)} />



            {/* Lazy Education */}
            <Route path="/education/ait" element={managedPage('/education/ait', <AIT />)} />
            <Route path="/education/ait/about" element={managedPage('/education/ait/about', <AboutAIT />)} />
            <Route path="/education/ait/leadership" element={managedPage('/education/ait/leadership', <LeadershipAIT />)} />
            <Route path="/education/ait/disciplines" element={managedPage('/education/ait/disciplines', <DisciplinesAIT />)} />
            <Route path="/education/ait/teachers" element={managedPage('/education/ait/teachers', <TeachersAIT />)} />
            <Route path="/education/ait/contacts" element={managedPage('/education/ait/contacts', <ContactsAIT />)} />
            <Route path="/education/mfm" element={managedPage('/education/mfm', <MFM />)} />
            <Route path="/education/it-college" element={managedPage('/education/it-college', <ITCollegeEdu />)} />
            <Route path="/education/postgrad" element={managedPage('/education/postgrad', <Postgrad />)} />
            <Route path="/education/center" element={managedPage('/education/center', <Center />)} />
            <Route path="/education/mfm/about" element={managedPage('/education/mfm/about', <Aboutmfm />)} />
            <Route path="/education/mfm/dekanat/dean" element={managedPage('/education/mfm/dekanat/dean', <Dean />)} />
            <Route path="/education/mfm/dekanat/curriculum" element={managedPage('/education/mfm/dekanat/curriculum', <Curriculum />)} />
            <Route path="/education/mfm/dekanat/departments" element={managedPage('/education/mfm/dekanat/departments', <DepartmentsMFM />)} />
            <Route path="/education/mfm/programs/five-years" element={managedPage('/education/mfm/programs/five-years', <FiveYears />)} />
            <Route path="/education/mfm/programs/six-years" element={managedPage('/education/mfm/programs/six-years', <SixYears />)} />
            <Route path="/education/it-college/departments/general" element={managedPage('/education/it-college/departments/general', <GeneralDepartaments />)} />
            <Route path="/education/it-college/departments/information" element={managedPage('/education/it-college/departments/information', <DepartamentsInformation />)} />
            <Route path="/education/it-college/specialties/diplom-computational-sciences" element={managedPage('/education/it-college/specialties/diplom-computational-sciences', <DiplomComSients />)} />
            <Route path="/education/it-college/specialties/diplom-mobile-computing" element={managedPage('/education/it-college/specialties/diplom-mobile-computing', <DiplomMobComputing />)} />
            <Route path="/education/it-college/specialties/diplom-multimedia-applications" element={managedPage('/education/it-college/specialties/diplom-multimedia-applications', <DiplomMultiApplications />)} />
            <Route path="/education/it-college/director" element={managedPage('/education/it-college/director', <DirectoritCollage />)} />
            <Route path="/education/it-college/double-diploma" element={managedPage('/education/it-college/double-diploma', <DoubleDiploma />)} />
            <Route path="/education/it-college/pedagogical-council" element={managedPage('/education/it-college/pedagogical-council', <PedagogicalCouncil />)} />

            <Route path="/education/postgrad/internship" element={managedPage('/education/postgrad/internship', <Internship />)} />
            <Route path="/education/postgrad/phd" element={managedPage('/education/postgrad/phd', <Phd />)} />
            <Route path="/education/postgrad/postgraduate" element={managedPage('/education/postgrad/postgraduate', <Postgraduate />)} />
            <Route path="/education/postgrad/residency" element={managedPage('/education/postgrad/residency', <Residency />)} />
            <Route path="/education/center/about" element={managedPage('/education/center/about', <AboutCenterEducation />)} />




            <Route path="/clinical/doc-clinic" element={managedPage('/clinical/doc-clinic', <DocClinic />)} />
            <Route path="/clinical/doc-hospital" element={managedPage('/clinical/doc-hospital', <DocHospital />)} />
            <Route path="/clinical/simulation-center" element={managedPage('/clinical/simulation-center', <SimulationCenter />)} />
            <Route path="/clinical/startups" element={managedPage('/clinical/startups', <Startups />)} />

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
            {/* <Route path="/science/centers" element={<Biology />} /> */}
            <Route path="/science/labs" element={managedPage('/science/labs', <Labs />)} />
            <Route path="/science/labs/anatomy" element={managedPage('/science/labs/anatomy', <Anatomy />)} />
            <Route path="/science/labs/biochemistry" element={managedPage('/science/labs/biochemistry', <Biochemistry />)} />
            {/* <Route path="/science/labs/chemistry" element={<Chemistry />} /> */}
            <Route path="/science/labs/biology" element={managedPage('/science/labs/biology', <Biology />)} />
            <Route path="/science/labs/interactive" element={managedPage('/science/labs/interactive', <Interactive />)} />
            <Route path="/science/labs/computer" element={managedPage('/science/labs/computer', <Computer />)} />
            <Route path="/science/labs/study" element={managedPage('/science/labs/study', <Study />)} />
            <Route path="/science/projects" element={managedPage('/science/projects', <Projects />)} />
            <Route path="/cooperation/international-partners" element={managedPage('/cooperation/international-partners', <Universities />)} />
            <Route path="/cooperation/local-partners" element={managedPage('/cooperation/local-partners', <Clinics />)} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contacts" element={managedPage('/contacts', <Contacts />)} />
            <Route path="/vacancies" element={managedPage('/vacancies', <Vacancies />)} />
            <Route path="/infrastructure/locations" element={managedPage('/infrastructure/locations', <Locations />)} />
            <Route path="/infrastructure/partners" element={managedPage('/infrastructure/partners', <Partners />)} />
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
