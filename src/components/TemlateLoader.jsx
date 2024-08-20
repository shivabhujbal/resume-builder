import React, { useEffect, useState } from 'react';
import html2pdf from 'html2pdf.js';
import { getAllDetails } from '../services/UserData';
import Template8 from '../resumetemplates/template8';

const TemplateLoader = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
     
        const response = await getAllDetails(1);
        setUserData(response);
     
    };

    fetchUserData();
  }, [],3000);


  console.log(userData);
  

  // Handle download as PDF
  const handleDownload2 = () => {
    const cvElement = document.getElementById('template-to-pdf');

    const opt = {
      filename: `${userData.besicDetails.first_name}_${userData.besicDetails.last_name}_Resume.pdf`,
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
      // html2canvas: {
      //   scale: 0.8, // Adjust this scale value to fit content on one page
      //    // Enable CORS for external images
      //    dpi: 300, // Set the DPI (dots per inch) to increase resolution
      // letterRendering: true, 
      // },
    };

    html2pdf().from(cvElement).set(opt).save();
  };

  if (!userData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loader">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div>No user data available.</div>
      </div>
    );
  }

  return (
    <div className="mt-5 mx-auto  ">
      <div className="shadow-md rounded-lg ">
        <h1 className="text-2xl font-bold text-center mb-4">
          {userData.besicDetails.first_name} {userData.besicDetails.last_name}s Resume
        </h1>
        <div id="template-to-pdf">
          <Template8 userData={userData} />
        </div>
        <div className="text-center mt-4 mb-5 ">
          <button
            onClick={handleDownload2}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplateLoader;
