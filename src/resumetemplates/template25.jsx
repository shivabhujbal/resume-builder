import React from 'react';
import templateData from '../resumetemplates/templateData';
import PropTypes from 'prop-types';

const template25 = ({userData}) => {
  return (
    <div className="bg-pink-100 p-8 flex flex-col items-center min-h-screen ">
      <div
        className="bg-white rounded-lg shadow-lg flex flex-col w-[210mm] h-[287mm]">
        {/* // style={{
        //   width: '210mm', 
        //   height: 'auto', 
        //   boxSizing: 'border-box',
        //   padding: '20mm',
        // }} */}
      
        {/* Header with background color */}
        <header className="bg-pink-500 text-white flex justify-between items-center p-6">
          <div className="flex items-center">
            {/* <img
              src={templateData.profileImage}
              alt={`${templateData.firstname} ${templateData.lastname}`}
              className="w-24 h-24 rounded-full border-4 border-white mr-4"
            /> */}
            <div>
              <h1 className="text-4xl font-bold">{userData.besicDetails.first_name} {userData.besicDetails.last_name}</h1>
              <p className="text-lg">{userData.besicDetails.profession}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg">{`${userData.besicDetails.city}, ${userData.besicDetails.country}`}</p>
            <p className="text-lg">{userData.besicDetails.phone}</p>
            <p className="text-lg">{userData.besicDetails.email}</p>
          </div>
        </header>

        <main className="flex flex-wrap p-4 flex-grow">
          <div className="w-full md:w-1/3 pr-4">
            <section className="mb-4">
              <h2 className="text-xl font-bold text-pink-600 mb-5">Education</h2>
              {userData.educationList.map((edu, index) => (
                <div key={edu.EducationID} className="text-lg text-gray-800 mb-4">
                  <p><strong>  {edu.degree} - {edu.fieldOfStudy} </strong></p>
                  <p>{edu.schoolName}, {edu.schoolLocation} </p>
                  <p>Graduated:  {edu.gradeYear}</p>
                </div>
              ))}
            </section>
            <section>
              <h2 className="text-xl font-bold text-pink-600 mb-2">Certifications</h2>
              {userData.educationList.map((education, eduIndex) =>
                  education.certification.map((cert, certIndex) => (
                    <p key={`${eduIndex}-${certIndex}`} className="md:text-sm">{cert}</p>
                  ))
                )}
            </section>

            <section>
              <h2 className="text-xl font-bold text-pink-600 mb-2">Skills</h2>
              <ul className="list-disc pl-5 text-lg text-gray-800">
              {userData.skillList[0].skills.map((skill, index) => (
                  <span key={index} className="bg-gray-200 text-gray-800 text-xs md:text-sm py-1 px-2 rounded-lg">
                    {skill}
                  </span>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-pink-600 mb-2">Languages</h2>
              <ul className="list-disc pl-5 text-lg text-gray-800">
              {userData.skillList[0].languages.split(", ").map((lang, index) => (
                  <p key={index} className="text-xs md:text-base">{lang}</p>
                ))}
              </ul>
            </section>

             <section>
              <h2 className="text-xl font-bold text-pink-600 mb-2">Summary</h2>
              <p className="text-lg text-gray-600 italic">{userData.besicDetails.message}</p>
            </section>

          </div>

          <div className="w-full md:w-2/3">
            <section className="mb-4">
              <h2 className="text-xl font-bold text-pink-600 mb-5">Teaching Experience</h2>
              {userData.experianceList.map((job, index) => (
                <div key={job.title} className="text-lg text-gray-800 mb-4 ml-4">
                  <p>{job.title} at {job.company}</p>
                  <p>{job.location} </p>
                  <p>${job.startDate} - ${job.endDate}</p>
                  <ul className="list-disc pl-5">
                  {job.responsibility.map((resp, idx) => (
                      <p key={idx}><span className="text-base font-bold mr-1">&#8226;</span>{resp}</p>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <section>
              <h2 className="text-xl font-bold text-pink-600 mb-2">Projects</h2>
              {userData.projectList.map((proj, index) => (
                <div key={proj.projectTitle} className="text-lg text-gray-800 mb-4">
                  <p><strong>{proj.projectTitle}</strong></p>
                  <p className="text-sm">{proj.projectRole}
                    <a href={proj.link} className="text-blue-500 ml-11" target="_blank" rel="noopener noreferrer">View Project</a>
                  </p>
                  <p>{proj.description}</p>
                  <p>Technologies: {proj.techstack.join(', ')}</p>
                 
                </div>
              ))}
           </section>
          
          </div>
        </main>

        {/* Footer section */}
        <footer className="bg-pink-600 text-white p-4 text-center">
          {templateData.declaration}
        </footer>
      </div>

      {/* Media query for responsiveness */}
      <style jsx>{`
        @media (max-width: 1024px) {
          div[style] {
            width: 100%;
            padding: 20px;
          }
        }
        @media (max-width: 768px) {
          div[style] {
            padding: 10px;
          }
        }
      `}</style>
    </div>
  );
};

template25.propTypes = {
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


export default template25;
