import React, { useState } from "react";
import { FaArrowLeft, FaPlusCircle } from "react-icons/fa";
import { IoSearchCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { addSkills } from "../services/skillDetailService"; // Import the service function

function SkillDetail() {
  const navigate = useNavigate();
  const [primarySearchTerm, setPrimarySearchTerm] = useState("");
  const [secondarySearchTerm, setSecondarySearchTerm] = useState("");
  const [primarySkills, setPrimarySkills] = useState("");
  const [secondarySkills, setSecondarySkills] = useState("");
  const [primarySuggestions, setPrimarySuggestions] = useState([]);
  const [secondarySuggestions, setSecondarySuggestions] = useState([]);
  const [showPrimarySuggestions, setShowPrimarySuggestions] = useState(false);
  const [showSecondarySuggestions, setShowSecondarySuggestions] =
    useState(false);
  const [languages, setLanguages] = useState([]);
  const [languageInput, setLanguageInput] = useState("");

  const userId = 5; // You can dynamically set this if needed

  const jobTitles = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Software Engineer",
    "Data Analyst",
    "Project Manager",
    "Graphic Designer",
    "UX Designer",
    "Data Scientist",
    "Quality Assurance Engineer",
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "Django",
    "Ruby on Rails",
    "Spring Boot",
    "ASP.NET",
    "PHP",
    "Java",
    "C#",
  ];

  const handlePrimarySearchChange = (e) => {
    const value = e.target.value;
    setPrimarySearchTerm(value);

    if (value.length > 0) {
      const filteredSuggestions = jobTitles.filter((title) =>
        title.toLowerCase().includes(value.toLowerCase())
      );
      setPrimarySuggestions(filteredSuggestions);
      setShowPrimarySuggestions(true);
    } else {
      setPrimarySuggestions([]);
      setShowPrimarySuggestions(false);
    }
  };

  const handleSecondarySearchChange = (e) => {
    const value = e.target.value;
    setSecondarySearchTerm(value);

    if (value.length > 0) {
      const filteredSuggestions = backendSkills.filter((skill) =>
        skill.toLowerCase().includes(value.toLowerCase())
      );
      setSecondarySuggestions(filteredSuggestions);
      setShowSecondarySuggestions(true);
    } else {
      setSecondarySuggestions([]);
      setShowSecondarySuggestions(false);
    }
  };

  const addPrimarySkill = (skill) => {
    setPrimarySkills((prevSkills) =>
      prevSkills ? `${prevSkills}, ${skill}` : skill
    );
    setPrimarySuggestions([]);
    setPrimarySearchTerm("");
    setShowPrimarySuggestions(false);
  };

  const addSecondarySkill = (skill) => {
    setSecondarySkills((prevSkills) =>
      prevSkills ? `${prevSkills}, ${skill}` : skill
    );
    setSecondarySuggestions([]);
    setSecondarySearchTerm("");
    setShowSecondarySuggestions(false);
  };

  const handleBackClick = () => {
    navigate("/project-details");
  };

  const handleNextClick = () => {
    navigate("/summary-details");
  };

  const handlePrimarySearchClick = () => {
    setShowPrimarySuggestions((prevShow) => !prevShow);
    if (!showPrimarySuggestions) {
      const filteredSuggestions = jobTitles.filter((title) =>
        title.toLowerCase().includes(primarySearchTerm.toLowerCase())
      );
      setPrimarySuggestions(filteredSuggestions);
    }
  };

  const handleSecondarySearchClick = () => {
    setShowSecondarySuggestions((prevShow) => !prevShow);
    if (!showSecondarySuggestions) {
      const filteredSuggestions = backendSkills.filter((skill) =>
        skill.toLowerCase().includes(secondarySearchTerm.toLowerCase())
      );
      setSecondarySuggestions(filteredSuggestions);
    }
  };

  const handleSaveClick = async (skillType) => {
    try {
      const skills = skillType === "PRIMARY" ? primarySkills : secondarySkills;
      if (skills) {
        await addSkills(skills, skillType, userId);
        alert(`${skillType} skills saved successfully!`);
      } else {
        alert(`Please add ${skillType.toLowerCase()} skills before saving.`);
      }
    } catch (error) {
      alert(
        `Failed to save ${skillType.toLowerCase()} skills: ${error.message}`
      );
    }
  };

  const handleAddLanguage = () => {
    if (languageInput.trim() && !languages.includes(languageInput.trim())) {
      setLanguages([...languages, languageInput.trim()]);
      setLanguageInput("");
    }
  };

  const handleRemoveLanguage = (language) => {
    setLanguages(languages.filter((lang) => lang !== language));
  };

  return (
    <div className="flex h-screen">
      <div className="flex-shrink-0 w-64 fixed h-full">
        <Sidebar />
      </div>

      <div className="ml-64 w-full h-full overflow-y-auto">
        <div className="container w-[1120px] h-screen ml-[4.5rem] py-14 pl-4 mr-18">
          <button
            onClick={handleBackClick}
            className="text-blue-600 relative flex items-center mb-1"
          >
            <FaArrowLeft className="mr-2" /> Go Back
          </button>
          <h1 className="text-4xl font-semibold leading-tight mb-3">
            What skills would you like to highlight?
          </h1>
          <p className="mb-6 text-lg text-zinc-900">
            Choose from our primary & secondary examples below or write your
            own.
          </p>
          <div className="grid grid-cols-2 gap-8">
            {/* Primary Skills Section */}
            <div>
              <div className="w-[33rem] h-24 bg-sky-50 mb-6 drop-shadow-xl">
                <label className="block mb-1 pl-4 pt-2 pb-1 font-semibold text-gray-700">
                  Search For Primary Skills
                </label>
                <div className="flex relative">
                  <input
                    type="text"
                    name="searchbar"
                    value={primarySearchTerm}
                    onChange={handlePrimarySearchChange}
                    placeholder="Search by Job Title"
                    className="relative mt-1 h-fit block w-[28rem] px-3 py-2 ml-4 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <IoSearchCircleSharp
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-3 w-12 h-12 text-blue-600 cursor-pointer"
                    onClick={handlePrimarySearchClick}
                  />
                </div>

                {showPrimarySuggestions && primarySuggestions.length > 0 && (
                  <ul className="absolute z-10 w-[28rem] bg-white border border-gray-300 rounded-md shadow-md ml-4 h-56 overflow-y-auto">
                    {primarySuggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-blue-100"
                        onClick={() => addPrimarySkill(suggestion)}
                      >
                        {suggestion}
                        <FaPlusCircle className="text-blue-600 cursor-pointer" />
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="h-64">
                <label className="block pl-2 pt-2 mb-1 font-semibold text-gray-700">
                  Primary Skills:
                </label>
                <textarea
                  name="primarySkill"
                  value={primarySkills}
                  style={{ resize: "none" }}
                  onChange={(e) => setPrimarySkills(e.target.value)}
                  placeholder="Add your frontend skills here"
                  className="ml-2 mt-1 block w-full h-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm hover:drop-shadow-xl"
                  rows="4"
                />
              </div>

              <div className="mt-16">
                <button
                  onClick={() => handleSaveClick("PRIMARY")}
                  className="ml-[27rem] py-2 px-6 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Save
                </button>
              </div>
            </div>

            {/* Secondary Skills Section */}
            <div>
              <div className="w-[33rem] h-24 bg-sky-50 mb-6 drop-shadow-xl">
                <label className="block mb-1 pl-4 pt-2 pb-1 font-semibold text-gray-700">
                  Search For Secondary Skills
                </label>
                <div className="flex relative">
                  <input
                    type="text"
                    name="searchbar"
                    value={secondarySearchTerm}
                    onChange={handleSecondarySearchChange}
                    placeholder="Search by Backend Skills"
                    className="relative mt-1 h-fit block w-[28rem] px-3 py-2 ml-4 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <IoSearchCircleSharp
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-3 w-12 h-12 text-green-600 cursor-pointer"
                    onClick={handleSecondarySearchClick}
                  />
                </div>

                {showSecondarySuggestions &&
                  secondarySuggestions.length > 0 && (
                    <ul className="absolute z-10 w-[28rem] bg-white border border-gray-300 rounded-md shadow-md ml-4 h-56 overflow-y-auto">
                      {secondarySuggestions.map((suggestion, index) => (
                        <li
                          key={index}
                          className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-blue-100"
                          onClick={() => addSecondarySkill(suggestion)}
                        >
                          {suggestion}
                          <FaPlusCircle className="text-blue-600 cursor-pointer" />
                        </li>
                      ))}
                    </ul>
                  )}
              </div>

              <div className="h-64">
                <label className="block pl-2 pt-2 mb-1 font-semibold text-gray-700">
                  Secondary Skills:
                </label>
                <textarea
                  name="secondarySkill"
                  value={secondarySkills}
                  style={{ resize: "none" }}
                  onChange={(e) => setSecondarySkills(e.target.value)}
                  placeholder="Add your backend skills here"
                  className="ml-2 mt-1 block w-full h-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm hover:drop-shadow-xl"
                  rows="4"
                />
              </div>

              <div className="mt-16">
                <button
                  onClick={() => handleSaveClick("SECONDARY")}
                  className="ml-[27rem] py-2 px-6 bg-green-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Save
                </button>
              </div>
            </div>
          </div>

          {/* Language Section */}
          <div className="grid grid-cols-2 gap-8 mt-8">
            <div className="col-span-2">
              <label className="block mb-1 pl-4 font-semibold text-gray-700">
                Add Languages:
              </label>
              <div className="flex">
                <input
                  type="text"
                  value={languageInput}
                  onChange={(e) => setLanguageInput(e.target.value)}
                  placeholder="Enter a language"
                  className="w-full px-3 py-2 h-fit ml-4 bg-white border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <button
                  onClick={handleAddLanguage}
                  className="ml-2 py-2 px-4 h-fit bg-blue-600 text-white  hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap mt-4">
                {languages.map((language, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-gray-200 text-gray-800 px-4 py-2 rounded-full m-2"
                  >
                    {language}
                    <button
                      onClick={() => handleRemoveLanguage(language)}
                      className="ml-2 text-red-600 hover:text-red-800"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-between pt-6 pb-16">
            {/* Left-aligned button */}
            <div></div>

            {/* Right-aligned buttons */}
            <div className="flex gap-4">
              <button
                type="button"
                className="items-end h-fit py-3 px-5 border border-blue-800 rounded-full text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Back
              </button>

              <button
                type="button"
                onClick={handleNextClick} // Use navigate handler for routing
                className="py-3 px-5 text-base font-medium border border-transparent rounded-full shadow-sm text-blue-700 bg-yellow-400 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save & Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillDetail;
