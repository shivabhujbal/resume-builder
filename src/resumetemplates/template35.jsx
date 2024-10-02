import React from 'react';
import templateData from '../resumetemplates/templateData';
import PropTypes from 'prop-types';

const template35 = ({ userData }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg overflow-hidden w-[210mm] h-[287mm] p-4">
        <header
          className="bg-cover bg-center h-36 flex flex-col items-center justify-center text-white"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1166641/pexels-photo-1166641.jpeg')" }}
        >
          <h1 className="text-3xl text-black font-bold mb-1 shadow-md">
            {userData.besicDetails.first_name} {userData.besicDetails.last_name}
          </h1>
          <p className="text-base text-black italic">{userData.besicDetails.profession}</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          {/* Left Section: About, Skills, Contact */}
          <div className="space-y-2 col-span-1 bg-gray-300 p-2 rounded-lg shadow-md">
            {/* About Me */}
            <div>
              <h2 className="text-base font-semibold text-gray-800">About Me</h2>
              <p className="text-sm text-gray-700 mt-1">{userData.besicDetails.message}</p>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-base font-semibold text-gray-800">Skills</h2>
              <ul className="list-disc list-inside text-sm text-gray-700 mt-1">
                {userData.skillList[0].skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-800 text-xs py-1 px-2 rounded-lg inline-block mr-1 mb-1"
                  >
                    {skill}
                  </span>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-base font-semibold text-gray-800">Contact</h2>
              <ul className="text-sm text-gray-700 mt-1">
                <li>
                  <strong className="text-gray-900">Phone:</strong> {userData.besicDetails.phone}
                </li>
                <li>
                  <strong className="text-gray-900">Email:</strong>{' '}
                  <a href={`mailto:${userData.besicDetails.email}`} className="text-blue-600 hover:underline">
                    {userData.besicDetails.email}
                  </a>
                </li>
                <li>
                  <strong className="text-gray-900">Address:</strong>{' '}
                  {`${userData.besicDetails.city}, ${userData.besicDetails.country}`}
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section: Education, Experience, and Projects */}
          <div className="lg:col-span-2 space-y-2">
            {/* Education */}
            <div>
              <h2 className="text-base font-semibold text-gray-800">Education</h2>
              <div className="space-y-2 mt-1">
                {userData.educationList.map((edu, index) => (
                  <div key={index}>
                    <h3 className="text-sm font-bold text-gray-800">{edu.schoolName}</h3>
                    <p className="text-sm text-gray-700">
                      {edu.degree} - {edu.fieldOfStudy} <br />
                      Graduated: {edu.graduationYear}
                    </p>
                    <p className="italic text-xs text-gray-500">{edu.schoolLocation}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-base font-semibold text-gray-800">Experience</h2>
              <div className="space-y-2 mt-1">
                {userData.experianceList.map((job, index) => (
                  <div key={index} className="p-1">
                    <h3 className="text-sm font-bold text-gray-800">
                      {job.title} at {job.company}
                    </h3>
                    <p className="text-sm text-gray-700">
                      {job.startDate} - {job.endDate}
                    </p>
                    <ul className="list-disc list-inside text-xs text-gray-600 mt-1">
                      {job.responsibility.map((resp, idx) => (
                        <p key={idx}>
                          <span className="text-base font-bold mr-1">&#8226;</span>
                          {resp}
                        </p>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-base font-semibold text-gray-800">Projects</h2>
              <div className="space-y-2 mt-1">
                {userData.projectList.map((proj, index) => (
                  <div key={index} className="p-1">
                    <h3 className="text-sm font-bold text-gray-800">{proj.projectTitle}</h3>
                    <p>
                      <strong className="text-gray-800">Role:</strong> {proj.projectRole}
                    </p>
                    <p>
                      <strong className="text-gray-800">Tech Stack:</strong> {proj.techstack.join(', ')}
                    </p>
                    <p>{proj.description}</p>
                    <a href={proj.link} className="text-blue-600 hover:underline">
                      Project Link
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

template35.propTypes = {
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
        fieldOfStudy: PropTypes.string.isRequired,
        schoolName: PropTypes.string.isRequired,
        schoolLocation: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    experianceList: PropTypes.arrayOf(
      PropTypes.shape({
        company: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
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
        skills: PropTypes.arrayOf(PropTypes.string).isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
};

export default template35;
