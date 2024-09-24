import React from 'react';
import templateData from '../templateData'; // Ensure you have the correct import for templateData

const Template11 = () => {
  return (
    <div className="min-h-screen bg-gray-200 p-8 flex justify-center items-center">
      <div
        className="bg-white text-gray-800 rounded-lg shadow-lg p-10 flex flex-col md:flex-row"
        style={{
          width: '210mm',  // A4 width
          boxSizing: 'border-box', // Ensures padding and border are included in the total width/height
        }}
      >
        {/* Right Section with Profile Picture */}
        <div className="md:w-2/3 md:mr-8 bg-purple-100 p-4">
          <div className="flex flex-col items-center">
            {/* <img
              src={templateData.profileImage}
              alt="Profile"
              className="w-32 h-32 rounded-full mb-4"
            /> */}
            <h1 className="text-4xl font-bold text-purple-700">{templateData.firstname} {templateData.lastname}</h1>
            <h2 className="text-xl text-gray-600 mb-4">{templateData.profession}</h2>
          </div>

          {/* Work Experience */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-purple-700">Work Experience</h2>
            {templateData.experience.map((exp, index) => (
              <div className="mt-4" key={index}>
                <h3 className="text-lg font-semibold text-gray-600">{exp.title}</h3>
                <p className="text-gray-500">{exp.company}, {exp.dateRange}</p>
                <ul className="list-disc list-inside mt-2 text-gray-600">
                  {exp.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-purple-700">Education</h2>
            {templateData.education.map((edu) => (
              <div className="mt-4" key={edu.EducationID}>
                <h3 className="text-lg font-semibold text-gray-600">{edu.degree} in {edu.fieldOfStudy}</h3>
                <p className="text-gray-500">{edu.sclName}, {edu.sclLocation}, Graduated: {edu.gradeYear}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-purple-700">Certifications</h2>
            <ul className="mt-4 list-disc list-inside text-gray-600">
              {templateData.certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-purple-700">Projects</h2>
            {templateData.projects.map((project) => (
              <div className="mt-4" key={project.title}>
                <h3 className="text-lg font-semibold text-gray-600">{project.title}</h3>
                <p className="text-gray-500">{project.description}</p>
                <p className="text-gray-500"><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
                <p><a href={project.link} className="text-blue-500">View Project</a></p>
              </div>
            ))}
          </div>

          {/* Declaration */}
          <div>
            <h2 className="text-2xl font-bold text-purple-700">Declaration</h2>
            <p className="text-gray-600 italic">{templateData.declaration}</p>
          </div>
        </div>

        {/* Left Section - Contact Information, Summary, Skills, and Languages */}
        <div className="md:w-1/3 flex flex-col bg-purple-100 p-4">
          {/* Contact Information */}
          <div className="mt-6">
            <p className="font-semibold text-gray-600">Contact Information</p>
            <p className="mt-2"><strong>Phone:</strong> {templateData.phone}</p>
            <p><strong>Email:</strong> {templateData.email}</p>
            <p><strong>Address:</strong> {templateData.city}, {templateData.country}</p>
            <p><strong>LinkedIn:</strong> <a href={templateData.linkedIn} className="text-blue-500">{templateData.linkedIn}</a></p>
            <p><strong>GitHub:</strong> <a href={templateData.GitHub} className="text-blue-500">{templateData.GitHub}</a></p>
          </div>

          {/* Additional Sections in Left Column */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-purple-700">Summary</h2>
            <p className="text-gray-600">{templateData.summary}</p>
          </div>
          
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-purple-700">Skills</h2>
            <ul className="mt-4 list-disc list-inside text-gray-600">
              {templateData.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-purple-700">Languages</h2>
            <ul className="mt-4 list-disc list-inside text-gray-600">
              {templateData.languages.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template11;