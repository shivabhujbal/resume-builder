import React from 'react';
import PropTypes from 'prop-types';

const template14 = ({ userData }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-8">
      <div className="bg-white shadow-lg flex flex-col lg:flex-row w-full max-w-[210mm] lg:h-[287mm]">
        {/* Left Section */}
        <div className="w-full lg:w-1/3 bg-blue-600 text-white p-6">
          <div className="flex flex-col items-center">
            <h1 className="text-xl sm:text-2xl font-bold">{`${userData.besicDetails.first_name} ${userData.besicDetails.last_name}`}</h1>
            <p className="mt-2 text-sm sm:text-base">{userData.besicDetails.profession}</p>
          </div>

          {/* Contact Section */}
          <div className="mt-8">
            <h2 className="text-lg sm:text-xl font-bold uppercase">Contact</h2>
            <hr className="my-2 border-white" />
            <div className="mt-4 space-y-2 text-white text-sm sm:text-base">
              <p><i className="fas fa-phone-alt mr-2"></i>{userData.besicDetails.phone}</p>
              <p><i className="fas fa-envelope mr-2"></i>{userData.besicDetails.email}</p>
              <p><i className="fas fa-map-marker-alt mr-2"></i>{`${userData.besicDetails.city}, ${userData.besicDetails.country}`}</p>
              <p>
                <a href={userData.besicDetails.linkdin} target="_blank" rel="noopener noreferrer">{userData.besicDetails.linkdin}</a>
              </p>
              <p>
                <a href={userData.besicDetails.github} target="_blank" rel="noopener noreferrer">{userData.besicDetails.github}</a>
              </p>
            </div>
          </div>

          {/* Language Section */}
          <div className="mt-8">
            <h2 className="text-lg sm:text-xl font-bold uppercase">Languages</h2>
            <hr className="my-2 border-white" />
            <div className="mt-4">
              {userData.skillList[0].languages.split(", ").map((lang, index) => (
                <div key={index}>
                  <p className="text-xs sm:text-sm md:text-base">{lang}</p>
                  <div className="w-full bg-gray-300 h-2 mb-4">
                    <div className={`bg-white h-2 ${index === 0 ? 'w-3/4' : index === 1 ? 'w-1/2' : 'w-1/4'}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-2/3 bg-white p-6 sm:p-8">
          {/* Profile Info */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold uppercase">Profile Info</h2>
            <hr className="my-2 border-gray-300" />
            <p className="text-gray-600 mt-4 text-sm sm:text-base">{userData.besicDetails.message}</p>
          </div>

          {/* Work Experience */}
          <div className="mt-8">
            <h2 className="text-lg sm:text-xl font-bold uppercase">Work Experience</h2>
            <hr className="my-2 border-gray-300" />
            <div className="mt-4 space-y-4">
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

          {/* Education Section */}
          <div className="mt-8">
            <h2 className="text-lg sm:text-xl font-bold uppercase">Education</h2>
            <hr className="my-2 border-gray-300" />
            <div className="mt-4 space-y-4">
              {userData.educationList.map((edu, index) => (
                <div key={index}>
                  <p className="font-bold text-sm sm:text-base">{edu.degree} in {edu.fieldOfStudy}</p>
                  <p className="text-sm sm:text-base">{edu.schoolName}, {edu.schoolLocation}</p>
                  <p className="text-xs sm:text-sm">Graduated: {edu.month} {edu.graduationYear}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Expertise */}
          <div className="mt-8">
            <h2 className="text-lg sm:text-xl font-bold uppercase">Skills & Expertise</h2>
            <hr className="my-2 border-gray-300" />
            <div className="mt-4 grid grid-cols-2 gap-4">
              {userData.skillList[0].skills.map((skill, index) => (
                <div key={index}>
                  <p className="text-sm sm:text-base">{skill}</p>
                  <div className="w-full bg-gray-300 h-2 mb-4">
                    <div className={`bg-blue-500 h-2 ${index % 2 === 0 ? 'w-3/4' : 'w-1/2'}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

template14.propTypes = {
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

export default template14;
