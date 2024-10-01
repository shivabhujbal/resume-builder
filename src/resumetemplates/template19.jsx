import React from 'react';
import PropTypes from 'prop-types';

const template19 = ({ userData }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-4 sm:p-6 md:p-10">
      <div className="bg-white shadow-lg rounded-lg grid grid-cols-1 md:grid-cols-12  md:w-[210mm] md:h-[287mm]">

        {/* Left Sidebar */}
        <div className="md:col-span-4 bg-gray-600 text-white p-4 sm:p-6 md:p-8 rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
          <div className="flex flex-col items-center">
            <h1 className="mt-4 text-2xl sm:text-3xl font-bold">{userData.besicDetails.first_name} {userData.besicDetails.last_name}</h1>
            <p className="text-md sm:text-lg font-light">{userData.besicDetails.profession}</p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="bg-gray-200 text-blue-700 text-lg font-semibold py-2 px-4 rounded mt-6">Contact</h2>
            <ul className="mt-1 text-sm sm:text-base text-gray-200">
              <li>📍 {`${userData.besicDetails.city}, ${userData.besicDetails.country}`}</li>
              <li>📞 {userData.besicDetails.phone}</li>
              <li>✉ {userData.besicDetails.email}</li>
              <li>🌐 <a href={userData.besicDetails.linkdin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li>🌐 <a href={userData.besicDetails.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>

          {/* About Me */}
          <div className="mt-16 sm:mt-24">
            <h2 className="bg-gray-200 text-lg font-semibold py-2 px-4 rounded text-blue-700">About Me</h2>
            <p className="mt-2 text-sm sm:text-base">{userData.besicDetails.message}</p>
          </div>

          {/* Skills */}
          <div className="mt-6">
            <h2 className="bg-gray-200 text-blue-700 text-lg font-semibold py-2 px-4 rounded">Skills</h2>
            <ul className="mt-2 text-sm sm:text-base text-white">
              {userData.skillList[0].languages.split(", ").map((lang, index) => (
                <p key={index}>{lang}</p>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div className="mt-6">
            <h2 className="bg-gray-200 text-blue-700 text-lg font-semibold py-2 px-4 rounded">Certifications</h2>
            <ul className="mt-2 text-sm sm:text-base text-white">
              {userData.educationList.map((education, eduIndex) =>
                education.certification.map((cert, certIndex) => (
                  <p key={`${eduIndex}-${certIndex}`} className="text-xs sm:text-sm">{cert}</p>
                ))
              )}
            </ul>
          </div>

          {/* Languages */}
          <div className="mt-10 sm:mt-16 md:mt-36">
            <h2 className="bg-gray-200 text-blue-700 text-lg font-semibold py-2 px-4 rounded">Languages</h2>
            <ul className="mt-2 text-sm sm:text-base text-white">
              {userData.skillList[0].languages.split(", ").map((lang, index) => (
                <p key={index}>{lang}</p>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-8 p-4 sm:p-6 md:p-8">

          {/* Education */}
          <div className="mt-2">
            <h2 className="bg-gray-200 text-blue-700 text-lg font-semibold py-2 px-4 rounded">Education</h2>
            <ul className="mt-4 text-sm sm:text-base text-gray-600">
              {userData.educationList.map((edu, index) => (
                <li key={edu.EducationID} className="mb-4">
                  <p className="font-semibold">{edu.schoolName}</p>
                  <p className="text-gray-500">{edu.gradeYear}</p>
                  <p>{edu.degree} - {edu.fieldOfStudy}</p>
                  <p>{edu.schoolLocation}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience */}
          <div className="mt-16 sm:mt-36">
            <h2 className="bg-gray-200 text-blue-700 text-lg font-semibold py-2 px-4 rounded">Experience</h2>
            <ul className="mt-4 text-sm sm:text-base text-gray-600">
              {userData.experianceList.map((exp, index) => (
                <li key={index} className="mb-4">
                  <p className="font-semibold">{exp.title} at {exp.company}</p>
                  <p className="text-gray-500">{`${exp.location} | ${exp.startDate} - ${exp.endDate}`}</p>
                  <p>{exp.location}</p>
                  <ul className="list-disc list-inside">
                    {exp.responsibility.map((resp, idx) => (
                      <p key={idx}><span className="text-base font-bold mr-1">&#8226;</span>{resp}</p>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div className="mt-24 sm:mt-56">
            <h2 className="bg-gray-200 text-blue-700 text-lg font-semibold py-2 px-4 rounded">Projects</h2>
            <ul className="mt-4 text-sm sm:text-base text-gray-600">
              {userData.projectList.map((project, index) => (
                <li key={index} className="mb-4">
                  <p className="font-semibold">{project.projectTitle}</p>
                  <p>{project.description}</p>
                  <p className="text-gray-400">Technologies: {project.techstack.join(', ')}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600">View Project</a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

template19.propTypes = {
  userData: PropTypes.shape({
    besicDetails: PropTypes.shape({
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      profession: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      linkdin: PropTypes.string.isRequired,
      github: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    }).isRequired,
    educationList: PropTypes.arrayOf(
      PropTypes.shape({
        graduationYear: PropTypes.string.isRequired,
        degree: PropTypes.string.isRequired,
        month: PropTypes.string.isRequired,
        gapYear: PropTypes.string,
        certification: PropTypes.arrayOf(PropTypes.string).isRequired,
        gapTaken: PropTypes.bool.isRequired,
        schoolName: PropTypes.string.isRequired,
        schoolLocation: PropTypes.string.isRequired,
        fieldOfStudy: PropTypes.string.isRequired,
      })
    ).isRequired,
    experianceList: PropTypes.arrayOf(
      PropTypes.shape({
        responsibility: PropTypes.arrayOf(PropTypes.string).isRequired,
        location: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
      })
    ).isRequired,
    skillList: PropTypes.arrayOf(
      PropTypes.shape({
        skills: PropTypes.arrayOf(PropTypes.string).isRequired,
        skillType: PropTypes.string.isRequired,
        languages: PropTypes.string.isRequired,
      })
    ).isRequired,
    projectList: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string.isRequired,
        projectTitle: PropTypes.string.isRequired,
        projectRole: PropTypes.string.isRequired,
        techstack: PropTypes.arrayOf(PropTypes.string).isRequired,
        projectLink: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default template19;
