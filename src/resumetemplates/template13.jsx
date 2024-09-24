import React from 'react';
import PropTypes from 'prop-types';

const template13 = ({ userData }) => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-400 p-6 md:p-10 mx-auto shadow-lg resume-container  w-[210mm] h-[287mm]">

      {/* Left Section */}
      <div className="bg-teal-500 p-4 md:p-6 w-full md:w-1/3 text-white">
        <div className="flex flex-col items-center">
          {/* Name */}
          <h2 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">{`${userData.besicDetails.first_name} ${userData.besicDetails.last_name}`}</h2>
          <p className="serif text-sm md:text-base">{userData.besicDetails.profession}</p>
        </div>

        {/* Profile Information */}
        <div className="mt-4 md:mt-6">
          {/* Profile */}
          <h3 className="font-bold text-lg mt-5">Profile</h3>
          <p className="mt-2 text-sm md:text-base">{userData.besicDetails.message}</p>

          {/* Contact */}
          <h3 className="font-bold text-lg mt-5">Contact Me</h3>
          <p className="mt-2 text-sm md:text-base">📞 {userData.besicDetails.phone}</p>
          <p className="mt-2 text-sm md:text-base">✉️ {userData.besicDetails.email}</p>
          <p className="mt-2 text-sm md:text-base">🏠 {`${userData.besicDetails.city}, ${userData.besicDetails.country}`}</p>
          <p className="mt-2 text-sm md:text-base">
            <a href={userData.besicDetails.linkdin} target="_blank" rel="noopener noreferrer">{userData.besicDetails.linkdin}</a>
          </p>
          <p className="mt-2 text-sm md:text-base">
            <a href={userData.besicDetails.github} target="_blank" rel="noopener noreferrer">{userData.besicDetails.github}</a>
          </p>
        </div>
        
        {/* Skills */}
        <div className="mt-7 md:mt-6 mb-4">
          <h3 className="font-bold text-lg">Skills</h3>
          <ul className="flex flex-wrap gap-2">
            {userData.skillList[0].skills.map((skill, index) => (
              <span key={index} className="bg-gray-200 text-gray-800 text-sm py-1 px-2 rounded-lg">
                {skill}
              </span>
            ))}
          </ul>
        </div>
        
         {/* Languages */}
         <div className="mt-10 md:mt-16">
          <h3 className="font-bold text-lg text-white">Languages</h3>
          <div className="ml-2 space-y-1">
            {userData.skillList[0].languages.split(", ").map((lang, index) => (
              <p key={index} className="text-sm md:text-base">{lang}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-white p-4 md:p-6 w-full md:w-2/3">

        {/* Experience */}
        <div className="mb-4 md:mb-6">
          <h3 className="font-bold text-lg text-teal-500">Experience</h3>
          {userData.experianceList.map((exp, index) => (
            <div key={index} className="mb-2">
              <p className="font-semibold text-sm md:text-base">{exp.title} at {exp.company}</p>
              <p className="text-gray-600 text-xs md:text-sm">{`${exp.location} | ${exp.startDate} - ${exp.endDate}`}</p>
              <div className="space-y-1 text-xs md:text-sm">
                {exp.responsibility.map((resp, idx) => (
                  <p key={idx}><span className="text-base font-bold mr-1">&#8226;</span>{resp}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mb-4 md:mb-6">
          <h3 className="font-bold text-lg text-teal-500">Education</h3>
          {userData.educationList.map((edu, index) => (
            <div key={index}>
              <p className="text-sm md:text-base">{edu.degree} in {edu.fieldOfStudy}</p>
              <p className="text-xs md:text-sm">{edu.schoolName}, {edu.schoolLocation}</p>
              <p className="text-gray-600 text-xs md:text-sm">Graduated: {edu.month} {edu.graduationYear}</p>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="mb-4 md:mb-6">
          <h3 className="font-bold text-lg text-teal-500">Projects</h3>
          <ul className="mt-1 ml-2">
            {userData.projectList.map((project, index) => (
              <li key={index} className="mb-2">
                <h2 className="text-sm md:text-base font-bold capitalize">{project.projectTitle}</h2>
                <p className="text-xs md:text-sm">
                  Role: {project.projectRole}
                  <span className="ml-4">
                    <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Project Link</a>
                  </span>
                </p>
                <p className="text-xs md:text-sm">{project.description}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Certifications */}
        <div className="mt-60">
          <h3 className="font-bold text-lg text-teal-500">Certifications</h3>
          <div className="ml-2 space-y-1">
            {userData.educationList.map((education, eduIndex) =>
              education.certification.map((cert, certIndex) => (
                <p key={`${eduIndex}-${certIndex}`} className="text-xs md:text-sm">{cert}</p>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

template13.propTypes = {
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
        certification: PropTypes.arrayOf(PropTypes.string).isRequired,
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
        projectLink: PropTypes.string.isRequired,
        projectRole: PropTypes.string.isRequired,
        projectTitle: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default template13;
