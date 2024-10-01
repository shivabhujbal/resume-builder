// import templateData from "../templateData";
import PropTypes from 'prop-types';

function Template15( {userData} ) {
    return (
      <div className="bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto bg-white shadow-lg">
          
          {/* Header Section */}
          <div className="relative text-black bg-cover bg-center" style={{ backgroundImage: `url('${templateData.profile.backgroundImage}')` }}>
            <div className="flex flex-col items-center py-8">
              {/* <img
                src={templateData.profile.profileImage}
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-white mb-3"
              /> */}
              <h1 className="font-bold text-3xl text-black">{userData.besicDetails.first_name} {userData.besicDetails.last_name}</h1>
              <p className="text-lg mt-1 text-black">{userData.besicDetails.profession}</p>
            </div>
          </div>
  
          {/* Main Content Section */}
          <div className="grid grid-cols-3 gap-4 py-0">
            
            {/* Left Column */}
            <div className="col-span-1 bg-gray-100 p-8 space-y-10">
              <div>
                <h3 className="font-bold text-lg text-gray-700"> PROFILE</h3>
                 <p className="text-gray-600 leading-relaxed">{userData.besicDetails.message || "No summary provided."}</p> 
              </div>
  
              <div>
                <h3 className="font-bold text-lg text-gray-700">CONTACT</h3>
                {templateData.contact.map((item, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed">
                    <i className={`${item.icon} mr-2`}></i>{item.text}
                  </p>
                ))}
              </div>
  
              <div>
                <h3 className="font-bold text-lg text-gray-700">EDUCATION</h3>
                {templateData.education.map((edu, index) => (
                  <div key={index} className="mb-4">
                    <p className="text-gray-600">{edu.institution}</p>
                    <p className="text-gray-600">{edu.degree}, {edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Right Column */}
            <div className="col-span-2 bg-white p-8 space-y-10">
              <div>
                <h3 className="font-bold text-lg text-gray-700">SKILLS</h3>
                <ul className="list-disc pl-5 text-gray-600 leading-relaxed">
                  {templateData.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
  
              <div>
                <h3 className="font-bold text-lg text-gray-700">WORK EXPERIENCE</h3>
                {templateData.workExperience.map((job, index) => (
                  <div key={index} className="mb-6">
                    <p className="font-semibold text-gray-800">{job.company}, {job.position}</p>
                    <p className="text-sm text-gray-600">{job.dateRange}</p>
                    <ul className="list-disc pl-5 text-gray-600 leading-relaxed">
                      {job.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
  
              <div>
                <h3 className="font-bold text-lg text-gray-700">DECLARATION</h3>
                <p className="text-gray-600 leading-relaxed">{templateData.declaration}</p>
              </div>
  
              <div className="mt-12 text-center">
                <p className="text-gray-800 font-semibold">{templateData.profile.name}</p>
                <p className="italic text-gray-600">Signature</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  Template15.propTypes = {
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
  
  
  export default Template15;