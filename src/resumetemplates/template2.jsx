import React from "react";
import PropTypes from "prop-types";

const Template2 = ({ userData }) => {
  return (
    <div className="w-[210mm] h-[287mm] bg-white shadow-md border border-gray-300 rounded mx-auto p-3">
      <header className="flex justify-between items-start mb-4">
        <div>
          <h1 className="text-4xl font-bold">
            {`${userData.besicDetails.first_name} ${userData.besicDetails.last_name}`}
          </h1>
          <h2 className="text-lg">{userData.besicDetails.profession}</h2>
        </div>
        <div className="text-right text-sm">
          <p>{userData.besicDetails.phone}</p>
          <p>{userData.besicDetails.email}</p>
          <p>{userData.besicDetails.github}</p>
          <p>{userData.besicDetails.linkdin}</p>
        </div>
      </header>
      <hr className="text-black mb-2" />

      {/* Education Section */}
      <section className="mb-2">
        <h2 className="text-xl font-semibold mb-2 border-b-[3px] border-gray-400 w-fit">
          Education
        </h2>
        {userData.educationList.map((edu, index) => (
          <div key={index} className="mb-2">
            <h3 className="font-bold capitalize">
              {edu.degree.replace(/_/g, " ")} in {edu.fieldOfStudy}
            </h3>
            <p>
              {edu.schoolName} ({edu.month} {edu.graduationYear})
            </p>
            <h3 className="">{edu.schoolLocation}</h3>
          </div>
        ))}
      </section>

      {/* Projects Section */}
      <section className="mb-2">
        <h2 className="text-xl font-semibold mb-2 border-b-[3px] border-gray-400 w-fit">
          Projects
        </h2>
        {userData.projectList.map((project, index) => (
          <div key={index} className="mb-2">
            <h3 className="font-bold capitalize">
              {project.projectTitle}-
              <span className="font-semibold cursor-pointer text-sky-500 ml-1">
                <a href={project.projectLink}>Live link</a>
              </span>{" "}
            </h3>
            <p>
              <span className="font-semibold">Role:</span> {project.projectRole}
            </p>
            <p>
              <span className="font-semibold">Tech Stack:</span>{" "}
              {project.techstack.join(", ")}
            </p>
            <p className="text-base break-words">
              <span className="font-semibold">Description: </span>
              {project.description}
            </p>
          </div>
        ))}
      </section>

      {/* Experience Section */}
      <section className="mb-2">
        <h2 className="text-xl font-semibold mb-2 border-b-[3px] border-gray-400 w-fit">
          Experience
        </h2>
        {userData.experianceList.map((experience, index) => (
          <div key={index} className="mb-3">
            <h3 className="font-bold capitalize">
              {experience.company}, {experience.location}
            </h3>
            <p>{experience.title}</p>
            <p>
              {experience.startDate} - {experience.endDate}
            </p>
            <div className="capitalize mt-1 text-base">
              {experience.responsibility.map((task, i) => (
                <p key={i}>
                  <span className="text-base font-bold pr-2">&#8226;</span>
                  {task}
                </p>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Skills Section */}
      <section className="mb-2">
        <h2 className="text-xl font-semibold mb-1 border-b-[3px] border-gray-400 w-fit">Skills</h2>
        {userData.skillList.map((skill, index) => (
          <div key={index} className="text-sm">
            <p className="capitalize">
              <strong>Technical Skill</strong> : {skill.skills.join(", ")}
            </p>
          </div>
        ))}
      </section>
      <div className="mb-2">
        <h3 className="text-xl font-semibold mb-1 border-b-[3px] border-gray-400 w-fit">
        Certification
        </h3>
        {userData.educationList.map((education, eduIndex) =>
          education.certification.map((cert, certIndex) => (
            <p key={`${eduIndex}-${certIndex}`} className="text-sm">
              <span className="text-sm font-bold">&#8226;</span> {cert}
            </p>
          ))
        )}
      </div>

      <section className="mb-2">
        <h2 className="text-xl font-semibold mb-1 border-b-[3px] border-gray-400 w-fit">Language</h2>
        {userData.skillList.map((skill, index) => (
          <ul key={index} className="text-sm capitalize">
            <li>{skill.languages}</li>
          </ul>
        ))}
      </section>

    </div>
  );
};

Template2.propTypes = {
  userData: PropTypes.shape({
    basicDetails: PropTypes.shape({
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
    experienceList: PropTypes.arrayOf(
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

export default Template2;
