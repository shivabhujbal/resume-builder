import { useState, useEffect } from 'react';
import React from 'react';
import Sidebar from './Sidebar';
import './SummaryDetail.css';
import ModalBasicDetail from './Modal/ModalBasicDetail'; // Import the modal
import { useNavigate, useLocation } from 'react-router-dom';
// import { getBasicDetails } from '/src/services/SummaryDetailService';
import ModalExperience from './Modal/ModalExperience'; // Import the experience modal
import ModalProject from './Modal/ModalProject'; // Import the new modal
import ModalLanguage from './Modal/ModalLanguage'; // Import the new language modal
import ModalSkill from './Modal/ModalSkill'; // Import the skills modal
import ModalEducation from './Modal/ModalEducation';
import ModalSummary from './Modal/ModalSummary';
import ModalCertification from './Modal/ModalCertification';
import { getAllDetails } from '../services/UserData';
import { getModalBasicDetails } from '../services/ModalServices';

function SummaryDetail() {
  const location = useLocation();
  const [isModalBasicDetailOpen, setModalBasicDetailOpen] = useState(false);
  const [isExperienceModalOpen, setExperienceModalOpen] = useState(false); // New state for experience modal
  const [isProjectModalOpen, setProjectModalOpen] = useState(false); // New state for project modal
  const [isLanguageModalOpen, setLanguageModalOpen] = useState(false); // New state for language modal
  const [isSkillModalOpen, setSkillModalOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isEducationModalOpen, setEducationModalOpen] = useState(null);
  const [isSummaryModalOpen, setSummaryModalOpen] = useState(null);
  const [isCertificationModalOpen, setCertificationModalOpen] = useState(null);
  const [education, setEducation] = useState({});
  const [basicDetailsData, setBasicDetails] = useState({});


  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getModalBasicDetails(8);
        setUserData(response);

      } catch (error) {
        console.error('Error in fetching user data', error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }
  console.log(userData);

  const handleSaveEducation = (updatedEducation) => {
    setEducation((prevEducation) => {
      if (Array.isArray(prevEducation)) {
        return prevEducation.map((item) =>
          item.id === updatedEducation.id ? updatedEducation : item
        );
      }
      return [updatedEducation]; // Fallback to a new array with updated data
    });
    handleCloseModal();
  };

  const handleModalSave = (updatedDetails) => {
    setBasicDetails(updatedDetails); // Update the state with new data
  };

  const handleCertificationSave = (updatedCertifications) => {
    // Handle the updated certifications data here
    console.log('Updated Certifications:', updatedCertifications);
  };


  const handleProjectSave = (updateProjectDetails) => {
    // Handle the updated certifications data here
    console.log('Updated Certifications:', updateProjectDetails);
  };

  const handleLanguageSave = (updateLanguageDetails) => {
    // Handle the updated certifications data here
    console.log('Updated Certifications:', updateLanguageDetails);
  };

  const handleSkillSave = (updateSkillDetails) => {
    // Handle the updated certifications data here
    console.log('Updated Certifications:', updateSkillDetails);
  };

  const handleSummarySave = (updateSummaryDetails) => {
    // Handle the updated certifications data here
    console.log('Updated Certifications:', updateSummaryDetails);
  };

  const handleExperienceSave = (updateSummaryDetails) => {
    // Handle the updated certifications data here
    console.log('Updated Certifications:', updateSummaryDetails);
  };

  const handleEditClick = (section) => {
    if (section === 'basicDetails') {
      setModalBasicDetailOpen(true);
    } else if (section === 'experience') {
      setExperienceModalOpen(true);
    } else if (section === 'projects') {
      setProjectModalOpen(true);
    } else if (section === 'languages') {
      setLanguageModalOpen(true);

    } else if (section === 'skills') {
      setSkillModalOpen(true); // Open the skills modal
    } else if (section === 'education') {
      setEducationModalOpen(true); // Open the skills modal
    } else if (section === 'summary') {
      setSummaryModalOpen(true);
    } else if (section === 'certification') {
      setCertificationModalOpen(true);
    }


  };

  const handleCloseModal = () => {
    setModalBasicDetailOpen(false);
    setExperienceModalOpen(false); // Close experience modal
    setProjectModalOpen(false); // Close experience modal
    setLanguageModalOpen(false); // Close language modal
    setSkillModalOpen(false); // Close skills modal
    setEducationModalOpen(false);
    setSummaryModalOpen(false);
    setCertificationModalOpen(false);
  };

  const handleFinalizeClick = () =>{
    // Handle the finalize button click here
    navigate('/template-loader')
  }

  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
      <div className="sticky top-0 h-screen">
        <Sidebar />
      </div>
      <div className="flex-grow overflow-y-auto p-4 bg-gray-50 ml-1">
        <div className="max-w-6xl mx-auto ml-1">
          <form className="w-full ml-1">
            <div className="flex flex-col gap-8 mb-8 ml-1">
              {/* Basic Details Section */}
              <div className="flex-1 md:w-full border border-gray-300 hover:shadow-xl p-8 bg-white relative mb-8 md:mb-0">
                <div className="absolute top-2 right-2 flex space-x-2 z-10 text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 inline-block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={() => handleEditClick('basicDetails')}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536c0-.894.296-1.736.856-2.407l3.536-3.536a2.5 2.5 0 013.536 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-bold mb-2">Basic Details</h2>

                <p className="text-base">
                  <span className="text-lg font-bold">First Name : </span>
                  <span className="text-base">{userData.besicDetails.first_name}</span>
                </p>
                <p className="text-base">
                  <span className="text-lg font-bold">Last Name : </span>
                  <span className="text-base">{userData.besicDetails.last_name}</span>
                </p>
                <p className="text-base">
                  <span className="text-lg font-bold">Profession : </span>
                  <span className="text-base">{userData.besicDetails.profession}</span>
                </p>
                <p className="text-base">
                  <span className="text-lg font-bold">City : </span>
                  <span className="text-base">{userData.besicDetails.city}</span>
                </p>
                <p className="text-base">
                  <span className="text-lg font-bold">Country : </span>
                  <span className="text-base">{userData.besicDetails.country}</span>
                </p>
                <p className="text-base">
                  <span className="text-lg font-bold">Mobile Number : </span>
                  <span className="text-base">{userData.besicDetails.phone}</span>
                </p>
                <p className="text-base">
                  <span className="text-sm font-semibold">Email : </span>
                  <span className="text-sm">{userData.besicDetails.email}</span>
                </p>
                <p className="text-base">
                  <span className="text-lg font-bold">LinkedIn : </span>
                  <a
                    href={userData.besicDetails.linkdin}
                    className="text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {userData.besicDetails.linkdin}
                  </a>
                </p>
                <p className="text-base">
                  <span className="text-lg bold">GitHub : </span>
                  <a
                    href={userData.besicDetails.github}
                    className="text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {userData.besicDetails.github}
                  </a>
                </p>
              </div>
              {/* End Basic Details Section */}

              {/* Education Section */}
              <div className="flex-1 md:w-full border border-gray-300 hover:shadow-xl p-8 bg-white relative overflow-y-auto custom-scrollbar" style={{ maxHeight: '400px' }}>
                <div className="absolute top-2 right-2 flex space-x-2 z-10 text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 inline-block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={() => handleEditClick('education')}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536c0-.894.296-1.736.856-2.407l3.536-3.536a2.5 2.5 0 013.536 0z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold mb-4 sticky-header">Education</h2>
                {userData.educationList && userData.educationList.map((edu) => (
                  <div key={edu.EducationID} className="mb-4">
                    <p className="text-base">
                      <span className="text-lg font-bold">Degree: </span>
                      <span className="text-base">{edu.degree}</span>
                    </p>
                    <p className="text-base">
                      <span className="text-base font-bold">Field of Study: </span>
                      <span className="text-lg">{edu.fieldOfStudy}</span>
                    </p>
                    <p className="text-base">
                      <span className="text-base font-bold">College Name: </span>
                      <span className="text-lg">{edu.schoolName}</span>
                    </p>
                    <p className="text-base">
                      <span className="text-base font-bold">Location: </span>
                      <span className="text-lg">{edu.schoolLocation}</span>
                    </p>
                    <p className="text-base">
                      <span className="text-lg font-bold">Graduation Year: </span>

                      <span className="text-base font-bold">{edu.graduationYear}</span>
                    </p>
                    <p className="text-base">
                      <span className="text-lg font-bold">Gap Taken: </span>
                      <span className="text-base">{edu.gapTaken ? "Yes" : "No"}</span>
                    </p>
                    {edu.gapTaken && (
                      <p className="text-base">
                        <span className="text-lg font-bold">Gap Year: </span>
                        <span className="text-base">{edu.gapYear}</span>
                      </p>
                    )}

                  </div>
                ))}
                {/* {userData && userData.certifications && userData.certifications.length > 0 && (
                <>
                  <h3 className="text-base font-bold mb-2">Certifications</h3>
                  <div className="absolute top-2 right-2 flex space-x-2 z-10 text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 inline-block"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    //onClick={() => handleEditClick('education')} // Open the skills modal
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536c0-.894.296-1.736.856-2.407l3.536-3.536a2.5 2.5 0 013.536 0z" />
                    </svg>
                  </div>
                  <ul className="list-disc ml-5 text-sm">
                    {userData.certifications.map((cert, index) => (
                      <li className="text-sm" key={index}>
                        {cert}
                      </li>
                    ))}
                  </ul>
                </>
              )}*/}
              </div>
              {/* End Education Section */}

              {/* Experience Section */}
              <div className="flex-1 md:w-full border border-gray-300 hover:shadow-xl p-8 bg-white relative overflow-y-auto custom-scrollbar" style={{ maxHeight: '400px' }}>
                <div className="absolute top-2 right-2 flex space-x-2 z-10 text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 inline-block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={() => handleEditClick('experience')}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536c0-.894.296-1.736.856-2.407l3.536-3.536a2.5 2.5 0 013.536 0z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold mb-4 sticky-header">Experience</h2>
                {(userData?.experianceList ?? []).map((exp) => (
                  <div key={exp.ExperienceID} className="mb-4">
                    <p className="text-base">
                      <span className="text-lg font-bold">Company : </span>
                      <span className="text-base">{exp.company || 'N/A'}</span>
                    </p>
                    <p className="text-base">
                      <span className="text-lg font-bold">Position: </span>
                      <span className="text-base">{exp.title || 'N/A'}</span>
                    </p>
                    <p className="text-base">
                      <span className="text-lg font-bold">Start Date : </span>
                      <span className="text-base">{exp.startDate || 'N/A'}</span>
                    </p>
                    <p className="text-base">
                      <span className="text-lg font-bold">End Date : </span>
                      <span className="text-base">{exp.endDate || 'N/A'}</span>
                    </p>

                    <p className="text-base">
                      <span className="text-lg font-bold">Location: </span>
                      <span className="text-base">{exp.location || 'N/A'}</span>
                    </p>
                    <p className="text-base">
                      <span className="text-lg font-bold">Responsibilities: </span>
                      <span className="text-base">{exp.responsibility || 'N/A'}</span>
                    </p>

                  </div>
                ))}
              </div>
              {/* End Experience Section */}

              {/* Projects Section */}
              <div className="flex-1 md:w-full border border-gray-300 hover:shadow-xl p-8 bg-white relative overflow-y-auto custom-scrollbar sticky-header" style={{ maxHeight: '400px' }}>
                <div className="absolute top-2 right-2 flex space-x-2 z-10 text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 inline-block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={() => handleEditClick('projects')}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536c0-.894.296-1.736.856-2.407l3.536-3.536a2.5 2.5 0 013.536 0z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold mb-4 sticky-header">Projects</h2>
                {userData && Array.isArray(userData.projectList) && userData.projectList.length > 0 ? (
                  userData.projectList.map((project) => (
                    <div key={project.ProjectID} className="mb-4">
                      <p className="text-base">
                        <span className="text-lg font-bold">Project Title: </span>
                        <span className="text-base">{project.projectTitle}</span>
                      </p>
                      <p className="text-base">
                        <span className="text-lg font-bold">Description: </span>
                        <span className="text-base">{project.description}</span>
                      </p>
                      <p className="text-base">
                        <span className="text-lg font-bold">Technologies: </span>
                        <span className="text-base">
                          {Array.isArray(project.techstack) ? project.techstack.join(', ') : 'N/A'}
                        </span>
                      </p>
                      <p className="text-base">
                        <span className="text-lg font-bold">Project Role: </span>
                        <span className="text-base">{project.projectRole}</span>
                      </p>
                      <p className="text-base">
                        <span className="text-lg font-bold">Project Link: </span>
                        <a href={project.projectLink} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                          {project.projectLink}
                        </a>
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-base">No projects available.</p>
                )}
              </div>
              {/* End Projects Section */}

              {/* Certification Section */}
              <div className="flex-1 md:w-full border border-gray-300 hover:shadow-xl p-8 bg-white relative overflow-y-auto custom-scrollbar" style={{ maxHeight: '400px' }}>
                <div className="absolute top-2 right-2 flex space-x-2 z-10 text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 inline-block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={() => handleEditClick('certification')}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536c0-.894.296-1.736.856-2.407l3.536-3.536a2.5 2.5 0 013.536 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-bold mb-4">Certification</h2>
                {userData && Array.isArray(userData.educationList) &&
                  userData.educationList.length > 0 &&
                  Array.isArray(userData.educationList[0].certification) &&
                  userData.educationList[0].certification.length > 0 ? (
                  <ul className="list-disc ml-5 text-sm">
                    {userData.educationList[0].certification.map((cert, index) => (
                      <li className="text-sm" key={index}>
                        {cert}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm">No certification data available.</p>
                )}
              </div>
              {/* End Certification Section */}

              {/* Languages Section */}
              <div className="flex-1 md:w-full border border-gray-300 hover:shadow-xl p-8 bg-white relative overflow-y-auto custom-scrollbar" style={{ maxHeight: '400px' }}>
                <div className="absolute top-2 right-2 flex space-x-2 z-10 text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 inline-block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={() => handleEditClick('languages')}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536c0-.894.296-1.736.856-2.407l3.536-3.536a2.5 2.5 0 013.536 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-bold mb-4">Languages</h2>
                {userData && userData.skillList && userData.skillList.length > 0 ? (
                  userData.skillList[0].languages ? (
                    <ul className="list-disc ml-5 text-sm">
                      {userData.skillList[0].languages.split(',').map((lang, index) => (
                        <li className="text-sm" key={index}>
                          {lang.trim()}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm">No languages data available.</p>
                  )
                ) : (
                  <p className="text-sm">No skillList data available.</p>
                )}
              </div>
              {/* End Languages Section */}

              {/* End Languages Section */}

              {/* Skills Section */}
              <div className="flex-1 md:w-full border border-gray-300 hover:shadow-xl p-8 bg-white relative overflow-y-auto custom-scrollbar" style={{ maxHeight: '400px' }}>
                <div className="absolute top-2 right-2 flex space-x-2 z-10 text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 inline-block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={() => handleEditClick('skills')} // Open the skills modal
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536c0-.894.296-1.736.856-2.407l3.536-3.536a2.5 2.5 0 013.536 0z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold mb-2">Skills</h2>

                <div className="mb-2">
                  <h3 className="text-lg font-bold">Primary Skills</h3>
                  {userData && userData.skillList && Array.isArray(userData.skillList) ? (
                    userData.skillList
                      .filter(skill => skill.skillType === "PRIMARY")
                      .map((primarySkill, index) => (
                        <ul key={index} className="list-disc list-inside">
                          {Array.isArray(primarySkill.skills) && primarySkill.skills.length > 0 ? (
                            primarySkill.skills.map((skill, idx) => (
                              <span key={idx} className="text-base">{skill}, </span>
                            ))
                          ) : (
                            <p className="text-sm">No primary skills available.</p>
                          )}
                        </ul>
                      ))
                  ) : (
                    <p className="text-sm">No primary skills available.</p>
                  )}
                </div>

                <div className="mb-2">
                  <h3 className="text-lg font-bold">Secondary Skills</h3>
                  {userData && userData.skillList && Array.isArray(userData.skillList) ? (
                    userData.skillList
                      .filter(skill => skill.skillType === "SECONDARY")
                      .map((secondarySkill, index) => (
                        <ul key={index} className="list-disc list-inside">
                          {Array.isArray(secondarySkill.skills) && secondarySkill.skills.length > 0 ? (
                            secondarySkill.skills.map((skill, idx) => (
                              <span key={idx} className="text-base">{skill}</span>
                            ))
                          ) : (
                            <p className="text-sm">No secondary skills available.</p>
                          )}
                        </ul>
                      ))
                  ) : (
                    <p className="text-sm">No secondary skills available.</p>
                  )}
                </div>

              </div>
              {/* End Skills Section */}

              {/* Summary Section */}
              <div className="flex-1 md:w-full border border-gray-300 hover:shadow-xl p-8 bg-white relative overflow-y-auto custom-scrollbar" style={{ maxHeight: '400px' }}>
                <div className="absolute top-2 right-2 flex space-x-2 z-10 text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 inline-block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={() => handleEditClick('summary')} // Open the summary modal 
                  >
                    <path strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536c0-.894.296-1.736.856-2.407l3.536-3.536a2.5 2.5 0 013.536 0z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold mb-4">Summary</h2>
                <p className="text-base">{userData.besicDetails.message}</p>
              </div>
              {/* End Summary Section */}
            </div>
            <div className="mt-10 pr-5 pb-10 flex justify-end space-x-5">
                <button
                  type="submit"
                
                  className="py-3 px-5 h-fit border border-blue-800 rounded-full text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Preview
                </button>
                <button
                  type="button" // Changed to button to prevent form submission
                  onClick={handleFinalizeClick}
                  className="items-end px-5 h-fit py-3 text-base font-medium border border-transparent rounded-full shadow-sm text-blue-700 bg-yellow-400 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                 Finalize & Download
                </button>
              </div>
          </form>
          
        </div>
       
      </div >
      <ModalBasicDetail
        isOpen={isModalBasicDetailOpen}
        onClose={handleCloseModal}
        onSave={handleModalSave} // Pass this as a prop
        data={userData}

      />
      <ModalEducation
        isOpen={isEducationModalOpen}
        onClose={handleCloseModal}
        data={userData}
        onSave={handleSaveEducation}
      />
      <ModalExperience
        isOpen={isExperienceModalOpen} // Pass the state
        onClose={handleCloseModal}
        onSave={handleExperienceSave}
        section="experience"
        data={userData.experience} // Pass the first experience item as an example
      />
      <ModalSummary
        isOpen={isSummaryModalOpen} // Pass the state
        onClose={handleCloseModal}
        onSave={handleSummarySave}
        section="summary"
        data={userData.summary} // Pass the first experience item as an example
      />
      <ModalProject
        isOpen={isProjectModalOpen} // Pass the state
        onClose={handleCloseModal}
        onSave={handleProjectSave}
        data={userData.projects} // Pass the project data
      />
      <ModalLanguage
        isOpen={isLanguageModalOpen}
        onClose={handleCloseModal}
        onSave={(handleLanguageSave) => handleLanguageSave({ ...data, languages: updatedLanguages })}
        data={userData.languages}
      /> {/* Pass language data */}

      <ModalSkill
        isOpen={isSkillModalOpen}
        onClose={handleCloseModal}
        onSave={handleSkillSave}
        data={userData.skills} // Pass the skills data
      />
      <ModalCertification
        isOpen={isCertificationModalOpen}
        onClose={handleCloseModal}
        onSave={handleCertificationSave}
        data={userData.certification} // Pass the skills data
      />
    </div >


  );
}


export default SummaryDetail;
