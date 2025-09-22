import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";


import CampusRec from "./pages/CampusRec";
import RecRoom from "./pages/RecRoom";
import Multimedia from "./pages/Multimedia";
import Dining from "./pages/Dining";
import TeachingAssistant from "./pages/TeachingAssistant";
import GraduateResearchAssistant from "./pages/ResearchAssistant";
import SalesforceDeveloper from "./pages/SalesforceDeveloper";
import SherwinWilliams from "./pages/SherwinWilliams";

import CourseProjects from "./pages/CourseProjects";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Navbar />
              <Intro />
              <Skills />
              <Works />
              <Contact />
              <Footer />
            </div>
          }
        />
        <Route path="/experience/campusrec" element={<CampusRec />} />
        <Route path="/experience/recroom" element={<RecRoom />} />
        <Route path="/experience/multimedia" element={<Multimedia />} />
        <Route path="/experience/dining" element={<Dining />} />
        <Route path="/experience/sherwin-williams" element={<SherwinWilliams />} />
        <Route path="/experience/teachingassistant" element={<TeachingAssistant />} />
        <Route path="/experience/researchassistant" element={<GraduateResearchAssistant />} />
        <Route path="/experience/salesforcedeveloper" element={<SalesforceDeveloper />} />

        <Route path="/course-projects" element={<CourseProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
