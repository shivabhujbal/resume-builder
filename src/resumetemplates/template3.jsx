import React from "react";
import PropTypes from "prop-types";

const Template3 = ({ userData }) => {
  return (
    <div className="w-[210mm] h-[287mm] bg-white shadow-lg mx-auto px-1">
      <div className="flex justify-center py-3 bg-green-200">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 flex justify-center">
            {userData.besicDetails.first_name} {userData.besicDetails.last_name}
          </h1>
          <h2 className="text-xl font-medium text-gray-700 flex justify-center">
            {userData.besicDetails.profession}
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-2">
        {/* Contact Info Start */}
        <div className="w-[19rem] h-[123%] bg-green-200 overflow-hidden">
          <h3 className="text-lg font-bold text-gray-800 px-24 py-2">
            CONTACT
          </h3>
          <div className="px-3 space-y-1">
            <span className="text-gray-800 font-semibold">Location:</span>
            <p>
              {userData.besicDetails.city}, {userData.besicDetails.country}
            </p>
            <span className="text-gray-800 font-semibold">Phone:</span>
            <p>{userData.besicDetails.phone}</p>
            <span className="text-gray-800 font-semibold break-words">
              Email:
            </span>
            <p>{userData.besicDetails.email}</p>
            <span className="text-gray-800 font-semibold">LinkedIn:</span>
            <br />
            <a
              href={userData.besicDetails.linkdin}
              target="_blank"
              className="break-words"
              rel="noopener noreferrer"
            >
              {userData.besicDetails.linkdin}
            </a>
            <br />
            <span className="text-gray-800 font-semibold">GitHub:</span>
            <br />
            <a
              href={userData.besicDetails.github}
              target="_blank"
              className="break-words"
              rel="noopener noreferrer"
            >
              {userData.besicDetails.github}
            </a>
            <div />
            {/* Contact Info End */}
            {/* Education Start */}
            <div className="mt-2">
              <h3 className="text-lg font-bold text-gray-800 px-16 py-2">
                EDUCATION
              </h3>
              <div className="flex-1">
                {userData.educationList.map((education, index) => (
                  <div key={index} className="text-gray-600 mb-1 text-base">
                    <h4 className="text-medium break-words font-medium text-gray-800 mb-1">
                      {education.degree.replace(/_/g, " ")} in{" "}
                      {education.fieldOfStudy}
                    </h4>
                    <div className="text-sm">
                      <span className="font-medium text-gray-700">
                        {education.schoolName}
                      </span>{" "}
                      <br />
                      <span className="font-sm text-gray-700">
                        {education.schoolLocation}
                      </span>
                      <br />
                      <span className="font-sm text-gray-700">
                        {education.graduationYear}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Education End */}

              {/* skills start */}
              <div className="mb-3">
                <h3 className="text-lg font-bold text-gray-800 px-20 py-2">
                  Skills
                </h3>
                <span className="text-gray-800 font-semibold">
                  Technical Skill:
                </span>
                <p className="text-base text-gray-700 break-words pr-1">
                  {userData.skillList[0].skills.join(", ")}
                </p>
              </div>
              {/* skills End */}

              {/* languages start */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 px-16 py-2">
                  LANGUAGES
                </h3>
                <ul className="text-gray-700 text-base capitalize space-y-1">
                  {userData.skillList[0].languages
                    .split(", ")
                    .map((language, index) => (
                      <li key={index}>{language}</li>
                    ))}
                </ul>
              </div>
              {/* languages End */}
            </div>
          </div>
        </div>
        <div className="w-[31.2rem] h-[135%] ml-[18rem] px-1 absolute bg-gray-50">
          <div className="">
            <h1 className="text-xl font-bold w-fit mx-auto text-gray-800 py-2">
              SUMMARY
            </h1>
            <p className="text-base pl-2">{userData.besicDetails.message}</p>
          </div>
          {/* Experience Start */}
          <div>
            <h3 className="text-xl font-bold w-fit mx-auto text-gray-800 py-2">
              EXPERIENCE
            </h3>
            <div className="flex-1">
              {userData.experianceList.map((job, index) => (
                <div key={index} className="text-gray-700 mb-2 mr-3">
                  <div className="grid grid-cols-2 mb-1">
                    <h3 className="text-base font-semibold text-gray-800 pl-2">
                      {job.title}
                    </h3>
                    <p className="text-sm ml-auto w-fit">
                      {job.startDate} - {job.endDate}
                    </p>
                  </div>
                  <div>
                    <div className="grid grid-cols-2">
                      <span className="font-medium text-gray-800 text-sm pl-2">
                        {job.company}
                      </span>
                      <span className="font-normal ml-auto text-gray-700 text-sm">
                        {job.location}
                      </span>
                    </div>
                    <div className="list-disc pl-2 mt-1 text-base">
                      {job.responsibility.map((responsibility, index) => (
                        <p key={index}>
                          <span className="text-base font-bold">&#8226;</span>{" "}
                          {responsibility}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Experience end */}

            {/* project Start */}
            <div>
              <h3 className="text-xl font-bold w-fit mx-auto py-2 text-gray-800">
                PROJECTS
              </h3>
              <div className="flex-1">
                {userData.projectList.map((pro, index) => (
                  <div key={index} className="text-gray-700">
                    <div className="flex ">
                      <h3 className="text-base font-semibold capitalize text-gray-800 pl-2">
                        {pro.projectTitle}
                      </h3>
                      <p className="text-sm pl-2 ml-auto">{pro.projectRole}</p>
                    </div>
                    <div>
                      <div className="flex ">
                        <span className="font-medium text-gray-800 text-sm pl-2">
                          {pro.techstack.join(", ")}
                        </span>
                        <br />
                        <span className="font-normal text-gray-700 text-sm pl-2 ml-auto">
                          <a
                            href={pro.projectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer"
                          >
                            Project Link
                          </a>
                        </span>
                      </div>
                      <div className="pl-2 mt-1 text-base">
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
              {/* project end */}

              {/* certification start */}
              <div>
                <h3 className="text-xl font-bold w-fit mx-auto py-2 text-gray-800">
                  CERTIFICATIONS
                </h3>
                {userData.educationList.map((education, eduIndex) =>
                  education.certification.map((cert, certIndex) => (
                    <p key={`${eduIndex}-${certIndex}`}>
                      <span className="pl-2 text-base font-bold">&#8226;</span>{" "}
                      {cert}
                    </p>
                  ))
                )}
              </div>
              {/* certification end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Template3.propTypes = {
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

export default Template3;
