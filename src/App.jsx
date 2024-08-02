import React from 'react';
import BasicDetail from './components/BasicDetail';
import EductionDetail from './components/EductionDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExperienceDetils from './components/ExperienceDetils';
import SkillDetail from './components/SkillDetail';
import Sidebar from './components/Sidebar';

function App() {
  return (
      <div className="App">
         <Routes>
           <Route path="/" element={<BasicDetail />} />
           <Route path="/education-details" element={<EductionDetail />} />
           <Route path="/experience-details" element={<ExperienceDetils/>} />
           <Route path="/skill-details" element={<SkillDetail />} />
         </Routes>
      </div>
  );
}

export default App;
