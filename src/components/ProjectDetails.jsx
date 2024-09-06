import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { addProject } from "../services/ProjectDeatilService";

function ProjectDetails() {
  const [formData, setFormData] = useState({
    description: "",
    techstack: "",
    projectLink: "",
    projectRole: "",
    projectTitle: "",
    user_Id: 5,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleQuillChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      description: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Split the techstack string into an array
    const techstackArray = formData.techstack
      .split(",")
      .map((item) => item.trim());

    // Update formData with the techstack array
    const updatedFormData = {
      ...formData,
      techstack: techstackArray,
    };

    console.log(updatedFormData);

    addProject(updatedFormData)
      .then((response) => {
        console.log("Data sent successfully:", response.data);
        if (response.data.success) {
          alert("Project Details Submitted");
          navigate("/skill-details");
        }
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/experience-details");
  };

  return (
    <div className="flex h-screen">
      <div className="fixed w-64 h-full">
        <Sidebar />
      </div>

      <div className="ml-64 w-full h-screen overflow-y-auto">
        <div className="mx-auto w-full h-full flex justify-center items-center">
          <div className="container w-[1120px] h-full py-14 pl-2 pr-16">
            <button
              onClick={handleBackClick}
              className="text-blue-600 relative flex items-center mb-2"
            >
              <FaArrowLeft className="mr-2" /> Go Back
            </button>
            <h1 className="text-4xl font-semibold leading-tight mb-3">
              Tell us about your projects
            </h1>
            <p className="mb-6 text-lg text-zinc-900">
              Start with your most recent project work.
            </p>
            <p className="text-sm font-semibold mt-6 mb-5">
              * indicates a required field
            </p>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2 sm:col-span-1">
                  <label className="block mb-1 font-semibold text-gray-700">
                    What was your project title? *
                  </label>
                  <input
                    type="text"
                    name="projectTitle"
                    placeholder="e.g. Employee Management Application"
                    value={formData.projectTitle}
                    onChange={handleChange}
                    className="mt-1 block h-fit w-full px-3 py-2 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block mb-1 font-semibold text-gray-700">
                    What was your role in project?
                  </label>
                  <input
                    type="text"
                    name="projectRole"
                    placeholder="e.g. Lead Developer."
                    value={formData.projectRole}
                    onChange={handleChange}
                    className="mt-1 block h-fit w-full px-3 py-2 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block mb-1 font-semibold text-gray-700">
                    What tech stacks are used in the project?
                  </label>
                  <input
                    type="text"
                    name="techstack"
                    placeholder="e.g. html, css, javascript, java, etc..."
                    value={formData.techstack}
                    onChange={handleChange}
                    className="mt-1 block h-fit w-full px-3 py-2 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block mb-1 font-semibold text-gray-700">
                    Project link
                  </label>
                  <input
                    type="text"
                    name="projectLink"
                    placeholder="e.g. https://github.com/xyz"
                    value={formData.projectLink}
                    onChange={handleChange}
                    className="mt-1 block h-fit w-full px-3 py-2 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block mb-2 mt-4 font-semibold text-gray-700">
                  Project description
                </label>
                <ReactQuill
                  value={formData.description}
                  onChange={handleQuillChange}
                  placeholder="Write a short description about your project..."
                  className="mt-1 block w-full bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  style={{ height: "240px", marginBottom: "0" }} // Adjusted height and margin
                />
              </div>

              <div className="mt-28 pr-5 pb-5 flex justify-end space-x-5 ">
                <button
                  type="button"
                  className="items-end  h-fit py-3 px-5  border border-blue-800 rounded-full text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="items-end h-fit px-5 py-3 text-base font-medium border border-transparent rounded-full shadow-sm text-white bg-orange-600 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save & Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
