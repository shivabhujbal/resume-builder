import React from "react";
import templateData from '../resumetemplates/templateData';
import PropTypes from 'prop-types';

function template29({userData}) {
  return (
    <div className="bg-gray-100 text-gray-900 p-10 font-sans">
      <div className=" mx-auto bg-white shadow-lg p-8 rounded-lg w-[210mm] h-[287mm]">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">
              {userData.besicDetails.first_name} {userData.besicDetails.last_name}
            </h1>
            <p className="mt-2">
              <span role="img" aria-label="location">📍</span> {`${userData.besicDetails.city}, ${userData.besicDetails.country}`}<br />
              <span role="img" aria-label="phone">📞</span> {userData.besicDetails.phone}<br />
              <span role="img" aria-label="email">📧</span> {userData.besicDetails.email}
            </p>
          </div>
          {/* <div>
            <img
              className="rounded-full w-32 h-32 object-cover"
              src={templateData.profileImage}
              alt={`${templateData.firstname} ${templateData.lastname}`}
            />
          </div> */}
        </div>

        {/* Profile Section */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold border-b-2 border-black inline-block mb-4">
            PROFILE
          </h2>
          <p className="leading-relaxed">
            {userData.besicDetails.message}
          </p>
        </section>

        {/* Professional Experience */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold border-b-2 border-black inline-block mb-4">
            PROFESSIONAL EXPERIENCE
          </h2>

          {userData.experianceList.map((job, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-semibold">
                <p>{job.title} at {job.company}</p>
              </h3>
              <p className="italic text-gray-700">
                <p>${job.startDate} - ${job.endDate}</p>
              </p>
              <p>{job.location} </p>
              <ul className="list-disc pl-5">
                {job.responsibility.map((resp, idx) => (
                  <p key={idx}><span className="text-base font-bold mr-1">&#8226;</span>{resp}</p>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold border-b-2 border-black inline-block mb-4">
            EDUCATION
          </h2>
          {userData.educationList.map((edu, index) => (
            <div key={edu.EducationID} className="mb-6">
              <p>{edu.schoolName}, {edu.schoolLocation} </p>
              <p><strong>  {edu.degree} - {edu.fieldOfStudy} </strong></p>
              <p>Graduated: {edu.graduationYear}</p>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold border-b-2 border-white inline-block mb-4 text-white">
            SKILLS
          </h2>
          <p className="space-x-4">
            {userData.skillList[0].skills.map((skill, index) => (
              <span key={index} className="bg-gray-200 text-gray-800 text-xs md:text-sm py-1 px-2 rounded-lg">
                {skill}
              </span>
            ))}
          </p>
        </section>

        {/* Languages */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold border-b-2 border-black inline-block mb-4">
            LANGUAGES
          </h2>
          <p className="space-x-4">
            {userData.skillList[0].languages.split(", ").map((lang, index) => (
              <p key={index} className="text-xs md:text-base">{lang}</p>
            ))}
          </p>
        </section>

        {/* Projects */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold border-b-2 border-black inline-block mb-4">
            PROJECTS
          </h2>
          {userData.projectList.map((proj, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-semibold">{proj.projectTitle}</h3>
              <p className="italic">{proj.description}</p>
              <p>Technologies: {proj.techstack.join(', ')}</p>
              <p className="text-sm">{proj.projectRole}
                <a href={proj.link} className="text-blue-500 ml-11" target="_blank" rel="noopener noreferrer">View Project</a>
              </p>
            </div>
          ))}
        </section>

        {/* Certifications */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold border-b-2 border-black inline-block mb-4">
            CERTIFICATIONS
          </h2>
          {userData.educationList.map((education, eduIndex) =>
            education.certification.map((cert, certIndex) => (
              <p key={`${eduIndex}-${certIndex}`} className="md:text-sm">{cert}</p>
            ))
          )}
        </section>

        {/* Declaration */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold border-b-2 border-black inline-block mb-4">
            DECLARATION
          </h2>
          <p>{templateData.declaration}</p>
        </section>
      </div>
    </div>
  );
}

template29.propTypes = {
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

export default template29;