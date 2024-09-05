import React from "react";
import PropTypes from "prop-types";

const Template10 = ({ userData }) => {
  return (
    <div className="form bg-zinc-100 w-[210mm] h-[287mm] mx-auto border border-zinc-800 p-3">
      <div id="pdfContent bg-zinc-100">
        {/* Header Section */}
        <div className="w-full bg-zinc-100">
          <div className="flex justify-between items-start">
            {/* User Details */}
            <div className="font-[Roboto_Condensed]">
              <p className="text-4xl font-bold leading-tight">
                {`${userData.besicDetails.first_name} ${userData.besicDetails.last_name}`}
              </p>
              <p className="text-lg font-semibold">
                {userData.besicDetails.profession}
              </p>
              <p className="text-gray-600">
                {`${userData.besicDetails.city}, ${userData.besicDetails.country}`}
              </p>
            </div>
            {/* Contact Details */}
            <div className="text-right mb-2">
              <div className="space-y-1">
                <p>{userData.besicDetails.email}</p>
                <p>{userData.besicDetails.phone}</p>
                <p>
                  <a
                    href={userData.besicDetails.linkdin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </p>
                <p>
                  <a
                    href={userData.besicDetails.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="space-y-2">
          {/* Summary Section */}
          <div className="break-words">
            <p className="text-lg uppercase border-t-2 border-gray-300 py-1 font-[Roboto_Condensed]">
              Summary
            </p>
            <div className="ml-4">
              <p>{userData.besicDetails.message || "No summary provided."}</p>
            </div>
          </div>

          {/* Work Experience Section */}
          <div className="break-words">
            <p className="text-lg uppercase border-t-2 border-gray-300 py-1 font-[Roboto_Condensed]">
              Work Experience
            </p>
            <div className="ml-2 space-y-2">
              {userData.experianceList.length > 0 ? (
                userData.experianceList.map((job, index) => (
                  <div className="relative pl-6" key={index}>
                    <div className="absolute top-2 left-0 w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div className="flex ">
                    <p className="text-xl font-[Roboto_Condensed]">
                      {job.title}
                    </p>
                    <p className="ml-auto">{job.location}</p>
                    </div>
                    <div className="flex mb-1">
                    <p className="font-bold text-gray-600">
                    {job.company}</p>
                     <span className="ml-auto">{job.startDate} - {job.endDate}</span>
                    </div>
                    <p className="text-gray-600">
                      
                    </p>
                    <p>{job.responsibility}</p>
                  </div>
                ))
              ) : (
                <p>No work experience listed.</p>
              )}
            </div>
          </div>

          {/* Projects Section */}
          <div>
            <h2 className="text-lg uppercase border-t-2 border-gray-300 py-2 font-[Roboto_Condensed]">Projects</h2>
            {userData.projectList.length > 0 ? (
              userData.projectList.map((project, index) => (
                <div key={index} className="mb-2 relative pl-6">
                 <div className="absolute top-2 left-0 w-3 h-3 bg-blue-500 rounded-full"></div>
                 <div className="flex">
                  <h3 className="text-xl font-[Roboto_Condensed] capitalize">{project.projectTitle}</h3>
                  <p className="ml-auto"></p>{project.techstack.join(", ")}
                  </div>
                  <div className="flex">
                  <p>Role:  {project.projectRole}</p>
                  <p className="ml-auto">
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    > Project Link
                    </a>
                  </p>
                  </div>
                  <p>{project.description}</p>
                </div>
              ))
            ) : (
              <p>No projects listed.</p>
            )}
          </div>

          {/* Education Section */}
          <div className="break-words">
            <p className="text-lg uppercase border-t-2 border-gray-300 py-2 font-[Roboto_Condensed]">
              Education
            </p>
            <div className="ml-2 space-y-2">
              {userData.educationList.length > 0 ? (
                userData.educationList.map((edu, index) => (
                  <div className="relative pl-6" key={index}>
                    <div className="absolute top-2 left-0 w-3 h-3 bg-blue-500 rounded-full"></div>
                    <p className="text-xl font-[Roboto_Condensed]">
                      {edu.degree} in {edu.fieldOfStudy}
                    </p>
                    <p>
                      {edu.schoolName}, {edu.schoolLocation}
                    </p>
                    <p className="text-gray-600">
                      Graduated: {edu.month} {edu.graduationYear}
                    </p>
                  </div>
                ))
              ) : (
                <p>No education details provided.</p>
              )}
            </div>
          </div>

          

          {/* Skills Section */}
          <div className="break-words">
            <p className="text-lg uppercase border-t-2 border-gray-300 py-2 font-[Roboto_Condensed]">
              Skills & Languages
            </p>
            <div className="ml-4 space-y-2">
              {userData.skillList.length > 0 ? (
                userData.skillList.map((skillItem, index) => (
                  <div key={index}>
                    <p>
                      <strong>Skills:</strong> {skillItem.skills.join(", ")}
                    </p>
                    <p>
                      <strong>Languages:</strong> {skillItem.languages}
                    </p>
                  </div>
                ))
              ) : (
                <p>No skills listed.</p>
              )}
            </div>
          </div>

          {/* Certification section */}
          <div>
          <h1 className="text-lg uppercase border-t-2 border-gray-300 pt-1 font-[Roboto_Condensed]">Certifications</h1>
        <div className="list-disc ml-1 text-gray-800 leading-tight">
        {userData.educationList.map((education, eduIndex) =>
          education.certification.map((cert, certIndex) => (
            <li key={`${eduIndex}-${certIndex}`} className="mt-1">{cert}</li>
          ))
        )}
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Template10.propTypes = {
  userData: PropTypes.shape({
    besicDetails: PropTypes.shape({
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      profession: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      linkdin: PropTypes.string,
      github: PropTypes.string,
      message: PropTypes.string,
    }).isRequired,
    educationList: PropTypes.arrayOf(
      PropTypes.shape({
        degree: PropTypes.string.isRequired,
        fieldOfStudy: PropTypes.string.isRequired,
        schoolName: PropTypes.string.isRequired,
        schoolLocation: PropTypes.string.isRequired,
        graduationYear: PropTypes.string.isRequired,
        month: PropTypes.string.isRequired,
        certification: PropTypes.arrayOf(PropTypes.string).isRequired,
      })
    ).isRequired,
    experianceList: PropTypes.arrayOf(
      PropTypes.shape({
        company: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        responsibility: PropTypes.arrayOf(PropTypes.string),
      })
    ).isRequired,
    projectList: PropTypes.arrayOf(
      PropTypes.shape({
        projectTitle: PropTypes.string.isRequired,
        projectRole: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        techstack: PropTypes.arrayOf(PropTypes.string).isRequired,
        projectLink: PropTypes.string.isRequired,
      })
    ).isRequired,
    skillList: PropTypes.arrayOf(
      PropTypes.shape({
        skillType: PropTypes.string.isRequired,
        skills: PropTypes.arrayOf(PropTypes.string).isRequired,
        languages: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Template10;
