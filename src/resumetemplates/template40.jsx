import React from "react";
import templateData from "./templateData";

const template41 = ({userData}) => {
    return (
        <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg mt-10 rounded-lg">
            <div className="container grid grid-cols-1 md:grid-cols-3 gap-0 p-8 w-[210mm] h-[287mm]">
                {/* Left section */}
                <div className="bg-blue-500 p-6 rounded-lg text-white col-span-1 flex flex-col items-center space-y-6">
                    {/* <img
                        src={templateData.profileIamge}
                        alt="profile picture"
                        className="w-32 h-32 rounded-full shadow-lg"
                    /> */}
                    {/* Basic details */}
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold">{userData.besicDetails.first_name} {userData.besicDetails.last_name}</h2>
                        <p className="text-blue-100">{userData.besicDetails.profession}</p>
                        <p className="text-blue-100">{userData.besicDetails.email}</p>
                        <p className="text-blue-100">{`${userData.besicDetails.city}, ${userData.besicDetails.country}`}</p>
                        <p className="text-blue-100">{userData.besicDetails.phone}</p>
                        <p className="text-blue-100">{userData.besicDetails.github}</p>
                        <p className="text-blue-100">{userData.besicDetails.linkdin}</p>
                    </div>
                    {/* Skills */}
                    <div className="w-full">
                        <h3 className="text-lg font-medium">Skills</h3>
                        {userData.skillList[0].skills.map((skill, index) => (
                            <div key={index}>
                                <p className="text-sm sm:text-base">{skill}</p>
                                <div className="w-full bg-gray-300 h-2 mb-4">
                                    <div className={`bg-blue-500 h-2 ${index % 2 === 0 ? 'w-3/4' : 'w-1/2'}`}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Certifications */}
                    <div>
                        <h3 className="text-xl font-semibold text-black mb-1 border-b-2 border-blue-600 pb-1">Certifications</h3>
                        <ul className="space-y-2">
                        {userData.educationList.map((education, eduIndex) =>
                                education.certification.map((cert, certIndex) => (
                                    <li key={`${eduIndex}-${certIndex}`} className="w-1/2 p-1">
                                        {cert}
                                    </li>
                                ))
                            )}
                        </ul>
                    </div>
                </div>
                {/* Right section */}
                <div className="md:col-span-2 bg-white p-8 rounded-lg ">
                    {/* Profile Info */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-blue-600 mb-3 border-b-2 border-blue-600 pb-2">Profile Info</h3>
                        <p className="text-gray-700 leading-relaxed">{userData.besicDetails.message}</p>
                    </div>
                    {/* Education */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-blue-600 mb-3 border-b-2 border-blue-600 pb-2">Education</h3>
                        <ul className="space-y-2">
                            {userData.educationList.map((edu, index) => (
                                <div key={index}>
                                    <p className="font-bold text-sm sm:text-base">{edu.degree} in {edu.fieldOfStudy}</p>
                                    <p className="text-sm sm:text-base">{edu.schoolName}, {edu.schoolLocation}</p>
                                    <p className="text-xs sm:text-sm">Graduated: {edu.month} {edu.graduationYear}</p>
                                </div>
                            ))}
                        </ul>
                    </div>
                    {/* Experience */}
                    <div className="mb-6 mt-36">
                        <h3 className="text-xl font-semibold text-blue-600 mb-3 border-b-2 border-blue-600 pb-2">Experience</h3>
                        <ul className="space-y-2">
                            {userData.experianceList.map((exp, index) => (
                                <div key={index}>
                                    <p className="font-bold">{exp.title} at {exp.company}</p>
                                    <p className="text-gray-600 text-sm sm:text-base">{`${exp.location} | ${exp.startDate} - ${exp.endDate}`}</p>
                                    <ul className="list-disc list-inside text-gray-600 text-xs sm:text-sm">
                                        {exp.responsibility.map((resp, idx) => (
                                            <li key={idx}>{resp}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </ul>
                    </div>
                    {/* Projects */}
                    <div className="mb-6 mt-40">
                        <h3 className="text-xl font-semibold text-blue-600 mb-3 border-b-2 border-blue-600 pb-2">Projects</h3>
                        <ul className="space-y-2">
                            {userData.projectList.map((proj, index) => (
                                <div key={index} className='text-sm'>
                                    <h3 className="text-lg font-semibold text-gray-800">{proj.projectTitle}</h3>
                                    <p className="text-sm">{proj.projectRole}
                                        <a href={proj.link} className="text-blue-500 ml-11" target="_blank" rel="noopener noreferrer">View Project</a>
                                    </p>
                                    <p className="text-sm text-gray-600">{proj.description}</p>
                                    <p className="text-sm text-gray-600">{proj.techstack.join(', ')}</p>
                                </div>
                            ))}
                        </ul>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default template41;
