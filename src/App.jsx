
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
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/founderMessege' element={<FounderMessage />} />
            <Route path='/MaterialBaseGallery' element={<MaterialBaseGallery />} />
            <Route path='/news/NewsHome' element={<NewsHome />} />
            <Route path="/press/news/:id" element={<NewsDetail />} />
            <Route path="/university/mission" element={<Mission />} />
            <Route path="/university/structure" element={<Structure />} />
            <Route path="/university/structure/university-main" element={<UniversityMain />} />
            <Route path="/university/structure/international-faculty" element={<InternationalFaculty />} />
            <Route path="/university/structure/it-college" element={<ITCollege />} />
            <Route path="/university/management" element={<Management />} />
            <Route path="/university/management/founder" element={<Founder />} />
            <Route path="/university/management/rectorate" element={<Rectorate />} />
            <Route path="/university/management/public-councils" element={<PublicCouncils />} />
            <Route path="/university/normative-docs" element={<NormativeDocs />} />
            <Route path="/university/normative-docs/kr-acts" element={<KRActs />} />
            <Route path="/university/normative-docs/internal-acts" element={<InternalActs />} />
            <Route path="/university/councils/academic-council" element={<AcadCouncil />} />
            <Route path="/university/councils/admissions-committee" element={<AdmisCommittee />} />
            <Route path="/university/councils/bioethics-committee" element={<BioethicsCommittee />} />
            <Route path="/university/councils/commission-support" element={<CommissionSupport />} />
            <Route path="/university/councils/council-scients" element={<CouncilScients />} />
            <Route path="/university/councils/development-council" element={<DevCouncil />} />
            <Route path="/university/councils/editorial-board" element={<EditBoard />} />
            <Route path="/university/councils/educational-council" element={<EduCouncil />} />
            <Route path="/university/councils/employers-council" element={<EmployersCouncil />} />
            <Route path="/university/councils/scientific-council" element={<Sciencouncil />} />
            <Route path="/university/councils/student-councils" element={<UniversityStudentCouncil />} />
            <Route path="/university/councils/technical-council" element={<TechnicalCouncil />} />
            <Route path="/university/councils/parents-council" element={<ParentsCouncil />} />
            <Route path="/university/quality-management-system/quality-monitoring" element={<QualityMonitoring />} />
            <Route path="/university/quality-management-system/quality-policy" element={<QualityPolity />} />



            {/* Lazy Education */}
            <Route path="/education/ait" element={<AIT />} />
            <Route path="/education/ait/about" element={<AboutAIT />} />
            <Route path="/education/ait/leadership" element={<LeadershipAIT />} />
            <Route path="/education/ait/disciplines" element={<DisciplinesAIT />} />
            <Route path="/education/ait/teachers" element={<TeachersAIT />} />
            <Route path="/education/ait/contacts" element={<ContactsAIT />} />
            <Route path="/education/mfm" element={<MFM />} />
            <Route path="/education/it-college" element={<ITCollegeEdu />} />
            <Route path="/education/postgrad" element={<Postgrad />} />
            <Route path="/education/center" element={<Center />} />
            <Route path="/education/mfm/about" element={<Aboutmfm />} />
            <Route path="/education/mfm/dekanat/dean" element={<Dean />} />
            <Route path="/education/mfm/dekanat/curriculum" element={<Curriculum />} />
            <Route path="/education/mfm/dekanat/departments" element={<DepartmentsMFM />} />
            <Route path="/education/mfm/programs/five-years" element={<FiveYears />} />
            <Route path="/education/mfm/programs/six-years" element={<SixYears />} />
            <Route path="/education/it-college/departments/general" element={<GeneralDepartaments />} />
            <Route path="/education/it-college/departments/information" element={<DepartamentsInformation />} />
            <Route path="/education/it-college/specialties/diplom-computational-sciences" element={<DiplomComSients />} />
            <Route path="/education/it-college/specialties/diplom-mobile-computing" element={<DiplomMobComputing />} />
            <Route path="/education/it-college/specialties/diplom-multimedia-applications" element={<DiplomMultiApplications />} />
            <Route path="/education/it-college/director" element={<DirectoritCollage />} />
            <Route path="/education/it-college/double-diploma" element={<DoubleDiploma />} />
            <Route path="/education/it-college/pedagogical-council" element={<PedagogicalCouncil />} />

            <Route path="/education/postgrad/internship" element={<Internship />} />
            <Route path="/education/postgrad/phd" element={<Phd />} />
            <Route path="/education/postgrad/postgraduate" element={<Postgraduate />} />
            <Route path="/education/postgrad/residency" element={<Residency />} />
            <Route path="/education/center/about" element={<AboutCenterEducation />} />




            <Route path="/clinical/doc-clinic" element={<DocClinic />} />
            <Route path="/clinical/doc-hospital" element={<DocHospital />} />
            <Route path="/clinical/simulation-center" element={<SimulationCenter />} />
            <Route path="/clinical/startups" element={<Startups />} />

            {/* Lazy Science */}
            <Route path="/science/management" element={<ManagementScience />} />
            <Route path="/science/management/scientific-council" element={<ScientificCouncil />} />
            <Route path="/science/management/scientific-technical-council" element={<ScientificTechnicalCouncil />} />
            <Route path="/science/management/bioethics" element={<Bioethics />} />
            <Route path="/science/management/young-scientists" element={<YoungScientists />} />
            <Route path="/science/management/department" element={<ScienceDepartmentMng />} />
            <Route path="/science/department" element={<ScienceDepartment />} />
            <Route path="/science/events/conferences" element={<Conferences />} />
            <Route path="/science/events/conferences/:id" element={<ConferenceDetail />} />
            <Route path="/science/publications" element={<Publications />} />
            <Route path="/science/publications/journal" element={<ScientificJournal />} />
            <Route path="/science/events" element={<ScienceEvents />} />
            <Route path="/science/scholarships" element={<ScienceScholarships />} />
            {/* <Route path="/science/centers" element={<Biology />} /> */}
            <Route path="/science/labs" element={<Labs />} />
            <Route path="/science/labs/anatomy" element={<Anatomy />} />
            <Route path="/science/labs/biochemistry" element={<Biochemistry />} />
            {/* <Route path="/science/labs/chemistry" element={<Chemistry />} /> */}
            <Route path="/science/labs/biology" element={<Biology />} />
            <Route path="/science/labs/interactive" element={<Interactive />} />
            <Route path="/science/labs/computer" element={<Computer />} />
            <Route path="/science/labs/study" element={<Study />} />
            <Route path="/science/projects" element={<Projects />} />
            <Route path="/cooperation/international-partners" element={<Universities />} />
            <Route path="/cooperation/local-partners" element={<Clinics />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/vacancies" element={<Vacancies />} />
            <Route path="/infrastructure/locations" element={<Locations />} />
            <Route path="/infrastructure/partners" element={<Partners />} />
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