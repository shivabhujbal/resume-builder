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
import LoginSuccess from './components/LoginSuccess';
import {Provider} from 'react-redux';
import store from './redux/store'
import Home2 from './components/Home2';
import LaterTempSelect from './components/LaterTempSelect';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
         <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/success" element={<LoginSuccess />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/about" element={<Home2 />} />
          <Route path="/template-selector" element={<TemplateSelector />} />
          <Route path="/select-template" element={<LaterTempSelect />} />
           <Route path="/basic-details" element={<BasicDetail />} />
           <Route path="/education-details" element={<EductionDetail />} />
           <Route path="/experience-details" element={<ExperienceDetils/>} />
           <Route path="/project-details" element={<ProjectDetails/>} />
           <Route path="/skill-details" element={<SkillDetail />} />
           <Route path="/summary-details" element={<SummaryDetail />} />
           <Route path="/template-loader" element={<TemplateLoader />} />
           <Route path="/template-data" element={<UserDetails />} />
           <Route path="/profile-detail" element={<ProfilePage />} />
           <Route path="summary-detail" element={<ProfileSection />} /> 
         </Routes>
         {/* <Deatils/> */}
      </div>
      </Provider>
  );
}

export default App;
