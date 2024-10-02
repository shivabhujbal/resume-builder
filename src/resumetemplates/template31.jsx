import React from 'react';
import templateData from '../resumetemplates/templateData';
import PropTypes from 'prop-types';

const template31 = () => {
  return (
    <div className="w-[210mm] h-[287mm] mx-auto bg-gray-50 shadow-2xl font-sans text-gray-900 p-4 overflow-hidden">
      {/* Header Section */}
      <div className="flex justify-between mb-4">
        <div className="text-left">
          <h1 className="text-3xl text-teal-700 font-bold">{templateData.firstname} {templateData.lastname}</h1>
          <h2 className="text-lg text-teal-600">{templateData.profession}</h2>
        </div>
        <div className="text-left mt-2 space-y-1 text-sm"> 
          <p><strong>Email:</strong> <a href={`mailto:${templateData.email}`} className="text-blue-600 underline">{templateData.email}</a></p>
          <p><strong>Phone:</strong> {templateData.phone}</p>
          <p><strong>Location:</strong> {templateData.city}, {templateData.country}</p>
          <p><strong>LinkedIn:</strong> <a href={templateData.linkedIn} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">LinkedIn Profile</a></p>
          <p><strong>GitHub:</strong> <a href={templateData.GitHub} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">GitHub Profile</a></p>
        </div>
      </div>

      {/* Summary Section */}
      <div className="mb-3 bg-gray-100 p-2 rounded-lg shadow">
        <h2 className="text-xl font-bold border-b-4 border-teal-600 inline-block">Summary</h2>
        <p className="mt-1 text-gray-700 text-sm">{templateData.summary}</p>
      </div>

      {/* Education Section */}
      <div className="mb-3 bg-gray-100 p-2 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-teal-600 border-b-2 border-teal-600 inline-block">Education</h2>
        <div className="mt-1 space-y-1 text-sm">
          {templateData.education.map((edu) => (
            <div key={edu.EducationID}>
              <h3 className="text-base font-bold text-gray-800">{edu.sclName}</h3>
              <p className="text-gray-600">{edu.degree} in {edu.fieldOfStudy}</p>
              <p className="text-gray-500">{edu.sclLocation} - Graduated: {edu.gradeYear}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="mb-3 bg-gray-100 p-2 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-teal-600 border-b-2 border-teal-600 inline-block">Experience</h2>
        <div className="mt-1 space-y-2 text-sm">
          {templateData.experience.map((job, index) => (
            <div key={index}>
              <h3 className="text-base font-bold text-gray-800">{job.title}</h3>
              <p className="text-gray-600">{job.company} - {job.location}</p>
              <p className="text-gray-500">{job.dateRange}</p>
              <ul className="list-disc list-inside text-gray-700 mt-1 space-y-1">
                {job.responsibilities.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="mb-3 bg-gray-100 p-2 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-teal-600 border-b-2 border-teal-600 inline-block">Projects</h2>
        <div className="mt-1 space-y-1 text-sm">
          {templateData.projects.map((project, index) => (
            <div key={index}>
              <h3 className="text-base font-bold text-gray-800">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
              <p className="text-gray-700"><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                Project Link
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-3 bg-gray-100 p-2 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-teal-600 border-b-2 border-teal-600 inline-block">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-1 text-sm">
          {templateData.languages.map((language, index) => (
            <div key={index} className="bg-gray-200 p-1 rounded-md text-center">
              {language}
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div className="mb-3 bg-gray-100 p-2 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-teal-600 border-b-2 border-teal-600 inline-block">Certifications</h2>
        <div className="mt-1 space-y-1 text-sm">
          {templateData.certifications.map((certification, index) => (
            <p key={index} className="text-gray-700">{certification}</p>
          ))}
        </div>
      </div>

      {/* Declaration Section */}
      <div className="mt-3 bg-gray-100 p-2 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-teal-600 border-b-2 border-teal-600 inline-block">Declaration</h2>
        <p className="text-gray-700 mt-1 text-sm">{templateData.declaration}</p>
      </div>
    </div>
  );
};

template31.propTypes = {
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

export default template31;
