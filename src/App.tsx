// App.jsx
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import HomeMain from "./component/home/HomeMain";
import Navbar from "./component/Navbar";
import AboutUsMain from "./component/aboutus/AboutUsMain";

function App() {
  return (
    <Router>
      {/* Fixed navbar at top */}
      <Navbar />

      {/* Add padding-top so content is not hidden behind fixed navbar */}
      <div className="">
        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="/about" element={<AboutUsMain />} />
          {/* <Route path="/services" element={<ServicesPage />} /> */}
          {/* <Route path="/news" element={<NewsPage />} /> */}
          {/* <Route path="/careers" element={<CareersPage />} /> */}
          {/* <Route path="/contact" element={<ContactPage />} /> */}
          {/* <Route path="/csr" element={<CSRPage />} /> */}
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

/* ===== Simple placeholder pages (replace with your actual components) ===== */

export default App;

