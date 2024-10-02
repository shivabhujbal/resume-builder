import React from 'react';
import PropTypes from 'prop-types';
import templateData from './templateData';

const template30 = ({ userData }) => {
  return (
    <div className="w-[210mm] h-[287mm] mx-auto  shadow-xl p-2 font-sans overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-4 gap-0">
        {/* Left Side */}
        <div className="col-span-1 bg-pink-300 p-2 space-y-2 rounded-l-lg">
          {/* Contact Section */}
          <div>
            <div className="text-gray-800 space-y-1">
              <p><strong>Email:</strong> {userData.besicDetails.email}</p>
              <p><strong>Phone:</strong> {userData.besicDetails.phone}</p>
              <p><strong>Location:</strong> {`${userData.besicDetails.city}, ${userData.besicDetails.country}`}</p>
            </div>
          </div>

          {/* Languages Section */}
          <div>
            <h4 className="text-lg font-semibold text-pink-600 mb-1">Languages</h4>
            <ul className="text-gray-700 space-y-1">
              {userData.skillList[0].languages.split(", ").map((lang, index) => (
                <p key={index} className="text-sm">{lang}</p>
              ))}
            </ul>
          </div>

          {/* Certifications Section */}
          <div>
            <h4 className="text-lg font-semibold text-pink-600 mb-1">Certifications</h4>
            <ul className="text-gray-700 space-y-1">
              {userData.educationList.map((education, eduIndex) =>
                education.certification.map((cert, certIndex) => (
                  <p key={`${eduIndex}-${certIndex}`} className="text-sm">{cert}</p>
                ))
              )}
            </ul>
          </div>

          {/* LinkedIn and GitHub Links */}
          <div>
            <h4 className="text-lg font-semibold text-pink-600 mb-1 mt-60">Profiles</h4>
            <ul className="text-blue-600 space-y-1 text-sm">
              <li><a href={userData.besicDetails.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href={userData.besicDetails.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>

          {/* Declaration Section */}
          <div>
            <h2 className="text-lg font-semibold text-pink-600 mt-10">Declaration</h2>
            <p className="text-sm text-gray-700">{templateData.declaration}</p>
          </div>

        </div>

        {/* Right Side */}
        <div className="col-span-3 p-2 space-y-4 bg-white rounded-r-lg shadow-sm">
          {/* Name and Profession Header */}
          <div className="border-b pb-1">
            <h1 className="text-3xl font-bold text-pink-600">
              {userData.besicDetails.first_name} {userData.besicDetails.last_name}
            </h1>
            <h3 className="text-sm text-gray-600">{userData.besicDetails.profession}</h3>
          </div>

          {/* Summary Section */}
          <div>
            <h2 className="text-lg font-semibold text-pink-600">Summary</h2>
            <p className="text-gray-700 text-sm">{userData.besicDetails.message}</p>
          </div>

          {/* Education Section */}
          <div>
            <h2 className="text-lg font-semibold text-pink-600">Education</h2>
            <div className="space-y-1">
              {userData.educationList.map((edu) => (
                <div key={edu.EducationID}>
                  <h3 className="text-sm font-bold text-gray-900">{edu.schoolName}</h3>
                  <p className="text-sm text-gray-600">{edu.degree} - {edu.fieldOfStudy}</p>
                  <p className="text-sm text-gray-600">Graduated: {edu.graduationYear}</p>
                  <p className="text-sm text-gray-500">{edu.schoolLocation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h2 className="text-lg font-semibold text-pink-600">Experience</h2>
            <div className="space-y-1">
              {userData.experianceList.map((job, index) => (
                <div key={index}>
                  <h3 className="text-sm font-bold text-gray-800">{job.title}</h3>
                  <p className="text-sm text-gray-600">{job.company} - {job.location}</p>
                  <p className="text-sm text-gray-500">{job.startDate} - {job.endDate}</p>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    {job.responsibility.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Section */}
          <div>
            <h2 className="text-lg font-semibold text-pink-600">Projects</h2>
            <div className="space-y-1">
              {userData.projectList.map((proj, index) => (
                <div key={index}>
                  <h3 className="text-sm font-bold text-gray-800">{proj.projectTitle}</h3>
                  <p className="text-sm text-gray-700">{proj.description}</p>
                  <p className="text-sm text-gray-700"><strong>Technologies:</strong> {proj.techstack.join(', ')}</p>
                  <a href={proj.link} className="text-blue-500 text-xs" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

template30.propTypes = {
  userData: PropTypes.shape({
    besicDetails: PropTypes.shape({
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      profession: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      linkedin: PropTypes.string.isRequired,
      github: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    }).isRequired,
    educationList: PropTypes.arrayOf(
      PropTypes.shape({
        graduationYear: PropTypes.string.isRequired,
        degree: PropTypes.string.isRequired,
        schoolName: PropTypes.string.isRequired,
        schoolLocation: PropTypes.string.isRequired,
        fieldOfStudy: PropTypes.string.isRequired,
        certification: PropTypes.arrayOf(PropTypes.string).isRequired,
      }).isRequired
    ).isRequired,
    experianceList: PropTypes.arrayOf(
      PropTypes.shape({
        company: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        responsibility: PropTypes.arrayOf(PropTypes.string).isRequired,
      }).isRequired
    ).isRequired,
    projectList: PropTypes.arrayOf(
      PropTypes.shape({
        projectTitle: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        techstack: PropTypes.arrayOf(PropTypes.string).isRequired,
        description: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    skillList: PropTypes.arrayOf(
      PropTypes.shape({
        languages: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    declaration: PropTypes.string.isRequired,
  }).isRequired,
};

export default template30;
