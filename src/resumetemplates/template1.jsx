import React from "react";
import PropTypes from "prop-types";

const Template1 = ({ userData }) => {
  return (
    <div className="w-[210mm] h-[287mm] mx-auto p-4 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex flex-col md:flex-row h-full ">
        {/* Left Column */}
        <div className="w-full md:w-2/3 pr-6 flex flex-col">
          {/* Header Section */}
          <div className="flex items-center mb-2 py-1">
            <div>
              <h1 className="text-4xl font-bold leading-tight">{`${userData.besicDetails.first_name} ${userData.besicDetails.last_name}`}</h1>
              <p className="text-gray-600 text-base">
                {userData.besicDetails.profession}
              </p>
            </div>
          </div>

          {/* Summary Section */}
          <div className="mb-2">
            <h2 className="text-xl font-semibold text-gray-700">Summary</h2>
            <p className="text-gray-800 text-base">
              {userData.besicDetails.message}
            </p>
          </div>

          {/* Experience Section */}
          <div className="mb-1 ">
            <h2 className="text-xl font-semibold text-gray-700">Experience</h2>
            {userData.experianceList.map((job, index) => (
              <div key={index} className="mb-2">
                <h3 className="font-bold text-gray-900 text-base">
                  {job.title} - {job.company}
                </h3>
                <p className="text-gray-600 text-sm">{`${job.location} | ${job.startDate} - ${job.endDate}`}</p>
                <div className="space-y-1">
                  {job.responsibility.map((task, idx) => (
                    <p
                      key={idx}
                      className="text-gray-800 text-base"
                    ><span className="text-base font-bold mr-1">&#8226;</span>
                      {task}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Project section */}
        <div className="mb-1">
          <h2 className="text-xl font-semibold text-gray-700">Project</h2>
            {userData.projectList.map((pro, index) => (
              <div key={index} className="mb-1">
                <div className="mb-1">
                  <h3 className="text-base font-bold capitalize text-gray-900">
                    {pro.projectTitle} - <span className="text-sm">{pro.projectRole}</span>
                  </h3>
                </div>
                <div>
                  <div className="">
                    <span className="text-gray-600 text-base">
                      {pro.techstack.join(", ")}
                    </span>
                    <br />
                    <span className="text-gray-600 text-base">
                      <a
                        href={pro.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {pro.projectLink}
                      </a>
                    </span>
                  </div>
                  <div className="mt-1 text-base">
                    {pro.description.split("\n").map((desc, index) => (
                      <p key={index}>
                        <span className="text-base font-bold">&#8226;</span>{" "}
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education Section */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-700">Education</h2>
            {userData.educationList.map((edu, index) => (
              <div key={index} className="mb-1">
                <h3 className="font-bold text-gray-800 text-base">
                {edu.degree.replace(/_/g, " ")} in {edu.fieldOfStudy}
                </h3>
                <p className="text-gray-600 text-base">{edu.schoolName}</p>
                <p className="text-gray-600 text-base">{edu.schoolLocation}</p>
                <p className="text-gray-600 text-base">{edu.graduationYear}</p>
              </div>
            ))}
          </div>
        </div>

          {/* Right Column */}
          <div className="w-full md:w-1/3 mt-6 mr-2 md:mt-20 overflow-hidden">
            {/* Contact Info */}
            <div className="mb-4 space-y-1">
              <h2 className="text-xl font-semibold text-gray-700">
                Contact Info
              </h2>
              <p className="text-gray-800 text-base">
                <span className="font-semibold">Phone no:</span> <br />
                {userData.besicDetails.phone}
              </p>
              <p className="text-gray-800 text-base">
                <span className="font-semibold">Email:</span>
                <br />
                {userData.besicDetails.email}
              </p>
              <p className="text-gray-800 text-base">
                <span className="font-semibold">Location:</span> <br />
                {`${userData.besicDetails.city}, ${userData.besicDetails.country}`}
              </p>
              <div>
                <span className="font-semibold">LinkedIn:</span>{" "}
                <a
                  href={userData.besicDetails.linkdin}
                  className="text-blue-500 break-words text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {userData.besicDetails.linkdin}
                </a>
              </div>
              <div>
                <span className="font-semibold">GitHub: </span>{" "}
                <a
                  href={userData.besicDetails.github}
                  className="text-blue-500 break-words text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {userData.besicDetails.github}
                </a>
              </div>
            </div>

            {/* Skills Section */}
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-700">Skills</h2>
              <div className="grid grid-cols-1 gap-2">
                <div>
                  <h3 className="font-bold text-gray-800 text-base mb-1">
                    Primary Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {userData.skillList[0].skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 text-gray-800 text-sm py-1 px-2 rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-base mb-1">
                    Secondary Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {userData.skillList[0].skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 text-gray-800 text-sm py-1 px-2 rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications Section */}
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-700">
                Certifications
              </h2>
              <div className="ml-4 space-y-1">
                {userData.educationList.map((education, eduIndex) =>
                  education.certification.map((cert, certIndex) => (
                    <p
                      key={`${eduIndex}-${certIndex}`}
                      className="text-gray-800 text-sm"
                    >
                      {cert}
                    </p>
                  ))
                )}
              </div>
            </div>

            {/* Languages Section */}
            <div className="relative mb-4">
              <h2 className="text-xl font-semibold text-gray-700">Languages</h2>
              <div className="ml-4 space-y-1">
                {userData.skillList[0].languages
                  .split(", ")
                  .map((lang, index) => (
                    <p key={index} className="text-gray-800 text-sm">
                      {lang}
                    </p>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

Template1.propTypes = {
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

export default Template1;
