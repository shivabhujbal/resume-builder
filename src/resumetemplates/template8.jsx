import React from 'react';
import PropTypes from 'prop-types';

const Template8 = ({ userData }) => {
  return (
    <div className="w-[210mm] h-[287mm] mx-auto p-8 bg-white shadow-lg">
      <div className="text-center mb-3">
        <h1 className="text-2xl font-bold">{`${userData.besicDetails.first_name} ${userData.besicDetails.last_name}`}</h1>
        <p className="text">{userData.besicDetails.profession}</p>
        <p>{`${userData.besicDetails.city}, ${userData.besicDetails.country}`}</p>
        <p>Email: {userData.besicDetails.email} | Phone: {userData.besicDetails.phone}</p>
        <p>LinkedIn: {userData.besicDetails.linkdin} | GitHub: {userData.besicDetails.github}</p>
      </div>

      <div className="mb-3">
        <h2 className="text-xl font-semibold">Professional Summary</h2>
        <p>{userData.besicDetails.message}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Education</h2>
        {userData.educationList.map((edu, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-bold">{`${edu.degree} - ${edu.schoolName}`}</h3>
            <p>{`${edu.schoolLocation} | Graduation Year: ${edu.graduationYear}`}</p>
            <p>Field of Study: {edu.fieldOfStudy}</p>
            {/* {edu.gapTaken && <p>Gap Year Taken: {edu.gapYear}</p>} */}
            {edu.certification.length > 0 && (
              <div className='mt-3'>
                <p>Certifications:</p>
                <ul className="list-disc list-inside">
                  {edu.certification.map((cert, idx) => <li key={idx}>{cert}</li>)}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mb-3">
  <h2 className="text-xl font-semibold">Experience</h2>
  {userData.experianceList.map((exp, index) => (
    <div key={index} className="mb-3  pb-4">
      <h3 className="font-bold text-lg">{`${exp.title} - ${exp.company}`}</h3>
      <p className="text-gray-600">{`${exp.location} | ${exp.startDate} - ${exp.endDate}`}</p>
      <ul className="list-disc list-inside mt-2">
        {exp.responsibility.map((res, idx) => <li key={idx}>{res}</li>)}
      </ul>
    </div>
  ))}
</div>


<div className="mb-8">
  <h2 className="text-xl font-semibold">Skills</h2>
  <ul className="list-disc list-inside ">
    {userData.skillList[0].skills.map((skill, index) => (
      <span key={index} className="">{skill}, </span>
    ))}
  </ul>
  <p className="">Languages: {userData.skillList[0].languages}</p>
</div>


      <div>
        <h2 className="text-xl font-semibold">Projects</h2>
        {userData.projectList.map((project, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-bold">{project.projectTitle}</h3>
            <p>Role: {project.projectRole}</p>
            <p>{project.description}</p>
            <p>Tech Stack: {project.techstack.join(', ')}</p>
            <p>Project Link: <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{project.projectLink}</a></p>
          </div>
        ))}
      </div>
    </div>
  );
};

Template8.propTypes = {
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

export default Template8;
