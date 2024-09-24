import React from 'react';
import templateData from './templateData'; // Import your JSON data here
import PropTypes from 'prop-types';
import img3 from '../Images/image.png';

const template23 = ({ userData }) => {

    return (
        <div className="flex justify-center py-12 bg-gray-200">
            {/* Resume Container */}
            <div className="w-[210mm] h-[287mm] bg-white shadow-lg rounded-lg overflow-hidden flex">

                {/* Sidebar */}
                <div className="w-1/3 text-black p-6"
                style={{ backgroundImage: `url(${img3})` }}>


                    {/* Profile Image */}
                    {/* <div className="w-40 h-40 mx-auto mb-4">
                        <img
                            src={profileImage}
                            alt="Profile"
                            className="w-full h-full rounded-full border-4 border-white"
                        />
                    </div> */}
                    <h1 className="text-xl font-bold text-center">{userData.besicDetails.first_name} {userData.besicDetails.last_name}</h1>
                    <p className="text-lg text-center font-medium mt-2">{userData.besicDetails.profession}</p>
                    <div className="mt-6 text-center">
                        <p>{userData.besicDetails.phone}</p>
                        <p>{userData.besicDetails.email}</p>
                        <p className="mt-2">🏠 {`${userData.besicDetails.city}, ${userData.besicDetails.country}`}</p>
                        <p className="mt-2 text-blue-600 ">
                            <a href={userData.besicDetails.linkedIn} target="_blank" rel="noopener noreferrer">{userData.besicDetails.linkdin}</a>
                        </p>
                        <p className="mt-2 text-blue-600">
                            <a href={userData.besicDetails.GitHub} target="_blank" rel="noopener noreferrer">{userData.besicDetails.github}</a>
                        </p>
                        {/* Languages (Optional) */}

                        <div>
                            <h2 className="text-xl font-semibold text-white-800 mt-10">Languages</h2>
                            <ul className="list-none list-inside text-white-600 text-sm">
                                {userData.skillList[0].languages.split(", ").map((lang, index) => (
                                    <p key={index} className="text-sm md:text-base">{lang}</p>
                                ))}
                            </ul>
                        </div>
                  

                        {/* Certifications Section */}
                        
                            <h2 className="text-xl font-semibold text-black mt-10">Certifications</h2>

                            <ul className="list-none">
                                {userData.educationList.flatMap((education) =>
                                    education.certification.map((cert, certIndex) => (
                                        <li key={certIndex} className="mb-4">
                                            {/* Progress Bar for Each Certification */}
                                            <div className="relative w-full h-2 bg-white rounded mb-2">
                                                <div
                                                    className="absolute h-full bg-blue-500 rounded"
                                                    style={{ width: '80%' }} // Adjust this percentage as needed
                                                ></div>
                                            </div>
                                            <p className="text-black text-sm">{cert}</p>
                                        </li>
                                    ))
                                )}
                            </ul>
                        </div>
                    </div>
               
                {/* Main Content */}
                <div className="w-2/3 p-6 space-y-8 ">

                  {/* Experience Section */}
                    <div className="bg-gray-50 p-2 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Experience</h2>
                        {userData.experianceList.map((job, index) => (
                            <div key={index} className="mb-2">
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
                    <div className="bg-gray-50 p-1 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Education</h2>
                        {userData.educationList.map((edu, index) => (
                            <div key={index} >
                                <div className="flex items-center mb-2">
                                    <div className="bg-green-500 w-4 h-4 rounded-full"></div>
                                    <h3 className="text-lg font-semibold text-gray-800 ml-4">{edu.schoolName}, {edu.schoolLocation}</h3>
                                </div>
                                <p className="text-sm text-gray-600">
                                    {edu.degree} in {edu.fieldOfStudy}
                                </p>
                                <p className="text-sm text-gray-600">Graduated: {edu.month} {edu.graduationYear}</p>
                            </div>
                        ))}
                    </div>

                    {/* Projects (Optional) */}

                    <div className="bg-gray-50 p-1 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Projects</h2>
                        {userData.projectList.map((proj, index) => (
                            <div key={index} >
                                <h3 className="text-lg font-semibold text-gray-800">{proj.projectTitle}</h3>
                                <p className="text-sm">{proj.projectRole}
                                    <a href={proj.link} className="text-blue-500 ml-11" target="_blank" rel="noopener noreferrer">View Project</a>
                                </p>
                                <p className="text-sm text-gray-600">{proj.description}</p>
                                <p className="text-sm text-gray-600">{proj.techstack.join(', ')}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

template23.propTypes = {
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


export default template23;
