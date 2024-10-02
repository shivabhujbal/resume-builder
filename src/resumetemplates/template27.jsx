import React from 'react';
import './template27.css'; // Import your CSS file
import templateData from '../resumetemplates/templateData'; // Import your JSON data
import PropTypes from 'prop-types';

const template27 = ({ userData }) => {

  return (
    <div className="resume-container w-[210mm] h-[287mm]">
      <div className="resume-content">
        {/* Right Section */}
        <div className="resume8-right">
          {/* Education Section */}
          <div className="education-section8 mt-3">
            <h2 className='font-bold'>Education</h2>
            {userData.educationList.map((edu, index) => (
              <div key={edu.EducationID}>
                <h3>{edu.schoolName}</h3>
                <p>{edu.degree} in {edu.fieldOfStudy} {edu.graduationYear}</p>
                <p>{edu.schoolLocation}</p>
              </div>
            ))}
          </div>

          {/* Experience Section */}
          <div className="experience-section8 mt-3">
            <h2 className='font-bold'>Experience</h2>
            {userData.experianceList.map((job, index) => (
              <div key={index}>
                <h3>{job.title} at {job.company}</h3>
                <p>{job.location} </p>
                <p>${job.startDate} - ${job.endDate}</p>
                <ul>
                  {job.responsibility.map((resp, idx) => (
                    <p key={idx}><span className="text-base font-bold mr-1">&#8226;</span>{resp}</p>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects Section */}
          <div className="projects-section8 mt-3">
            <h2 className='font-bold'>Projects</h2>
            {userData.projectList.map((proj, index) => (
              <div key={index}>
                <h3>{proj.projectTitle}</h3>
                <p>{proj.description}</p>
                <p className="text-sm">{proj.projectRole}
                  <a href={proj.link} className="text-blue-500 ml-11" target="_blank" rel="noopener noreferrer">View Project</a>
                </p>
                <a href={proj.link} target="_blank" rel="noopener noreferrer">Project Link</a>
              </div>
            ))}
          </div>

          {/* Languages Section */}
          <div className="languages-section mt-3">
            <h2 className='font-bold'>Languages</h2>
            <ul>
              {userData.skillList[0].languages.split(", ").map((lang, index) => (
                <p key={index} className="text-xs md:text-base">{lang}</p>
              ))}
            </ul>
          </div>

          {/* Declaration Section */}
          <div className="declaration-section8 mt-3">
            <h2 className='font-bold'>Declaration</h2>
            <p>{templateData.declaration}</p>
          </div>
        </div>


        {/* Left Section */}
        <div className="resume-left">
          {/* Profile Section */}
          <div className="profile-section">
            {/* <img className="profile-image" src={profileImage} alt={`${firstname} ${lastname}`} /> */}
            <h1 className="profile-name">{userData.besicDetails.first_name} {userData.besicDetails.last_name}</h1>
            <p className="profession">{userData.besicDetails.profession}</p>
            <p className="location">{`${userData.besicDetails.city}, ${userData.besicDetails.country}`}</p>
            <p className="contact-info">{userData.besicDetails.phone}</p>
            <p className="contact-info">{userData.besicDetails.email}</p>
            <div className="social-links">
              <a href={userData.besicDetails.linkdin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={userData.besicDetails.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>

          {/* Summary Section */}
          <div className="summary-section">
            <h2 className='font-bold'>Profile</h2>
            <p>{userData.besicDetails.message}</p>
          </div>

          {/* Skills Section */}
          <div className="skills-section">
            <h2 className='font-bold'>Skills</h2>
            <ul className="list-disc pl-5 text-lg text-gray-800">
              {userData.skillList[0].skills.map((skill, index) => (
                <span key={index} className="bg-gray-200 text-gray-800 text-xs md:text-sm py-1 px-2 rounded-lg">
                  {skill}
                </span>
              ))}
            </ul>
          </div>

          {/* Certifications Section */}
          <div className="certifications-section">
            <h2 className='font-bold'>Certifications</h2>
            <ul>
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


template27.propTypes = {
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


export default template27;