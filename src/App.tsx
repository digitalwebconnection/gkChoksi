// App.jsx
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import HomeMain from "./component/home/HomeMain";
import Navbar from "./component/Navbar";
import AboutUsMain from "./component/aboutus/AboutUsMain";
import ContactMain from "./component/Contact/ContactMain";
import DisclaimerModal from "./component/DisclaimerModal";
import TeamSection from "./component/aboutus/TeamMember/TeamMain";
import Partners from "./component/aboutus/partnerspage/Partners";
import AlumniPage from "./component/Alumni/AlumniMain";
import CareersPage from "./component/career/careers";
import IndustryPage from "./component/industry/industry";
import ServicePage from "./component/service/service";

// import ServicePage from "./component/service/service";



function App() {
  return (
    <Router>
      <DisclaimerModal />
      {/* Fixed navbar at top */}
      <Navbar />

      {/* Add padding-top so content is not hidden behind fixed navbar */}
      <div className=" mt-20">
        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="/about" element={<AboutUsMain />} />
          <Route path="/about/team" element={<TeamSection />} />
          <Route path="/services" element={<ServicePage />} />
         
          <Route path="/about/partners" element={<Partners />} />
           <Route path="/careers" element={<CareersPage />} />
          <Route path="/industry" element={<IndustryPage />} />
        
          <Route path="/contact" element={<ContactMain />} />
          <Route path="/alumni" element={<AlumniPage />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
