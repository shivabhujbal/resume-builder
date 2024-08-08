import React from 'react';
import templateData from './templateData';

const template6 = () => {
  return (
    <div className="p-4 rounded-lg font-serif border border-gray-300 shadow-md"> 
      <div className="bg-green-200 p-4 rounded-lg font-serif border border-gray-300 shadow-md"> 
        <div className="flex justify-center items-center">
          <div className="bg-green-500 w-10 h-10 rounded-full"></div>
          <div className="bg-green-500 w-10 h-10 rounded-full ml-2"></div>
        </div>
        <h2 className="font-bold text-2xl mt-4 text-center">{templateData.firstname} {templateData.lastname}</h2>
        <p className="text-center mt-2">
          {templateData.profession}
        </p>
        
        <div className="text-center mt-4">
          <p>Phone: {templateData.phone}</p>
          <p>Email: {templateData.email}</p>
          <p>LinkedIn: <a href={templateData.linkedIn} target="_blank" rel="noopener noreferrer">{templateData.linkedIn}</a></p>
          <p>GitHub: <a href={templateData.GitHub} target="_blank" rel="noopener noreferrer">{templateData.GitHub}</a></p>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg font-serif border border-gray-300 shadow-md"> 
        <div className="flex flex-col md:flex-row mt-4">
          <div className="w-full md:w-1/2">
            <h2 className="font-bold text-lg">EXPERIENCE</h2>
            {templateData.experience.map((job, index) => (
              <div key={index} className="mt-4">
                <h3 className="font-bold">{job.title}</h3>
                <p className="text-gray-600">{job.company}, {job.location}</p>
                <p className="mt-2">{job.dateRange}</p>
                <ul className="list-disc ml-6 mt-2">
                  {job.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
            <h2 className="font-bold text-lg mt-8">EDUCATION</h2>
            {templateData.education.map((edu, index) => (
              <div key={index} className="mt-4">
                <h3 className="font-bold">{edu.degree} in {edu.fieldOfStudy}</h3>
                <p className="text-gray-600">{edu.sclName}, {edu.sclLocation}</p>
                <p className="mt-2">{edu.gradeYear}</p>
              </div>
            ))}
            <h2 className="font-bold text-lg mt-8">SUMMARY</h2>
            <p className="mt-2">
              {templateData.summary.split('\n').map((line, index) => (
                <span key={index}>{line}<br/></span>
              ))}
            </p>
          </div>
          <div className="w-full md:w-1/2 md:ml-8 mt-4 md:mt-0">
            <h2 className="font-bold text-lg">SKILLS</h2>
            
            <table>
              <tbody>
                <tr>
                  <td className='text-sm font-bold'>Primary Skills</td>
                  <td className="text-xs">{templateData.skills.primaryList.join(', ')}</td>
                </tr>
                <tr>
                  <td className='text-sm font-bold'>Secondary Skills</td>
                  <td className="text-xs">{templateData.skills.secondaryList.join(', ')}</td>
                </tr>
              </tbody>
            </table>
            <h2 className="font-bold text-lg mt-8">CERTIFICATIONS</h2>
            <ul className="list-disc ml-6 mt-2">
              {templateData.certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
            <h2 className="font-bold text-lg mt-8">LANGUAGES</h2>
            <ul className="list-disc ml-6 mt-2">
              {templateData.languages.map((lang, index) => (
                <li key={index}>{lang}</li>
              ))}
            </ul>
            <div className="flex justify-center items-center mt-8">
              <div className="bg-green-500 w-10 h-10 rounded-full bg-center"></div>
              <div className="bg-green-500 w-10 h-10 rounded-full ml-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default template6; 