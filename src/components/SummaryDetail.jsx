import { useState, useEffect } from 'react';
import React from 'react';
import Sidebar from './Sidebar';
import './SummaryDetail.css';
import { TiEdit } from "react-icons/ti";

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
  const [selectedEducationId, setSelectedEducationId] = useState(null);
  const [selectedExperienceId, setSelectedExperienceId] = useState(null);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [selectedSkillsId, setSelectedSkillsId] = useState(null);
  const [selectedSkillType, setSelectedSkillType] = useState(''); // Initialize with a default value
  const [selectedSkills, setSelectedSkills] = useState([]); // Initialize with a default value
  const [selectedLanguageId, setSelectedLanguageId] = useState(null); // Initialize with a default value
  const [selectedLanguages, setSelectedLanguages] = useState(''); // Initialize with a default value

  const navigate = useNavigate();

  const userId = localStorage.getItem('userId');
  // userId = userId ? parseInt(userId, 10) : null;

  

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getAllDetails(userId);
        console.log("API Response:", response);
        setUserData(response.userData || response);

      } catch (error) {
        console.error('Error in fetching user data', error);
      }
    };

    fetchUserData();
  }, [userId]);

  if (!userData) {
    return <div>Loading...</div>;
  }
 
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

  const handleExperienceSave = (updateExperienceDetails) => {
    // Handle the updated certifications data here
    console.log('Updated Certifications:', updateExperienceDetails);
  };

  const handleEditClick = (section, id = null) => {
    if (section === 'basicDetails') {
      setModalBasicDetailOpen(true);
    } else if (section === 'experience') {
      console.log(id);
      setSelectedExperienceId(id);
      console.log(selectedExperienceId);
      setExperienceModalOpen(true);

    } else if (section === 'projects') {
      console.log(id);
      setSelectedProjectId(id);
      console.log(selectedProjectId);
      setProjectModalOpen(true);

    }  if (section === 'languages') {
    setSelectedLanguageId(id); // Set the selected language ID
    console.log("Language Id", id);
    
    const selectedLanguageData = userData.skillList.find(skill => skill.id === id);
    
    if (selectedLanguageData && selectedLanguageData.languages) {
      setSelectedLanguages(selectedLanguageData.languages.split(',')); // Initialize with the current languages
    } else {
      setSelectedLanguages([]); // Initialize with an empty array if no languages are found
    }
    
    setLanguageModalOpen(true); // Open the modal for editing languages
  } else if (section === 'skills') {
      console.log("Primary Skill ID:", id);
      console.log("selectedId", id);
      setSelectedSkillsId(id);
      setSelectedSkills(selectedSkills);
      console.log("selected Skills", selectedSkills);
      setSelectedSkillType('PRIMARY'); // Set the skill type
      console.log(selectedSkillType);
      setSkillModalOpen(true);

    } else if (section === 'education') {
      console.log(id);
      setSelectedEducationId(id);  // Set the selected education ID
      console.log(selectedEducationId)
      setEducationModalOpen(true); // Open the skills modal

    } else if (section === 'summary') {
      setSummaryModalOpen(true);
    } else if (section === 'certification') {
      console.log(id);
      setSelectedEducationId(id);
      console.log(selectedEducationId)
      setCertificationModalOpen(true);
    }


  };
  console.log("Summary UserData",userData);

  


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
  // console.log(userData);
  //console.log(userData.certification);
  console.log("Skills Id", userData.skillList.id);

  const handleFinalizeClick = () => {
    // Handle the finalize button click here
    navigate('/template-loader')
  }
  console.log("UserData", userData.skillList);
  //console.log("Language Id",selectedLanguageId);

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
                  
                  <TiEdit 
                  className='w-6 h-6'
                  onClick={() => handleEditClick('basicDetails')}
                  />

                </div>
                <h2 className="text-xl font-bold mb-2">Basic Details</h2>
                <div className=''>
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
                  <span className="text-lg font-bold">Email : </span>
                  <span className="text-base">{userData.besicDetails.email}</span>
                </p>
                <p className="text-base">
                  <span className="text-lg font-bold">LinkedIn : </span>
                  <a
                    href={userData.besicDetails.linkedin}
                    className="text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {userData.besicDetails.linkedin}
                  </a>
                </p>
                <p className="text-base">
                  <span className="text-lg font-bold">GitHub : </span>
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
              </div>
              {/* End Basic Details Section */}

              {/* Education Section */}
              <div className="flex-1 md:w-full border border-gray-300 hover:shadow-xl p-8 bg-white relative h-auto">
                <h2 className="text-xl font-bold mb-4 sticky-header relative">
                  Education
                </h2>
                {userData.educationList && userData.educationList.map((edu, index) => (
                  <div key={edu.EducationID} className="mb-4 relative">
                    {/*<p className="text-base">
                      <span className="text-base font-bold">Education Id : </span>
                      <span className="text-lg">{edu.id}</span>
                    </p>*/}
                    <p className="text-base">
                      <span className="text-lg font-bold">Degree:</span>
                      {/* Container for degree text and edit icon */}
                      <span className="text-base inline-flex items-center ml-2">
                        {edu.degree.replace(/_/g, " ")}
                        {/* SVG edit icon immediately after edu.degree */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 inline-block cursor-pointer ml-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          onClick={() => handleEditClick('education', edu.id)} // Pass both section and id
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536c0-.894.296-1.736.856-2.407l3.536-3.536a2.5 2.5 0 013.536 0z"
                          />
                        </svg>
                      </span>
                    </p>

                    <p className="text-base">
                      <span className="text-lg font-bold">Field of Study: </span>
                      <span className="text-lg">{edu.fieldOfStudy}</span>
                    </p>
                    <p className="text-base">
                      <span className="text-lg font-bold">College Name: </span>
                      <span className="text-lg">{edu.schoolName}</span>
                    </p>
                    <p className="text-base">
                      <span className="text-lg font-bold">Location: </span>
                      <span className="text-lg">{edu.schoolLocation}</span>
                    </p>
                    <p className="text-base">
                      <span className="text-lg font-bold">Graduation Year: </span>
                      <span className="text-base ">{edu.graduationYear}</span>
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
              </div>
              {/* End Education Section */}

              {/* Experience Section */}
              <div className="flex-1 md:w-full border border-gray-300 hover:shadow-xl p-8 bg-white relative h-auto">
                <h2 className="text-xl font-bold mb-4 sticky-header">Experience</h2>
                {(userData?.experianceList ?? []).map((exp, index) => (
                  <div key={exp.ExperienceID} className="mb-4 relative">
                    <p className="text-base">
                      <span className="text-lg font-bold">Company: </span>
                      {/* Container for company text and edit icon */}
                      <span className="text-base inline-flex items-center ml-2">
                        {exp.company || 'N/A'}
                        {/* SVG edit icon immediately after company text */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 inline-block cursor-pointer ml-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          onClick={() => handleEditClick('experience', exp.id)} // Pass both section and id
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536c0-.894.296-1.736.856-2.407l3.536-3.536a2.5 2.5 0 013.536 0z"
                          />
                        </svg>
                      </span>
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
              <div className="flex-1 md:w-full border border-gray-300 hover:shadow-xl p-8 bg-white relative sticky-header h-auto" >

                <h2 className="text-xl font-bold mb-4 sticky-header">Projects</h2>
                {userData && Array.isArray(userData.projectList) && userData.projectList.length > 0 ? (
                  userData.projectList.map((project) => (
                    <div key={project.ProjectID} className="mb-4">
                      <p className="text-base">
                        <span className="text-lg font-bold">Project Title:</span>
                        {/* Container for Project Title and Edit Icon */}
                        <span className="text-base inline-flex items-center capitalize ml-2">
                        {project.projectTitle}
                          {/* SVG Edit Icon immediately after project title */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 inline-block cursor-pointer ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            onClick={() => handleEditClick('projects', project.id)} // Pass both section and id
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536c0-.894.296-1.736.856-2.407l3.536-3.536a2.5 2.5 0 013.536 0z"
                            />
                          </svg>
                        </span>
                      </p>
                      <p className="text-base">
                        <span className="text-lg font-bold">Project Role: </span>
                        <span className="text-base">{project.projectRole}</span>
                      </p>
                      <p className="text-base">
                        <span className="text-lg font-bold">Technologies: </span>
                        <span className="text-base capitalize">
                          {Array.isArray(project.techstack) ? project.techstack.join(', ') : 'N/A'}
                        </span>
                      </p>
                      <p className="text-base">
                        <span className="text-lg font-bold">Project Link: </span>
                        <a href={project.projectLink} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                          {project.projectLink}
                        </a>
                      </p>
                      <p className="text-base">
                        <span className="text-lg font-bold">Description: </span>
                        <span className="text-base">{project.description}</span>
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-base">No projects available.</p>
                )}
              </div>
              {/* End Projects Section */}

              {/* Certification Section */}
              <div className="flex-1 md:w-full border border-gray-300 hover:shadow-xl p-8 bg-white relative overflow-y-auto custom-scrollbar h-auto" >
                <div className="absolute top-2 right-2 flex space-x-2 z-10 text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 inline-block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={() => handleEditClick('certification', userData.educationList[0].id)}
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
                  <div className="text-sm">
                    {userData.educationList[0].certification.map((cert, index) => (
                      <li className="text-base capitalize list-item" key={index}>
                        {cert}
                      </li>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm">No certification data available.</p>
                )}
              </div>
              {/* End Certification Section */}

              {/* Languages Section */}
              <div className="flex-1 md:w-full border border-gray-300 hover:shadow-xl p-8 bg-white relative h-auto" >
                <div className="absolute top-2 right-2 flex space-x-2 z-10 text-black h-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 inline-block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={() => handleEditClick('languages', userData.skillList[0].id)} // Ensure selectedLanguageId is properly set
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
                    <div className=" text-sm">
                      {userData.skillList[0].languages.split(',').map((lang, index) => (
                        <li className="text-base capitalize list-item" key={index}>
                          {lang.trim()}
                        </li>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm">No languages data available.</p>
                  )
                ) : (
                  <p className="text-sm">No skillList data available.</p>
                )}
              </div>
              {/* End Languages Section */}

             {/* Skills Section */}
<div className="flex-1 md:w-full border border-gray-300 hover:shadow-xl p-8 bg-white relative overflow-y-auto custom-scrollbar" style={{ maxHeight: '400px' }}>
  <h2 className="text-xl font-bold mb-2">Skills</h2>

  {/* Primary Skills Section */}
  <div className="mb-2 relative">
    {userData?.skillList?.length ? (
      (() => {
        // Get the first primary skill only
        const primarySkills = userData.skillList.filter(skill => skill.skillType === "PRIMARY");

        // Check if there are any primary skills and display the first one
        if (primarySkills.length > 0) {
          const primarySkill = primarySkills[0]; // Get the first primary skill

          return (
            <div key={primarySkill.id} className="list-disc list-inside mb-4">
              <div className="flex justify-between items-center">
                <div>
                  {Array.isArray(primarySkill.skills) && primarySkill.skills.length > 0 ? (
                    primarySkill.skills.map((skill, idx) => (
                      <li key={idx} className="text-base">{skill}</li>
                    ))
                  ) : (
                    <p className="text-sm">No primary skills available.</p>
                  )}
                </div>

                {/* Edit Icon for the first primary skill */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={() => handleEditClick('skills', primarySkill.id)}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536c0-.894.296-1.736.856-2.407l3.536-3.536a2.5 2.5 0 013.536 0z" />
                </svg>
              </div>
            </div>
          );
        } else {
          return <p className="text-sm">No primary skills available.</p>;
        }
      })()
    ) : (
      <p className="text-sm">No primary skills available.</p>
    )}
  </div>
</div>

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
                className="items-end px-5 h-fit py-3 text-base font-medium border border-transparent rounded-full shadow-sm text-white bg-orange-600 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
        userId={userId}
      //index={index} 
      />
      <ModalEducation
        isOpen={isEducationModalOpen}
        onClose={() => setEducationModalOpen(false)}
        //data={userData}
        //onSave={handleSave} // Add your save logic here
        userId={userId}
        id={selectedEducationId} // Pass the selected ID
      />
      <ModalExperience
        isOpen={isExperienceModalOpen} // Pass the state
        onClose={handleCloseModal}
        //onSave={handleExperienceSave}
        //section="experience"
        // data={userData.experience} // Pass the first experience item as an example
        userId={userId}
        id={selectedExperienceId} // Pass the selected ID
      //index={index} 
      />
      <ModalSummary
        isOpen={isSummaryModalOpen} // Pass the state
        onClose={handleCloseModal}
        onSave={handleSummarySave}
        section="summary"
        data={userData.summary} // Pass the first experience item as an example
        userId={userId}
      //index={index} 
      />
      <ModalProject
        isOpen={isProjectModalOpen} // Pass the state
        onClose={handleCloseModal}
        //onSave={handleProjectSave}
        //data={userData.projects} // Pass the project data
        userId={userId}
        id={selectedProjectId} // Pass the selected ID
      //index={index} 
      />
      <ModalLanguage
        isOpen={isLanguageModalOpen}
        onClose={handleCloseModal}
        // onSave={(handleLanguageSave) => handleLanguageSave({ ...data, languages: updatedLanguages })}
        //data={userData.languages}
        selectedLanguageId={selectedLanguageId}
        selectedLanguages={selectedLanguages}
        userId={userId}
        id={selectedLanguageId}
      // id={selectedLanguageId} // Pass the selected ID
      //index={index} 
      /> {/* Pass language data */}

      <ModalSkill
        isOpen={isSkillModalOpen}
        onClose={handleCloseModal}
        selectedSkillsId={selectedSkillsId}
        // selectedSkillType={selectedSkillType}
        selectedSkills={selectedSkills}
        //onSave={handleSkillSave}
        //data={userData.skills} // Pass the skills data
        userId={userId}
        id={selectedSkillsId} // Pass the selected ID
        initialSelectedSkillType={selectedSkillType}
      />
      <ModalCertification
        isOpen={isCertificationModalOpen}
        onClose={handleCloseModal}
        //onSave={handleCertificationSave}
        //data={userData.certification} // Pass the skills data
        userId={userId}
        id={selectedEducationId} // Pass the selected ID
      //index={index} 
      />
    </div >


  );
}


export default SummaryDetail;
