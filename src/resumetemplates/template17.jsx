import React from 'react';
import templateData from '../resumetemplates/templateData'; // Ensure this path is correct
import img3 from '../Images/OIP2.jpeg';
import PropTypes from 'prop-types';

const template17 = ({ userData }) => {
  return (
    <div className="bg-gray-100 p-4 md:p-8">
      <div className="h-[287mm] w-[210mm] mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div
          className="relative bg-cover bg-center "
          style={{ backgroundImage: `url(${img3})` }}
        >
          <div className="flex flex-col items-center py-8">
            <div className="absolute bottom-0 right-8 transform -translate-y-1/4 w-24 h-24 md:w-32 md:h-32 bg-white rounded-full border-4 border-white overflow-hidden shadow-lg">
              {/* Profile Image */}
            </div>
            <div className="pt-16 text-center text-white">
              <h1 className="font-bold text-xl md:text-3xl">
                {userData.besicDetails.first_name} {userData.besicDetails.last_name}
              </h1>
              <p className="text-md md:text-lg mb-10">{userData.besicDetails.profession}</p>
              <p className="text-md md:text-lg -mb-14">{`${userData.besicDetails.city}, ${userData.besicDetails.country}`}</p>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8">
          {/* Left Column */}
          <div className="col-span-1 bg-gray-100 p-4 md:p-8 space-y-8">
            {/* Contact Section */}
            <div>
              <h3 className="font-bold text-lg text-cyan-500">Contact Information</h3>
              <hr className="border-t-2 border-[#824f56] w-10 mb-4" />
              <p className="text-gray-700">Email: {userData.besicDetails.email}</p>
              <p className="text-gray-700">Phone: {userData.besicDetails.phone}</p>
              <p className="text-gray-700 mr-6">
                LinkdIn: <a href={userData.besicDetails.linkdin} className="text-blue-500" target="_blank" rel="noopener noreferrer">{userData.besicDetails.linkdin}</a>
              </p>
              <p className="text-gray-700">
                GitHub : <a href={templateData.GitHub} className="text-blue-500" target="_blank" rel="noopener noreferrer">{userData.besicDetails.github}</a>
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="font-bold text-lg text-cyan-500">Skills</h3>
              <hr className="border-t-2 border-[#824f56] w-10 mb-4" />
              <div className="ml-1 space-y-6">
                {userData.skillList[0].skills.map((skill, index) => (
                  <span key={index} className="bg-gray-200 text-gray-800 text-xs md:text-sm py-1 px-2 rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="font-bold text-lg text-cyan-500">Certifications</h3>
              <hr className="border-t-2 border-[#824f56] w-10 mb-4" />
              <div className="ml-2 space-y-1">
                {userData.educationList.map((education, eduIndex) =>
                  education.certification.map((cert, certIndex) => (
                    <p key={`${eduIndex}-${certIndex}`} className="md:text-sm">{cert}</p>
                  ))
                )}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="font-bold text-lg text-cyan-500">Languages</h3>
              <hr className="border-t-2 border-[#824f56] w-10 mb-4" />
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                {userData.skillList[0].languages.split(", ").map((lang, index) => (
                  <p key={index} className="text-xs md:text-base">{lang}</p>
                ))}
              </ul>
            </div>

            {/* Declaration */}
            <div>
              <h3 className="font-bold text-lg text-cyan-500">Declaration</h3>
              <hr className="border-t-2 border-[#824f56] w-10 mb-4" />
              <p className="text-gray-700">{templateData.declaration}</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-2 p-1 md:p-8 space-y-8">
            {/* Education */}
            <div>
              <h3 className="font-bold text-lg text-cyan-500">Education</h3>
              <hr className="border-t-2 p-1 border-[#824f56] w-10 " />
              {userData.educationList.map((edu, index) => (
                <div key={edu.EducationID} className="text-gray-700 mb-4">
                  <p className="font-bold">{edu.schoolName}, {edu.schoolLocation}</p>
                  <p>{edu.degree} in {edu.fieldOfStudy}</p>
                  <p className="text-sm text-gray-500">Graduated: {edu.month} {edu.graduationYear}</p>
                </div>
              ))}
            </div>

            {/* Summary Section */}
            <div>
              <h3 className="font-bold text-lg text-cyan-500 ">Summary</h3>
              <hr className="border-t-2 border-[#824f56] w-10 mb-1" />
              <p className="text-gray-700">{userData.besicDetails.message}</p>
            </div>

            {/* Experience */}
            <div>
              <h3 className="font-bold text-lg text-cyan-500">Professional Experience</h3>
              <hr className="border-t-2 border-[#824f56] w-10 mb-4" />
              {userData.experianceList.map((job, index) => (
                <div key={index} className="text-gray-700 mb-6">
                  <p className="font-bold">{job.title} at {job.company}</p>
                  <p className="text-sm text-gray-500">{`${job.location} | ${job.startDate} - ${job.endDate}`}</p>
                  <ul className="list-disc pl-5 space-y-1">
                    {job.responsibility.map((resp, idx) => (
                      <p key={idx}><span className="text-base font-bold mr-1">&#8226;</span>{resp}</p>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Projects */}
            <div>
              <h3 className="font-bold text-lg text-cyan-500">Projects</h3>
              <hr className="border-t-2 border-[#824f56] w-10 mb-4" />
              {userData.projectList.map((proj, index) => (
                <div key={index} className="text-gray-700 mb-6">
                  <p className="font-bold">{proj.projectTitle}</p>
                  <p className="text-sm">{proj.projectRole}
                    <a href={proj.link} className="text-blue-500 ml-11" target="_blank" rel="noopener noreferrer">View Project</a>
                  </p>
                  <p className="text-sm text-gray-500">{proj.techstack.join(', ')}</p>
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

template17.propTypes = {
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

export default template17;
