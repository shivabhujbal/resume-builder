import React from 'react';
import templateData from './templateData'; // Import your data from resumeData.js

function Template3() {
  return (
    <div className="h-screen flex flex-col font-serif">
      <div className="container mx-auto p-4 bg-gray-100 flex-1 flex flex-col">
        {/* Centered Name and Profession */}
        <div className="bg-green-200 p-4 rounded-t-lg flex flex-col items-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">{templateData.firstname} {templateData.lastname}</h1>
          <h2 className="text-lg font-medium text-gray-700">{templateData.profession}</h2>
        </div>
        
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 mt-0">
          <div className="bg-green-200 rounded-lg shadow-md p-6 flex flex-col">
            <h3 className="text-base font-bold text-gray-800 mb-4">CONTACT</h3>
            <ul className="text-gray-600 text-sm">
              <li className="mb-2">
                <span className="text-gray-800 font-medium">Phone:</span> {templateData.phone}
              </li>
              <li className="mb-2">
                <span className="text-gray-800 font-medium">Email:</span> {templateData.email}
              </li>
              <li className="mb-2">
                <span className="text-gray-800 font-medium">LinkedIn:</span> <a href={templateData.linkedIn} target="_blank" rel="noopener noreferrer">{templateData.linkedIn}</a>
              </li>
              <li className="mb-2">
                <span className="text-gray-800 font-medium">GitHub:</span> <a href={templateData.GitHub} target="_blank" rel="noopener noreferrer">{templateData.GitHub}</a>
              </li>
            </ul>
            <h3 className="text-base font-bold text-gray-800 mb-4">CERTIFICATIONS</h3>
            <ul className="text-gray-600 text-sm">
              {templateData.certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
            <h3 className="text-base font-bold text-gray-800 mb-4">LANGUAGES</h3>
            <ul className="text-gray-600 text-sm">
              {templateData.languages.map((lang, index) => (
                <li key={index}>{lang}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
            <h3 className="text-base font-bold text-gray-800 mb-4"> EXPERIENCE</h3>
            <div className="flex-1">
              {templateData.experience.map((job, index) => (
                <div key={index} className="text-gray-600 mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">{job.title}</h4>
                  <div>
                    <span className="font-medium text-gray-800 text-sm">{job.company}</span> - {job.location} ({job.dateRange})
                    <ul className="list-disc pl-5 mt-2 text-sm">
                      {job.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <h3 className="text-base font-bold text-gray-800 mb-1">EDUCATION</h3>
            <div className="flex-1">
              {templateData.education.map((education, index) => (
                <div key={index} className="text-gray-600 mb-4 text-base">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">{education.degree} in {education.fieldOfStudy}</h4>
                  <div className="text-sm">
                    <span className="font-medium text-gray-800">{education.sclName}</span> - {education.sclLocation} ({education.gradeYear})
                  </div>
                </div>
              ))}
            </div>
            <h3 className="text-base font-bold mt-4">Skills</h3>
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <tbody>
                <tr>
                  <td className="text-sm font-bold text-gray-800">Primary Skills</td>
                  <td className="text-sm text-gray-600">{templateData.skills.primaryList.join(', ')}</td>
                </tr>
                <tr>
                  <td className="text-sm font-bold text-gray-800">Secondary Skills</td>
                  <td className="text-sm text-gray-600">{templateData.skills.secondaryList.join(', ')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template3;