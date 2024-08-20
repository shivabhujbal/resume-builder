import React from "react";
import templateData from "./templateData";

const CombinationResume = () => {
  return (
    <div className="max-w-4xl h-auto mx-auto p-4 mt-6 mb-10 bg-white rounded-lg shadow-md">
      <div className="flex justify-center ">
        <h1 className="text-4xl font-bold">{`${templateData.firstname} ${templateData.lastname}`}</h1>
      </div>
      <div className="flex justify-center mb-14">
        <p className="text-lg">{templateData.profession}</p>
      </div>
      {/* Resume Content Grid */}
      <div className="flex bg-red-300">
        {/* Left Column */}
        <div className="col-span-1 space-y-6 w-72">
          {/* Contact Information */}
          <div>
            <h2 className="text-lg font-bold w-full bg-gray-100 py-2 px-4">
              Contact Information
            </h2>
            <div className="p-4">
              <p className="text-base"><span className="text-lg font-semibold">Email:</span> {templateData.email}</p>
              <p className="text-base"><span className="text-lg font-semibold">Phone:</span> {templateData.phone}</p>
              <p className="text-lg font-semibold">
                LinkedIn:{" "}
                <a href={templateData.linkedIn} className="text-base font-normal underline text-blue-600">
                  {templateData.linkedIn}
                </a>
              </p>
              <p className="text-lg font-semibold">
                GitHub:{" "}
                <a href={templateData.GitHub} className="text-base font-normal underline text-blue-600">
                  {templateData.GitHub}
                </a>
              </p>
            </div>
          </div>
          {/* Technical Skills */}
          <div>
            <h2 className="text-lg font-bold w-full bg-gray-100 py-2 px-4">
              Technical Skills
            </h2>
            <div className="p-4  gap-4">
              <div>
                <p className="text-lg font-semibold">Primary Skills:</p>
                <div className="text-lg">
                  {templateData.skills.primaryList.map((skill, index) => (
                    <span key={index} className="mr-2 block">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold">Secondary Skills:</p>
                <div className="text-lg">
                  {templateData.skills.secondaryList.map((skill, index) => (
                    <span key={index} className="mr-2 block">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Languages */}
          <div>
            <h2 className="text-lg font-bold w-full bg-gray-100 py-2 px-4 ">
              Languages
            </h2>
            <div className="p-4 flex flex-wrap">
              {templateData.languages.map((lang, index) => (
                <span key={index} className="mr-2">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-sky-300">
        <div className="col-span-1 space-y-4">
          {/* Summary */}
          <div>
            <h2 className="text-lg font-bold w-full bg-gray-100 py-2 px-4 ">
              Summary
            </h2>
            <div className="p-4">
              <p className="text-lg">{templateData.summary}</p>
            </div>
          </div>
          {/* Education */}
          <div>
            <h2 className="text-lg font-bold w-full bg-gray-100 py-2 px-4 ">
              Education
            </h2>
            <div className="p-4">
              {templateData.education.map((edu, index) => (
                <div key={index} className="mb-2">
                  <p className="text-lg font-semibold">
                    {edu.degree} in {edu.fieldOfStudy}
                  </p>
                  <p className="text-lg">
                    {edu.sclName}, {edu.sclLocation}
                  </p>
                  <p className="text-lg">{edu.gradeYear}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Work Experience */}
          <div>
            <h2 className="text-lg font-bold w-full bg-gray-100 py-2 px-4 ">
              Work Experience
            </h2>
            <div className="p-4">
              {templateData.experience.map((exp, index) => (
                <div key={index} className="mb-4">
                  <p className="text-lg font-semibold">{exp.title}</p>
                  <p className="text-lg">
                    {exp.company}, {exp.location}
                  </p>
                  <p className="text-lg">{exp.dateRange}</p>
                  <div className="text-lg">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <p key={idx}>- {responsibility}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Certifications */}
          <div>
            <h2 className="text-lg font-bold w-full bg-gray-100 py-2 px-4 ">
              Certifications
            </h2>
            <div className="p-4">
              <div className="flex flex-wrap">
                {templateData.certifications.map((cert, index) => (
                  <span key={index} className="mr-2">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CombinationResume;
