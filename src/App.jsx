import React from 'react';
import BasicDetail from './components/BasicDetail';
import EductionDetail from './components/EductionDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExperienceDetils from './components/ExperienceDetils';
import SkillDetail from './components/SkillDetail';
import Sidebar from './components/Sidebar';
import TemplateSelector from './components/TemplateSelector';
import SummaryDetail from './components/SummaryDetail';
import ProjectDetails from './components/ProjectDetails';
// import Deatils from './components/Deatils';

function App() {
  return (
      <div className="App">
         <Routes>
          <Route path="/" element={<TemplateSelector />} />
           <Route path="/basic-details" element={<BasicDetail />} />
           <Route path="/education-details" element={<EductionDetail />} />
           <Route path="/experience-details" element={<ExperienceDetils/>} />
           <Route path="/project-details" element={<ProjectDetails/>} />
           <Route path="/skill-details" element={<SkillDetail />} />
           <Route path="/summary-details" element={<SummaryDetail />} />
         </Routes>
         {/* <Deatils/> */}
      </div>
  );
}

export default App;
