import React from 'react';
import BasicDetail from './components/BasicDetail';
import EductionDetail from './components/EductionDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExperienceDetils from './components/ExperienceDetils';
import SkillDetail from './components/SkillDetail';
import TemplateSelector from './components/TemplateSelector';
import SummaryDetail from './components/SummaryDetail';
import ProjectDetails from './components/ProjectDetails';
import Template8 from './resumetemplates/template8';
import Template9 from './resumetemplates/template9';
import UserDetails from './resumetemplates/UserDetails';
import TemplateLoader from './components/TemlateLoader';
import ProfilePage from './components/ProfilePage';
import ProfileSection from './components/ProfileSection';
import HomePage from './components/Home';
import SignupForm from './components/signup';
import Login from './components/login';

function App() {
  return (
      <div className="App">
         <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/" element={<TemplateSelector />} />
           <Route path="/basic-details" element={<BasicDetail />} />
           <Route path="/education-details" element={<EductionDetail />} />
           <Route path="/experience-details" element={<ExperienceDetils/>} />
           <Route path="/project-details" element={<ProjectDetails/>} />
           <Route path="/skill-details" element={<SkillDetail />} />
           <Route path="/summary-details" element={<SummaryDetail />} />
           <Route path="/template-8" element={<Template8 />} />
           <Route path="/template-9" element={<Template9 />} />
           <Route path="/template-loader" element={<TemplateLoader />} />
              <Route path="/template-data" element={<UserDetails />} />
              <Route path="profile-detail" element={<ProfilePage />} />
              <Route path="summary-detail" element={<ProfileSection />} /> 
         </Routes>
         {/* <Deatils/> */}
      </div>
  );
}

export default App;
