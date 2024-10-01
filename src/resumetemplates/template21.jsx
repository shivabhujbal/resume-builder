import React from 'react';
import templateData from '../resumetemplates/templateData';
import PropTypes from 'prop-types';

const template21 = ({ userData }) => {
  return (
    <div className="w-[210mm] h-[287mm] mx-auto my-10 p-3 bg-white shadow-1g rounded-lg border-4 border-purple-500">
      {/* Header Section */}
      <div className="text-center mb-2">
        <h1 className="text-4xl font-bold text-purple-600">
          {userData.besicDetails.first_name} {userData.besicDetails.last_name}
        </h1>
        <p className="text-lg text-purple-400 font-medium">
          {userData.besicDetails.profession}
        </p>
        <div className="flex justify-center mt-1 space-x-4">
          {/* Address */}
          <div className="flex items-center text-gray-600">
            <svg
              className="w-4 h-4 text-purple-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V10z"
              />
            </svg>
            <p className="ml-1">
              {`${userData.besicDetails.city}, ${userData.besicDetails.country}`}
            </p>
          </div>
          {/* Email */}
          <div className="flex items-center text-gray-600">
            <svg
              className="w-4 h-4 text-purple-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 8a6 6 0 01-12 0V7a6 6 0 0112 0v1zM21 20.5a4.978 4.978 0 00-1.212-.395C18.157 19.579 17 18.006 17 16.5V16a9.003 9.003 0 00-8-8.995A9.003 9.003 0 001 16v.5c0 1.506-1.157 3.079-2.788 3.605A4.978 4.978 0 00-1 20.5H21z"
              />
            </svg>
            <p className="ml-1">{userData.besicDetails.email}</p>
          </div>
          {/* Phone */}
          <div className="flex items-center text-gray-600">
            <svg
              className="w-4 h-4 text-purple-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 10l4.552 4.552a2 2 0 010 2.83L15 22l-4.552-4.552a2 2 0 010-2.83L15 10zM6 4h12"
              />
            </svg>
            <p className="ml-1">{userData.besicDetails.phone}</p>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <section className="mb-2">
        <h2 className="text-lg font-semibold text-purple-500 border-b border-purple-300 ">
          Profile
        </h2>
        <p className="mt-1 text-gray-700 leading-relaxed text-sm">
          {userData.besicDetails.message}
        </p>
      </section>

      {/* Professional Experience Section */}
      <section className="mb-2">
        <h2 className="text-lg font-semibold text-purple-500 border-b border-purple-300 ">
          Professional Experience
        </h2>
        {userData.experianceList.map((exp, index) => (
          <div key={exp.title} className="mt-1">
            <h3 className="text-md  text-gray-800">
              {exp.title} at {exp.company}
            </h3>
            <p className="text-xs text-gray-500">
              {`${exp.location} | ${exp.startDate} - ${exp.endDate}`}
            </p>
            <ul className="list-disc list-inside">
              {exp.responsibility.map((resp, idx) => (
                <p key={idx} className="text-xs">
                  <span className="font-bold mr-1">&#8226;</span>{resp}
                </p>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education Section */}
      <section className="mb-2">
        <h2 className="text-lg font-semibold text-purple-500 border-b border-purple-300 ">
          Education
        </h2>
        {userData.educationList.map((edu, index) => (
          <div key={edu.EducationID} className="mt-1">
            <p className="text-md text-gray-800">
              {edu.degree} - {edu.fieldOfStudy}
            </p>
            <p className="text-xs text-gray-500">
              {edu.schoolName}, {edu.schoolLocation} | {edu.gradeYear}
            </p>
          </div>
        ))}
      </section>

      {/* Languages Section */}
      <section className="mb-2">
        <h2 className="text-lg font-semibold text-purple-500 border-b border-purple-300 ">
          Languages
        </h2>
        <ul className="list-disc list-inside mt-1 text-gray-700 space-y-1 text-sm">
          {userData.skillList[0].languages.split(", ").map((lang, index) => (
            <p key={index}>{lang}</p>
          ))}
        </ul>
      </section>

      {/* Skills Section */}
      <section className="mb-2">
        <h2 className="text-lg font-semibold text-purple-500 border-b border-purple-300 ">
          Skills
        </h2>
        <ul className="list-disc list-inside mt-1 text-gray-700 space-y-1 text-sm">
          {userData.skillList[0].languages.split(", ").map((lang, index) => (
            <p key={index}>{lang}</p>
          ))}
        </ul>
      </section>

      {/* Projects Section */}
      <section className="mb-2">
        <h2 className="text-lg font-semibold text-purple-500 border-b border-purple-300 ">
          Projects
        </h2>
        {userData.projectList.map((project, index) => (
          <div key={index} className="mt-1">
            <h3 className="text-md text-gray-800">{project.projectTitle}</h3>
            <p className="text-xs text-gray-500">
              <strong>Technologies: {project.techstack.join(', ')}</strong>
            </p>
            <p className="text-xs text-gray-500">{project.description}</p>
            {project.link && (
              <p className="text-xs text-purple-500">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Project Link
                </a>
              </p>
            )}
          </div>
        ))}
      </section>

      {/* Declaration Section */}
      <section className="mb-4">
        <h2 className="text-lg font-semibold text-purple-500 border-b border-purple-300 pb-1">
          Declaration
        </h2>
        <p className="mt-2 text-gray-700 leading-relaxed text-sm">
          {templateData.declaration}
        </p>
      </section>
    </div>
  );
};

template21.propTypes = {
  userData: PropTypes.shape({
    besicDetails: PropTypes.shape({
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      profession: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    }).isRequired,
    experianceList: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        responsibility: PropTypes.arrayOf(PropTypes.string).isRequired,
      })
    ).isRequired,
    educationList: PropTypes.arrayOf(
      PropTypes.shape({
        EducationID: PropTypes.string.isRequired,
        degree: PropTypes.string.isRequired,
        fieldOfStudy: PropTypes.string.isRequired,
        schoolName: PropTypes.string.isRequired,
        schoolLocation: PropTypes.string.isRequired,
        gradeYear: PropTypes.string.isRequired,
      })
    ).isRequired,
    skillList: PropTypes.arrayOf(
      PropTypes.shape({
        languages: PropTypes.string.isRequired,
      })
    ).isRequired,
    projectList: PropTypes.arrayOf(
      PropTypes.shape({
        projectTitle: PropTypes.string.isRequired,
        techstack: PropTypes.arrayOf(PropTypes.string).isRequired,
        description: PropTypes.string.isRequired,
        link: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
};

export default template21;
