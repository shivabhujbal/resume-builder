import React from 'react';
import templateData from './templateData'; // Ensure this path is correct
import EditButton from './EditButton';
import Sidebar from './Sidebar';

function SummaryDetail() {
  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
      {/* Sidebar Component */}
      <div className="sticky top-0 h-screen overflow-y-auto bg-gray-100">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow overflow-y-auto p-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <form className="w-full">
            {/* Contact and Education Sections Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Contact Section */}
              <div className="flex-1 border border-gray-300 hover:shadow-xl p-8 bg-white relative">
                <div className="absolute top-2 right-2 flex space-x-2 z-10">
                  <EditButton />
                </div>
                <h2 className="text-lg font-bold mb-2">Contact</h2>
                <p className="text-base">
                  <span className="font-bold text-sm">User Id: </span>
                  <span className="text-sm">{templateData.userId}</span>
                </p>
                <p className="text-base">
                  <span className="font-bold text-sm">First Name: </span>
                  <span className="text-sm">{templateData.firstname}</span>
                </p>
                <p className="text-base">
                  <span className="font-bold text-sm">Last Name: </span>
                  <span className="text-sm">{templateData.lastname}</span>
                </p>
                <p className="text-base">
                  <span className="font-bold text-sm">Profession: </span>
                  <span className="text-sm">{templateData.profession}</span>
                </p>
                <p className="text-base">
                  <span className="font-bold text-sm">City: </span>
                  <span className="text-sm">{templateData.city}</span>
                </p>
                <p className="text-base">
                  <span className="font-bold text-sm">Country: </span>
                  <span className="text-sm">{templateData.country}</span>
                </p>
                <p className="text-base">
                  <span className="font-bold text-sm">Mobile Number: </span>
                  <span className="text-sm">{templateData.phone}</span>
                </p>
                <p className="text-base">
                  <span className="font-bold text-sm">Email: </span>
                  <span className="text-sm">{templateData.email}</span>
                </p>
                <p className="text-base">
                  <span className="font-bold text-sm">LinkedIn: </span>
                  <a
                    href={templateData.linkedIn}
                    className="text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {templateData.linkedIn}
                  </a>
                </p>
                <p className="text-base">
                  <span className="font-bold text-sm">GitHub: </span>
                  <a
                    href={templateData.GitHub}
                    className="text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {templateData.GitHub}
                  </a>
                </p>
              </div>

              {/* Education Section */}
              <div className="flex-1 border border-gray-300 hover:shadow-xl p-8 bg-white relative">
                <div className="absolute top-2 right-2 flex space-x-2 z-10">
                  <EditButton />
                </div>
                <h2 className="text-lg font-bold mb-4">Education</h2>
                {templateData.education.map((edu) => (
                  <div key={edu.EducationID} className="mb-4">
                    <p className="text-base">
                      <span className="font-bold text-sm">Degree: </span>
                      <span className="text-sm">{edu.degree}</span>
                    </p>
                    <p className="text-base">
                      <span className="font-bold text-sm">Field of Study: </span>
                      <span className="text-sm">{edu.fieldOfStudy}</span>
                    </p>
                    <p className="text-base">
                      <span className="font-bold text-sm">College Name: </span>
                      <span className="text-sm">{edu.sclName}</span>
                    </p>
                    <p className="text-base">
                      <span className="font-bold text-sm">Location: </span>
                      <span className="text-sm">{edu.sclLocation}</span>
                    </p>
                    <p className="text-base">
                      <span className="font-bold text-sm">Passing Year: </span>
                      <span className="text-sm">{edu.gradeYear}</span>
                    </p>
                  </div>
                ))}
                {templateData.certifications.length > 0 && (
                  <>
                    <h3 className="text-base font-bold mb-2">Certifications</h3>
                    <ul className="list-disc ml-5 text-sm">
                      {templateData.certifications.map((cert, index) => (
                        <li className="text-sm" key={index}>
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>

            {/* Experience and Skills Sections Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Experience Section */}
              <div className="flex-1 border border-gray-300 hover:shadow-xl p-8 bg-white relative">
                <div className="absolute top-2 right-2 flex space-x-2 z-10">
                  <EditButton />
                </div>
                <h2 className="text-lg font-bold mb-4">Experience</h2>
                {templateData.experience.map((exp, index) => (
                  <div key={index} className="mb-4">
                    <p className="text-base">
                      <span className="font-bold text-sm">Job Title: </span>
                      <span className="text-sm">{exp.title}</span>
                    </p>
                    <p className="text-base">
                      <span className="font-bold text-sm">Company Name: </span>
                      <span className="text-sm">{exp.company}</span>
                    </p>
                    <p className="text-base">
                      <span className="font-bold text-sm">Company Location: </span>
                      <span className="text-sm">{exp.location}</span>
                    </p>
                    <p className="text-base">
                      <span className="font-bold text-sm">Experience (in years): </span>
                      <span className="text-sm">{exp.dateRange}</span>
                    </p>
                    <ul className="list-disc ml-5 text-base">
                      <span className="font-bold text-sm">Responsibilities: </span>
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li className="text-sm" key={respIndex}>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Skills Section */}
              <div className="flex-1 border border-gray-300 hover:shadow-xl p-8 bg-white relative">
                <div className="absolute top-2 right-2 flex space-x-2 z-10">
                  <EditButton />
                </div>
                <h2 className="text-lg font-bold mb-2">Skills</h2>
                <table className="w-full text-left border-separate border-spacing-4">
                  <tbody>
                    <tr>
                      <td className="font-bold text-sm border-b border-r border-black p-2">
                        Primary Skills
                      </td>
                      <td className="text-base border-b border-black p-2">
                        <p className="text-sm">
                          {templateData.skills.primaryList.join(', ')}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold text-sm border-b border-r border-black p-2">
                        Secondary Skills
                      </td>
                      <td className="text-base border-b border-black p-2">
                        <p className="text-sm">
                          {templateData.skills.secondaryList.join(', ')}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Languages and Summary Sections Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Languages Section */}
              <div className="flex-1 border border-gray-300 p-8 hover:shadow-xl bg-white relative">
                <div className="absolute top-2 right-2 flex space-x-2 z-10">
                  <EditButton />
                </div>
                <h2 className="text-lg font-bold mb-2">Languages</h2>
                <div className="table-responsive">
                  <table className="w-full text-left border-separate border-spacing-4">
                    <thead>
                      <tr>
                        <th className="border-b border-r border-black font-bold text-sm p-2">
                          #
                        </th>
                        <th className="border-b border-black font-bold text-sm p-2">
                          Language
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {templateData.languages.map((lang, index) => (
                        <tr className="text-sm" key={index}>
                          <th
                            scope="row"
                            className="border-b border-r border-black text-base p-2"
                          >
                            {index + 1}
                          </th>
                          <td className="border-b border-black text-base p-2">
                            <p className="text-sm">{lang}</p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Summary Section */}
              <div className="flex-1 border border-gray-300 hover:shadow-xl p-8 bg-white relative">
                <div className="absolute top-2 right-2 flex space-x-2 z-10">
                  <EditButton />
                </div>
                <h2 className="text-lg font-bold mb-2">Summary</h2>
                <p className="text-base">
                  <span className="text-sm">{templateData.summary}</span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SummaryDetail;
