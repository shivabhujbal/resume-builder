import React from "react";
import BasicDetail from "./components/BasicDetail";
import EductionDetail from "./components/EductionDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExperienceDetils from "./components/ExperienceDetils";
import SkillDetail from "./components/SkillDetail";
import TemplateSelector from "./components/TemplateSelector";
import SummaryDetail from "./components/SummaryDetail";
import ProjectDetails from "./components/ProjectDetails";
import Template8 from "./resumetemplates/template8";
import Template9 from "./resumetemplates/template9";
import UserDetails from "./resumetemplates/UserDetails";
import TemplateLoader from "./components/TemlateLoader";
import ProfilePage from "./components/ProfilePage";
import ProfileSection from "./components/ProfileSection";
import Login from "./components/login";
import Signup from "./components/signup";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Body from "./components/Body";
import Body2 from "./components/Body2";
import Body3 from "./components/Body3";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Home2 from "./components/Home2";
function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/templateSelector" element={<TemplateSelector />} />
        <Route path="/basic-details" element={<BasicDetail />} />
        <Route path="/education-details" element={<EductionDetail />} />
        <Route path="/experience-details" element={<ExperienceDetils />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/skill-details" element={<SkillDetail />} />
        <Route path="/summary-details" element={<SummaryDetail />} />
        <Route path="/template-8" element={<Template8 />} />
        <Route path="/template-9" element={<Template9 />} />
        <Route path="/template-loader" element={<TemplateLoader />} />
        <Route path="/template-data" element={<UserDetails />} />
        <Route path="/profile-detail" element={<ProfilePage />} />
        <Route path="/summary-detail" element={<ProfileSection />} />
      </Routes>
      {/* <Home/> */}
      
    </div>
  );
}

export default App;
