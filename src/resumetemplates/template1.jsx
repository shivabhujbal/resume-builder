import React from 'react';
import templateData from './templateData'; // Ensure this path is correct

function Template1() {
  return (
    <div className="min-h-screen bg-white relative" style={{ fontFamily: 'Times New Roman' }}> {/* Ensure full height with a white background */}
      <div className="container mx-auto p-8 shadow-lg font-mono italic border border-gray-300" style={{ fontFamily: 'Times New Roman' }}> {/* Container with padding, shadow, and gray border */}
        {/* Center content horizontally and vertically */}
        <div className="flex flex-col items-center text-center mb-8" style={{ fontFamily: 'Times New Roman' }}> {/* Flex container for centering */}
          {/* Top-centered content */}
          <div>
            <h1 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Times New Roman' }}>{`${templateData.firstname} ${templateData.lastname}`}</h1>
            <h2 className="text-xl font-medium" style={{ fontFamily: 'Times New Roman' }}>{templateData.profession}</h2>
          </div>
        </div>
        <hr className="w-full mt-4 border-gray-400" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8" style={{ fontFamily: 'Times New Roman' }}>
          <div className="col-span-1 md:col-span-1 bg-gray-300 p-4 rounded-md shadow-md" style={{ fontFamily: 'Times New Roman' }}>
            <h3 className="text-base font-bold mb-2" style={{ fontFamily: 'Times New Roman' }}>CONTACT</h3>
            <ul className="text-sm" style={{ fontFamily: 'Times New Roman' }}> {/* Applied text-sm class */}
              <li>{`${templateData.city}, ${templateData.country}`}</li>
              <li>{templateData.phone}</li>
              <li>{templateData.email}</li>
              <li>
                <a href={templateData.linkedIn} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                  {templateData.linkedIn}
                </a>
              </li>
              <li>
                <a href={templateData.GitHub} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                  {templateData.GitHub}
                </a>
              </li>
            </ul>
            <hr className="mt-4 border-gray-400" />

            <h3 className="text-base font-bold mb-4 mt-8" style={{ fontFamily: 'Times New Roman' }}>SKILLS</h3>
            <ul className="text-sm" style={{ fontFamily: 'Times New Roman' }}> {/* Applied text-sm class */}
              <li>
                <strong>Primary:</strong> {templateData.skills.primaryList.join(", ")}
              </li>
              <li>
                <strong>Secondary:</strong> {templateData.skills.secondaryList.join(", ")}
              </li>
            </ul>
            <hr className="mt-4 border-gray-400" />

            <h3 className="text-base font-bold mb-4 mt-8" style={{ fontFamily: 'Times New Roman' }}>LANGUAGES</h3>
            <ul className="text-sm" style={{ fontFamily: 'Times New Roman' }}> {/* Applied text-sm class */}
              {templateData.languages.map((lang, index) => (
                <li key={index}>{lang}</li>
              ))}
            </ul>
           
          </div>

          <div className="col-span-1 md:col-span-1" style={{ fontFamily: 'Times New Roman' }}>
            <h3 className="text-base font-bold mb-4" style={{ fontFamily: 'Times New Roman' }}>EDUCATION</h3>
            <ul className="text-sm" style={{ fontFamily: 'Times New Roman' }}> {/* Applied text-sm class */}
              {templateData.education.map((edu, index) => (
                <li key={edu.EducationID}>
                  {`${edu.sclName} | ${edu.sclLocation}`}
                  <br />
                  {`${edu.degree} in ${edu.fieldOfStudy}, ${edu.gradeYear}`}
                </li>
              ))}
            </ul>
            <hr className="mt-4 border-gray-400" />

            <h3 className="text-base font-bold mb-4 mt-8" style={{ fontFamily: 'Times New Roman' }}>EXPERIENCE</h3>
            <ul className="text-sm" style={{ fontFamily: 'Times New Roman' }}> {/* Applied text-sm class */}
              {templateData.experience.map((exp, index) => (
                <li key={index}>
                  {`${exp.dateRange}`}
                  <br />
                  {`${exp.title} | ${exp.company}`}
                  <br />
                  {exp.location}
                  <ul className="text-sm" style={{ fontFamily: 'Times New Roman' }}> {/* Applied text-sm class for nested list */}
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <hr className="mt-4 border-gray-300" />

            <h3 className="text-base font-bold mb-4 mt-8" style={{ fontFamily: 'Times New Roman' }}>CERTIFICATIONS</h3>
            <ul className="text-sm" style={{ fontFamily: 'Times New Roman' }}> {/* Applied text-sm class */}
              {templateData.certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
           
          </div>
        </div>
        <hr className="mt-4 border-gray-400" />
      </div>
    </div>
  );
}

export default Template1;