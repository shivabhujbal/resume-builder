import React from 'react';
import templateData from './templateData'; // Ensure this path is correct

function Template1() {
  return (
    // <div className="h-[1122.5px] w-[793.7px] bg-sky-300 mx-auto my-10 px-4 py-6" style={{ fontFamily: 'Times New Roman' }}> 
    //   <div>
    //     <div className="flex flex-col items-center text-center mb-8"> 
    //       <div>
    //         <h1 className="text-4xl font-bold" >
    //           {`${templateData.firstname} ${templateData.lastname}`}</h1>
    //         <h2 className="text-xl font-medium">
    //           {templateData.profession}</h2>
    //       </div>
    //     </div>
    //     <hr className="w-full h-full mt-4 border-gray-400 border-2" />
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
    //       <div className="col-span-1 md:col-span-1 bg-gray-300 p-4 rounded-sm shadow-md">
    //         <h3 className="text-xl font-bold mb-1" >CONTACT</h3>
    //         <ul className="text-base"> {/* Applied text-sm class */}
    //           <li><span className='font-semibold'>Location :</span> {`${templateData.city}, ${templateData.country}`}</li>
    //           <li><span className='font-semibold'>Mobile No :</span> {templateData.phone}</li>
    //           <li><span className='font-semibold'>Email :</span> {templateData.email}</li>
    //           <li>
    //           <span className='font-semibold'>LinkedIn :</span> <a href={templateData.linkedIn} className="text-blue-500" target="_blank" rel="noopener noreferrer">
    //               {templateData.linkedIn}
    //             </a>
    //           </li>
    //           <li>
    //           <span className='font-semibold'>GitHub : </span><br />
    //             <a href={templateData.GitHub} className="text-blue-500" target="_blank" rel="noopener noreferrer">
    //               {templateData.GitHub}
    //             </a>
    //           </li>
    //         </ul>

    //         <div className='mt-36'>
    //         <h3 className="text-xl font-bold mb-1 ">SKILLS</h3>
    //         <ul className="text-sm"> {/* Applied text-sm class */}
    //           <li>
    //             <strong>Primary:</strong> {templateData.skills.primaryList.join(", ")}
    //           </li>
    //           <li>
    //             <strong>Secondary:</strong> {templateData.skills.secondaryList.join(", ")}
    //           </li>
    //         </ul>
    //         </div>

    //         <h3 className="text-base font-bold mb-1 mt-8">LANGUAGES</h3>
    //         <ul className="text-sm"> {/* Applied text-sm class */}
    //           {templateData.languages.map((lang, index) => (
    //             <li key={index}>{lang}</li>
    //           ))}
    //         </ul>
           
    //       </div>

    //       <div className="col-span-1 md:col-span-1">
    //         <h3 className="text-base font-bold mb-4">EDUCATION</h3>
    //         <ul className="text-sm"> {/* Applied text-sm class */}
    //           {templateData.education.map((edu, index) => (
    //             <li key={edu.EducationID}>
    //               {`${edu.sclName} | ${edu.sclLocation}`}
    //               <br />
    //               {`${edu.degree} in ${edu.fieldOfStudy}, ${edu.gradeYear}`}
    //             </li>
    //           ))}
    //         </ul>
    //         +

    //         <h3 className="text-base font-bold mb-4 mt-8">EXPERIENCE</h3>
    //         <ul className="text-sm"> {/* Applied text-sm class */}
    //           {templateData.experience.map((exp, index) => (
    //             <li key={index}>
    //               {`${exp.dateRange}`}
    //               <br />
    //               {`${exp.title} | ${exp.company}`}
    //               <br />
    //               {exp.location}
    //               <ul className="text-sm"> {/* Applied text-sm class for nested list */}
    //                 {exp.responsibilities.map((resp, respIndex) => (
    //                   <li key={respIndex}>
    //                     {resp}
    //                   </li>
    //                 ))}
    //               </ul>
    //             </li>
    //           ))}
    //         </ul>
            
    //         <h3 className="text-base font-bold mb-4 mt-8">CERTIFICATIONS</h3>
    //         <ul className="text-sm"> {/* Applied text-sm class */}
    //           {templateData.certifications.map((cert, index) => (
    //             <li key={index}>{cert}</li>
    //           ))}
    //         </ul>
           
    //       </div>
    //     </div>
        
    //   </div>
    // </div>


    // <div className='w-[790px] h-screen mx-auto my-6 box-border bg-sky-300'>
    //     <div className='text-center py-6 bg-red-300'>
    //         <h1 className='text-4xl font-bold' >
    //           {`${templateData.firstname} ${templateData.lastname}`}
    //         </h1>
    //         <h2 className='text-xl font-normal'>
    //           {templateData.profession}
    //         </h2>
    //   </div>
    // </div>

    <div className="max-w-4xl mx-auto p-6 my-10 bg-white shadow-lg rounded-lg">
  {/* Main Layout */}
  <div className="flex flex-col md:flex-row">
    {/* Left Column */}
    <div className="w-full md:w-2/3 pr-6">
      {/* Header Section */}
      <div className="flex items-center space-x-8 mb-6 py-6">
        <div>
          <h1 className="text-4xl font-bold">{`${templateData.firstname} ${templateData.lastname}`}</h1>
          <p className="text-gray-600">{templateData.profession}</p>
        </div>
      </div>

      {/* Summary Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-700">Summary</h2>
        <p className="text-gray-800">{templateData.summary}</p>
      </div>

      {/* Experience Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-700">Experience</h2>
        {templateData.experience.map((job, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-bold text-gray-900">{job.title} - {job.company}</h3>
            <p className="text-gray-600">{job.location} | {job.dateRange}</p>
            <div className="ml-4 space-y-2">
              {job.responsibilities.map((task, idx) => (
                <p key={idx} className="text-gray-800">{task}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Education Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-700">Education</h2>
        {templateData.education.map((edu, index) => (
          <div key={index} className="mb-2">
            <h3 className="font-bold text-gray-900">{edu.degree} in {edu.fieldOfStudy}</h3>
            <p className="text-gray-600">{edu.sclName}</p>
            <p className="text-gray-600">{edu.sclLocation}</p>
            <p className="text-gray-600">{edu.gradeYear}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Right Column */}
    <div className="w-full md:w-1/3 mt-6 md:mt-0 md:pt-32">
      {/* Contact Info */}
      <div className="mb-6 space-y-1">
        <h2 className="text-lg font-semibold text-gray-700">Contact Info</h2>
        <p className="text-gray-800"><span className="font-semibold">Phone no :</span> <br />{templateData.phone}</p>
        <p className="text-gray-800"><span className="font-semibold">Email :</span><br /> {templateData.email}</p>
        <p className="text-gray-800"><span className="font-semibold">Location :</span> <br />{templateData.city}, {templateData.country}</p>
        <div>
          <span className="font-semibold">LinkedIn :</span>{" "}
          <a
            href={templateData.linkedIn}
            className="text-blue-500 break-words"
            target="_blank"
            rel="noopener noreferrer"
          >
            {templateData.linkedIn}
          </a>
        </div>
        <div>
          <span className="font-semibold">GitHub : </span>{" "}
          <a
            href={templateData.GitHub}
            className="text-blue-500 break-words"
            target="_blank"
            rel="noopener noreferrer"
          >
            {templateData.GitHub}
          </a>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-700">Skills</h2>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <h3 className="font-bold text-gray-800 mb-2">Primary Skills</h3>
            <div className="flex flex-wrap gap-2">
              {templateData.skills.primaryList.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-800 py-1 px-3 rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-2">Secondary Skills</h3>
            <div className="flex flex-wrap gap-2 ">
              {templateData.skills.secondaryList.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-800 py-1 px-3 rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="mt-8 mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Certifications</h2>
        <div className="ml-4 space-y-2">
          {templateData.certifications.map((cert, index) => (
            <p key={index} className="text-gray-800">{cert}</p>
          ))}
        </div>
      </div>

      {/* Languages Section */}
      <div className="relative">
        <h2 className="text-lg font-semibold text-gray-700">Languages</h2>
        <div className="ml-4 space-y-2">
          {templateData.languages.map((lang, index) => (
            <p key={index} className="text-gray-800">{lang}</p>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>


  );
}

export default Template1;