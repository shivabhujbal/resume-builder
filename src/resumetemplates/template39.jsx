import React from 'react';
import templateData from '../resumetemplates/templateData';
import PropTypes from 'prop-types';

const template39 = ({userData}) => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-10 ">
      <div className="bg-white shadow-lg rounded-lg p-8 w-[210mm] h-[287mm]">
        {/* Profile Section */}
        <div className="flex items-center space-x-6 border-b border-gray-200 pb-6 mb-8">
          {/* <img 
            src={templateData.profileIamge}
            alt="profile" 
            className="rounded-full h-32 w-32 object-cover border-4 border-gray-200"
          /> */}
          <div>
            <h1 className="text-xl font-bold text-gray-800">{userData.besicDetails.first_name} {userData.besicDetails.last_name}</h1>
            <p className="text-lg text-gray-600">{userData.besicDetails.profession}</p>
            <p className="text-lg text-gray-500"> {`${userData.besicDetails.city}, ${userData.besicDetails.country}`}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section: About, Skills, Contact */}
          <div className="space-y-8 col-span-1 bg-[#ede0d4] p-6 rounded-lg shadow-md">
            {/* About Me */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">About Me</h2>
              <p className="text-gray-700 mt-2 text-sm">{userData.besicDetails.message}</p>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Skills</h2>
              <ul className="list-disc list-inside text-gray-700 mt-2 text-sm">
                {userData.skillList[0].skills.map((skill, index) => (
                  <div key={index}>
                    <p className="text-sm sm:text-base">{skill}</p>
                    <div className="w-full bg-gray-300 h-2 mb-4">
                      <div className={`bg-blue-500 h-2 ${index % 2 === 0 ? 'w-3/4' : 'w-1/2'}`}></div>
                    </div>
                  </div>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mt-40">Contact</h2>
              <ul className="text-gray-700 mt-2 text-sm">
                <li><strong className="text-gray-900">Phone:</strong> {userData.besicDetails.phone}</li>
                <li><strong className="text-gray-900">Email:</strong> <a href={`mailto:${userData.besicDetails.email}`} className="text-blue-600 hover:underline">{templateData.email}</a></li>
                <li><strong className="text-gray-900">Address:</strong> {`${userData.besicDetails.city}, ${userData.besicDetails.country}`}</li>
              </ul>
            </div>
          </div>

          {/* Right Section: Education, Experience, and Projects */}
          <div className="lg:col-span-2 space-y-8">
            {/* Education */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Education</h2>
              <div className="space-y-4 mt-2 text-sm">
                {userData.educationList.map((edu, index) => (
                  <div key={index}>
                    <p className="font-bold text-sm sm:text-base">{edu.degree} in {edu.fieldOfStudy}</p>
                    <p className="text-sm sm:text-base">{edu.schoolName}, {edu.schoolLocation}</p>
                    <p className="text-xs sm:text-sm">Graduated: {edu.month} {edu.graduationYear}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Experience</h2>
              <div className="space-y-6 mt-2 text-sm">
                {userData.experianceList.map((exp, index) => (
                  <div key={index}>
                    <p className="font-bold">{exp.title} at {exp.company}</p>
                    <p className="text-gray-600 text-sm sm:text-base">{`${exp.location} | ${exp.startDate} - ${exp.endDate}`}</p>
                    <ul className="list-disc list-inside text-gray-600 text-xs sm:text-sm">
                      {exp.responsibility.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Projects</h2>
              <div className="space-y-4 mt-2 text-sm">
                {userData.projectList.map((proj, index) => (
                  <div key={index}  className='text-sm'>
                    <h3 className="text-lg font-semibold text-gray-800">{proj.projectTitle}</h3>
                    <p className="text-sm">{proj.projectRole}
                      <a href={proj.link} className="text-blue-500 ml-11" target="_blank" rel="noopener noreferrer">View Project</a>
                    </p>
                    <p className="text-sm text-gray-600">{proj.description}</p>
                    <p className="text-sm text-gray-600">{proj.techstack.join(', ')}</p>
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

template39.propTypes = {
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

export default template39;
