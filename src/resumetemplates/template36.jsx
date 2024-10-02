import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const template36 = ({ userData }) => {
  return (
    <div className="relative flex items-center justify-center h-[287mm]">
      <div className="relative w-[210mm] h-[287mm] shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <header className="w-full h-[150px] bg-[#ddd0d1] text-white py-4 text-center">
          <h1 className="text-base font-bold text-black">
            {userData.besicDetails.first_name} {userData.besicDetails.last_name}
          </h1>
          <h1 className="text-base font-bold text-black">{userData.besicDetails.profession}</h1>
        </header>

        {/* Main Container */}
        <div className="flex h-[calc(100%-150px)] relative">
          {/* Left Section */}
          <div className="bg-[#b39e9f] w-1/3 flex flex-col  py-4 px-4 text-white shadow-lg">
            <div className=" mb-4">
              <h2 className="text-lg font-semibold mt-5">Profile</h2>
              <p className="text-sm">{userData.besicDetails.message}</p>
            </div>
            <div className="text-xs mb-6">
              <h2 className="text-lg font-semibold mt-5">Contact Me</h2>
              <p><FontAwesomeIcon icon={faPhone} className="mr-2 text-sm" /> {userData.besicDetails.phone}</p>
              <p><FontAwesomeIcon icon={faEnvelope} className="mr-2 text-sm" /> {userData.besicDetails.email}</p>
              <p><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-sm" /> {`${userData.besicDetails.city}, ${userData.besicDetails.country}`}</p>
            </div>
            <div className="text-xs">
              <h2 className="text-base font-semibold mt-5">Languages</h2>
              {userData.skillList[0].skills.map((skill, index) => (
                <span key={index} className="bg-gray-200 text-gray-800 text-xs py-1 px-2 rounded-lg mr-1 mb-1 inline-block">
                  {skill}
                </span>
              ))}
            </div>

            <div>
              <h2 className="text-lg font-semibold mt-5">Certifications</h2>
              <ul>
                {userData.educationList.map((education, eduIndex) =>
                  education.certification.map((cert, certIndex) => (
                    <li key={`${eduIndex}-${certIndex}`} className="text-sm">{cert}</li>
                  ))
                )}
              </ul>
            </div>

          </div>

          {/* Right Section */}
          <div className="flex-1 bg-white p-4 text-black">
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Education</h2>
              {userData.educationList.map((edu, index) => (
                <div key={edu.EducationID} className="text-sm text-gray-800 mb-2">
                  <p><strong>{edu.degree} - {edu.fieldOfStudy}</strong></p>
                  <p>{edu.schoolName}, {edu.schoolLocation}</p>
                  <p>Graduated: {edu.graduationYear}</p>
                </div>
              ))}
            </div>
            
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Experience</h2>
              {userData.experianceList.map((job, index) => (
                <div key={index} className="mb-2 text-sm">
                  <p className="font-semibold text-sm">{job.title} at {job.company}</p>
                  <p>{job.location}</p>
                  <p>{job.startDate} - {job.endDate}</p>
                  <ul className="list-disc ml-4 text-sm">
                    {job.responsibility.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Projects</h2>
              {userData.projectList.map((proj, index) => (
                <div key={index} className="mb-2 text-sm">
                  <p className="font-semibold ">{proj.projectTitle}</p>
                  <p>{proj.techstack}</p>
                  <p><a href={proj.link} className="text-blue-600 underline">{proj.link}</a></p>
                  <p>{proj.description}</p>
                </div>
              ))}
            </div>
            
           
          </div>
        </div>
      </div>
    </div>
  );
};

template36.propTypes = {
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

export default template36;
