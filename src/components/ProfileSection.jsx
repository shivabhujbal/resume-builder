import { useState, useEffect } from 'react';
import React from 'react';
import Sidebar from './Sidebar';
import './ProfileSection.css';
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
  //const [index, setIndex] = useState(0); 
  const [userId, setUserId] = useState(1); // Assuming 1 is the initial userId
  const [selectedEducationId, setSelectedEducationId] = useState(null);
  const [selectedExperienceId, setSelectedExperienceId] = useState(null);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [selectedSkillsId, setSelectedSkillsId] = useState(null);
  const [selectedSkillType, setSelectedSkillType] = useState(''); // Initialize with a default value
  const [selectedSkills, setSelectedSkills] = useState([]); // Initialize with a default value
  const [selectedLanguageId, setSelectedLanguageId] = useState(null); // Initialize with a default value
  const [selectedLanguages, setSelectedLanguages] = useState(''); // Initialize with a default value
  const [resumeUploaded, setResumeUploaded] = useState(false);
  const navigate = useNavigate();

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
  // console.log(userData);
  // console.log(userData.educationList.degree);
  // console.log(userData.educationList.certification);
  // console.log(userData.skillList.languages);
  //console.log("Education", userData.educationList[0]);


  /*const handleSaveEducation = (updatedEducation) => {
    setEducation((prevEducation) => {
      if (Array.isArray(prevEducation)) {
        return prevEducation.map((item) =>
          item.id === updatedEducation.id ? updatedEducation : item
        );
      }
      return [updatedEducation]; // Fallback to a new array with updated data
      console.log(updatedEducation);
      setEducationModalOpen(false);
    });
    handleCloseModal();
  };*/

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

    } if (section === 'languages') {
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

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Handle file upload logic here
      setResumeUploaded(true); // Update resume upload status
    }
  };

  const handleUploadClick = () => {
    document.getElementById('file-input').click();
  };
  console.log("Summary UserData", userData);

  // const handleEditClick = (section, id = null) => {
  //   switch (section) {
  //     case 'basicDetails':
  //       setModalBasicDetailOpen(true);
  //       break;

  //     case 'experience':
  //       console.log("Experience ID:", id);
  //       setSelectedExperienceId(id);
  //       setExperienceModalOpen(true);
  //       break;

  //     case 'projects':
  //       console.log("Project ID:", id);
  //       setSelectedProjectId(id);
  //       setProjectModalOpen(true);
  //       break;

  //     case 'languages':
  //       setLanguageModalOpen(true);
  //       break;

  //     case 'primary':
  //     case 'secondary':
  //       console.log(`${section} Skills ID:`, id);
  //       setSelectedSkillsId(id);
  //       setSkillModalOpen(true);  // Open the skills modal for both primary and secondary
  //       break;

  //     case 'education':
  //       console.log("Education ID:", id);
  //       setSelectedEducationId(id);
  //       setEducationModalOpen(true);
  //       break;

  //     case 'summary':
  //       setSummaryModalOpen(true);
  //       break;

  //     case 'certification':
  //       console.log("Certification ID:", id);
  //       setSelectedEducationId(id);  // Assuming certification uses the same selectedEducationId
  //       setCertificationModalOpen(true);
  //       break;

  //     default:
  //       console.warn('Unknown section:', section);
  //   }
  // };


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
      <div className="sticky top-0 h-screen ml-12">
        <Sidebar />
      </div>
      <div className="flex-grow overflow-y-auto p-4 bg-gray-50 ml-1">
        <div className="max-w-6xl mx-auto ml-1">
          <form className="w-full ml-1">
            <div className="flex flex-col gap-8 mb-1 ml-1 ">
              {/* start Resume section */}
              <div className="flex-grow p-1 bg-gray-50 ml-1 rounded-xl ">
                <div className="max-w-6xl mx-auto ml-1  rounded-xl ">
                  <form className="w-full ml-1 rounded-xl">
                    <div className="flex flex-col gap-8 mb-2 ml-1 rounded-xl">
                      <div className="flex-1  text-center  
                       shadow-xl p-8 bg-white max-w-[98%] relative mb-8 md:mb-0 rounded-lg border-white">

                        <h2 className="text-lg text-left mb-2 font-semibold">Resume</h2>
                        <p className="text-base text-center">70% of recruiters discover candidates through their resume</p>

                        <div className="mt-4">
                          <button className="bg-blue-500 
                            hover:bg-blue-700 
                            text-white font-bold 
                            py-2 px-4 rounded focus:outline-none 
                            focus:shadow-outline
                            text-center"
                          >
                            View resume
                          </button>
                        </div>

                        {!resumeUploaded ? (
                          <div className="mt-8 text-center border-dotted border-2 border-gray-400 p-4">
                            <p className="text-base text-center">Already have a resume?</p>

                            <input
                              type="file"
                              className="hidden text-center"
                              id="file-input"
                              onChange={handleFileChange}
                            />
                            <button
                              type="button"
                              onClick={handleUploadClick}
                              className=" text-center
                            text-blue-600 font-bold 
                              py-2 px-4 rounded focus:outline-none 
                              focus:shadow-outline mt-2">
                              Upload resume
                            </button>


                            <p className="text-sm mt-2 text-center text-black">Supported Formats: doc, docx, rtf, pdf, upto 2 MB</p>
                          </div>
                        ) : (
                          <div className="mt-8 text-center border-dotted border-2 border-gray-400 p-4">
                            <p className="text-base text-center">Resume Uploaded</p>
                            <input
                              type="file"
                              className="hidden text-center"
                              id="file-input"
                              onChange={handleFileChange}
                            />
                            <button
                              type="button"
                              onClick={handleUploadClick}
                              className="
                            text-blue-600 font-bold 
                              py-2 px-4 rounded focus:outline-none
                              focus:shadow-outline text-center"
                            >
                              Update resume
                            </button>
                          </div>
                        )}
                      </div>

                      {/*Resume Section end */}

                      {/* Resume Headline Section */}
                      <div className="flex-1 max-w-[98%]  border-white shadow-xl p-8 bg-white relative rounded-lg ">
                        <div className="flex items-center space-x-2 mb-4">
                          <h2 className="text-lg font-semibold">Resume headline</h2>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-gray-400 cursor-pointer"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            onClick={() => handleEditClick('summary')} // Open the summary modal 
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536c0-.894.296-1.736.856-2.407l3.536-3.536a2.5 2.5 0 013.536 0z"
                            />
                          </svg>
                        </div>

                        <p className="text-base">{userData.besicDetails.message}</p>
                      </div>
                      {/* End Resume Headline Section */}

                      {/* Skills Section */}
                      <div className="flex-1 md:w-full border borderwhite shadow-xl p-8 bg-white relative overflow-y-auto custom-scrollbar" style={{ maxHeight: '400px' }}>
                        <h2 className="text-xl font-bold mb-2">Skills</h2>
                        {/* Single common edit SVG icon for the entire Skills section */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 cursor-pointer text-black absolute top-0 right-0 m-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          onClick={() => handleEditClick('skills', userData.skillList.find(skill => skill.skillType === 'PRIMARY')?.id)} // Pass the correct id based on skillType
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536c0-.894.296-1.736.856-2.407l3.536-3.536a2.5 2.5 0 013.536 0z" />
                        </svg>
                        {/* Primary Skills Section */}
                        <div className="mb-2 relative">
                          {userData && userData.skillList ? (
                            userData.skillList
                              .filter(skill => skill.skillType === "PRIMARY")
                              .map((primarySkills) => (
                                <ul key={primarySkills.id} className="list-disc list-inside mb-2">
                                  {Array.isArray(primarySkills.skills) && primarySkills.skills.length > 0 ? (
                                    primarySkills.skills.map((skill, idx) => (
                                      <li key={idx} className="flex items-center justify-between">
                                        <span className="text-base">{skill}</span>
                                      </li>
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
                      </div>

                      {/* Experience Section */}
                      <div className="flex-1 shadow-xl border-white p-8 bg-white relative max-w-[98%] rounded-lg">
                        <div className='flex relative left-[50rem]  items-end text-blue-600 '>
                          <button>
                            Add employment
                          </button>
                        </div>

                        <h2 className="text-lg font-semibold mb-4 sticky-header">Employment</h2>

                        {(userData?.experianceList ?? []).map((exp, index) => (
                          <div key={exp.ExperienceID} className="mb-4 relative">
                            <div className="flex items-start">
                              <div className="flex-grow">
                                <p className="text-base">
                                  <span className="text-base font-bold inline-block">
                                    {exp.title || 'N/A'}
                                  </span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 inline-block ml-2 cursor-pointer text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    onClick={() => handleEditClick('experience', exp.id)}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536c0-.894.296-1.736.856-2.407l3.536-3.536a2.5 2.5 0 013.536 0z"
                                    />
                                  </svg>
                                  <br />
                                  <span className="text-base">{exp.company || 'N/A'}</span><br />
                                  <span className="text-base">{exp.startDate || 'N/A'} | {exp.endDate || 'N/A'}</span><br />
                                  <span className="text-base">{exp.location || 'N/A'}</span><br />
                                  <span className="text-base">{exp.responsibility || 'N/A'}</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* End Experience Section */}


                      {/* Education Section */}
                      <div className="flex-1  p-8 bg-white relative h-auto max-w-[98%] rounded-lg ">
                        <div className='flex relative left-[50rem]  items-end text-blue-600'>
                          <button>
                            Add education
                          </button>
                        </div>
                        <h2 className="text-lg font-semibold mb-4 sticky-header">Education</h2>
                        {userData.educationList && userData.educationList.map((edu, index) => (
                          <div key={edu.EducationID} className="mb-4 flex items-start">
                            <div className="flex-grow">
                              <p className="text-base">
                                <span className="text-base font-bold inline-block">
                                  {edu.degree}
                                </span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 inline-block ml-2 cursor-pointer text-gray-400"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  onClick={() => handleEditClick('education', edu.id)}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536c0-.894.296-1.736.856-2.407l3.536-3.536a2.5 2.5 0 013.536 0z"
                                  />
                                </svg>
                                <br />
                                <span className="text-lg">{edu.fieldOfStudy}</span><br />
                                <span className="text-lg">{edu.schoolName}</span><br />
                                <span className="text-lg">{edu.schoolLocation}</span><br />
                                <span className="text-base">{edu.graduationYear}</span>
                              </p>
                              {/* <p className="text-base">
                            <span className="text-lg font-bold">Gap Taken: </span>
                            <span className="text-base">{edu.gapTaken ? "Yes" : "No"}</span>
                          </p>
                          {edu.gapTaken && (
                            <p className="text-base">
                              <span className="text-lg font-bold">Gap Year: </span>
                              <span className="text-base">{edu.gapYear}</span>
                            </p>
                          )} */}
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* End Education Section */}


                      {/* Projects Section */}
                      <div className="flex-1 shadow-xl p-8 bg-white relative h-auto sticky-header max-w-[98%] rounded-lg ">
                        <div className='flex relative left-[50rem]  items-end text-blue-600'>
                          <button>
                            Add project
                          </button>
                        </div>
                        <h2 className="text-lg font-bold mb-4 sticky-header">Projects</h2>
                        {userData && Array.isArray(userData.projectList) && userData.projectList.length > 0 ? (
                          userData.projectList.map((project, index) => (
                            <div key={project.ProjectID} className="mb-4 flex items-start">
                              <div className="flex-grow">
                                <p className="text-base">
                                  <span className="text-base font-bold inline-block">
                                    {project.projectTitle}
                                  </span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 inline-block ml-2 cursor-pointer text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    onClick={() => handleEditClick('projects', project.id)} // Pass the index or unique identifier if needed
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536c0-.894.296-1.736.856-2.407l3.536-3.536a2.5 2.5 0 013.536 0z"
                                    />
                                  </svg><br />
                                  <span className="text-base">{project.projectRole}</span><br />
                                  <span className="text-base">
                                    {Array.isArray(project.techstack) ? project.techstack.join(', ') : 'N/A'}
                                  </span><br />
                                  <a href={project.projectLink} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                                    {project.projectLink}
                                  </a>
                                </p>
                              </div>
                            </div>
                          ))
                        ) : (
                          <p className="text-base">No projects available.</p>
                        )}
                      </div>
                      {/* End Projects Section */}


                      {/* Accomplishment section */}

                      <div className="flex-1 shadow-xl p-8 bg-white relative sticky-header max-w-[98%] rounded-lg border-white" >

                        <div className="flex flex-col gap-4">
                          <h2 className='text-lg font-semibold'>Accomplishment</h2>
                          <div
                          // className="border border-gray-300 hover:shadow-xl p-8 bg-white relative h-full"
                          // style={{ display: 'flex', flexDirection: 'column' }}
                          >
                            {/* Sections */}
                            <div className="flex-grow">
                              {/* Online Profile section */}
                              <div className="flex items-center">
                                <h2 className="text-base font-semibold mb-0">Online Profile</h2>
                                <button className="ml-auto text-blue-700 py-2 px-4 rounded">Add</button>
                              </div>
                              <p className="text-base mt-0">Add link to online professional profiles (e.g., LinkedIn)</p>
                              <hr className="border-t border-gray-200 my-4" />

                              {/* Work Sample section */}
                              <div className="flex items-center">
                                <h2 className="text-base font-semibold mb-0">Work Sample</h2>
                                <button className="ml-auto text-blue-700 py-2 px-4 rounded">Add</button>
                              </div>
                              <p className="text-base mt-0">Link relevant work samples (e.g., GitHub, Behance)</p>
                              <hr className="border-t border-gray-200 my-4" />

                              {/* White paper section */}
                              <div className="flex items-center">
                                <h2 className="text-base font-semibold mb-0">White paper / Research publication / Journal entry</h2>
                                <button className="ml-auto text-blue-700 py-2 px-4 rounded">Add</button>
                              </div>
                              <p className="text-base mt-0">Add links to your online publications</p>
                              <hr className="border-t border-gray-200 my-4" />

                              {/* Presentation section */}
                              <div className="flex items-center">
                                <h2 className="text-base font-semibold mb-0">Presentation</h2>
                                <button className="ml-auto text-blue-700 py-2 px-4 rounded">Add</button>
                              </div>
                              <p className="text-base mt-0">Add links to your online presentations (e.g., Slide-share presentation links, etc.)</p>
                              <hr className="border-t border-gray-200 my-4" />

                              {/* Patent section */}
                              <div className="flex items-center">
                                <h2 className="text-base font-semibold mb-0">Patent</h2>
                                <button className="ml-auto text-blue-700 py-2 px-4 rounded">Add</button>
                              </div>
                              <p className="text-base mt-0">Add details of patents you have filed</p>
                              <hr className="border-t border-gray-200 my-4" />
                            </div>

                            {/* Certification section */}

                            <div className="flex items-center mt-4 max-w-[98%]">
                              <h2 className="text-base font-bold mb-0">Certification</h2>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 ml-2 cursor-pointer text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                onClick={() => handleEditClick('certification', userData.educationList[0].id)} // Add the index or unique identifier if needed
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536c0-.894.296-1.736.856-2.407l3.536-3.536a2.5 2.5 0 013.536 0z"
                                />
                              </svg>
                              <button className="ml-auto text-blue-700 py-2 px-4 rounded">Add</button>
                            </div>

                            {/* Certification list */}
                            <div className="flex-grow overflow-hidden">
                              {userData && Array.isArray(userData.educationList) &&
                                userData.educationList.length > 0 &&
                                Array.isArray(userData.educationList[0].certification) &&
                                userData.educationList[0].certification.length > 0 ? (
                                <ul className="list-disc ml-5 text-sm mt-0">
                                  {userData.educationList[0].certification.map((cert, index) => (
                                    <li className="text-sm flex items-center" key={index}>
                                      {cert}

                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <p className="text-sm mt-0">No certification data available.</p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Accomplishment section */}

                      {/* Languages Section */}
                      <div className="flex-1 shadow-xl p-8 bg-white relative max-w-[98%] rounded-lg border-white">
                        <div className='flex relative left-[50rem] items-end text-blue-600'>
                          <button>
                            Add languages
                          </button>
                        </div>

                        <div className="flex items-center">
                          <h2 className="text-lg font-bold mb-4">Languages</h2>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-2 cursor-pointer text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            onClick={() => handleEditClick('languages', userData.skillList[0].id)}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536c0-.894.296-1.736.856-2.407l3.536-3.536a2.5 2.5 0 013.536 0z"
                            />
                          </svg>
                        </div>

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

                    </div>
                  </form>
                </div >
              </div >

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
