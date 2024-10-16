import React, { useEffect, useState } from 'react';
import html2pdf from 'html2pdf.js';
import { getAllDetails } from '../services/UserData';
import { templates } from '../constants/templateList';
import { useNavigate } from 'react-router-dom';
import {BounceLoader} from 'react-spinners'

const TemplateLoader = () => {
  const [userData, setUserData] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {

    const templateId = localStorage.getItem('templateId');
    const selected = templates.find(template => template.id === parseInt(templateId, 10));
    setSelectedTemplate(selected);


    const fetchUserData = async () => {
      try {
        const response = await getAllDetails(1);
        setUserData(response);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUserData();
  }, []);
  
  

  const navigate = useNavigate();

  const handleChangeTemplate =()=>{
    navigate('/select-template')
  }

  if (!selectedTemplate) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="text-center">
        <div className="mb-4 text-lg font-semibold text-gray-800">
          Looks like you have not selected any template..
        </div>
        <button
          type="button"
          onClick={handleChangeTemplate}
          className="px-6 py-3 text-base font-medium text-white bg-cyan-500 rounded-full shadow-lg hover:bg-cyan-600 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-300"
        >
          Click here to Select Template
        </button>
      </div>
    </div>
    );
  }

  if(!userData){
    return (
      <div className="flex justify-center items-center min-h-screen">
        <BounceLoader />
        
      </div>

    )
  }
  const SelectedComponent = selectedTemplate.component;

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }


  // Handle download as PDF
  const handleDownload = () => {
    const cvElement = document.getElementById('template-to-pdf');

    if (!cvElement) {
      alert("Could not find the resume to download.");
      return;
    }

    const opt = {
      filename: `${userData.besicDetails.first_name}_${userData.besicDetails.last_name}_Resume.pdf`,
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      // pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
    };

    html2pdf().from(cvElement).set(opt).save();
  };

  

  return (
    <div className="mt-5 mx-auto max-w-3xl">
      {/* Button Section */}
      <div className="fixed top-6 right-6 space-x-2">
        <button
          type="button"
          onClick={handleDownload}
          className="px-4 py-2 text-sm font-medium text-white bg-yellow-500 rounded-md shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300"
        >
          Download PDF
        </button>
        <button
          type="button"
          onClick={handleChangeTemplate}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
        >
          Change Template
        </button>
      </div>
    <div className="">
      {/* Header Section */}
      <h1 className="text-2xl font-bold text-center mb-4">
        {userData.besicDetails.first_name} {userData.besicDetails.last_name} Resume
      </h1>

      {/* Template Section */}
      <div id="template-to-pdf">
        <SelectedComponent  userData={userData} /> {/* Render selected template */}
      </div>
    </div>
  </div>
  );
};

export default TemplateLoader;
