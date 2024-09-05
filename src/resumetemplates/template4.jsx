import React from 'react';
import PropTypes from 'prop-types';

const Template4 = ({ userData }) => {
  return (
    <div className="text-black w-[210mm] h-[287mm] font-sans font-vedana rounded-lg shadow-2xl border border-gray-700 mx-auto">
      <div className="flex flex-col items-center h-full">
        <div className="bg-teal-300 text-white py-4 px-6 w-full flex flex-col items-center">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex flex-col md:w-1/2 text-center">
              <h1 className="text-2xl font-bold whitespace-nowrap sm:text-2xl lg:text-2xl">{userData.besicDetails.first_name} {userData.besicDetails.last_name}</h1>
              <h2 className="text-xl whitespace-nowrap sm:text-2xl lg:text-xl">{userData.besicDetails.profession}</h2>
            </div>
          </div>
        </div>
        <div className="h-[60.9rem] mt-0 shadow-md">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex flex-col md:w-[30rem] pl-4 pr-2 h-[258mm] bg-teal-300">
              <h3 className="text-base font-bold">WORK EXPERIENCE</h3>
              <div className=''>
              {userData.experianceList.map((job, index) => (
                  <div key={index} className="border-b-2 border-gray-400 mb-1 pb-2 h-auto">
                    <h4 className="text-base font-medium">{job.title}</h4>
                    <p className="text-sm">{job.company} | {job.location} | {job.startDate} - {job.endDate}</p>
                    <div className="pl-1 text-base leading-tight">
                      {job.responsibility.map((responsibility, index) => (
                        <p key={index}><span className="text-base font-bold mr-2">&#8226;</span>{responsibility}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {/* eduction section */}
              <div className='h-fit mt-1'>
              <h3 className="text-base font-bold">EDUCATION</h3>
              <div className="flex flex-col">
              {userData.educationList.map((education, index) => (
                  <div key={index} className="border-b pb-2 border-gray-700">
                    <h4 className="text-base font-medium pb-1">{education.degree.replace(/_/g, " ")} in {education.fieldOfStudy}</h4>
                    <p className="text-base">{education.schoolName} | {education.schoolLocation} | {education.graduationYear}</p>
                  </div>
                ))}
                </div>
              </div>
              {/* Project section */}
              <div className='mt-1'>
              <h3 className="text-base font-bold">PROJECT</h3>
              <div className="flex flex-col">
              {userData.projectList.map((pro, index) => (
                  <div key={index} className="border-b border-gray-700 pb-2">
                    <h4 className="text-base font-medium">{pro.projectTitle} - <span className='text-sm'>{pro.projectRole}</span></h4>
                    <p className="text-sm">{pro.techstack} | {pro.projectLink}</p>
                    <div className="pl-1 text-base">
                    {pro.description.split("\n").map((desc, index) => (
                        <p key={index}><span className="text-base font-bold mr-2 leading-tight tracking-tighter">&#8226;</span>{desc}</p>
                      ))}
                    </div>
                  </div>
                ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col md:w-1/2 h-[60.9rem]">
              <h3 className="text-base font-bold mb-1">SUMMARY</h3>
              <p className="text-base">{userData.besicDetails.message}</p>
              <h3 className="text-base font-bold mt-2 mb-2">CONTACTS</h3>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9 7 7 0 01-9.9-9.9zm10 0a7 7 0 11-9.9 9.9 7 7 0 019.9-9.9z" clipRule="evenodd" />
                  </svg>
                  <p className="text-base">{userData.besicDetails.city}, {userData.besicDetails.country}</p>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 12.982l7.997-7.1 1.214 1.214L10 15.414l-7.786-7.786z" />
                  </svg>
                  <p className="text-base">{userData.besicDetails.email}</p>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 20 2 15.18 2 3z" />
                  </svg>
                  <p className="text-base">{userData.besicDetails.phone}</p>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11.48 10.01a4.485 4.485 0 010 5.652l-2.5 1.25a5.726 5.726 0 01-8.398 2.627l-2.2 1.1a4.477 4.477 0 01-7.451 2.52l.953-2.389a5.726 5.726 0 012.627-8.398l1.25-2.5a4.485 4.485 0 015.652 0z" />
                    <path d="M10 17a7 7 0 110-14 7 7 0 010 14z" />
                  </svg>
                  <a href={userData.besicDetails.linkdin} className="text-base" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 20a10 10 0 110-20 10 10 0 010 20zm.002-11.999a4.482 4.482 0 00-4.482 4.482 4.482 4.482 0 004.482 4.482 4.482 4.482 0 004.482-4.482 4.482 4.482 0 00-4.482-4.482z" />
                  </svg>
                  <a href={userData.besicDetails.github} className="text-base" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
                <h3 className="text-base font-bold mt-2 mb-2">LANGUAGES</h3>
                <div className="flex flex-col gap-2">
                {userData.skillList[0].languages
                    .split(", ")
                    .map((language, index) => (
                    <p key={index} className="text-base">{language}</p>
                  ))}
                </div>
               <div className='mt-2 mb-2'>
               <h3 className="text-base font-bold mb-2">SKILLS</h3>
              <div className="list-disc text-base">
                <p className='font-semibold'>Primary Skills</p>
                {userData.skillList[0].skills.map((skill, index) => (
                  <p key={index}><span className="text-base font-bold mr-2 leading-tight tracking-tighter">&#8226;</span>{skill}</p>
                ))}
              </div>
               </div>
               <div className=' mt-1 mb-2'>
               <h3 className="text-base font-bold mb-2">CERTIFICATIONS</h3>
              <ul className=" text-base">
              {userData.educationList.map((education, eduIndex) =>
          education.certification.map((cert, certIndex) => (
                  <li key={`${eduIndex}-${certIndex}`}><span className="text-base font-bold mr-2 leading-tight tracking-tighter">&#8226;</span>{cert}</li>
                ))
              )}
              </ul>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Template4.propTypes = {
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

export default Template4;
