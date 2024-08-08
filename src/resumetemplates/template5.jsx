import React from 'react';
import templateData from './templateData'; // Import your resume data

function Template5() {
  return (
    <div className="bg-white font-times-new-roman"> {/* Apply font to the entire component */}
      <div className="container mx-auto py-10 rounded-lg shadow-lg bg-gray-200 p-6">
        <div className="flex flex-col items-center ">
          <h1 className="text-4xl font-bold text-black mb-4">
            {templateData.firstname} {templateData.lastname}
          </h1>
          <h2 className="text-lg font-medium text-black">{templateData.profession}</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-10 mt-10">
          <div className="w-full md:w-2/3">
            <h3 className="text-base font-bold mb-4 text-black">WORK EXPERIENCE</h3>

            {templateData.experience.map((job, index) => (
              <div key={index} className="border-l-2 border-black pl-4 mb-6">
                <h4 className="text-sm font-medium mb-2 text-black">{job.title}</h4>
                <p className="text-black mb-2 text-sm">{job.company} | {job.dateRange}</p>
                <p className="text-black mb-2 text-sm">{job.location}</p>
                <ul className="list-disc ml-8 text-black">
                  {job.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}

            <h3 className="text-base font-bold mt-10 mb-4 text-black">EDUCATION</h3>

            {templateData.education.map((education, index) => (
              <div key={index} className="border-l-2 border-black pl-4 mb-6">
                <h4 className="text-sm font-medium mb-2 text-black">{education.degree} in {education.fieldOfStudy}</h4>
                <p className="text-black mb-2 text-sm">{education.sclName} | {education.gradeYear}</p>
                <p className="text-black text-sm">{education.sclLocation}</p>
              </div>
            ))}

            <h3 className="text-base font-bold mt-10 mb-4 text-black">SKILLS</h3>
            <ul className="list-disc ml-8 text-black text-sm">
              {templateData.skills.primaryList.map((skill, index) => (
                <li key={index} className="flex items-center text-sm">
                  <span className="mr-2 text-sm">{skill}</span>
                  <span className="text-black text-sm">★★★★★</span> {/* Customize this rating if needed */}
                </li>
              ))}

              {templateData.skills.secondaryList.map((skill, index) => (
                <li key={index} className="flex items-center text-sm">
                  <span className="mr-2 text-sm">{skill}</span>
                  <span className="text-black">★★★★★</span> {/* Customize this rating if needed */}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <h3 className="text-base font-bold mb-4 text-black">Summary</h3>
            <p className="text-black text-sm">
              {templateData.summary}
            </p>

            <h3 className="text-base font-bold mt-10 mb-4 text-black">CONTACTS</h3>
            <div className="flex flex-col gap-4 text-sm">
              <div className="flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-black"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L10 5.414l7.293 7.293a1 1 0 001.414-1.414l-7-7a1 1 0 00-1.414 0z" />
                </svg>
                <span className="ml-2 text-black text-sm">
                  {templateData.city}, {templateData.country}
                </span>
              </div>
              <div className="flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-black"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 12.885l7.997-7.001a.75.75 0 000-1.063L12.003 2.999 2.003 12.999a.75.75 0 000 1.063z" />
                </svg>
                <span className="ml-2 text-black text-sm">
                  {templateData.email}
                </span>
              </div>
              <div className="flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-black"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.032 5.032l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 3z" />
                </svg>
                <span className="ml-2 text-black text-sm">
                  {templateData.phone}
                </span>
              </div>
              <div className="flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-black"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.032 5.032l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 3z" />
                </svg>
                <span className="ml-2 text-black text-sm">
                  <a className='text-sm' href={templateData.linkedIn} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </span>
              </div>
              <div className="flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-black"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.032 5.032l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 3z" />
                </svg>
                <span className="ml-2 text-black text-sm">
                  <a className='text-sm' href={templateData.GitHub} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </span>
              </div>

              <h3 className="text-base font-bold mt-10 mb-4 text-black">CERTIFICATIONS</h3>
              <ul className="list-disc ml-8 text-black text-sm">
                {templateData.certifications.map((certification, index) => (
                  <li className='text-sm' key={index}>{certification}</li>
                ))}
              </ul>

              <h3 className="text-base font-bold mt-10 mb-4 text-black">LANGUAGES</h3>
              <ul className="list-disc ml-8 text-black text-sm">
                {templateData.languages.map((language, index) => (
                  <li className='text-sm' key={index}>{language}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template5;
