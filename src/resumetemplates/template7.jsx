import React from 'react';
import templateData from './templateData'; // Import your resume data

function Template5() {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-16 font-verdana "> {/* Apply Verdana font to the entire component */}
      <div className="flex justify-center">
        <div className="bg-white p-8 rounded-lg w-full max-w-4xl max-h-4xl h-full border shadow-sm">
          <div className="flex flex-col md:flex-row gap-8 ">
            {/* Left Column: Profile and General Information */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4 text-center text-indigo-500">
                {templateData.firstname} {templateData.lastname}
              </h2>
              <p className='text-xl font-bold mb-4 text-center'>{templateData.profession}</p>
              <div className="mb-6">
                <ul className="list-none p-0">
                  <li className="flex items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 mr-2 text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700 text-sm">{templateData.city}, {templateData.country} {templateData.phone}</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 mr-2 text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.22l.27.34a1 1 0 01.71.73l.59.79a1 1 0 00.75.59l.79.59a1 1 0 01.73.71l.34.27a1 1 0 01.73.71l.79.59a1 1 0 00.75.59l.79.59a1 1 0 01.71.73l.27.34a1 1 0 011 1v1.22a1 1 0 01-.75.59l-.79.59a1 1 0 00-.75.59l-.59.79a1 1 0 01-.73.71l-.34.27a1 1 0 01-.73.71l-.79.59a1 1 0 00-.75.59l-.79.59a1 1 0 01-.71.73l-.27.34a1 1 0 01-1 1H3a1 1 0 01-1-1V4.72a1 1 0 01.75-.59l.79-.59a1 1 0 00.75-.59l.59-.79a1 1 0 01.73-.71l.34-.27a1 1 0 01.73-.71l.79-.59a1 1 0 00.75-.59l.79-.59a1 1 0 01.71-.73l.27-.34a1 1 0 011-1h.08a1 1 0 011 1v12.22a1 1 0 01-.59.75l-.59.79a1 1 0 00-.59.75l-.79.59a1 1 0 01-.71.73l-.27.34a1 1 0 01-1 1H8.22l-.27-.34a1 1 0 01-.71-.73l-.59-.79a1 1 0 00-.75-.59l-.79-.59a1 1 0 01-.73-.71l-.34-.27a1 1 0 01-.73-.71l-.79-.59a1 1 0 00-.75-.59l-.79-.59a1 1 0 01-.71-.73l-.27-.34a1 1 0 01-1-1V3z" />
                    </svg>
                    <span className="text-gray-700 text-sm">{templateData.email}</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 mr-2 text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 12.138V20a2 2 0 002 2h8a2 2 0 002-2v-7.862l7.997-7.997a2 2 0 000-2.828L18 2.003a2 2 0 00-2.828 0L10 5.884V0a2 2 0 00-2-2H4a2 2 0 00-2 2v5.884L2.003 5.884z" />
                    </svg>
                    <span className="text-gray-700 text-sm">
                      <a href={templateData.linkedIn} target="_blank" rel="noopener noreferrer" className='text-sm text-blue-500'>
                        LinkedIn
                      </a>
                    </span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 mr-2 text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 12.138V20a2 2 0 002 2h8a2 2 0 002-2v-7.862l7.997-7.997a2 2 0 000-2.828L18 2.003a2 2 0 00-2.828 0L10 5.884V0a2 2 0 00-2-2H4a2 2 0 00-2 2v5.884L2.003 5.884z" />
                    </svg>
                    <span className="text-gray-700 text-sm">
                      <a href={templateData.GitHub} target="_blank" rel="noopener noreferrer" className='text-sm text-blue-500'>
                        GitHub
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-500">SUMMARY</h3>
              <p className="text-gray-600 mb-6 border border-gray-300 shadow-sm rounded-md p-1 text-sm">
                {templateData.summary}
              </p>
              <h3 className="text-lg font-bold mb-2 text-gray-500">SKILLS</h3>
              <table className="w-full text-sm text-gray-600 border border-gray-300 rounded-md shadow-sm p-2">
                <tbody>
                  <tr>
                    <td className="text-base font-bold">Primary Skills</td>
                    <td>{templateData.skills.primaryList.join(', ')}</td>
                  </tr>
                  <tr>
                    <td className="text-base font-bold">Secondary Skills</td>
                    <td>{templateData.skills.secondaryList.join(', ')}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Right Column: Experience and Education */}
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-1 text-gray-500">EXPERIENCE</h3>
              {templateData.experience.map((job, index) => (
                <div key={index} className="border border-gray-300 rounded-md shadow-sm p-1 mb-1 text-sm">
                  <h4 className="font-bold mb-1 text-sm">
                    {job.title}, {job.dateRange}
                  </h4>
                  <p className="text-gray-600 font-medium mb-1 text-sm">
                    {job.company}, {job.location}
                  </p>
                  <ul className="list-disc pl-1 text-gray-600 text-sm">
                    {job.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              ))}
              <h3 className="text-lg font-bold mb-1 mt-1 text-gray-500">EDUCATION</h3>
              {templateData.education.map((edu, index) => (
                <div key={index} className="border border-gray-300 p-1 rounded-md shadow-md mb-1">
                  <h4 className="text-sm mb-2">
                    {edu.degree} in {edu.fieldOfStudy}, {edu.gradeYear}
                  </h4>
                  <p className="text-gray-600 font-medium mb-1 text-sm">
                    {edu.sclName}, {edu.sclLocation}
                  </p>
                </div>
              ))}
              <h3 className="text-lg font-bold mb-2 mt-6 text-gray-500">CERTIFICATIONS</h3>
              <div className="overflow-auto rounded-md border border-gray-300 p-1 shadow-sm">
                <ul className="list-disc pl-5 text-gray-600 text-sm">
                  {templateData.certifications.map((certification, index) => (
                    <li key={index}>{certification}</li>
                  ))}
                </ul>
              </div>
              <h3 className="text-lg font-bold mb-2 mt-6 text-gray-500">LANGUAGES</h3>
              <div className="overflow-auto border border-gray-300 rounded-md shadow-sm">
                <ul className="list-disc pl-5 text-gray-600 text-sm">
                  {templateData.languages.map((language, index) => (
                    <li key={index}>{language}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template5;
