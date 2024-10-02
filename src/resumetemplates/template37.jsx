import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import templateData from '../resumetemplates/templateData';
import PropTypes from 'prop-types';

const template37 = ({ userData }) => {
  return (
    <div className="flex justify-center items-center bg-gray-100 p-6">
      {/* Main Container */}
      <div className="bg-white shadow-lg rounded-lg  flex overflow-hidden w-[210mm] h-[287mm] ">
        {/* Left Profile Section */}
        <div className="w-1/2 bg-teal-700 text-white flex flex-col  p-8">
          {/* Profile and Basic Info */}
          {/* <img
            className="w-40 h-40 object-cover mb-6 border-4 border-white"
            src={templateData.profileIamge}
            alt="Profile"
          /> */}
          <h1 className="text-2xl font-bold mb-2"> {userData.besicDetails.first_name} {userData.besicDetails.last_name}</h1>
          <p className="italic text-lg">{userData.besicDetails.profession}</p>

          {/* Contact Information */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Contact Me</h2>
            <p className="text-sm"><FontAwesomeIcon icon={faPhone} className="mr-2" />{userData.besicDetails.phone}</p>
            <p className="text-sm"><FontAwesomeIcon icon={faEnvelope} className="mr-2" />{userData.besicDetails.email}</p>
            <p className="text-sm"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> {`${userData.besicDetails.city}, ${userData.besicDetails.country}`}</p>
          </div>

          {/* Skills Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3 mt-3">Skills</h2>
            <ul className="list-disc list-inside">
              {userData.skillList[0].skills.map((skill, index) => (
                <span key={index} className="bg-gray-200 mt-3 text-gray-800 text-xs md:text-sm py-1 px-2 rounded-lg">
                  {skill}
                </span>
              ))}
            </ul>
          </div>


          {/* Summary */}
          <div className="mt-1 ">
            <h2 className="text-xl font-semibold ">Summary</h2>
            <p className="text-sm mt-2">
              {userData.besicDetails.message}
            </p>
          </div>

          {/* Language Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 mt-3">Languages</h2>
            <ul className="list-disc list-inside">
              {userData.skillList[0].languages.split(", ").map((lang, index) => (
                <p key={index} className="text-xs md:text-base">{lang}</p>
              ))}
            </ul>
          </div>


        </div>

        {/* Right Details Section */}
        <div className="w-1/2 p-8 text-gray-800">
          {/* Education Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Education</h2>
            {userData.educationList.map((edu, index) => (
              <div key={edu.EducationID} className="mb-4">
                <h3 className="font-bold text-lg">{edu.schoolName}, {edu.schoolLocation}</h3>
                <p className="text-gray-600">{edu.degree} - {edu.fieldOfStudy}</p>
                <p>Graduated: {edu.graduationYear}</p>
              </div>
            ))}
          </div>



          {/* Work Experience Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
            {userData.experianceList.map((job, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-bold">{job.title} at {job.company}</h3>
                <p className="text-gray-600">${job.startDate} - ${job.endDate}</p>
                <p>{job.location} </p>
                <ul className="list-disc list-inside">
                  {job.responsibility.map((resp, idx) => (
                    <p key={idx}><span className="text-base font-bold mr-1">&#8226;</span>{resp}</p>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4 mt-16">Certifications</h2>
            <ul className="list-disc list-inside">
              {userData.educationList.map((education, eduIndex) =>
                education.certification.map((cert, certIndex) => (
                  <p key={`${eduIndex}-${certIndex}`} className="md:text-sm">{cert}</p>
                ))
              )}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

template37.propTypes = {
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

export default template37;
