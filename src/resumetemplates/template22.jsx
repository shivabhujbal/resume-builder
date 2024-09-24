import React from 'react';
import templateData from './templateData'; // Import your JSON data here
import PropTypes from 'prop-types';

const template22 = ({ userData }) => {
    return (
        <div className="flex justify-center  bg-gray-200">
            {/* Resume Container */}
            <div className=" bg-white shadow-lg rounded-lg flex flex-col  w-[210mm] h-[287mm]">

                {/* Profile Section */}
                <div className="bg-emerald-500 text-white flex items-center p-6">
                    {/* Profile Image */}
                    {/* <div className="w-32 h-32 flex-shrink-0">
                        <img
                            src={profileImage}
                            alt="Profile"
                            className="w-full h-full rounded-full border-4 border-white"
                        />
                    </div> */}
                    <div className="ml-6">
                        <h1 className="text-3xl font-bold ml-56">{userData.besicDetails.first_name} {userData.besicDetails.last_name}</h1>
                        <p className="text-lg font-medium ml-56">{userData.besicDetails.profession}</p>
                        <div className="mt-4">
                            <p className="text-white ml-56 ">
                                LinkdIn: <a href={userData.besicDetails.linkdin} className="text-blue-500" target="_blank" rel="noopener noreferrer">{userData.besicDetails.linkdin}</a>
                            </p>
                            <p className="text-white ml-56">
                                GitHub : <a href={templateData.GitHub} className="text-blue-500" target="_blank" rel="noopener noreferrer">{userData.besicDetails.github}</a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="p-6 space-y-8">
                    {/* Summary Section */}
                    <div className="bg-gray-50 p-3 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Summary</h2>
                        <p>{userData.besicDetails.message}</p>
                    </div>

                    {/* Skills Section */}
                    <div className="bg-gray-50 p-3 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Skills</h2>
                        <div className="flex flex-wrap gap-2">
                            {userData.skillList[0].skills.map((skill, index) => (
                                <span key={index} className="bg-gray-200 text-gray-800 text-xs md:text-sm py-1 px-2 rounded-lg">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Experience Section */}
                    <div className="bg-gray-50 p-3 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Experience</h2>
                        {userData.experianceList.map((job, index) => (
                            <div key={index} className="mb-6">
                                <div className="flex items-center mb-2">
                                    <div className="bg-blue-500 w-4 h-4 rounded-full"></div>
                                    <h3 className="text-lg font-semibold text-gray-800 ml-4">{job.title} at {job.company}</h3>
                                </div>
                                <p className="text-sm text-gray-600">{`${job.location} | ${job.startDate} - ${job.endDate}`}</p>
                                <ul className="list-disc list-inside text-gray-600 text-sm mt-2">
                                    {job.responsibility.map((resp, idx) => (
                                        <p key={idx}><span className="text-base font-bold mr-1">&#8226;</span>{resp}</p>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Education Section */}
                    <div className="bg-gray-50 p-3 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Education</h2>
                        {userData.educationList.map((edu, index) => (
                            <div key={index} className="mb-6">
                                <div className="flex items-center mb-2">
                                    <div className="bg-green-500 w-4 h-4 rounded-full"></div>
                                    <h3 className="text-lg font-semibold text-gray-800 ml-4">{edu.schoolName}, {edu.schoolLocation}</h3>
                                </div>

                                <p className="text-sm text-gray-600">
                                    {edu.degree} in {edu.fieldOfStudy}
                                </p>

                                <p className="text-sm text-gray-500">Graduated: {edu.month} {edu.graduationYear}</p>

                            </div>
                        ))}
                    </div>

                    {/* Certifications Section */}
                    <div className="bg-gray-50 p-3 rounded-lg shadow-md h-44">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Certifications</h2>
                        <ul className="flex flex-wrap list-disc list-inside text-gray-600 text-sm">
                            {userData.educationList.map((education, eduIndex) =>
                                education.certification.map((cert, certIndex) => (
                                    <li key={`${eduIndex}-${certIndex}`} className="w-1/2 p-1">
                                        {cert}
                                    </li>
                                ))
                            )}
                        </ul>
                    </div>



                    {/* Projects (Optional) */}

                    <div className="bg-gray-50 p-3 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Projects</h2>
                        {userData.projectList.map((proj, index) => (
                            <div key={index} className="text-gray-700 mb-6">
                                <p className="font-bold">{proj.projectTitle}</p>
                                <p className="text-sm">{proj.projectRole}
                                    <a href={proj.link} className="text-blue-500 ml-11" target="_blank" rel="noopener noreferrer">View Project</a>
                                </p>
                                <p className="text-sm text-gray-500">{proj.techstack.join(', ')}</p>
                                <p>{proj.description}</p>
                            </div>
                        ))}
                    </div>


                    {/* Languages (Optional) */}

                    <div className="bg-gray-50 p-1 rounded-lg shadow-md h-fit">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Languages</h2>
                        <ul className="list-disc list-inside text-gray-600 text-sm">
                            {userData.skillList[0].languages.split(", ").map((lang, index) => (
                                <p key={index} className="text-xs md:text-base">{lang}</p>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

template22.propTypes = {
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


export default template22;
