import React, { useEffect, useState } from 'react';
import html2pdf from 'html2pdf.js';
import { getAllDetails } from '../services/UserData';
import Template1 from '../resumetemplates/template1';
import Template2 from '../resumetemplates/template2';
import Template3 from '../resumetemplates/template3';
import Template4 from '../resumetemplates/template4';
import Template5 from '../resumetemplates/template5';
import Template6 from '../resumetemplates/template6';
import Template7 from '../resumetemplates/template7';
import Template8 from '../resumetemplates/template8';
import Template9 from '../resumetemplates/template9';
import Template10 from '../resumetemplates/template10';
import Template11 from '../resumetemplates/template11';
import Template12 from '../resumetemplates/template12';
import Resume1 from '../resumetemplates/Resume1';
import Template13 from '../resumetemplates/template13';
import Template14 from '../resumetemplates/template14';
import templateData from '../resumetemplates/templateData';
import Template15 from '../resumetemplates/template15';
import Template16 from '../resumetemplates/template16';
import Template17 from '../resumetemplates/template17';
import Template18 from '../resumetemplates/template18';
import Template19 from '../resumetemplates/template19';
import Template20 from '../resumetemplates/template20';
import Template21 from '../resumetemplates/template21';
import Template22 from '../resumetemplates/template22';
import Template23 from '../resumetemplates/template23';
import Template24 from '../resumetemplates/template24';
import Template25 from '../resumetemplates/template25';

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
        {userData.besicDetails.first_name} {userData.besicDetails.last_name} Resume
        </h1>
        <div id="template-to-pdf">
          {/*<Template1 userData={userData} />
           <Template2 userData={userData} />
          <Template3 userData={userData} />
          <Template4 userData={userData} />
          <Template5 userData={userData} />
          <Template6 userData={userData} />
          <Template7 userData={userData} />
          <Template8 userData={userData} /> 
          <Template9 userData={userData} />*/} 
          {/* <Template10 userData={userData} />  */}
          {/* <Resume1 userData={userData}/> */}
          {/* <Template11 userData={userData} />
          <Template12 userData={userData} /> */}
          {/* <Template13 userData={userData} /> */}
          {/* <Template14 userData={userData} /> */}
          {/* <Template15 userData={userData} /> */}
          {/* <Template16 userData={userData} /> */}
          {/* <Template17 userData={userData} /> */}
          {/* <Template18 userData={userData} /> */}
          {/* <Template19 userData={userData} /> */}
          {/* <Template20 userData={userData} /> */}
          {/* <Template21 userData={userData} /> */}
          {/* <Template22 userData={userData} /> */}
          {/* <Template23 userData={userData} /> */}
          {/* <Template24 userData={userData} /> */}
          <Template25 userData={userData} />
        </div>
        <div className="text-center mt-4  ">
        <button
          type="button" // Changed to button to prevent form submission
          onClick={handleDownload2}
          className="items-end px-5 h-fit py-3 mb-5 text-base font-medium border border-transparent rounded-full shadow-sm text-blue-700 bg-yellow-400 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
          Download Pdf
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplateLoader;
