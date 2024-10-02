import React from 'react';
import templateData from '../resumetemplates/templateData'; // Ensure you have the correct import for templateData
import PropTypes from 'prop-types';

const template34 = ({userData}) => {
  return (
    <div className="min-h-screen bg-gray-200 p-8 flex justify-center items-center">
      {/* <div
        className="bg-white text-gray-800 rounded-lg shadow-lg p-10 flex flex-col md:flex-row"
        style={{
          width: '210mm',  // A4 width
          boxSizing: 'border-box', // Ensures padding and border are included in the total width/height
        }}
      > */}
      {/* Right Section with Profile Picture */}
      <div className="md:w-2/3 md:mr-8 bg-purple-100 p-4">
        <div className="flex flex-col items-center">
          {/* <img
            src={templateData.profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full mb-4"
          /> */}
          <h1 className="text-4xl font-bold text-purple-700">{userData.besicDetails.first_name} {userData.besicDetails.last_name}</h1>
          <h2 className="text-xl text-gray-600 mb-4">{userData.besicDetails.profession}</h2>
        </div>

        {/* Work Experience */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-purple-700">Work Experience</h2>
          {userData.experianceList.map((job, index) => (
            <div className="mt-4" key={index}>
              <h3 className="text-lg font-semibold text-gray-600">{job.title}</h3>
              <p className="text-gray-500">{job.company}</p>
              <p>{job.location} </p>
              <p>${job.startDate} - ${job.endDate}</p>
              <ul className="list-disc list-inside mt-2 text-gray-600">
                {job.responsibility.map((resp, idx) => (
                  <p key={idx}><span className="text-base font-bold mr-1">&#8226;</span>{resp}</p>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-purple-700">Education</h2>
          {userData.educationList.map((edu, index) => (
            <div className="mt-4" key={edu.EducationID}>
              <h3 className="text-lg font-semibold text-gray-600">{edu.degree} - {edu.fieldOfStudy}</h3>
              <p className="text-gray-500">{edu.schoolName}, {edu.schoolLocation}</p>
              <p>Graduated: {edu.graduationYear}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-purple-700">Certifications</h2>
          <ul className="mt-4 list-disc list-inside text-gray-600">
            {userData.educationList.map((education, eduIndex) =>
              education.certification.map((cert, certIndex) => (
                <p key={`${eduIndex}-${certIndex}`} className="md:text-sm">{cert}</p>
              ))
            )}
          </ul>
        </div>

        {/* Projects */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-purple-700">Projects</h2>
          {userData.projectList.map((proj, index) => (
            <div className="mt-4" key={proj.projectTitle}>
              <h3 className="text-lg font-semibold text-gray-600">{proj.projectTitle}</h3>
              <p className="text-gray-500">{proj.description}</p>
              <p className="text-gray-500"><strong>Technologies:</strong> Technologies: {proj.techstack.join(', ')}</p>
              <p><a href={proj.link} className="text-blue-500">View Project</a></p>
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
          <p className="mt-2"><strong>Phone:</strong> {userData.besicDetails.phone}</p>
          <p><strong>Email:</strong> {userData.besicDetails.email}</p>
          <p><strong>Address:</strong>{`${userData.besicDetails.city}, ${userData.besicDetails.country}`}</p>
          <p><strong>LinkedIn:</strong> <a href={userData.besicDetails.linkedin} className="text-blue-500">{userData.besicDetails.linkedin}</a></p>
          <p><strong>GitHub:</strong> <a href={userData.besicDetails.github} className="text-blue-500">{userData.besicDetails.github}</a></p>
        </div>

        {/* Additional Sections in Left Column */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-purple-700">Summary</h2>
          <p className="text-gray-600">{userData.besicDetails.message}</p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-purple-700">Skills</h2>
          <ul className="mt-4 list-disc list-inside text-gray-600">
            {userData.skillList[0].skills.map((skill, index) => (
              <span key={index} className="bg-gray-200 text-gray-800 text-xs md:text-sm py-1 px-2 rounded-lg">
                {skill}
              </span>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-purple-700">Languages</h2>
          <ul className="mt-4 list-disc list-inside text-gray-600">
          {userData.skillList[0].languages.split(", ").map((lang, index) => (
                  <p key={index} className="text-xs md:text-base">{lang}</p>
                ))}
          </ul>
        </div>
      </div>
    </div>
 
  );
};

template34.propTypes = {
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
        schoolName: PropTypes.string.isRequired,
        schoolLocation: PropTypes.string.isRequired,
        fieldOfStudy: PropTypes.string.isRequired,
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
        projectRole: PropTypes.string.isRequired,
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
  }).isRequired,
};

export default template34;