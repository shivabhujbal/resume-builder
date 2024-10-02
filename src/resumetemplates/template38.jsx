import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Import font-awesome icons or react-icons
import templateData from '../resumetemplates/templateData';
import PropTypes from 'prop-types';

const template38 = ({userData}) => {
  return (
    <div className=" mx-auto p-6 bg-white shadow-lg w-[210mm] h-[287mm]">
      {/* Header */}
      <header className="flex justify-between items-center py-4 border-b-2 border-gray-900">
        <div className="w-[500px] h-[120px] bg-gray-800 text-white p-4">
          <h1 className="text-4xl font-bold"> {userData.besicDetails.first_name} {userData.besicDetails.last_name}</h1>
          <p className="text-lg font-medium">{userData.besicDetails.profession}</p>
        </div>
        <div className="space-y-2">
          <p className="flex items-center">
            <FaPhoneAlt className="mr-2" />{userData.besicDetails.phone}</p>
          <p className="flex items-center">
            <FaEnvelope className="mr-2" />{userData.besicDetails.email}</p>
          <p className="flex items-center">
            <FaMapMarkerAlt className="mr-2" />{`${userData.besicDetails.city}, ${userData.besicDetails.country}`}</p>
        </div>
      </header>

      {/* About Me */}
      <section className="py-6 border-b-2 border-gray-900 flex">
        <h2 className="text-xl font-semibold mb-2 w-1/3">About Me</h2>
        <p className="text-gray-700 w-2/3">{userData.besicDetails.message}</p>
      </section>

      {/* Experience */}
      <section className="py-6 border-b-2 border-gray-900 flex">
        <h2 className="text-xl font-semibold mb-2 w-1/3">Experience</h2>
        <div className="w-2/3 space-y-4">
          {userData.experianceList.map((job, index) => (
            <div key={index}>
              <h3 className="font-medium"> {job.title} at {job.company}</h3>
              <p className="italic"> {job.startDate} - {job.endDate}</p>
              <p className="text-gray-700">{job.location}</p>
              <ul className=" pl-5">
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
      </section>

      {/* Education */}
      <section className="py-6 border-b-2 border-gray-900 flex">
        <h2 className="text-xl font-semibold mb-2 w-1/3">Education</h2>
        <div className="w-2/3 space-y-4">
          {userData.educationList.map((edu, index) => (
            <div key={index}>
              <h3 className="font-medium">{`${edu.graduationYear} - ${edu.schoolName}`}</h3>
              <p className="italic">{edu.degree} - {edu.fieldOfStudy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Languages & Expertise & Reference */}
      <section className="py-6 grid grid-cols-3 gap-4">
        {/* Languages */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Languages</h2>
          <ul className="space-y-1">
            {userData.skillList[0].languages.split(", ").map((lang, index) => (
              <div key={index}>
                <p className="text-xs sm:text-sm md:text-base">{lang}</p>
                <div className="w-full bg-gray-300 h-2 mb-4">
                  <div className={`bg-white h-2 ${index === 0 ? 'w-3/4' : index === 1 ? 'w-1/2' : 'w-1/4'}`}></div>
                </div>
              </div>
            ))}
          </ul>
        </div>

        {/* Expertise */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <ul className="space-y-1">
            {templateData.languages.map((language, index) => (
              <div key={index} className="bg-gray-200 p-1 rounded-md text-center">
                {language}
              </div>
            ))}
          </ul>
        </div>

        {/* Reference */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Reference</h2>
          <div>
            <p>Lorna Alvarado</p>
            <p>Company Name/Position</p>
            <p>Phone: +123-456-7890</p>
          </div>
        </div>
      </section>
    </div>
  );
};

template38.propTypes = {
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

export default template38;
