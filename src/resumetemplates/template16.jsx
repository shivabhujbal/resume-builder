//import templateData from "../templateData";
import img2 from '../Images/OIP 1.jpeg';
import PropTypes from 'prop-types';

function template16( {userData}) {
  return (
    <div className="bg-gray-100 p-8">
      <div className="w-[210mm] h-[287mm] mx-auto bg-white shadow-lg">
        
        {/* Header Section */}
        <div className="relative text-black bg-cover bg-center h-56" style={{ backgroundImage: `url(${img2})` }}>
          <div className="flex flex-col items-center py-8">
            {/* <img
              src={profileImage}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-white mb-3"
            /> */}
            <h1 className="font-bold text-3xl text-black">{userData.besicDetails.first_name} {userData.besicDetails.last_name}</h1>
            <p className="text-lg mt-1 text-black">{userData.besicDetails.profession}</p>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-0">
          
          {/* Left Column */}
          <div className="col-span-1 bg-gray-100 p-8 space-y-10">
            <div>
              <h3 className="font-bold text-lg text-orange-400">summary</h3>
              <p className="text-gray-600 leading-relaxed">{userData.besicDetails.message}</p>
            </div>

            <div className="mt-6">
              <h3 className="font-bold text-lg text-orange-400">Contact Me</h3>
              <p className="mt-2">📞 {userData.besicDetails.phone}</p>
              <p className="mt-2">✉️ {userData.besicDetails.email}</p>
              <p className="mt-2">🏠 {`${userData.besicDetails.city}, ${userData.besicDetails.country}`}</p>
              <p className="mt-2 text-blue-600">
                <a href={userData.besicDetails.linkedIn} target="_blank" rel="noopener noreferrer">{userData.besicDetails.linkdin}</a>
              </p>
              <p className="mt-2 text-blue-600">
                <a href={userData.besicDetails.GitHub} target="_blank" rel="noopener noreferrer">{userData.besicDetails.github}</a>
              </p>
            </div>

            {/* Skills Section (moved to left column) */}
            <div>
              <h3 className="font-bold text-lg text-orange-400">SKILLS</h3>
              <div className="ml-2 space-y-1">
              {userData.skillList[0].skills.map((skill, index) => (
                    <span key={index} className="bg-gray-200 text-gray-800 text-xs md:text-sm py-1 px-2 rounded-lg">
                      {skill}
                    </span>
                  ))}
                </div>
            </div>

            {/* Languages Section */}
            <div>
              <h3 className="font-bold text-lg text-orange-400">LANGUAGES</h3>
              <div className="ml-2 space-y-1">
                  {userData.skillList[0].languages.split(", ").map((lang, index) => (
                    <p key={index} className="text-sm md:text-base">{lang}</p>
                  ))}
                </div>
            </div>

             {/* Certifications */}
             <div className="mt-[55%]">
                <h3 className="font-bold text-lg text-orange-400">Certifications</h3>
                <div className="ml-2 space-y-1">
                  {userData.educationList.map((education, eduIndex) =>
                    education.certification.map((cert, certIndex) => (
                      <p key={`${eduIndex}-${certIndex}`} className="text-xs md:text-sm">{cert}</p>
                    ))
                  )}
                </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="col-span-2 bg-white p-8 space-y-5">
            <div>
              <h3 className="font-bold text-lg text-orange-400">WORK EXPERIENCE</h3>
              {userData.experianceList.map((job, index) => (
                <div key={index} className="mb-6">
                  <p className="font-semibold text-gray-800">{job.title} at {job.company}</p>
                  <p className="text-sm text-gray-600">{`${job.location} | ${job.startDate} - ${job.endDate}`}</p>
                  <div className="space-y-1 text-xs md:text-sm">
                      {job.responsibility.map((resp, idx) => (
                        <p key={idx}><span className="text-base font-bold mr-1">&#8226;</span>{resp}</p>
                      ))}
                    </div>
                </div>
              ))}
            </div>

            {/* Education Section (moved to right column) */}
            <div>
              <h3 className="font-bold text-lg text-orange-400">EDUCATION</h3>
              {userData.educationList.map((edu, index) => (
                <div key={index} className="mb-4">
                  <p className="text-gray-600">{edu.schoolName}, {edu.schoolLocation}</p>
                  <p className="text-gray-600">{edu.degree} in {edu.fieldOfStudy}</p>
                  <p className="text-gray-600">Graduated: {edu.month} {edu.graduationYear}</p>
                 
                </div>
              ))}
            </div>

            {/* Projects Section */}
            <div>
              <h3 className="font-bold text-lg text-orange-400">PROJECTS</h3>
              {userData.projectList.map((project, index) => (
                <div key={index} className="mb-6">
                  <p className="font-semibold text-gray-800">{project.projectTitle}</p>
                  <p className="text-sm text-gray-600"> Role: {project.projectRole} 
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-14">
                    View Project
                  </a>
                  </p>
                  <p className="text-sm text-gray-600">Tech Stack: {project.techstack.join(', ')}</p>
                  <p className="text-sm text-gray-600">{project.description}</p>
                  
                </div>
              ))}
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
}

template16.propTypes = {
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

export default template16;
