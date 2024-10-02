// src/Resume.jsx
import React from 'react';
import './template28.css';
import templateData from '../resumetemplates/templateData';
import PropTypes from 'prop-types';

const template28 = ({ userData }) => {

    return (
        <div className="resume-wrapper w-[210mm] h-[287mm]">
            <div className="left-container ">
                <header className="resume-header">
                    {/* <img className="profile-image" src={profileImage} alt={`${firstname} ${lastname}`} /> */}
                    <h1 className="profile-name">{`${userData.besicDetails.first_name} ${userData.besicDetails.last_name}`}</h1>
                    <p className="profession">{userData.besicDetails.profession}</p>
                    <p className="location">{`${userData.besicDetails.city}, ${userData.besicDetails.country}`}</p>
                    <p className="contact-info">Phone: {userData.besicDetails.phone}</p>
                    <p className="contact-info">Email: {userData.besicDetails.email}</p>
                    <div className="social-links">
                        <a href={userData.besicDetails.linkdin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href={userData.besicDetails.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </header>

                <section className="skills-section">
                    <h2>Skills</h2>
                    <ul>
                        {userData.skillList[0].skills.map((skill, index) => (
                            <div key={index}>
                                <p className="text-sm sm:text-base">{skill}</p>
                                <div className="w-full bg-gray-300 h-2 mb-4">
                                    <div className={`bg-blue-500 h-2 ${index % 2 === 0 ? 'w-3/4' : 'w-1/2'}`}></div>
                                </div>
                            </div>
                        ))}
                    </ul>
                </section>

                {/* New Languages Section */}
                <div className="languages-section card">
                    <h2>Languages</h2>
                    <ul>
                        {userData.skillList[0].languages.split(", ").map((lang, index) => (
                            <div key={index}>
                                <p className="text-xs sm:text-sm md:text-base">{lang}</p>
                                <div className="w-full bg-gray-300 h-2 mb-4">
                                    <div className={`bg-white h-2 ${index === 0 ? 'w-3/4' : index === 1 ? 'w-1/2' : 'w-1/4'}`}></div>
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>
                <div className="declaration-section card">
                    <h2>Declaration</h2>
                    <p>{templateData.declaration}</p>
                </div>
            </div>

            <div className="right-container">
                <section className="resume-section">
                    <h2>Summary</h2>
                    <p>
                        {userData.besicDetails.message}
                    </p>
                </section>

                <section className="resume-section">
                    <h2>Experience</h2>
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

                </section>

                {/* Education Section */}
                <div className="mt-8">
                    <h2 className="text-lg sm:text-xl font-bold uppercase text-red-500">Education</h2>
                    <hr className="my-2 border-gray-300" />
                    <div className="mt-4 space-y-4">
                        {userData.educationList.map((edu, index) => (
                            <div key={index}>
                                <p className="font-bold text-sm sm:text-base">{edu.degree} in {edu.fieldOfStudy}</p>
                                <p className="text-sm sm:text-base">{edu.schoolName}, {edu.schoolLocation}</p>
                                <p className="text-xs sm:text-sm">Graduated: {edu.month} {edu.graduationYear}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <section className="resume-section">
                    <h2>Projects</h2>

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
                </section>
            </div>
        </div>
    );
};

template28.propTypes = {
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


export default template28;