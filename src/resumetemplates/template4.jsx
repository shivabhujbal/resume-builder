import React from 'react';
import templateData from './templateData';

function Template4() {
  return (
    <div className="bg-gray-900 text-black font-sans p-6 font-vedana A4 rounded-lg shadow-2xl border border-gray-700">
      <div className="flex flex-col items-center">
        <div className="bg-teal-300 text-white py-4 px-6 rounded-t-lg w-full flex flex-col items-center">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex flex-col md:w-1/2 text-center">
              <h1 className="text-2xl font-bold whitespace-nowrap sm:text-2xl lg:text-2xl">{templateData.firstname} {templateData.lastname}</h1>
              <h2 className="text-xl whitespace-nowrap sm:text-2xl lg:text-xl">{templateData.profession}</h2>
            </div>
          </div>
        </div>
        <div className="bg-white mt-0 p-4 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col md:w-1/2">
              <h3 className="text-base font-bold mb-2">WORK EXPERIENCE</h3>
              <div className="flex flex-col gap-2">
                {templateData.experience.map((job, index) => (
                  <div key={index} className="border-b border-gray-700 py-2">
                    <h4 className="text-base font-medium mb-1">{job.title}</h4>
                    <p className="text-sm">{job.company} | {job.location} | {job.dateRange}</p>
                    <ul className="list-disc pl-5 text-sm">
                      {job.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <h3 className="text-base font-bold mt-4 mb-2">EDUCATION</h3>
              <div className="flex flex-col gap-2">
                {templateData.education.map((education, index) => (
                  <div key={index} className="border-b border-gray-700 py-2">
                    <h4 className="text-base font-medium mb-1">{education.degree} in {education.fieldOfStudy}</h4>
                    <p className="text-sm">{education.sclName} | {education.sclLocation} | {education.gradeYear}</p>
                  </div>
                ))}
              </div>
              <h3 className="text-base font-bold mt-4 mb-2">SKILLS</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Primary Skills</li>
                {templateData.skills.primaryList.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
                <li>Secondary Skills</li>
                {templateData.skills.secondaryList.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col md:w-1/2">
              <h3 className="text-base font-bold mb-2">SUMMARY</h3>
              <p className="text-sm">{templateData.summary}</p>
              <h3 className="text-base font-bold mt-4 mb-2">CONTACTS</h3>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9 7 7 0 01-9.9-9.9zm10 0a7 7 0 11-9.9 9.9 7 7 0 019.9-9.9z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm">{templateData.city}, {templateData.country}</p>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 12.982l7.997-7.1 1.214 1.214L10 15.414l-7.786-7.786z" />
                  </svg>
                  <p className="text-sm">{templateData.email}</p>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 20 2 15.18 2 3z" />
                  </svg>
                  <p className="text-sm">{templateData.phone}</p>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11.48 10.01a4.485 4.485 0 010 5.652l-2.5 1.25a5.726 5.726 0 01-8.398 2.627l-2.2 1.1a4.477 4.477 0 01-7.451 2.52l.953-2.389a5.726 5.726 0 012.627-8.398l1.25-2.5a4.485 4.485 0 015.652 0z" />
                    <path d="M10 17a7 7 0 110-14 7 7 0 010 14z" />
                  </svg>
                  <a href={templateData.linkedIn} className="text-sm" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 20a10 10 0 110-20 10 10 0 010 20zm.002-11.999a4.482 4.482 0 00-4.482 4.482 4.482 4.482 0 004.482 4.482 4.482 4.482 0 004.482-4.482 4.482 4.482 0 00-4.482-4.482z" />
                  </svg>
                  <a href={templateData.GitHub} className="text-sm" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
                <h3 className="text-base font-bold mt-4 mb-2">LANGUAGES</h3>
                <div className="flex flex-col gap-2">
                  {templateData.languages.map((language, index) => (
                    <p key={index} className="text-sm">{language}</p>
                  ))}
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template4;
