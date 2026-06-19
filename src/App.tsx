// App.jsx
import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import DisclaimerModal from "./component/DisclaimerModal";
import ScrollToTop from "./component/PageWrapper";

// Lazy load pages for code splitting
const HomeMain = lazy(() => import("./component/home/HomeMain"));
const AboutUsMain = lazy(() => import("./component/aboutus/AboutUsMain"));
const ContactMain = lazy(() => import("./component/Contact/ContactMain"));
const TeamSection = lazy(() => import("./component/aboutus/TeamMember/TeamMain"));
const Partners = lazy(() => import("./component/aboutus/partnerspage/Partners"));
const InsightsMain = lazy(() => import("./component/Insights/Insightsmain"));
const AlumniPage = lazy(() => import("./component/Alumni/AlumniMain"));
const CareersPage = lazy(() => import("./component/career/careers"));
const IndustryPage = lazy(() => import("./component/industry/industry"));
const ServicePage = lazy(() => import("./component/service/service"));
const Coreteam = lazy(() => import("./component/Coreteam/Coreteam"));

function App() {
  return (
    <Router>
      <DisclaimerModal />
      <ScrollToTop />
      {/* Fixed navbar at top */}
      <Navbar />

      {/* Add padding-top so content is not hidden behind fixed navbar */}
      <div className=" bg-[#F7F9F8]">
        <Suspense fallback={
          <div className="h-screen w-full flex items-center justify-center bg-[#F7F9F8]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#19603B]"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<HomeMain />} />
            <Route path="/about" element={<AboutUsMain />} />
            <Route path="/about/team" element={<TeamSection />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/insights" element={<InsightsMain />} />
            <Route path="/about/partners" element={<Partners />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/industry" element={<IndustryPage />} />
            <Route path="/core-team" element={<Coreteam />} />
            <Route path="/contact" element={<ContactMain />} />
            <Route path="/alumni" element={<AlumniPage />} />
          </Routes>
        </Suspense>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
