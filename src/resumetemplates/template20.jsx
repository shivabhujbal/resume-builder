import React from 'react';
import templateData from '../resumetemplates/templateData';
import PropTypes from 'prop-types';

const template20 = ({ userData }) => {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center py-10">
      <div className="max-w-3xl  bg-white p-10 rounded-lg shadow-lg font-sans  w-[210mm] h-[287mm]">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-[#b02a5a]">{userData.besicDetails.first_name} {userData.besicDetails.last_name}</h1>
          <h2 className="text-xl font-semibold text-[#b02a5a]">{userData.besicDetails.profession}</h2>
          <div className="flex justify-center items-center text-gray-600 mt-2">
            <span className="mr-4">📍  {`${userData.besicDetails.city}, ${userData.besicDetails.country}`}</span>
            <span className="mr-4">📧 {userData.besicDetails.email}</span>
            <span>📞 {userData.besicDetails.phone}</span>
          </div>
          <div className="flex justify-center items-center text-gray-600 mt-2">
            <a href={userData.besicDetails.linkdin} className="mr-4 text-blue-500">LinkedIn</a>
            <a href={userData.besicDetails.github} className="text-blue-500">GitHub</a>
          </div>
        </div>

        {/* Profile Section */}
        <section className="mt-8">
          <div className="w-full bg-[#f3e4ea] px-4 py-2 rounded-t-md">
            <h3 className="text-2xl font-bold text-[#b02a5a]">Profile</h3>
          </div>
          <div className="bg-white p-4 rounded-b-md shadow-sm">
            <p className="mt-2 text-gray-800">{userData.besicDetails.message}</p>
          </div>
        </section>

        {/* Professional Experience Section */}
        <section className="mt-4 h-fit">
          <div className="w-full bg-[#f3e4ea] px-4 py-2 rounded-t-md h-fit">
            <h3 className="text-2xl font-bold text-[#b02a5a]">Professional Experience</h3>
          </div>
          <div className="bg-white p-4 rounded-b-md shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3"> {/* New Grid Layout */}
              {userData.experianceList.map((job, index) => (
                <div key={index} >
                  <h4 className="text-xl font-semibold">{job.title}</h4>
                  <p className="text-gray-600">{`${job.location} | ${job.startDate} - ${job.endDate}`}</p>
                  <p className="text-gray-600 italic">{job.company}</p>
                  <ul className="list-disc ml-6  text-gray-800">
                    {job.responsibility.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Education Section */}
        <section className="mt-4">
          <div className="w-full bg-[#f3e4ea] px-4 py-2 rounded-t-md">
            <h3 className="text-2xl font-bold text-[#b02a5a]">Education</h3>
          </div>
          <div className="bg-white p-4 rounded-b-md shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1"> {/* New Grid Layout */}
              {userData.educationList.map((edu, index) => (
                <div key={index} className="mt-4">
                  <h4 className="text-sm font-semibold">{edu.schoolName}</h4>
                  <p className="text-gray-600">{edu.schoolLocation}</p>
                  <p className="text-gray-600 italic">{edu.degree} in {edu.fieldOfStudy}</p>
                  <p className="text-gray-600">{edu.gradeYear}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Skills Section */}
        <section className="mt-8">
          <div className="w-full bg-[#f3e4ea] px-4 py-2 rounded-t-md">
            <h3 className="text-2xl font-bold text-[#b02a5a]">Skills</h3>
          </div>
          <div className="bg-white p-4 rounded-b-md shadow-sm">
            <ul className="list-disc ml-6 mt-2 text-gray-800">
              {userData.skillList[0].languages.split(", ").map((lang, index) => (
                <li key={index}>{lang}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mt-8">
          <div className="w-full bg-[#f3e4ea] px-4 py-2 rounded-t-md">
            <h3 className="text-2xl font-bold text-[#b02a5a]">Certifications</h3>
          </div>
          <div className="bg-white p-4 rounded-b-md shadow-sm">
            <ul className="list-disc grid grid-cols-1 md:grid-cols-2 gap-6 ml-6 mt-2 text-gray-800"> {/* Grid Layout for Certifications */}
              {userData.educationList.map((education, eduIndex) =>
                education.certification.map((cert, certIndex) => (
                  <li key={`${eduIndex}-${certIndex}`} className="text-xs md:text-sm">{cert}</li>
                ))
              )}
            </ul>
          </div>
        </section>


        {/* Languages Section */}
        <section className="mt-8">
          <div className="w-full bg-[#f3e4ea] px-4 py-2 rounded-t-md">
            <h3 className="text-2xl font-bold text-[#b02a5a]">Languages</h3>
          </div>
          <div className="bg-white p-4 rounded-b-md shadow-sm">
            <ul className="list-disc ml-6 mt-2 text-gray-800">
              {userData.skillList[0].languages.split(", ").map((lang, index) => (
                <p key={index} className="text-sm md:text-base">{lang}</p>
              ))}
            </ul>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mt-8">
          <div className="w-full bg-[#f3e4ea] px-4 py-2 rounded-t-md">
            <h3 className="text-2xl font-bold text-[#b02a5a]">Projects</h3>
          </div>
          <div className="bg-white p-4 rounded-b-md shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Grid Layout */}
              {userData.projectList.map((project, index) => (
                <div key={index} className="mt-4">
                  <h4 className="text-xl font-semibold">{project.projectTitle}</h4>
                  <h4 className="text-xl font-semibold">{project.projectRole}</h4>
                  <p className="text-gray-600">{project.description}</p>
                  <p className="text-gray-600 italic">Technologies: {project.techstack.join(', ')}</p>
                  <a href={project.link} className="text-blue-500 mt-2">Project Link</a>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Declaration Section */}
        <section className="mt-8">
          <div className="w-full bg-[#f3e4ea] px-4 py-2 rounded-t-md">
            <h3 className="text-2xl font-bold text-[#b02a5a]">Declaration</h3>
          </div>
          <div className="bg-white p-4 rounded-b-md shadow-sm">
            <p className="text-gray-800">{templateData.declaration}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

template20.propTypes = {
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

export default template20;