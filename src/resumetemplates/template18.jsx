import React from "react";
import templateData from "../resumetemplates/templateData"; // Import templateData
import PropTypes from 'prop-types';

const Template18 = ({ userData }) => {
  return (
    <div className="bg-gradient-to-br from-black-50 to-black-200 min-h-screen flex justify-center items-center p-8">
      <div className="bg-white p-10 font-sans max-w-4xl w-[210mm] h-[287mm] rounded-lg shadow-xl overflow-hidden">
        {/* Header Section */}
        <div className="flex items-center mb-8 bg-[#2dfdbc] p-6 rounded-lg shadow-md">
          <div className="w-1/2">
            <h1 className="text-5xl font-extrabold text-gray-800">{userData.besicDetails.first_name} {userData.besicDetails.last_name}</h1>
            <h2 className="text-lg font-medium text-indigo-600 mt-1">{userData.besicDetails.profession}</h2>
          </div>
          <div className="w-1/2 flex justify-end">
            {/* <img
              src={templateData.profileImage} // Replace with actual image
              alt="Profile"
              className="rounded-full w-36 h-36 object-cover shadow-lg"
            /> */}
          </div>
        </div>

        {/* About Me Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">About Me</h3>
          <p className="text-gray-700 leading-relaxed bg-gray-100 p-4 rounded-lg shadow-sm">
            {userData.besicDetails.message}
          </p>
        </div>

        {/* Content Section with Flexbox */}
        <div className="flex flex-col h-full">
          {/* Professional Experience */}
          <div className="flex-1 overflow-hidden">
            <h3 className="font-bold text-lg text-[#824f56]">Professional Experience</h3>
            <hr className="border-t-2 border-[#824f56] w-10 mb-4" />
            {userData.experianceList.map((exp, index) => (
              <div key={index} className="text-gray-700 mb-6">
                <p className="font-bold">{exp.title} at {exp.company}</p>
                <p className="text-sm text-gray-500">{`${exp.location} | ${exp.startDate} - ${exp.endDate}`}</p>
                <ul className="list-disc pl-5 space-y-1">
                  {exp.responsibility.map((resp, idx) => (
                    <p key={idx}><span className="text-base font-bold mr-1">&#8226;</span>{resp}</p>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education Section */}
          <div className="flex-1 overflow-hidden">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Education</h3>
            {userData.educationList.map((edu, index) => (
              <div key={edu.EducationID} className="bg-gray-50 p-4 rounded-lg shadow-sm mb-6">
                <p className="font-bold text-indigo-700">{edu.schoolName}</p>
                <p>{edu.degree} in {edu.fieldOfStudy}</p>
                <p className="text-sm text-gray-500">{edu.gradeYear}</p>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="flex-1 overflow-hidden">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Skills</h3>
            <ul className="list-disc list-inside text-gray-700 bg-gray-50 p-4 rounded-lg shadow-sm">
              {userData.skillList[0].languages.split(", ").map((lang, index) => (
                <p key={index} className="text-sm md:text-base">{lang}</p>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex-1 overflow-hidden">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Contact</h3>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p className="text-gray-700 mb-1"><strong>Email:</strong>{userData.besicDetails.email}</p>
              <p className="text-gray-700 mb-1"><strong>Phone:</strong> {userData.besicDetails.phone}</p>
              <p className="text-gray-700 mb-1"><strong>City:</strong> {userData.besicDetails.city}</p>
              <p className="text-gray-700 mb-1 "><strong>Country:</strong> {userData.besicDetails.country}</p>
            </div>
          </div>

          {/* Languages Section */}
          <div className="flex-1 overflow-hidden">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Languages</h3>
            <ul className="list-disc list-inside text-gray-700 bg-gray-50 p-4 rounded-lg shadow-sm">
              {userData.skillList[0].languages.split(", ").map((lang, index) => (
                <p key={index} className="text-sm md:text-base">{lang}</p>
              ))}
            </ul>
          </div>

          {/* Projects Section */}
          <div className="flex-1 overflow-hidden">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Projects</h3>
            {userData.projectList.map((project, index) => (
              <div key={index} className="mb-6 bg-gray-50 p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-indigo-700">{project.projectTitle}</h4>
                <p className="text-sm text-gray-600"> Role: {project.projectRole} </p>
                <p className="text-sm text-gray-600">Tech Stack: {project.techstack.join(', ')}</p>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>

          {/* Certifications Section */}
          <div className="flex-1 overflow-hidden">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Certifications</h3>
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

Template18.propTypes = {
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

export default Template18;
