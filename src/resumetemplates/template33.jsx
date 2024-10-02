import React from 'react';
import templateData from '../resumetemplates/templateData';

const Template33 = ({ userData }) => {
  return (
    <div className="w-[210mm] h-[287mm] mx-auto bg-white shadow-lg rounded-lg p-6 mt-6 border border-gray-200">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white text-center p-4 rounded-t-lg">
        <h1 className="text-lg font-bold">{userData.besicDetails.first_name} {userData.besicDetails.last_name}</h1>
        <p className="text-xs mt-1 italic">{userData.besicDetails.profession}</p>
        <div className="flex justify-center space-x-4 mt-2 text-xs">
          <span>📞 {userData.besicDetails.phone}</span>
          <span>✉ {userData.besicDetails.email}</span>
          <span>{`${userData.besicDetails.city}, ${userData.besicDetails.country}`}</span>
        </div>
      </div>

      {/* Summary Section */}
      <div className="mt-4">
        <h2 className="text-xs font-semibold border-b-2 border-blue-600 pb-1">Career Summary</h2>
        <p className="mt-2 text-gray-700 text-xs leading-relaxed">
          {userData.besicDetails.message}
        </p>
      </div>

      {/* Skills Section */}
      <div className="mt-2">
        <h2 className="text-xs font-semibold border-b-2 border-blue-600 pb-1">Technical Skills</h2>
        <div className="mt-1 text-gray-700 grid grid-cols-2 gap-2 text-xs">
          {userData.skillList[0].skills.map((skill, index) => (
            <span key={index} className="bg-gray-200 text-gray-800 py-1 px-1 rounded-lg">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="mt-2">
        <h2 className="text-xs font-semibold border-b-2 border-blue-600 pb-1">Education</h2>
        {userData.educationList.map((edu) => (
          <div key={edu.EducationID} className="mt-2 text-xs">
            <h3 className="font-medium"> {edu.degree} - {edu.fieldOfStudy}</h3>
            <p>{edu.schoolName}, {edu.schoolLocation}</p>
            <p>Graduated: {edu.graduationYear}</p>
          </div>
        ))}
      </div>

      {/* Work Experience Section */}
      <div className="mt-2">
        <h2 className="text-xs font-semibold border-b-2 border-blue-600 pb-1">Work Experience</h2>
        {userData.experianceList.map((job, index) => (
          <div key={index} className="mt-2 text-xs">
            <h3 className="font-medium">{job.title} at {job.company}</h3>
            <p>{job.location}</p>
            <p>{job.startDate} - {job.endDate}</p>
            <ul className="list-disc pl-4">
              {job.responsibility.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Projects Section */}
      <div className="mt-2">
        <h2 className="text-xs font-semibold border-b-2 border-blue-600 pb-1">Projects</h2>
        {userData.projectList.map((proj, index) => (
          <div key={index} className="mt-2 text-xs">
            <h3 className="font-medium">{proj.projectTitle}</h3>
            <p>{proj.description}</p>
            <p>{proj.projectRole}
              <a href={proj.link} className="text-blue-500 ml-2" target="_blank" rel="noopener noreferrer">View Project</a>
            </p>
          </div>
        ))}
      </div>

      {/* Languages Section */}
      <div className="mt-2">
        <h2 className="text-xs font-semibold border-b-2 border-blue-600 pb-1">Languages</h2>
        <ul className="mt-1 grid grid-cols-2 gap-2 text-xs">
          {userData.skillList[0].languages.split(", ").map((lang, index) => (
            <li key={index}>{lang}</li>
          ))}
        </ul>
      </div>

      {/* Certifications Section */}
      <div className="mt-2">
        <h2 className="text-xs font-semibold border-b-2 border-blue-600 pb-1">Certifications</h2>
        <ul className="grid grid-cols-2 gap-2 text-xs">
          {userData.educationList.map((education) =>
            education.certification.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))
          )}
        </ul>
      </div>

      {/* Footer Section */}
      <div className="mt-5 text-center border-t border-gray-300 pt-1 text-xs text-gray-500">
        <p>Declaration: {templateData.declaration}</p>
      </div>
    </div>
  );
};

export default Template33;
