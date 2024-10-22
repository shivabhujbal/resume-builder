import React, { useState } from "react";
import { FaArrowLeft, FaPlusCircle } from "react-icons/fa";
import { IoSearchCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { addSkills } from "../services/skillDetailService"; // Import the service function

function SkillDetail() {
  const navigate = useNavigate();
  const [primarySearchTerm, setPrimarySearchTerm] = useState("");
  const [primarySuggestions, setPrimarySuggestions] = useState([]);
  const [showPrimarySuggestions, setShowPrimarySuggestions] = useState(false);
  const [languageInput, setLanguageInput] = useState("");

  const [languageSuggestions, setLanguageSuggestions] = useState([]);
  const [showLanguageSuggestions, setShowLanguageSuggestions] = useState(false);

  const languageList = [
    // International Languages
    "English", "Spanish", "French", "German", "Chinese", "Japanese", "Korean", "Italian", "Portuguese", "Russian",
    "Arabic", "Turkish", "Dutch", "Swedish", "Danish", "Norwegian", "Finnish", "Polish", "Greek", "Hebrew",
    "Czech", "Hungarian", "Thai", "Vietnamese", "Indonesian", "Malay", "Filipino", "Swahili", "Persian", "Ukrainian",
    "Romanian", "Bulgarian", "Serbian", "Croatian", "Slovak", "Lithuanian", "Latvian", "Estonian", "Catalan", "Basque",
    "Maltese", "Galician", "Belarusian", "Armenian", "Georgian", "Azerbaijani", "Kazakh", "Uzbek", "Turkmen", "Kyrgyz",
  
    // Indian Regional Languages
    "Hindi", "Bengali", "Telugu", "Marathi", "Tamil", "Urdu", "Gujarati", "Malayalam", "Kannada", "Odia",
    "Punjabi", "Assamese", "Maithili", "Santali", "Nepali", "Konkani", "Bodo", "Manipuri", "Sikh", "Sanskrit",
    "Dogri", "Rajasthani", "Sourashtra", "Tulu", "Kashmiri", "Sindhi", "Haryanvi", "Khandesi", "Himachali", "Chhattisgarhi",
    "Kumaoni", "Garhwali", "Warli", "Mewari", "Bagheli", "Gondi", "Kurukh", "Jaintia", "Mizo", "Khasi"
  ];
  
  const handleLanguageInputChange = (e) => {
    const value = e.target.value;
    setLanguageInput(value);
  
    if (value.length > 1) {
      const filteredSuggestions = languageList.filter((language) =>
        language.toLowerCase().includes(value.toLowerCase())
      );
      setLanguageSuggestions(filteredSuggestions);
      setShowLanguageSuggestions(true);
    } else {
      setLanguageSuggestions([]);
      setShowLanguageSuggestions(false);
    }
  };

  const handleLanguageSuggestionClick = (language) => {
    if (language.trim()) {
      const updatedLanguages = formData.languages
        ? [...new Set([...formData.languages.split(", ").map(lang => lang.trim()), language.trim()])]
        : [language.trim()];
      
      setFormData((prevFormData) => ({
        ...prevFormData,
        languages: updatedLanguages.join(", ")
      }));
      setLanguageInput("");
      setLanguageSuggestions([]);
      setShowLanguageSuggestions(false);
    }
  };


  // ====================================


  const [formData, setFormData] = useState({
    skills: [],
    skillType: "",
    userId: 1,
    languages: ""
  });

  const skills = [
    // IT & Computer Science (keeping some for balance)
    "Frontend Developer", "Backend Developer", "Full Stack Developer", "Software Engineer", "Data Analyst", 
    "Project Manager", "Graphic Designer", "UX Designer", "Data Scientist", "Quality Assurance Engineer",
    "Node.js", "Express.js", "Django", "Ruby on Rails", "Spring Boot", "ASP.NET", "PHP", "Java", "C#", 
    "React", "Angular", "Vue.js", "Next.js", "Svelte", "Laravel", "Flask", "Go", "Kotlin", "Swift", 
    "TypeScript", "JavaScript", "Python", "Rust", "Elixir", "Scala", "HTML", "CSS", "SASS", "Tailwind CSS", 
    "SQL", "PostgreSQL", "MySQL", "MongoDB", "GraphQL", "Docker", "Kubernetes", "AWS", "Azure", "GCP", 
    "Linux", "Terraform", "CI/CD", "Redis", "Jenkins", "Git", "Figma", "Adobe XD", "Sketch", "Blockchain",
    
    // Healthcare
    "Registered Nurse", "Pharmacist", "Occupational Therapist", "Physical Therapist", "Radiologist", 
    "Medical Laboratory Scientist", "Dentist", "Surgeon", "Paramedic", "Anesthesiologist", "Chiropractor", 
    "Healthcare Administrator", "Dietitian", "Psychiatrist", "Veterinarian", "Medical Coder", "Phlebotomist", 
    "Speech Pathologist", "Sonographer", "Optometrist", "Respiratory Therapist", "Genetic Counselor", 
    "Public Health Educator", "Cardiologist", "Orthopedic Surgeon", "Pediatrician", "Neurologist", 
    "Geriatric Care Manager", "Radiologic Technologist", "Oncologist", "Dermatologist",
  
    // Engineering (Non-IT)
    "Mechanical Engineer", "Civil Engineer", "Electrical Engineer", "Chemical Engineer", "Aerospace Engineer", 
    "Environmental Engineer", "Industrial Engineer", "Biomedical Engineer", "Nuclear Engineer", 
    "Materials Scientist", "Marine Engineer", "Automotive Engineer", "Structural Engineer", "Geotechnical Engineer", 
    "Petroleum Engineer", "Mining Engineer", "Surveyor", "Hydraulic Engineer", "Energy Engineer", 
    "HVAC Engineer", "Transportation Engineer", "Robotics Engineer", "Acoustical Engineer", "Piping Engineer", 
    "Wastewater Engineer", "Agricultural Engineer", "Instrumentation Engineer", "Control Systems Engineer", 
    "Plumbing Engineer", "Railway Engineer", "Telecommunications Engineer",
  
    // Finance & Business
    "Accountant", "Financial Analyst", "Investment Banker", "Stockbroker", "Actuary", "Tax Advisor", 
    "Auditor", "Insurance Underwriter", "Risk Manager", "Loan Officer", "Budget Analyst", "Treasurer", 
    "Mortgage Broker", "Venture Capitalist", "Portfolio Manager", "Claims Adjuster", "Quantitative Analyst", 
    "Financial Planner", "Compliance Officer", "Bank Manager", "Wealth Manager", "Cost Estimator", 
    "Real Estate Appraiser", "Payroll Specialist", "Corporate Treasurer", "Management Consultant", 
    "Business Development Manager", "Financial Controller", "Chief Financial Officer", "Marketing Analyst",
  
    // Education
    "High School Teacher", "Elementary School Teacher", "College Professor", "School Counselor", 
    "Educational Administrator", "Special Education Teacher", "Instructional Coordinator", "Librarian", 
    "Curriculum Developer", "Academic Advisor", "ESL Teacher", "Kindergarten Teacher", "Tutoring Specialist", 
    "Reading Specialist", "School Psychologist", "STEM Educator", "Music Teacher", "Physical Education Teacher", 
    "Art Teacher", "Language Instructor", "Vocational Teacher", "Educational Technologist", "Substitute Teacher", 
    "Teacher's Aide", "School Principal", "Assistant Principal", "Education Policy Analyst", "Preschool Teacher", 
    "Career Counselor", "Instructional Designer", "Training Specialist",
  
    // Manufacturing & Skilled Trades
    "Welding Technician", "CNC Operator", "Machinist", "Electrician", "Plumber", "Carpenter", 
    "Automotive Mechanic", "HVAC Technician", "Millwright", "Tool and Die Maker", "Sheet Metal Worker", 
    "Boilermaker", "Pipefitter", "Fabricator", "Industrial Painter", "Forklift Operator", "Line Worker", 
    "Maintenance Technician", "Assembly Line Worker", "Construction Laborer", "Heavy Equipment Operator", 
    "Production Supervisor", "Quality Control Inspector", "Robotics Technician", "Manufacturing Engineer", 
    "Industrial Mechanic", "Lathe Operator", "Metalworking Specialist", "Foundry Worker", "Assembler", 
    "Power Plant Operator",
  
    // Agriculture & Environmental Science
    "Agricultural Scientist", "Soil Scientist", "Hydrologist", "Forester", "Fishery Manager", 
    "Wildlife Biologist", "Environmental Scientist", "Ecologist", "Conservation Officer", 
    "Pest Control Specialist", "Agronomist", "Farm Manager", "Horticulturist", "Viticulturist", 
    "Agricultural Equipment Operator", "Sustainability Consultant", "Ranger", "Greenhouse Manager", 
    "Landscaper", "Irrigation Specialist", "Organic Farmer", "Beekeeper", "Agricultural Economist", 
    "Environmental Health Officer", "Livestock Manager", "Animal Nutritionist", "Soil Conservationist", 
    "Agricultural Engineer", "Organic Certification Specialist", "Composting Specialist", "Aquaculture Technician",
  
    // Arts & Entertainment
    "Actor", "Musician", "Painter", "Sculptor", "Photographer", "Cinematographer", 
    "Director", "Film Editor", "Writer", "Playwright", "Dancer", "Choreographer", 
    "Music Producer", "Sound Engineer", "Video Game Designer", "Graphic Novelist", "Animator", 
    "Art Critic", "Theater Technician", "Voice Actor", "Fashion Designer", "Set Designer", 
    "Costume Designer", "Makeup Artist", "Tattoo Artist", "Museum Curator", "Art Teacher", 
    "Art Dealer", "Gallery Manager", "Publicist", "Literary Agent",
  
    // Soft Skills
    "Communication", "Problem-Solving", "Critical Thinking", "Leadership", "Teamwork", "Adaptability", 
    "Time Management", "Creativity", "Emotional Intelligence", "Conflict Resolution", "Collaboration", 
    "Decision Making", "Flexibility", "Empathy", "Attention to Detail", "Negotiation", "Public Speaking", 
    "Stress Management", "Interpersonal Skills", "Self-Motivation", "Work Ethic", "Patience", 
    "Listening", "Delegation", "Confidence", "Networking", "Persuasion", "Customer Service", 
    "Goal-Oriented", "Organizational Skills"
  ];
  

 

  const handlePrimarySearchChange = (e) => {
    const value = e.target.value;
    setPrimarySearchTerm(value);

    if (value.length > 1) {
      const filteredSuggestions = skills.filter((title) =>
        title.toLowerCase().includes(value.toLowerCase())
      );
      setPrimarySuggestions(filteredSuggestions);
      setShowPrimarySuggestions(true);
    } else {
      setPrimarySuggestions([]);
      setShowPrimarySuggestions(false);
    }
  };

  const addPrimarySkill = (skill) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      skills: [...prevFormData.skills, skill],
      skillType: "PRIMARY"
    }));
    setPrimarySuggestions([]);
    setPrimarySearchTerm("");
    setShowPrimarySuggestions(false);
  };

  const handleBackClick = () => {
    navigate("/project-details");
  };



  const handlePrimarySearchClick = () => {
    setShowPrimarySuggestions((prevShow) => !prevShow);
    if (!showPrimarySuggestions) {
      const filteredSuggestions = skills.filter((title) =>
        title.toLowerCase().includes(primarySearchTerm.toLowerCase())
      );
      setPrimarySuggestions(filteredSuggestions);
    }
  };

  const handleSaveClick = async() => {
    try {
      // Convert languages array to comma-separated string
      const cleanedLanguages = formData.languages
        .split(",")
        .map(lang => lang.trim())
        .filter(lang => lang.length > 0)
        .join(",");
      console.log("Languges", cleanedLanguages);
      
      setFormData((prevFormData) => ({
        ...prevFormData,
        languages: cleanedLanguages
      }));
      console.log("Saving Form Data:", formData); // Print formData to console
      const res = await addSkills(formData);
      console.log(res);
      setFormData({
             skills: [],
             skillType: "",
             userId: 1,
             languages: ""
      })
      alert("skills saved")
      navigate("/summary-details");
      
    } catch (error) {
      alert(`Failed to save skills: ${error.message}`);
    }
  };

  const handleAddLanguage = () => {
    if (languageInput.trim()) {
      const updatedLanguages = formData.languages
        ? [...new Set([...formData.languages.split(", ").map(lang => lang.trim()), languageInput.trim()])]
        : [languageInput.trim()];
      
      setFormData((prevFormData) => ({
        ...prevFormData,
        languages: updatedLanguages.join(", ")
      }));
      setLanguageInput("");
    }
  };

  const handleRemoveLanguage = (language) => {
    const updatedLanguages = formData.languages
      .split(", ")
      .filter((lang) => lang !== language);
    setFormData((prevFormData) => ({
      ...prevFormData,
      languages: updatedLanguages.join(", ")
    }));
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
            Choose from our primary & secondary examples below or write your own.
          </p>
          <div className="grid grid-cols-2 gap-5">
            {/* Primary Skills Section */}
            <div>
              <div className=" h-24 bg-sky-50 mb-6 drop-shadow-xl">
                <label className="block mb-1 pl-4 pt-2 pb-1 font-semibold text-gray-700">
                  Search For Skills
                </label>
                <div className="flex relative">
                  <input
                    type="text"
                    name="searchbar"
                    value={primarySearchTerm}
                    onChange={handlePrimarySearchChange}
                    placeholder="Search by Skills"
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
  <label className="block pl-2 pt-2 mb-1 font-bold text-gray-700">
    Skills:
  </label>
  <textarea
    name="primarySkill"
    value={formData.skills.join(', ')}
    style={{ resize: "none", border: "none" }} // Remove border
    onChange={(e) => setFormData({ ...formData, skills: e.target.value.split(',').map(skill => skill.trim()) })}
    placeholder="Add your skills here"
    className="ml-2 mt-1 block w-full h-[7rem] px-3 py-2 bg-gray-100 border-gray-100 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg "
    rows="4"
  />
</div>
            </div>

            {/* Languages Section */}
            <div>
              <label className="block mb-1 pl-4 font-semibold text-gray-700">
                Add Languages:
              </label>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Enter a language"
                  value={languageInput}
                  onChange={handleLanguageInputChange}
                  className="w-full px-3 py-2 h-fit ml-4 bg-white border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <button
                  onClick={handleAddLanguage}
                  className="ml-2 py-2 px-4 h-fit bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Add
                </button>
              </div>
              {showLanguageSuggestions && languageSuggestions.length > 0 && (
      <ul className=" z-10 w-full mt-1">
      {languageSuggestions.map((suggestion, index) => (
        <li
        key={index}
        className="px-4 py-2 border  rounded-sm cursor-pointer w-full bg-gray-100 text-gray-800 border-gray-300  hover:bg-blue-400"
        onClick={() => handleLanguageSuggestionClick(suggestion)}
      >
        {suggestion}
      </li>
      
      ))}
    </ul>
    
    )}

              <div className="flex flex-wrap mt-4">
                {formData.languages.split(", ").map((language, index) => (
                  language.trim() && (
                    <div
                      key={index}
                      className="flex items-center bg-gray-200 text-gray-800 px-4 py-2 rounded-full m-2"
                    >
                      {language}
                      <button
                        onClick={() => handleRemoveLanguage(language)}
                        className="ml-2 text-red-600 hover:text-red-800"
                      >
                        x
                      </button>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
          <div className=" pr-5 pb-5 flex justify-end space-x-5 ">
                <button
                onClick={handleBackClick}
                  type="button"
                  className="items-end h-fit py-3 px-5  border border-blue-800 rounded-full text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Back
                </button>
                <button
                  type="submit"
                  onClick={handleSaveClick}
                  className="items-end h-fit px-5 py-3 text-base font-medium border border-transparent rounded-full shadow-sm text-white bg-orange-600 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save & Next
                </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillDetail;
