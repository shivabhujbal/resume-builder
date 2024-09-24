import templateData from '../resumetemplates/templateData';
import PropTypes from 'prop-types';
import img1 from '../Images/OIP.jpeg';

function template15( {userData} ) {
    return (
      <div className="bg-gray-100 p-4 md:p-8">
        <div className="mx-auto bg-white shadow-lg w-[210mm] h-[287mm]">
          
          {/* Header Section */}
          <div className="relative text-black bg-cover bg-center h-40 md:h-52" style={{ backgroundImage: `url(${img1})` }}>
            <div className="flex flex-col items-center py-6 md:py-8">
              <h1 className="font-bold text-2xl md:text-3xl text-teal-500 text-center mt-8 md:mt-12">{userData.besicDetails.first_name} {userData.besicDetails.last_name}</h1>
              <p className="text-base md:text-lg mt-1 text-teal-500">{userData.besicDetails.profession}</p>
            </div>
          </div>
  
          {/* Main Content Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
            
            {/* Left Column */}
            <div className="col-span-1 bg-gray-100 p-4 md:p-8 space-y-6 md:space-y-10">
              <div>
                <h3 className="font-bold text-lg text-teal-500">PROFILE</h3>
                <p className="text-gray-600 leading-relaxed">{userData.besicDetails.message}</p>
              </div>

               {/* Skills */}
               <div className="mt-4">
                <h3 className="font-bold text-lg text-teal-500">Skills</h3>
                <ul className="flex flex-wrap gap-2">
                  {userData.skillList[0].skills.map((skill, index) => (
                    <span key={index} className="bg-gray-200 text-gray-800 text-xs md:text-sm py-1 px-2 rounded-lg">
                      {skill}
                    </span>
                  ))}
                </ul>
              </div>

               {/* Languages */}
              <div className="mt-4">
                <h3 className="font-bold text-lg text-teal-500">Languages</h3>
                <div className="ml-2 space-y-1">
                  {userData.skillList[0].languages.split(", ").map((lang, index) => (
                    <p key={index} className="text-xs md:text-base">{lang}</p>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg text-teal-500">DECLARATION</h3>
                <p className="text-gray-600 leading-relaxed">{templateData.declaration}</p>
              </div>

               {/* Certifications */}
              <div className="mt-8 md:mt-[55%]">
                <h3 className="font-bold text-lg text-teal-500">Certifications</h3>
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
            <div className="col-span-2 bg-white p-4 md:p-8 space-y-6 md:space-y-10">

              {/* Education */}
              <div>
                <h3 className="font-bold text-lg text-teal-500">EDUCATION</h3>
                {userData.educationList.map((edu, index) => (
                  <div key={index} className="mb-4">
                    <p className="text-gray-600 text-sm md:text-base">{edu.schoolName}, {edu.schoolLocation}</p>
                    <p className="text-gray-600 text-sm md:text-base">{edu.degree} in {edu.fieldOfStudy}</p>
                    <p className="text-gray-600 text-sm md:text-base">Graduated: {edu.month} {edu.graduationYear}</p>
                  </div>
                ))}
              </div>

              {/* Work Experience */}
              <div>
                <h3 className="font-bold text-lg text-teal-500">WORK EXPERIENCE</h3>
                {userData.experianceList.map((job, index) => (
                  <div key={index} className="mb-1">
                    <p className="font-semibold text-gray-800 text-sm md:text-base">{job.title} at {job.company}</p>
                    <p className="text-xs md:text-sm text-gray-600">{`${job.location} | ${job.startDate} - ${job.endDate}`}</p>
                    <div className="space-y-1 text-xs md:text-sm">
                      {job.responsibility.map((resp, idx) => (
                        <p key={idx}><span className="text-base font-bold mr-1">&#8226;</span>{resp}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Projects */}
              <div className="mb-4 md:mb-6">
                <h3 className="font-bold text-lg text-teal-500">Projects</h3>
                <ul className="mt-1 ml-2">
                  {userData.projectList.map((project, index) => (
                    <li key={index} className="mb-2">
                      <h2 className="text-sm md:text-base font-bold capitalize">{project.projectTitle}</h2>
                      <p className="text-xs md:text-sm">
                        Role: {project.projectRole}
                        <span className="ml-4">
                          <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Project Link</a>
                        </span>
                      </p>
                      <p className="text-xs md:text-sm">{project.description}</p>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
}

template15.propTypes = {
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

export default template15;
