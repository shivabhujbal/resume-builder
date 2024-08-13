import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const steps = [
    // { name: "Template Selector", path: "/" },
    { name: "Basic Details", path: "/basic-details" },
    { name: "Education", path: "/education-details" },
    { name: "Professional Experience", path: "/experience-details" },
    { name: "Project", path: "/project-details" },
    { name: "Skills", path: "/skill-details" },
    { name: "Summary", path: "/summary-details" },
    // { name: "Finalize", path: "/finalize" },
  ];

  // State to track the current step
  const [currentStep, setCurrentStep] = useState(0);

  // useNavigate hook for routing
  const navigate = useNavigate();

  const location = useLocation();

  // Function to handle click on a step
  const handleStepClick = (index, path) => {
    setCurrentStep(index);
    navigate(path); // Navigate to the path
  };

  return (
    <div className="flex flex-col h-screen w-60 p-4 bg-[#0d1b2f] text-white min-w-[250px]">
      <h1 className="pt-6 ml-6 text-3xl font-bold mb-3">zety</h1>

      {/* Steps Navigation */}
      <nav className="pl-4 flex flex-col space-y-0">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-center cursor-pointer"
            onClick={() => handleStepClick(index, step.path)} // Pass the path to handleStepClick
          >
            {/* Step Number */}
            <div className="flex flex-col items-center">
              <span
                className={`rounded-full w-7 h-7 flex items-center justify-center text-sm ${
                  location.pathname === step.path ? "bg-blue-500" : "bg-gray-500"
                }`}
              >
                {index + 1}
              </span>

              {/* Line below number */}
              {index < steps.length - 1 && (
                <div
                  className={`w-0.5 h-6 ${
                    location.pathname === step.path ? "bg-blue-500" : "bg-gray-300"
                  }`}
                />
              )}
            </div>

            {/* Step Name */}
            <span
              className={`ml-4 ${
                location.pathname === step.path ? "text-blue-500" : ""
              }`}
            >
              {step.name}
            </span>
          </div>
        ))}
      </nav>

      {/* Progress Bar */}
      <div className="pl-4 flex-grow mt-8">
        <h6 className="text-xs font-semibold text-gray-400">RESUME COMPLETENESS</h6>
        <ProgressBar progress={((steps.findIndex((s) => s.path === location.pathname) + 1) / steps.length) * 100} />
      </div>

      {/* Footer */}
       <div className="pl-4 mt-auto text-xs text-gray-300 mb-2">
         <div><a href="">Terms and Conditions</a></div>
         <div><a href="">Privacy Policy</a></div>
         <div><a href="">Accessibility</a></div>
         <div><a href="">Contact Us</a></div>
       </div>
       <div className="pl-4 text-[0.65rem] mb-2 text-gray-400">
         © 2024, Works Limited. <br /> All rights reserved.
      </div>
     </div>
   );
 };

  //ProgressBar component definition
const ProgressBar = ({ progress }) => {
  return (
    <div className="relative pt-1">
      <div className="flex mb-2 items-center">
        {/* Progress Bar */}
        <div className="w-full bg-gray-50 h-2 rounded overflow-hidden">
          <div
            style={{ width: `${progress}%` }}
            className="h-full bg-[#2aae9e]"
          ></div>
        </div>

        {/* Progress Percentage */}
        <span className=" text-xs font-semibold py-1 px-2 uppercase rounded-full text-gray-50 ">
          {progress.toFixed(0)}%
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
