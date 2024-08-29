import React from "react";
import PropTypes from "prop-types";

const Template5 = ({ userData }) => {
  return (
    <div
      className="bg-sky-200 font-times-new-roman"
      style={{
        width: "793.7px", // Width for A4 size in pixels (standard is 210mm or 793.7px at 96dpi)
        height: "1118.52px", // Height for A4 size in pixels (standard is 297mm or 1122.52px at 96dpi)
        margin: "0 auto",
        padding: "33px", // Adjust padding to your preference
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "space-between",
        gap: "20px", // Gap between left and right columns
      }}
    >
      {/* Left Column */}
      <div className="flex-1">
        {/* Header section */}
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-black mb-1">
          {userData.besicDetails.first_name} {userData.besicDetails.last_name}
          </h1>
          <h2 className="text-base font-medium text-black mb-1">
          {userData.besicDetails.profession}
          </h2>
        </div>

        {/* Main content section */}
        <div className="flex flex-col">
          {/* Work Experience section */}
          <div className="mb-1 ">
            <h3 className="text-base font-bold mb-2 text-black">
              WORK EXPERIENCE
            </h3>
            {userData.experianceList.map((job, index) => (
              <div key={index} className="border-l-2 border-black pl-2 mb-2">
                <h4 className="text-sm font-semibold mb-1 text-black">
                  {job.title}
                </h4>
                <p className="text-black mb-1 text-sm">
                  {job.company} | {job.startDate} - {job.endDate}
                </p>
                <p className="text-black mb-1 text-sm">{job.location}</p>
                <div className="text-black text-sm">
                  {job.responsibility?.map((responsibility, idx) => (
                    <p key={idx}>
                      <span className="text-base font-bold mr-1">&#8226;</span>
                      {responsibility}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education section */}
          <div className="mb-3">
            <h3 className="text-base font-bold mb-2 text-black">EDUCATION</h3>
            {userData.educationList.map((education, index) => (
              <div key={index} className="border-l-2 border-black pl-2 mb-3">
                <h4 className="text-sm font-semibold mb-1 text-black">
                  {education.degree.replace(/_/g, " ")} in{" "}
                  {education.fieldOfStudy}
                </h4>
                <p className="text-black mb-1 text-sm">
                  {education.schoolName} | {education.graduationYear}
                </p>
                <p className="text-black text-sm">{education.schoolLocation}</p>
              </div>
            ))}
          </div>

          {/* Projects section */}
          <div className="mb-3">
            <h3 className="text-base font-bold mb-2 text-black">PROJECTS</h3>
            {userData.projectList.map((pro, index) => (
              <div key={index} className="border-l-2 border-black pl-2 mb-4">
                <h4 className="text-sm font-medium mb-1 text-black capitalize">
                {pro.projectTitle}
                </h4>
                <p className="text-black mb-1 text-sm">
                {pro.projectRole} |{" "}
                {pro.projectLink && (
                    <a
                      className="text-blue-500 text-sm"
                      href={pro.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Project Link
                    </a>
                  )}
                </p>
                <p className="text-black text-sm">
                  Techstack: {pro.techstack.join(", ")}
                </p>

                <div className="text-black text-sm">
                {pro.description.split("\n").map((desc, index) => (
                    <p key={index}>
                      <span className="text-base font-bold mr-1">&#8226;</span>
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1">
        {/* Summary section */}
        <div className="mb-6">
          <h3 className="text-base font-bold mb-2 text-black">SUMMARY</h3>
          <p className="text-black text-sm border-r-2 border-black pl-2">
          {userData.besicDetails.message}
          </p>
        </div>

        {/* Contacts section */}
        <div className="mb-6">
          <h3 className="text-base font-bold mb-2 text-black">CONTACTS</h3>
          <div className="flex flex-col gap-2 text-sm border-r-2 border-black pl-2">
            <span className="text-black text-sm">
            {userData.besicDetails.city}, {userData.besicDetails.country}
            </span>
            <span className="text-black text-sm">{userData.besicDetails.email}</span>
            <span className="text-black text-sm">{userData.besicDetails.phone}</span>
            <a
              className="text-sm"
              href={userData.besicDetails.linkdin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="text-sm"
              href={userData.besicDetails.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Certifications section */}
        <div className="mb-6">
          <h3 className="text-base font-bold mb-2 text-black">
            CERTIFICATIONS
          </h3>
          <div className="text-black text-xs border-r-2 border-black pl-2">
          {userData.educationList.map((education, eduIndex) =>
          education.certification.map((cert, certIndex) => (
              <p key={`${eduIndex}-${certIndex}`} className="text-sm">
                <span className="text-base font-bold mr-2">&#8226;</span>
                {cert}
              </p>
              ))
            )}
          </div>
        </div>

        {/* Languages section */}
        <div className="mb-6">
          <h3 className="text-base font-bold mb-2 text-black">LANGUAGES</h3>
          <div className="text-black text-xs border-r-2 border-black pl-2">
          {userData.skillList[0].languages
                    .split(", ")
                    .map((language, index) => (
              <p key={index} className="text-sm capitalize mb-1"><span className="text-base font-bold ml-1 mr-2">&#8226;</span>
                {language}
              </p>
            ))}
          </div>
        </div>

        {/* Skills section */}
        <div>
          <h3 className="text-sm font-bold mb-2 text-black">SKILLS</h3>
          <ul className="text-black text-sm ">
            {userData.skillList[0].skills.map((skill, index) => (
                <li key={index} className="flex items-center text-sm border-r-2 border-black pl-2">
                  <p className="mr-1 text-sm capitalize"><span className="text-base font-bold ml-2 mr-2">&#8226;</span>{skill}</p>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

Template5.propTypes = {
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

export default Template5;
