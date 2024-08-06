import React, { useState } from 'react';
import { FaArrowLeft, FaPlusCircle } from "react-icons/fa";
import { IoSearchCircleSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

function SummaryDetail() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [summary, setSummary] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Job titles and summaries
  const jobData = [
    {
      title: 'Software Engineer',
      summary: 'Dedicated Software Engineer with a strong background in developing scalable applications using modern programming languages and frameworks. Proficient in software design, debugging, and testing, with a focus on delivering high-quality code. Passionate about leveraging technology to solve complex problems and enhance user experiences.',
    },
    {
      title: 'Data Analyst',
      summary: 'Detail-oriented Data Analyst skilled in extracting insights from complex datasets using statistical analysis and data visualization tools. Experienced in transforming data into actionable business strategies to drive growth and efficiency. Adept at creating impactful reports that communicate key findings to stakeholders.',
    },
    {
      title: 'Project Manager',
      summary: 'Results-driven Project Manager with a proven track record of successfully leading cross-functional teams to deliver projects on time and within budget. Expertise in project planning, risk management, and stakeholder communication. Committed to optimizing processes and enhancing team productivity for project success.',
    },
    {
      title: 'Graphic Designer',
      summary: 'Creative Graphic Designer specializing in creating visually compelling designs across digital and print media. Skilled in Adobe Creative Suite and other design software, with a keen eye for aesthetics and detail. Passionate about bringing ideas to life through innovative design solutions that align with brand identity.',
    },
    {
      title: 'UX Designer',
      summary: 'User-focused UX Designer with expertise in crafting intuitive and engaging user interfaces. Proficient in user research, wireframing, prototyping, and usability testing. Committed to enhancing user satisfaction by creating seamless interactions and improving product usability across various platforms.',
    },
    {
      title: 'Full Stack Developer',
      summary: 'Versatile Full Stack Developer with experience in developing end-to-end web applications using both front-end and back-end technologies. Proficient in JavaScript, Python, Node.js, and React, with a strong understanding of database management. Passionate about building efficient and scalable solutions that deliver value to users.',
    },
    {
      title: 'Data Scientist',
      summary: 'Innovative Data Scientist with a strong foundation in machine learning, statistical modeling, and data analysis. Skilled in transforming complex data sets into actionable insights using Python, R, and SQL. Dedicated to solving challenging problems by leveraging data to drive informed decision-making.',
    },
    {
      title: 'Quality Assurance Engineer',
      summary: 'Detail-oriented Quality Assurance Engineer with extensive experience in developing and executing test plans to ensure software quality and reliability. Proficient in manual and automated testing methodologies, with a focus on defect prevention and process improvement. Committed to delivering high-quality products that meet user expectations.',
    },
  ];

  // Truncate a given summary for suggestion display
  const truncateSummary = (text, maxLength = 60) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  // Handle Search Input Change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter job titles and summaries based on input
    if (value.length > 0) {
      const filteredSuggestions = jobData.filter((job) =>
        job.title.toLowerCase().includes(value.toLowerCase()) ||
        job.summary.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  // Highlight matched text in search results
  const highlightSearchTerm = (text, term) => {
    const regex = new RegExp(`(${term})`, 'gi');
    return text.replace(regex, '<strong>$1</strong>');
  };

  // Handle Adding Skill to Textarea
  const addSkill = (job) => {
    const selectedSummary = job.summary;
    setSummary((prevSummary) => (prevSummary ? `${prevSummary}\n\n${selectedSummary}` : selectedSummary));
    setSuggestions([]);
    setSearchTerm(''); // Clear search term after adding skill
    setShowSuggestions(false); // Hide suggestions after selection
  };

  // Handle Back Click
  const handleBackClick = () => {
    navigate('/skill-details'); // Navigate to the Experience Details route
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
            What summary would you like to highlight?
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
                      className="flex flex-col items-start justify-between px-4 py-2 cursor-pointer hover:bg-blue-100"
                      onClick={() => addSkill(suggestion)}
                    >
                      <span
                        className="text-lg font-medium"
                        dangerouslySetInnerHTML={{ __html: highlightSearchTerm(suggestion.title, searchTerm) }}
                      />
                      <span className="text-gray-600">
                        {truncateSummary(suggestion.summary)}
                      </span>
                      <FaPlusCircle className="text-blue-600 text-xl cursor-pointer mt-1     self-end" />
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Summary Textarea Section */}
            <div className="h-64">
              <label className="block pl-2 pt-2 mb-1 font-semibold text-gray-700">
                Summary:
              </label>
              <textarea
                name="summary"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                placeholder="Write your summary here."
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

export default SummaryDetail;
