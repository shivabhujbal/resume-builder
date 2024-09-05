import React from 'react';
import PropTypes from "prop-types";

const Template6 = ({ userData }) => {
  return (
    <div className="w-[793.7px] h-[1118.52px] p-3 mx-auto rounded-lg font-serif border border-gray-300 shadow-md"> 
      <div className="bg-green-200 p- rounded-sm font-serif border border-gray-300 shadow-md"> 
        <h2 className="font-bold text-2xl mt-1 text-center">{userData.besicDetails.first_name} {userData.besicDetails.last_name}</h2>
        <p className="text-center">
        {userData.besicDetails.profession}
        </p>
        
        <div className="text-center mb-2">
          <div className='flex justify-center space-x-1'>
          <p><span className='font-semibold'>Phone:</span> {userData.besicDetails.phone}</p>| 
          <p><span className='font-semibold'>Email:</span> {userData.besicDetails.email}</p>|
          <p><span className='font-semibold'>Location:</span> {userData.besicDetails.city} {userData.besicDetails.country}</p>|
          </div>
          <p><strong>LinkedIn:</strong> <a href={userData.besicDetails.linkdin} target="_blank" rel="noopener noreferrer">{userData.besicDetails.linkdin}</a></p>
          <p><strong>GitHub:</strong> <a href={userData.besicDetails.github} target="_blank" rel="noopener noreferrer">{userData.besicDetails.github}</a></p>
        </div>
      </div>
      <div className="bg-white h-[945px] p-3 rounded-sm font-serif border border-gray-300 shadow-md"> 
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 h-auto">
          <div className='mb-2 space-y-1'>
            <h2 className="font-bold text-lg">EXPERIENCE</h2>
            {userData.experianceList.map((job, index) => (
              <div key={index} className="">
                <h3 className="font-bold">{job.title}</h3>
                <p className="text-gray-600">{job.company}, {job.location}</p>
                <p className="">{job.startDate} - {job.endDate}</p>
                <div className="">
                  {job.responsibility.map((responsibility, i) => (
                    <p className='leading-tight' key={i}><span className="text-base font-bold ml-1 mr-2">&#8226;</span>{responsibility}</p>
                  ))}
                </div>
              </div>
            ))}
            </div>

          <div className='mb-2 space-y-1'>
            <h2 className="font-bold text-lg">PROJECTS</h2>
            {userData.projectList.map((job, index) => (
              <div key={index} className="">
                <h3 className="font-bold">{job.title}</h3>
                <p className="text-gray-700 capitalize">{job.projectTitle} - {job.projectRole}</p>
                <p className="capitalize">{job.techstack.join("| |")}</p>
                <p className="">{job.projectLink}</p>
                <div className="">
                  {job.description.split("\n").map((description, i) => (
                    <p className='leading-tight' key={i}><span className="text-base font-bold ml-1 mr-2">&#8226;</span>{description}</p>
                  ))}
                </div>
              </div>
            ))}
            </div>

            <div className='space-y-2 mb-2'>
            <h2 className="font-bold text-lg">EDUCATION</h2>
            {userData.educationList.map((edu, index) => (
              <div key={index} className="">
                <h3 className="font-bold">{edu.degree.replace(/_/g, " ")} in {edu.fieldOfStudy}</h3>
                <p className="text-gray-600">{edu.schoolName}, {edu.schoolLocation} {edu.graduationYear}</p>
              </div>
            ))}
            </div>
            
          </div>
          
          <div className="w-full md:w-1/2 md:ml-8 md:mt-0">
          <div className='mb-2'>
            <h2 className="font-bold text-lg">SUMMARY</h2>
            <p className="mt-1">
              {userData.besicDetails.message.split('\n').map((line, index) => (
                <span key={index}>{line}<br/></span>
              ))}
            </p>
            </div>
            <div className='mb-2'>
            <h2 className="font-bold text-lg">SKILLS</h2>
              <div>
                <p className="text-base capitalize">{userData.skillList[0].skills.join('| ')} </p>
              </div>
              </div>
              <div className='mb-2'>            
              <h2 className="font-bold text-lg">CERTIFICATIONS</h2>
            <div className="list-disc ml-6 mt-2">
            {userData.educationList.map((education, eduIndex) =>
          education.certification.map((cert, certIndex) => (
                <p className='list-item' key={`${eduIndex}-${certIndex}`}>{cert}</p>
              ))
            )}
            </div>
            </div>

            <h2 className="font-bold text-lg">LANGUAGES</h2>
            <div className="list-disc ml-6 mt-2">
            {userData.skillList[0].languages
                    .split(", ")
                    .map((lang, index) => (
                <p className='list-item capitalize' key={index}>{lang}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Template6.propTypes = {
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

export default Template6; 