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
const Vision = lazy(() => import('./pages/university/StrategicDocs/vision'))
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

// Clinical lazy imports
const Lazmed = lazy(() => import('./pages/clinical/Lazmed'))
const Dordoi = lazy(() => import('./pages/clinical/Dordoi'))
const DocClinic = lazy(() => import('./pages/clinical/DocClinic'))
const DocHospital = lazy(() => import('./pages/clinical/DocHospital'))
const Agreements = lazy(() => import('./pages/clinical/Agreements'))

// Science lazy imports
const ScientificCouncil = lazy(() => import('./pages/science/management/ScientificCouncil'))
const Bioethics = lazy(() => import('./pages/science/management/Bioethics'))
const YoungScientists = lazy(() => import('./pages/science/management/YoungScientists'))
const ScienceDepartment = lazy(() => import('./pages/science/Department'))
const Professors = lazy(() => import('./pages/science/Professors'))
const Publications = lazy(() => import('./pages/science/Publications'))
const ScienceEvents = lazy(() => import('./pages/science/Events'))
const Library = lazy(() => import('./pages/science/Library'))
const StudentScience = lazy(() => import('./pages/science/StudentScience'))
const Labs = lazy(() => import('./pages/science/Labs'))
const Projects = lazy(() => import('./pages/science/Projects'))
const ManagementScience = lazy(() => import('./pages/science/Management'))

// Student lazy imports
const StudentCommunities = lazy(() => import('./pages/student/communities/StudentCommunities'))
const Resources = lazy(() => import('./pages/student/resources/Resources'))
const Schedules = lazy(() => import('./pages/student/schedules/Schedules'))
const Conditions = lazy(() => import('./pages/student/conditions/Conditions'))

// Applicant lazy imports
const Commission = lazy(() => import('./pages/applicant/Commission'))
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
          {} 
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
          <Route path="/university/StrategicDocs/vision" element={<Vision />} />
          <Route path="/university/StrategicDocs/position" element={<Posision />} />
          <Route path="/university/QualityManagSystem/QualityPolity" element={<QualityPolity />} />
          <Route path="/university/QualityManagSystem/QualityMonitoring" element={<QualityMonitoring />} />

         

          {}
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
          {}
          {}
          <Route path="/clinical/lazmed" element={<Lazmed />} />
          <Route path="/clinical/dordoi" element={<Dordoi />} />
          <Route path="/clinical/doc-clinic" element={<DocClinic />} />
          <Route path="/clinical/doc-hospital" element={<DocHospital />} />
          <Route path="/clinical/agreements" element={<Agreements />} />
          {}
          <Route path="/science/management/scientific-council" element={<ScientificCouncil />} />
          <Route path="/science/management/bioethics" element={<Bioethics />} />
          <Route path="/science/management/young-scientists" element={<YoungScientists />} />
          <Route path="/science/department" element={<ScienceDepartment />} />
          <Route path="/science/professors" element={<Professors />} />
          <Route path="/science/publications" element={<Publications />} />
          <Route path="/science/events" element={<ScienceEvents />} />
          <Route path="/science/library" element={<Library />} />
          <Route path="/science/student-science" element={<StudentScience />} />
          <Route path="/science/labs" element={<Labs />} />
          <Route path="/science/management" element={<ManagementScience />} />
          {}
          <Route path="/student/communities" element={<StudentCommunities />} />
          <Route path="/student/resources" element={<Resources />} />
          <Route path="/student/schedules" element={<Schedules />} />
          <Route path="/student/conditions" element={<Conditions />} />
          {}
          <Route path="/applicant/commission" element={<Commission />} />
          <Route path="/applicant/rules" element={<Rules />} />
          <Route path="/applicant/directions" element={<Directions />} />
          <Route path="/applicant/entrance" element={<Entrance />} />
          <Route path="/applicant/cost" element={<Cost />} />
          <Route path="/applicant/orientation" element={<Orientation />} />
          <Route path="/applicant/documents" element={<Documents />} />
          <Route path="/applicant/admission-reg" element={<AdmissionReg />} />
          <Route path="/applicant/schedule" element={<ScheduleApp />} />
          <Route path="/applicant/transfer" element={<Transfer />} />
          <Route path="/applicant/scholarships" element={<Scholarships />} />
          {}
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
