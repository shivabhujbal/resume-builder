import React from 'react';
import PropTypes from "prop-types";

const Template9 = ({ userData }) => {
  return (
    <div id="cv" className="w-[793.7px] h-[1118.52px] mx-auto p-6 bg-gray-100 shadow-lg rounded-lg border border-gray-300">
      <header className="flex flex-col md:flex-row items-center border-b-4 border-teal-600 pb-3 mb-2">
       
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold text-teal-700">{userData.besicDetails.first_name} {userData.besicDetails.last_name}</h1>
          <h2 className="text-xl font-semibold text-teal-600">{userData.besicDetails.profession}</h2>
          <div className='flex justify-center space-x-1'>
          <p className="text-teal-500">{userData.besicDetails.city}, {userData.besicDetails.country} |</p>
          <p className="text-teal-500">
            <a href={`mailto:${userData.besicDetails.email}`} className="hover:text-teal-700">{userData.besicDetails.email} |</a>
          </p>
          <p className="text-teal-500">{userData.besicDetails.phone}</p>
          </div>
          <p className="text-teal-500">
            LinkedIn: <a href={userData.besicDetails.linkdin} className="hover:text-teal-700">{userData.besicDetails.linkdin}</a>
          </p>
          <p className="text-teal-500">
            GitHub: <a href={userData.besicDetails.github} className="hover:text-teal-700">{userData.besicDetails.github}</a>
          </p>
        </div>
      </header>

      <section className="mb-1">
        <h1 className="text-xl font-semibold text-teal-600 mb-1">Summary</h1>
        <p className="text-gray-800 leading-relaxed">{userData.besicDetails.message}</p>
      </section>

      <section className="mb-1">
        <h1 className="text-xl font-semibold text-teal-600 mb-1">Work Experience</h1>
        {userData.experianceList.map((exp, index) => (
          <div key={index} className="">
            <h2 className="text-xl font-bold text-gray-800">{exp.title}</h2>
            <p className="text-sm italic text-gray-600">{exp.company} - {exp.location}</p>
            <p className="text-sm italic text-gray-600">{exp.startDate} - {exp.endDate}</p>
            <div className="list-disc text-gray-700">
              {exp.responsibility.map((responsibility, idx) => (
                <li key={idx} className="mt-1">{responsibility}</li>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="mb-2">
        <h1 className="text-xl font-semibold text-teal-600 mb-1">Projects</h1>
        {userData.projectList.map((pro, index) => (
          <div key={index} className="">
            <h2 className="text-xl font-bold text-gray-800 capitalize">{pro.projectTitle}</h2>
            <p className="text-sm italic text-gray-600">{pro.projectRole} - {pro.techstack.join(", ")}</p>
            <p className="text-sm italic text-gray-600 pb-1">{pro.projectLink}</p>
            <p><span className="text-base font-bold mr-3">&#8226;</span>{pro.description}</p>
          </div>
        ))}
      </section>

      <div className='flex gap-20'>
      <section className="mb-1">
        <h1 className="text-xl font-semibold text-teal-600 mb-1">Education</h1>
        {userData.educationList.map((edu, index) => (
          <div key={index} className="mb-1">
            <h2 className="text-xl font-bold text-gray-800">{edu.schoolName}</h2>
            <p className="text-sm italic text-gray-600">{edu.degree.replace(/_/g, " ")}, {edu.fieldOfStudy}</p>
            <p className="text-sm italic text-gray-600">{edu.schoolLocation}</p>
            <p className="text-sm italic text-gray-600">{edu.graduationYear}</p>
          </div>
        ))}
      </section>

        <div>
      <section className="mb-1">
        <h1 className="text-xl font-semibold text-teal-600 mb-1">Key Skills</h1>
          <div className="w-full">
            <p className="text-gray-700 capitalize">{userData.skillList[0].skills.join(', ')}</p>
        </div>
      </section>

      <section className="mb-1">
        <h1 className="text-xl font-semibold text-teal-600 mb-1">Languages</h1>
        <div className="text-gray-800 capitalize">
        {userData.skillList.map((skill, index) => (
            <p key={index} className="">{skill.languages}</p>
          ))}
        </div>
      </section>


      <section className="mb-1">
        <h1 className="text-xl font-semibold text-teal-600">Certifications</h1>
        <div className="list-disc ml-1 text-gray-800">
        {userData.educationList.map((education, eduIndex) =>
          education.certification.map((cert, certIndex) => (
            <li key={`${eduIndex}-${certIndex}`} className="mt-1">{cert}</li>
          ))
        )}
        </div>
      </section>
      </div>
      </div>
    </div>
  );
};

Template9.propTypes = {
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
export default Template9;
