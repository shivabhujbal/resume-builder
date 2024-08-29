import React from 'react';
import PropTypes from "prop-types";

const Template7  = ({ userData }) => {
  return (
    <div className="w-[793.7px] h-[1118.52px] mx-auto font-verdana bg-white rounded-lg border shadow-sm p-6"> {/* Apply Verdana font to the entire component */}
      <div className="flex justify-center">
        <div className="">
          <div className="flex flex-col md:flex-row gap-8 h-[1065px]">
            {/* Left Column: Profile and General Information */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-1 text-center text-indigo-500">
              {userData.besicDetails.first_name} {userData.besicDetails.last_name}
              </h2>
              <p className='text-xl font-bold mb-3 text-center'>{userData.besicDetails.profession}</p>
              <div className="mb-3">
                <div className="list-none p-0">
                  <li className="flex items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 mr-2 text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700 text-sm">{userData.besicDetails.city} {userData.besicDetails.country}</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 mr-2 text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700 text-sm">{userData.besicDetails.phone}</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 mr-2 text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.22l.27.34a1 1 0 01.71.73l.59.79a1 1 0 00.75.59l.79.59a1 1 0 01.73.71l.34.27a1 1 0 01.73.71l.79.59a1 1 0 00.75.59l.79.59a1 1 0 01.71.73l.27.34a1 1 0 011 1v1.22a1 1 0 01-.75.59l-.79.59a1 1 0 00-.75.59l-.59.79a1 1 0 01-.73.71l-.34.27a1 1 0 01-.73.71l-.79.59a1 1 0 00-.75.59l-.79.59a1 1 0 01-.71.73l-.27.34a1 1 0 01-1 1H3a1 1 0 01-1-1V4.72a1 1 0 01.75-.59l.79-.59a1 1 0 00.75-.59l.59-.79a1 1 0 01.73-.71l.34-.27a1 1 0 01.73-.71l.79-.59a1 1 0 00.75-.59l.79-.59a1 1 0 01.71-.73l.27-.34a1 1 0 011-1h.08a1 1 0 011 1v12.22a1 1 0 01-.59.75l-.59.79a1 1 0 00-.59.75l-.79.59a1 1 0 01-.71.73l-.27.34a1 1 0 01-1 1H8.22l-.27-.34a1 1 0 01-.71-.73l-.59-.79a1 1 0 00-.75-.59l-.79-.59a1 1 0 01-.73-.71l-.34-.27a1 1 0 01-.73-.71l-.79-.59a1 1 0 00-.75-.59l-.79-.59a1 1 0 01-.71-.73l-.27-.34a1 1 0 01-1-1V3z" />
                    </svg>
                    <span className="text-gray-700 text-sm">{userData.besicDetails.email}</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 mr-2 text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 12.138V20a2 2 0 002 2h8a2 2 0 002-2v-7.862l7.997-7.997a2 2 0 000-2.828L18 2.003a2 2 0 00-2.828 0L10 5.884V0a2 2 0 00-2-2H4a2 2 0 00-2 2v5.884L2.003 5.884z" />
                    </svg>
                    <span className="text-gray-700 text-sm">
                      <a href={userData.besicDetails.linkdin} target="_blank" rel="noopener noreferrer" className='text-sm text-blue-500'>
                        LinkedIn
                      </a>
                    </span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 mr-2 text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 12.138V20a2 2 0 002 2h8a2 2 0 002-2v-7.862l7.997-7.997a2 2 0 000-2.828L18 2.003a2 2 0 00-2.828 0L10 5.884V0a2 2 0 00-2-2H4a2 2 0 00-2 2v5.884L2.003 5.884z" />
                    </svg>
                    <span className="text-gray-700 text-sm">
                      <a href={userData.besicDetails.github} target="_blank" rel="noopener noreferrer" className='text-sm text-blue-500'>
                        GitHub
                      </a>
                    </span>
                  </li>
                </div>
              </div>
              <div className='mb-3'>
              <h3 className="text-lg font-bold mb-2 text-gray-500">SUMMARY</h3>
              <p className="text-gray-600 border border-gray-300 shadow-sm rounded-md p-1 text-sm">
                {userData.besicDetails.message}
              </p>
              </div>

              <div className='mb-3'>
              <h3 className="text-lg font-bold mb-1 mt-1 text-gray-500">EDUCATION</h3>
              {userData.educationList.map((edu, index) => (
                <div key={index} className="border border-gray-300 p-1 rounded-md shadow-md mb-2">
                  <h4 className="text-sm mb-2">
                    {edu.degree.replace(/_/g, " ")} in {edu.fieldOfStudy}, {edu.graduationYear}
                  </h4>
                  <p className="text-gray-600 font-medium mb-1 text-sm">
                    {edu.schoolName}, {edu.schoolLocation}
                  </p>
                </div>
              ))}
              </div>
              <div className=''>
              <h3 className="text-lg font-bold mb-2 text-gray-500">SKILLS</h3>
              <div className="w-full text-sm text-gray-600 capitalize border border-gray-300 rounded-md shadow-sm p-1">
                    <p>{userData.skillList[0].skills.join(', ')}</p>
              </div>
              </div>

              <div>
              <h3 className="text-lg font-bold mb-2 mt-6 text-gray-500">LANGUAGES</h3>
              <div className="border border-gray-300 rounded-md shadow-sm">
                <div className="list-disc pl-2 py-1 capitalize text-gray-600 text-sm">
                {userData.skillList[0].languages
                    .split(", ")
                    .map((lang, index) => (
                    <li key={index}>{lang}</li>
                  ))}
                </div>
              </div>
              </div>
            </div>

            {/* Right Column: Experience and Education */}
            <div className="flex-1">
              <div className='mb-3'>
              <h3 className="text-lg font-bold mb-1 text-gray-500">EXPERIENCE</h3>
              {userData.experianceList.map((job, index) => (
                <div key={index} className="border border-gray-300 rounded-md shadow-sm p-1 mb-1 text-sm">
                  <h4 className="font-bold mb-1 text-sm">
                    {job.title}, <span className='text-gray-600 text-sm'>{job.startDate} - {job.endDate}</span>
                  </h4>
                  <p className="text-gray-600 font-medium mb-1 text-sm">
                    {job.company}, {job.location}
                  </p>
                  <div className="list-disc pl-1 text-gray-600 text-sm">
                    {job.responsibility.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </div>
                </div>
              ))}
              </div>
              <div className='mb-3'>
              <h3 className="text-lg font-bold mb-1 text-gray-500">PROJECT</h3>
              {userData.projectList.map((pro, index) => (
                <div key={index} className="border border-gray-300 rounded-md shadow-sm p-1 mb-1 text-sm">
                  <h4 className="font-bold mb-1 text-sm capitalize">
                    {pro.projectTitle}, <span className='text-gray-600 text-sm'>{pro.projectRole}</span>
                  </h4>
                  <p className="text-gray-600 font-medium mb-1 text-sm">
                    {pro.techstack.join(', ')}, {pro.projectLink}
                  </p>
                  <div className="list-disc pl-1 text-gray-600 text-sm">
                    {pro.description.split('\n').map((description, idx) => (
                      <li key={idx}>{description}</li>
                    ))}
                  </div>
                </div>
              ))}
              </div>
              
              <div className=''>
              <h3 className="text-lg font-bold mb-2 text-gray-500">CERTIFICATIONS</h3>
              <div className="overflow-auto rounded-md border border-gray-300 p-1 shadow-sm">
                <div className="list-disc pl-2 py-1 text-gray-600 text-sm">
                {userData.educationList.map((education, eduIndex) =>
          education.certification.map((cert, certIndex) => (
                    <li key={`${eduIndex}-${certIndex}`}>{cert}</li>
                  ))
                )}
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Template7.propTypes = {
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

export default Template7;
