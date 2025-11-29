import React, { lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import FounderMessage from './pages/FounderMessage'
import MaterialBaseGallery from './pages/MaterialBaseGallery'
import Footer from './pages/Footer'

// Lazy imports for university

const NewsHome = lazy(() => import('./pages/university/HomeNewsSection'))
const NewsPage = lazy(() => import('./pages/university/NewsPage'))
const NewsDetail = lazy(() => import('./pages/university/NewsDetail'))
const Appeal = lazy(() => import('./pages/university/Appeal'))
const History = lazy(() => import('./pages/university/History'))
const Mission = lazy(() => import('./pages/university/Mission'))
const Videos = lazy(() => import('./pages/university/Videos'))
const Vacancies = lazy(() => import('./pages/university/Vacancies'))
const UniversityContacts = lazy(() => import('./pages/university/Contacts'))
const Structure = lazy(() => import('./pages/university/Structure'))
const Management = lazy(() => import('./pages/university/Management'))
const Departments = lazy(() => import('./pages/university/Departments'))
const Accreditation = lazy(() => import('./pages/university/Accreditation'))
const FoundingDocs = lazy(() => import('./pages/university/FoundingDocs'))
const NormativeDocs = lazy(() => import('./pages/university/NormativeDocs'))
const Cooperation = lazy(() => import('./pages/university/Cooperation'))
const Brandbook = lazy(() => import('./pages/university/Brandbook'))

// Structure sub
const UniversityMain = lazy(() => import('./pages/university/structure/UniversityMain'))
const InternationalFaculty = lazy(() => import('./pages/university/structure/InternationalFaculty'))
const ITCollege = lazy(() => import('./pages/university/structure/ITCollege'))
const BusinessSchool = lazy(() => import('./pages/university/structure/BusinessSchool'))

// Management sub
const Founder = lazy(() => import('./pages/university/management/Founder'))
const President = lazy(() => import('./pages/university/management/President'))
const Rectorate = lazy(() => import('./pages/university/management/Rectorate'))
const PublicCouncils = lazy(() => import('./pages/university/management/PublicCouncils'))

// Departments sub
const FinancialDept = lazy(() => import('./pages/university/departments/FinancialDept'))
const EducationalDept = lazy(() => import('./pages/university/departments/EducationalDept'))
const ManagementDept = lazy(() => import('./pages/university/departments/ManagementDept'))
const HRDept = lazy(() => import('./pages/university/departments/HRDept'))
const QualityDept = lazy(() => import('./pages/university/departments/QualityDept'))
const ScienceDept = lazy(() => import('./pages/university/departments/ScienceDept'))
const InternationalDept = lazy(() => import('./pages/university/departments/InternationalDept'))
const StudentDept = lazy(() => import('./pages/university/departments/StudentDept'))
const CareerCenter = lazy(() => import('./pages/university/departments/CareerCenter'))

// Accreditation sub
const NationalAcc = lazy(() => import('./pages/university/accreditation/National'))
const InstitutionalAcc = lazy(() => import('./pages/university/accreditation/Institutional'))
const ProgramAcc = lazy(() => import('./pages/university/accreditation/Program'))
const InternationalAcc = lazy(() => import('./pages/university/accreditation/International'))

// FoundingDocs sub
const Charter = lazy(() => import('./pages/university/foundingDocs/Charter'))
const Licenses = lazy(() => import('./pages/university/foundingDocs/Licenses'))
const Acts = lazy(() => import('./pages/university/foundingDocs/Acts'))
const StrategicDocs = lazy(() => import('./pages/university/foundingDocs/StrategicDocs'))

// NormativeDocs sub
const KRActs = lazy(() => import('./pages/university/normativeDocs/KRActs'))
const InternalActs = lazy(() => import('./pages/university/normativeDocs/InternalActs'))
const QualitySystem = lazy(() => import('./pages/university/normativeDocs/QualitySystem'))


// Cooperation sub
const UniversitiesCoop = lazy(() => import('./pages/university/cooperation/Universities'))
const ClinicsCoop = lazy(() => import('./pages/university/cooperation/Clinics'))


// Councils imports
const DevCouncil = lazy(() => import('./pages/university/Сouncils/DevCouncil'))
const AcadCouncil = lazy(() => import('./pages/university/Сouncils/AcadCouncil'))
const CommissionSupport = lazy(() => import('./pages/university/Сouncils/CommissionSupport'))
const BioethicsCommittee = lazy(() => import('./pages/university/Сouncils/BioethicsCommittee'))
const EmployersCouncil = lazy(() => import('./pages/university/Сouncils/EmployersCouncil'))
const ParentsCouncil = lazy(() => import('./pages/university/Сouncils/ParentsCouncil'))
const StudentCouncil = lazy(() => import('./pages/university/Сouncils/StudentCouncil'))
const EduCouncils = lazy(() => import('./pages/university/Сouncils/EduCouncil'))
const ScienCouncil = lazy(() => import('./pages/university/Сouncils/ScienCouncil'))
const EditBoard = lazy(() => import('./pages/university/Сouncils/EditBoard'))
const AdmisCommittee = lazy(() => import('./pages/university/Сouncils/AdmisCommittee'))
const CouncilScients = lazy(() => import('./pages/university/Сouncils/CouncilScients'))
const TechnicalCouncil = lazy(() => import('./pages/university/Сouncils/TechnicalCouncil'))

// Srategic Docs imports
const StrategicDevelopPlans = lazy(() => import('./pages/university/StrategicDocs/StrategicDevelopPlans'))
const ComprehensivePlans = lazy(() => import('./pages/university/StrategicDocs/ComprehensivePlans'))
const AccountingPolicy = lazy(() => import('./pages/university/StrategicDocs/AccountingPolicy'))
const HRPolicy = lazy(() => import('./pages/university/StrategicDocs/HR-Policy'))
const StrategicVision = lazy(() => import('./pages/university/StrategicDocs/StrategicVision'))
const Posision = lazy(() => import('./pages/university/StrategicDocs/position'))

// Quality Management System imports
const QualityPolity = lazy(() => import('./pages/university/QualityManagSystem/QualityPolity'))
const QualityMonitoring = lazy(() => import('./pages/university/QualityManagSystem/QualityMonitoring'))

// Education lazy imports
const AboutAIT = lazy(() => import('./pages/education/ait/About'))
const LeadershipAIT = lazy(() => import('./pages/education/ait/Leadership'))
const DisciplinesAIT = lazy(() => import('./pages/education/ait/Disciplines'))
const TeachersAIT = lazy(() => import('./pages/education/ait/Teachers'))
const ContactsAIT = lazy(() => import('./pages/education/ait/Contacts'))
const AIT = lazy(() => import('./pages/education/AIT'))
const MFM = lazy(() => import('./pages/education/MFM'))
const ITCollegeEdu = lazy(() => import('./pages/education/ITCollege'))
const BusinessSchoolEdu = lazy(() => import('./pages/education/BusinessSchool'))
const Postgrad = lazy(() => import('./pages/education/Postgrad'))
const Center = lazy(() => import('./pages/education/Center'))
const Director = lazy(() => import('./pages/education/itCollege/Director'))
const General = lazy(() => import('./pages/education/itCollege/Departments/General'))
const Information = lazy(() => import('./pages/education/itCollege/Departments/Information'))
const DiplomComScience = lazy(() => import('./pages/education/itCollege/Specialties/DiplomComScience'))
const DiplomMobComputing = lazy(() => import('./pages/education/itCollege/Specialties/DiplomMobComputing'))
const DiplomMultiApplications = lazy(() => import('./pages/education/itCollege/Specialties/DiplomMultiApplications'))
const AboutITCollege = lazy(() => import('./pages/education/itCollege/About'))
const ContactsITCollage = lazy(() => import('./pages/education/itCollege/contacts'))
const DoubleDiploma = lazy(() => import('./pages/education/itCollege/DoubleDiploma'))
const Lincoln = lazy(() => import('./pages/education/itCollege/Lincoln'))
const PedagogicalCouncil = lazy(() => import('./pages/education/itCollege/PedagogicalCouncil'))
const Curriculum = lazy(() => import('./pages/education/mfm/Dekanat/Curriculum'))
const Dean = lazy(() => import('./pages/education/mfm/Dekanat/Dean'))
const DepartmentsMFM = lazy(() => import('./pages/education/mfm/Dekanat/Departments'))
const FiveYears = lazy(() => import('./pages/education/mfm/Programs/FiveYears'))
const SixYears = lazy(() => import('./pages/education/mfm/Programs/SixYears'))
const AboutMFM = lazy(() => import('./pages/education/mfm/About'))
const ContactsMFM = lazy(() => import('./pages/education/mfm/Contacts'))
const FutureLeaders = lazy(() => import('./pages/education/businessSchool/Programs/FutureLeaders'))
const OlderLeaders = lazy(() => import('./pages/education/businessSchool/Programs/OlderLeaders'))
const SmartikLeaders = lazy(() => import('./pages/education/businessSchool/Programs/smartik'))
const YoungLeaders = lazy(() => import('./pages/education/businessSchool/Programs/YoungLeaders'))
const AboutBusinessSchool = lazy(() => import('./pages/education/businessSchool/About'))
const ContactsBusinessSchool = lazy(() => import('./pages/education/businessSchool/Contacts'))
const Managers = lazy(() => import('./pages/education/businessSchool/Managers'))
const Trainers = lazy(() => import('./pages/education/businessSchool/Trainers'))
const DirectorBusinessSchool = lazy(() => import('./pages/education/businessSchool/Director'))
const CoursesPostgrad = lazy(() => import('./pages/education/postgrad/Courses'))
const InternshipPostgrad = lazy(() => import('./pages/education/postgrad/Internship'))
const PhD = lazy(() => import('./pages/education/postgrad/PhD'))
const Postgraduate = lazy(() => import('./pages/education/postgrad/Postgraduate'))
const Residency = lazy(() => import('./pages/education/postgrad/Residency'))

const AboutCenter = lazy(() => import('./pages/education/center/About'))
const ContactsCenter = lazy(() => import('./pages/education/center/Contacts'))
const ProgramsCenter = lazy(() => import('./pages/education/center/Programs'))
const DirectorCenter = lazy(() => import('./pages/education/center/Director'))
const ManagersCenter = lazy(() => import('./pages/education/center/Managers'))




// Clinical lazy imports
const ClinicalBase = lazy(() => import('./pages/clinical/ClinicalBase'))
const Lazmed = lazy(() => import('./pages/clinical/Lazmed'))
const DordoiOphthalmic = lazy(() => import('./pages/clinical/DordoiOphthalmic'))
const DocClinic = lazy(() => import('./pages/clinical/DocClinic'))
const DocHospital = lazy(() => import('./pages/clinical/DocHospital'))
const Agreements = lazy(() => import('./pages/clinical/Agreements'))

// Science lazy imports
const ScienceMain = lazy(() => import('./pages/science/ScienceMain'))
const ScientificCouncil = lazy(() => import('./pages/science/management/ScientificCouncil'))
const ScientificTechnicalCouncil = lazy(() => import('./pages/science/management/ScientificTechnicalCouncil'))
const Bioethics = lazy(() => import('./pages/science/management/Bioethics'))
const YoungScientists = lazy(() => import('./pages/science/management/YoungScientists'))
const ScienceDepartmentMng = lazy(() => import('./pages/science/management/Department'))
const ScienceDepartment = lazy(() => import('./pages/science/Department'))
const Professors = lazy(() => import('./pages/science/Professors'))
const Publications = lazy(() => import('./pages/science/Publications'))
const ScientificJournal = lazy(() => import('./pages/science/ScientificJournal'))
const Periodicals = lazy(() => import('./pages/science/Periodicals'))
const ScienceEvents = lazy(() => import('./pages/science/Events'))
const Library = lazy(() => import('./pages/science/Library'))
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
const MasterClasses = lazy(() => import('./pages/science/events/MasterClasses'))
const RoundTables = lazy(() => import('./pages/science/events/RoundTables'))
const Clubs = lazy(() => import('./pages/science/student/Clubs'))
const StudentConferences = lazy(() => import('./pages/science/student/StudentConferences'))
const CurrentProjects = lazy(() => import('./pages/science/projects/CurrentProjects'))
const Grants = lazy(() => import('./pages/science/projects/Grants'))
const International = lazy(() => import('./pages/science/projects/International'))
const SeanPark = lazy(() => import('./pages/science/professors/SeanPark'))
const Pendharkar = lazy(() => import('./pages/science/professors/Pendharkar'))
const Potapova = lazy(() => import('./pages/science/professors/Potapova'))
const Osmonov = lazy(() => import('./pages/science/professors/Osmonov'))
const Erkebaev = lazy(() => import('./pages/science/professors/Erkebaev'))
const Madaminov = lazy(() => import('./pages/science/professors/Madaminov'))
const Bilgaziev = lazy(() => import('./pages/science/professors/Bilgaziev'))
const Kubatov = lazy(() => import('./pages/science/professors/Kubatov'))
const Shaltakova = lazy(() => import('./pages/science/professors/Shaltakova'))
const Kachibek = lazy(() => import('./pages/science/professors/Kachibek'))

// Student lazy imports
const StudentCommunities = lazy(() => import('./pages/student/communities/StudentCommunities'))
const Resources = lazy(() => import('./pages/student/resources/Resources'))
const Schedules = lazy(() => import('./pages/student/schedules/Schedules'))
const Conditions = lazy(() => import('./pages/student/conditions/Conditions'))

// Applicant lazy imports
const ApplicantBase = lazy(() => import('./pages/applicant/ApplicantBase'))
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
const Transfer = lazy(() => import('./pages/applicant/Transfer'))
const Scholarships = lazy(() => import('./pages/applicant/Scholarships'))
const CareerGuidance = lazy(() => import('./pages/applicant/CareerGuidance'))

// Event pages lazy imports
const TeachersDay = lazy(() => import('./pages/applicant/events/TeachersDay'))
const StateLanguageDay = lazy(() => import('./pages/applicant/events/StateLanguageDay'))
const KoreanCenter = lazy(() => import('./pages/applicant/events/KoreanCenter'))
const MedicalMission = lazy(() => import('./pages/applicant/events/MedicalMission'))
const Graduation2025 = lazy(() => import('./pages/applicant/events/Graduation2025'))
const DiplomaAward = lazy(() => import('./pages/applicant/events/DiplomaAward'))

// News pages lazy imports
const EurasianCongress = lazy(() => import('./pages/applicant/news/EurasianCongress'))
const ITSecurityMeeting = lazy(() => import('./pages/applicant/news/ITSecurityMeeting'))
const PaiChaiVisit = lazy(() => import('./pages/applicant/news/PaiChaiVisit'))

const KnowledgeKarakol = lazy(() => import('./pages/applicant/KnowledgeKarakol'))
const KnowledgeOsh = lazy(() => import('./pages/applicant/KnowledgeOsh'))
const ApplicantCooperation = lazy(() => import('./pages/applicant/Cooperation'))
const Meeting = lazy(() => import('./pages/applicant/Meeting'))
const Infrastructure = lazy(() => import('./pages/applicant/Infrastructure'))

// Dealer countries lazy imports
const India = lazy(() => import('./pages/applicant/countries/India'))
const Pakistan = lazy(() => import('./pages/applicant/countries/Pakistan'))
const UzbekistanCountry = lazy(() => import('./pages/applicant/countries/Uzbekistan'))
const Software = lazy(() => import('./pages/applicant/extrapages/Software'))
const MobileDev = lazy(() => import('./pages/applicant/extrapages/MobileDev'))
const MultimediaDev = lazy(() => import('./pages/applicant/extrapages/MultimediaDev'))
const Dicipline = lazy(() => import('./pages/applicant/extrapages/Dicipline'))
const GeneralMedFive = lazy(() => import('./pages/applicant/extrapages/GeneralMedFive'))
const GeneralMedSix = lazy(() => import('./pages/applicant/extrapages/GeneralMedSix'))
const RequiredDoc = lazy(() => import('./pages/applicant/extrapages/RequiredDoc'))
const OnlineReg = lazy(() => import('./pages/applicant/extrapages/OnlineReg'))

// Infrastructure lazy imports
const Locations = lazy(() => import('./pages/infrastructure/Locations'))
const Partners = lazy(() => import('./pages/infrastructure/Partners'))

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/news' element={<NewsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/founderMessege' element={<FounderMessage />} />
          <Route path='/MaterialBaseGallery' element={<MaterialBaseGallery />} />
          { }
          <Route path='/news/NewsHome' element={<NewsHome />} />
          <Route path="/university/news/:id" element={<NewsDetail />} />
          <Route path="/university/appeal" element={<Appeal />} />
          <Route path="/university/history" element={<History />} />
          <Route path="/university/mission" element={<Mission />} />
          <Route path="/university/videos" element={<Videos />} />
          <Route path="/university/vacancies" element={<Vacancies />} />
          <Route path="/university/contacts" element={<UniversityContacts />} />
          <Route path="/university/structure" element={<Structure />} />
          <Route path="/university/structure/university-main" element={<UniversityMain />} />
          <Route path="/university/structure/international-faculty" element={<InternationalFaculty />} />
          <Route path="/university/structure/it-college" element={<ITCollege />} />
          <Route path="/university/structure/business-school" element={<BusinessSchool />} />
          <Route path="/university/management" element={<Management />} />
          <Route path="/university/management/founder" element={<Founder />} />
          <Route path="/university/management/president" element={<President />} />
          <Route path="/university/management/rectorate" element={<Rectorate />} />
          <Route path="/university/management/public-councils" element={<PublicCouncils />} />
          <Route path="/university/departments" element={<Departments />} />
          <Route path="/university/departments/financial" element={<FinancialDept />} />
          <Route path="/university/departments/educational" element={<EducationalDept />} />
          <Route path="/university/departments/management" element={<ManagementDept />} />
          <Route path="/university/departments/hr" element={<HRDept />} />
          <Route path="/university/departments/quality" element={<QualityDept />} />
          <Route path="/university/departments/science" element={<ScienceDept />} />
          <Route path="/university/departments/international" element={<InternationalDept />} />
          <Route path="/university/departments/student" element={<StudentDept />} />
          <Route path="/university/departments/career" element={<CareerCenter />} />
          <Route path="/university/accreditation" element={<Accreditation />} />
          <Route path="/university/accreditation/national" element={<NationalAcc />} />
          <Route path="/university/accreditation/institutional" element={<InstitutionalAcc />} />
          <Route path="/university/accreditation/program" element={<ProgramAcc />} />
          <Route path="/university/accreditation/international" element={<InternationalAcc />} />
          <Route path="/university/founding-docs" element={<FoundingDocs />} />
          <Route path="/university/founding-docs/charter" element={<Charter />} />
          <Route path="/university/founding-docs/licenses" element={<Licenses />} />
          <Route path="/university/founding-docs/acts" element={<Acts />} />
          <Route path="/university/founding-docs/strategic" element={<StrategicDocs />} />
          <Route path="/university/normative-docs" element={<NormativeDocs />} />
          <Route path="/university/normative-docs/kr-acts" element={<KRActs />} />
          <Route path="/university/normative-docs/internal-acts" element={<InternalActs />} />
          <Route path="/university/normative-docs/quality-system" element={<QualitySystem />} />
          <Route path="/university/cooperation" element={<Cooperation />} />
          <Route path="/university/cooperation/universities" element={<UniversitiesCoop />} />
          <Route path="/university/cooperation/clinics" element={<ClinicsCoop />} />
          <Route path="/university/brandbook" element={<Brandbook />} />
          <Route path="/university/Councils/dev-council" element={<DevCouncil />} />
          <Route path="/university/Councils/acad-council" element={<AcadCouncil />} />
          <Route path="/university/Councils/commission-support" element={<CommissionSupport />} />
          <Route path="/university/Councils/bioethics-committee" element={<BioethicsCommittee />} />
          <Route path="/university/Councils/employers-council" element={<EmployersCouncil />} />
          <Route path="/university/Councils/parents-council" element={<ParentsCouncil />} />
          <Route path="/university/Councils/student-council" element={<StudentCouncil />} />
          <Route path="/university/Councils/edu-councils" element={<EduCouncils />} />
          <Route path="/university/Councils/scien-council" element={<ScienCouncil />} />
          <Route path="/university/Councils/edit-board" element={<EditBoard />} />
          <Route path="/university/Councils/admis-committee" element={<AdmisCommittee />} />
          <Route path="/university/Councils/council-scients" element={<CouncilScients />} />
          <Route path="/university/Councils/technical-council" element={<TechnicalCouncil />} />
          <Route path="/university/StrategicDocs/StrategicDevelopPlans" element={<StrategicDevelopPlans />} />
          <Route path="/university/StrategicDocs/ComprehensivePlans" element={<ComprehensivePlans />} />
          <Route path="/university/StrategicDocs/AccountingPolicy" element={<AccountingPolicy />} />
          <Route path="/university/StrategicDocs/HR-Policy" element={<HRPolicy />} />
          <Route path="/university/StrategicDocs/StrategicVision" element={<StrategicVision />} />
          <Route path="/university/StrategicDocs/position" element={<Posision />} />
          <Route path="/university/QualityManagSystem/QualityPolity" element={<QualityPolity />} />
          <Route path="/university/QualityManagSystem/QualityMonitoring" element={<QualityMonitoring />} />

          { }
          <Route path="/education/ait" element={<AIT />} />
          <Route path="/education/ait/about" element={<AboutAIT />} />
          <Route path="/education/ait/leadership" element={<LeadershipAIT />} />
          <Route path="/education/ait/disciplines" element={<DisciplinesAIT />} />
          <Route path="/education/ait/teachers" element={<TeachersAIT />} />
          <Route path="/education/ait/contacts" element={<ContactsAIT />} />
          <Route path="/education/mfm" element={<MFM />} />
          <Route path="/education/it-college" element={<ITCollegeEdu />} />
          <Route path="/education/business-school" element={<BusinessSchoolEdu />} />
          <Route path="/education/postgrad" element={<Postgrad />} />
          <Route path="/education/center" element={<Center />} />
          <Route path="/education/itCollege/director" element={<Director />} />
          <Route path="/education/itCollege/departments/general" element={<General />} />
          <Route path="/education/itCollege/departments/information" element={<Information />} />
          <Route path="/education/itCollege/specialties/diplom-computer-science" element={<DiplomComScience />} />
          <Route path="/education/itCollege/specialties/diplom-mobile-computing" element={<DiplomMobComputing />} />
          <Route path="/education/itCollege/specialties/diplom-multi-applications" element={<DiplomMultiApplications />} />
          <Route path="/education/itCollege/about" element={<AboutITCollege />} />
          <Route path="/education/itCollege/contacts" element={<ContactsITCollage />} />
          <Route path="/education/itCollege/double-diploma" element={<DoubleDiploma />} />
          <Route path="/education/itCollege/lincoln" element={<Lincoln />} />
          <Route path="/education/itCollege/pedagogical-council" element={<PedagogicalCouncil />} />
          <Route path="/education/mfm/dekanat/curriculum" element={<Curriculum />} />
          <Route path="/education/mfm/dekanat/dean" element={<Dean />} />
          <Route path="/education/mfm/dekanat/departments" element={<DepartmentsMFM />} />
          <Route path="/education/mfm/programs/five-years" element={<FiveYears />} />
          <Route path="/education/mfm/programs/six-years" element={<SixYears />} />
          <Route path="/education/mfm/about" element={<AboutMFM />} />
          <Route path="/education/mfm/contacts" element={<ContactsMFM />} />
          <Route path="/education/business-school/programs/future-leaders" element={<FutureLeaders />} />
          <Route path="/education/business-school/programs/older-leaders" element={<OlderLeaders />} />
          <Route path="/education/business-school/programs/smartik" element={<SmartikLeaders />} />
          <Route path="/education/business-school/programs/young-leaders" element={<YoungLeaders />} />
          <Route path="/education/business-school/about" element={<AboutBusinessSchool />} />
          <Route path="/education/business-school/contacts" element={<ContactsBusinessSchool />} />
          <Route path="/education/business-school/managers" element={<Managers />} />
          <Route path="/education/business-school/trainers" element={<Trainers />} />
          <Route path="/education/business-school/director" element={<DirectorBusinessSchool />} />
          <Route path="/education/postgrad/courses" element={<CoursesPostgrad />} />
          <Route path="/education/postgrad/internship" element={<InternshipPostgrad />} />
          <Route path="/education/postgrad/phd" element={<PhD />} />
          <Route path="/education/postgrad/postgraduate" element={<Postgraduate />} />
          <Route path="/education/postgrad/residency" element={<Residency />} />

          <Route path="/education/center/about" element={<AboutCenter />} />
          <Route path="/education/center/contacts" element={<ContactsCenter />} />
          <Route path="/education/center/programs" element={<ProgramsCenter />} />
          <Route path="/education/center/director" element={<DirectorCenter />} />
          <Route path="/education/center/managers" element={<ManagersCenter />} />

          { }
          { }
          <Route path="/clinical" element={<ClinicalBase />} />
          <Route path="/clinical/lazmed" element={<Lazmed />} />
          <Route path="/clinical/dordoi-ophthalmic" element={<DordoiOphthalmic />} />
          <Route path="/clinical/doc-clinic" element={<DocClinic />} />
          <Route path="/clinical/doc-hospital" element={<DocHospital />} />
          <Route path="/clinical/agreements" element={<Agreements />} />
          {/* Lazy Science */}
          <Route path="/science" element={<ScienceMain />} />
          <Route path="/science/management" element={<ManagementScience />} />
          <Route path="/science/management/scientific-council" element={<ScientificCouncil />} />
          <Route path="/science/management/scientific-technical-council" element={<ScientificTechnicalCouncil />} />
          <Route path="/science/management/bioethics" element={<Bioethics />} />
          <Route path="/science/management/young-scientists" element={<YoungScientists />} />
          <Route path="/science/management/department" element={<ScienceDepartmentMng />} />
          <Route path="/science/department" element={<ScienceDepartment />} />
          <Route path="/science/events/conferences" element={<Conferences />} />
          <Route path="/science/conferences/:id" element={<ConferenceDetail />} />
          <Route path="/science/professors" element={<Professors />} />
          <Route path="/science/professors/sean-park" element={<SeanPark />} />
          <Route path="/science/professors/pendharkar" element={<Pendharkar />} />
          <Route path="/science/professors/potapova" element={<Potapova />} />
          <Route path="/science/professors/osmonov" element={<Osmonov />} />
          <Route path="/science/professors/erkebaev" element={<Erkebaev />} />
          <Route path="/science/professors/madaminov" element={<Madaminov />} />
          <Route path="/science/professors/bilgaziev" element={<Bilgaziev />} />
          <Route path="/science/professors/kubatov" element={<Kubatov />} />
          <Route path="/science/professors/shaltakova" element={<Shaltakova />} />
          <Route path="/science/professors/kachibek" element={<Kachibek />} />
          <Route path="/science/publications" element={<Publications />} />
          <Route path="/science/publications/journal" element={<ScientificJournal />} />
          <Route path="/science/publications/periodicals" element={<Periodicals />} />
          <Route path="/science/events" element={<ScienceEvents />} />
          <Route path="/science/library" element={<Library />} />
          <Route path="/science/student-science" element={<StudentScience />} />
          <Route path="/science/student-society" element={<StudentSociety />} />
          <Route path="/science/student-science/clubs" element={<Clubs />} />
          <Route path="/science/student-science/conferences" element={<StudentConferences />} />
          <Route path="/science/events/master-classes" element={<MasterClasses />} />
          <Route path="/science/events/round-tables" element={<RoundTables />} />
          <Route path="/science/projects/current" element={<CurrentProjects />} />
          <Route path="/science/projects/grants" element={<Grants />} />
          <Route path="/science/projects/international" element={<International />} />
          <Route path="/science/labs" element={<Labs />} />
          <Route path="/science/labs/anatomy" element={<Anatomy />} />
          <Route path="/science/labs/biochemistry" element={<Biochemistry />} />
          <Route path="/science/labs/chemistry" element={<Chemistry />} />
          <Route path="/science/labs/biology" element={<Biology />} />
          <Route path="/science/labs/interactive" element={<Interactive />} />
          <Route path="/science/labs/computer" element={<Computer />} />
          <Route path="/science/labs/study" element={<Study />} />
          <Route path="/science/projects" element={<Projects />} />
          { }
          <Route path="/student/communities" element={<StudentCommunities />} />
          <Route path="/student/resources" element={<Resources />} />
          <Route path="/student/schedules" element={<Schedules />} />
          <Route path="/student/conditions" element={<Conditions />} />
          { }
          <Route path="/applicants" element={<ApplicantBase />} />
          <Route path="/applicants/commission" element={<Commission />} />
          <Route path="/applicant/commission" element={<Commission />} />
          <Route path="/applicant/rules" element={<Rules />} />
          <Route path="/applicant/directions" element={<Directions />} />
          <Route path="/applicants/directions" element={<Directions />} />
          <Route path="/applicant/entrance" element={<Entrance />} />
          <Route path="/applicant/cost" element={<Cost />} />
          <Route path="/applicants/cost" element={<Cost />} />
          <Route path="/applicant/orientation" element={<Orientation />} />
          <Route path="/applicant/documents" element={<Documents />} />
          <Route path="/applicant/admission-reg" element={<AdmissionReg />} />
          <Route path="/applicant/schedule" element={<ScheduleApp />} />
          <Route path="/applicant/transfer" element={<Transfer />} />
          <Route path="/applicant/scholarships" element={<Scholarships />} />
          <Route path="/applicants/scholarships" element={<Scholarships />} />
          <Route path="/applicants/adaptation" element={<Orientation />} />
          <Route path="/applicants/admission-rules" element={<Rules />} />
          <Route path="/applicants/ort" element={<Entrance />} />
          <Route path="/applicants/career-guidance" element={<CareerGuidance />} />
          <Route path="/applicants/career-guidance/events" element={<CareerGuidance />} />
          <Route path="/applicants/career-guidance/news" element={<CareerGuidance />} />
          <Route path="/applicants/career-guidance/knowledge-karakol" element={<KnowledgeKarakol />} />
          <Route path="/applicants/career-guidance/knowledge-osh" element={<KnowledgeOsh />} />
          <Route path="/applicants/career-guidance/cooperation" element={<ApplicantCooperation />} />
          <Route path="/applicants/career-guidance/meeting" element={<Meeting />} />

          {/* Event pages routes */}
          <Route path="/applicants/orientation/teachers-day" element={<TeachersDay />} />
          <Route path="/applicants/orientation/state-language-day" element={<StateLanguageDay />} />
          <Route path="/applicants/orientation/korean-center" element={<KoreanCenter />} />
          <Route path="/applicants/orientation/medical-mission" element={<MedicalMission />} />
          <Route path="/applicants/orientation/graduation-2025" element={<Graduation2025 />} />
          <Route path="/applicants/orientation/diploma-award" element={<DiplomaAward />} />

          {/* News pages routes */}
          <Route path="/applicants/career-guidance/news/eurasian-congress" element={<EurasianCongress />} />
          <Route path="/applicants/career-guidance/news/it-security-meeting" element={<ITSecurityMeeting />} />
          <Route path="/applicants/career-guidance/news/pai-chai-visit" element={<PaiChaiVisit />} />

          <Route path="/applicants/admission/documents" element={<Documents />} />
          <Route path="/applicants/admission/rules" element={<AdmissionReg />} />
          <Route path="/applicants/admission/schedule" element={<ScheduleApp />} />
          <Route path="/applicants/transfer/documents" element={<Documents />} />
          <Route path="/applicants/transfer/rules" element={<AdmissionReg />} />
          <Route path="/applicants/software-development" element={<Software />} />
          <Route path="/applicants/mobile-development" element={<MobileDev />} />
          <Route path="/applicants/multimedia-development" element={<MultimediaDev />} />
          <Route path="/applicants/discipline" element={<Dicipline />} />
          <Route path="/applicants/general-medicine-5" element={<GeneralMedFive />} />
          <Route path="/applicants/general-medicine-6" element={<GeneralMedSix />} />
          <Route path="/applicants/required-documents" element={<RequiredDoc />} />
          <Route path="/applicants/online-registration" element={<OnlineReg />} />
          <Route path="/applicants/transfer/schedule" element={<ScheduleApp />} />
          <Route path="/applicants/dealers" element={<Dealers />} />
          <Route path="/applicants/dealers/india" element={<India />} />
          <Route path="/applicants/dealers/pakistan" element={<Pakistan />} />
          <Route path="/applicants/dealers/uzbekistan" element={<UzbekistanCountry />} />
          <Route path="/applicants/infrastructure" element={<Infrastructure />} />
          <Route path="/applicants/commission" element={<Commission />} />
          { }
          <Route path="/infrastructure/locations" element={<Locations />} />
          <Route path="/infrastructure/partners" element={<Partners />} />
          <Route path="/infrastructure/*" element={<Home />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
