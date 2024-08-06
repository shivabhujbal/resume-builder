import React, { useState } from 'react';
import { FaArrowLeft, FaPlusCircle } from "react-icons/fa";
import { IoSearchCircleSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

function SkillDetail() {
  const navigate = useNavigate();
  const [primarySearchTerm, setPrimarySearchTerm] = useState('');
  const [secondarySearchTerm, setSecondarySearchTerm] = useState('');
  const [primarySkills, setPrimarySkills] = useState('');
  const [secondarySkills, setSecondarySkills] = useState('');
  const [primarySuggestions, setPrimarySuggestions] = useState([]);
  const [secondarySuggestions, setSecondarySuggestions] = useState([]);
  const [showPrimarySuggestions, setShowPrimarySuggestions] = useState(false);
  const [showSecondarySuggestions, setShowSecondarySuggestions] = useState(false);

  // Example data for job titles
  const jobTitles = [
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer',
    'Software Engineer',
    'Data Analyst',
    'Project Manager',
    'Graphic Designer',
    'UX Designer',
    'Data Scientist',
    'Quality Assurance Engineer',
    // Add more job titles as needed
  ];

  const backendSkills = [
    'Node.js',
    'Express.js',
    'Django',
    'Ruby on Rails',
    'Spring Boot',
    'ASP.NET',
    'PHP',
    'Java',
    'C#',
    // Add more backend skills as needed
  ];

  // Handle Primary Search Input Change
  const handlePrimarySearchChange = (e) => {
    const value = e.target.value;
    setPrimarySearchTerm(value);

    // Filter job titles based on input
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

  // Handle Secondary Search Input Change
  const handleSecondarySearchChange = (e) => {
    const value = e.target.value;
    setSecondarySearchTerm(value);

    // Filter backend skills based on input
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

  // Handle Adding Primary Skill to Textarea
  const addPrimarySkill = (skill) => {
    setPrimarySkills((prevSkills) => (prevSkills ? `${prevSkills}, ${skill}` : skill));
    setPrimarySuggestions([]);
    setPrimarySearchTerm(''); // Clear search term after adding skill
    setShowPrimarySuggestions(false); // Hide suggestions after selection
  };

  // Handle Adding Secondary Skill to Textarea
  const addSecondarySkill = (skill) => {
    setSecondarySkills((prevSkills) => (prevSkills ? `${prevSkills}, ${skill}` : skill));
    setSecondarySuggestions([]);
    setSecondarySearchTerm(''); // Clear search term after adding skill
    setShowSecondarySuggestions(false); // Hide suggestions after selection
  };

  // Handle Back Click
  const handleBackClick = () => {
    navigate('/experience-details'); // Navigate to the Experience Details route
  };

  // Handle Next Click
  const handleNextClick = () => {
    navigate('/summary-details'); // Navigate to the Summary Details route
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar Component */}
      <div className="flex-shrink-0 w-64 fixed h-full">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="ml-64 w-full h-full overflow-y-auto">
        <div className="container w-[1120px] h-screen ml-[4.5rem] py-14 pl-4 mr-18">
          <button onClick={handleBackClick} className="text-blue-600 relative flex items-center mb-1">
            <FaArrowLeft className="mr-2" /> Go Back
          </button>
          <h1 className="text-4xl font-semibold leading-tight mb-3">
            What skills would you like to highlight?
          </h1>
          <p className="mb-6 text-lg text-zinc-900">
            Choose from our primary & secondary examples below or write your own.
          </p>
          <div className="grid grid-cols-2 gap-8">
            {/* Primary Skills Section */}
            <div>
              {/* Primary Search Bar Section */}
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
                    className="relative mt-1 block w-[28rem] px-3 py-2 ml-4 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <IoSearchCircleSharp className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-3 w-12 h-12 text-blue-600 cursor-pointer" />
                </div>

                {/* Dropdown Suggestions */}
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

              {/* Primary Skills Textarea Section */}
              <div className="h-64">
                <label className="block pl-2 pt-2 mb-1 font-semibold text-gray-700">
                  Primary Skills:
                </label>
                <textarea
                  name="primarySkill"
                  value={primarySkills}
                  onChange={(e) => setPrimarySkills(e.target.value)}
                  placeholder="Add your frontend skills here"
                  className="ml-2 mt-1 block w-full h-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm hover:drop-shadow-xl"
                  rows="4"
                />
              </div>
            </div>

            {/* Secondary Skills Section */}
            <div>
              {/* Secondary Search Bar Section */}
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
                    placeholder="Search by Skill"
                    className="relative mt-1 block w-[28rem] px-3 py-2 ml-4 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <IoSearchCircleSharp className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-3 w-12 h-12 text-green-600 cursor-pointer" />
                </div>

                {/* Dropdown Suggestions */}
                {showSecondarySuggestions && secondarySuggestions.length > 0 && (
                  <ul className="absolute z-10 w-[28rem] bg-white border border-gray-300 rounded-md shadow-md ml-4 h-56 overflow-y-auto">
                    {secondarySuggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-green-100"
                        onClick={() => addSecondarySkill(suggestion)}
                      >
                        {suggestion}
                        <FaPlusCircle className="text-green-600 cursor-pointer" />
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Secondary Skills Textarea Section */}
              <div className="h-64">
                <label className="block pl-2 pt-2 mb-1 font-semibold text-gray-700">
                  Secondary Skills:
                </label>
                <textarea
                  name="secondarySkill"
                  value={secondarySkills}
                  onChange={(e) => setSecondarySkills(e.target.value)}
                  placeholder="Add your backend skills here"
                  className="ml-2 mt-1 block w-full h-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm hover:drop-shadow-xl"
                  rows="4"
                />
              </div>
            </div>
          </div>

          {/* Buttons Section */}
          <div className="mt-28 pr-5 pb-5 flex justify-end space-x-5">
            <button
              type="button"
              className="items-end w-32 py-3 px-5 border border-blue-800 rounded-full text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Preview
            </button>
            <button
              type="button"
              onClick={handleNextClick}
              className="items-end px-5 py-3 text-base font-medium border border-transparent rounded-full shadow-sm text-blue-700 bg-yellow-400 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillDetail;
