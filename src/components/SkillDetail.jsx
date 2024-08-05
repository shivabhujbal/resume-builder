import React, { useState } from 'react';
import { FaArrowLeft, FaPlusCircle } from "react-icons/fa";
import { IoSearchCircleSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

function SkillDetail() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [skills, setSkills] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Example data for job titles
  const jobTitles = [
    'Software Engineer',
    'Data Analyst',
    'Project Manager',
    'Graphic Designer',
    'UX Designer',
    'Full Stack Developer',
    'Data Scientist',
    'Quality Assurance Engineer',
    // Add more job titles as needed
  ];

  // Handle Search Input Change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter job titles based on input
    if (value.length > 0) {
      const filteredSuggestions = jobTitles.filter((title) =>
        title.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  // Handle Adding Skill to Textarea
  const addSkill = (skill) => {
    setSkills((prevSkills) => (prevSkills ? `${prevSkills}, ${skill}` : skill));
    setSuggestions([]);
    setSearchTerm(''); // Clear search term after adding skill
    setShowSuggestions(false); // Hide suggestions after selection
  };

  // Handle Next Click
  const handleBackClick = () => {
    navigate('/experience-details'); // Navigate to the Experience Details route
  };
  const handleNextClick = () => {
    navigate('/summary-details'); // Navigate to the Experience Details route
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar Component */}
      <div className="flex-shrink-0 w-64">
        <Sidebar />
      </div>

    <div className="mx-auto w-full h-screen flex justify-center items-center">
      <div className="container w-[1120px] h-screen ml-[4.5rem] py-14 pl-4 mr-20">
        <button onClick={handleBackClick} className="text-blue-600 relative flex items-center mb-1">
          <FaArrowLeft className="mr-2" /> Go Back
        </button>
        <h1 className="text-4xl font-semibold leading-tight mb-3">
          What skills would you like to highlight?
        </h1>
        <p className="mb-6 text-lg text-zinc-900">
          Choose from our pre-written examples below or write your own.
        </p>
        <div className="grid grid-cols-2">
          {/* Search Bar Section */}
          <div className="w-[33rem] h-24 bg-sky-50 mb-6 drop-shadow-xl">
            <label className="block mb-1 pl-4 pt-2 pb-1 font-semibold text-gray-700">
              Search By Job Title For Pre-Written Examples
            </label>
            <div className="flex relative">
              <input
                type="text"
                name="searchbar"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search by Job Title"
                className="relative mt-1 block w-[28rem] px-3 py-2 ml-4 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <IoSearchCircleSharp className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-3 w-12 h-12 text-blue-600 cursor-pointer" />
            </div>

            {/* Dropdown Suggestions */}
            {showSuggestions && suggestions.length > 0 && (
              <ul className="absolute z-10 w-[28rem] bg-white border border-gray-300 rounded-md shadow-md ml-4 h-56 overflow-y-auto">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-blue-100"
                    onClick={() => addSkill(suggestion)}
                  >
                    {suggestion}
                    <FaPlusCircle className="text-blue-600 cursor-pointer" />
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Skills Textarea Section */}
          <div className="h-64">
            <label className="block pl-2 pt-2 mb-1 font-semibold text-gray-700">
              Skills:
            </label>
            <textarea
              name="skill"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="Add your skills here"
              className="ml-2 mt-1 block w-full h-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              rows="4"
            />
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
