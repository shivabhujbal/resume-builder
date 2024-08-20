import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { addExperience } from "../services/ExperienceService";

function ExperienceDetails() {
  const [formData, setFormData] = useState({
    userId: 1,
    title: "",
    company: "",
    location: "",
    startDate: "",
    endDate: "",
    responsibility: [],
    currentlyWorking: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.title) newErrors.title = "Title is required.";
    if (formData.title.length < 3)
      newErrors.title = "Title must be at least 3 characters long.";

    if (!formData.company) newErrors.company = "Company name is required.";
    if (formData.company.length < 3)
      newErrors.company = "Company name must be at least 3 characters long.";

    if (!formData.location) newErrors.location = "Location is required.";
    if (!/^[a-zA-Z\s]+$/.test(formData.location))
      newErrors.location = "Location must only contain letters and spaces.";
    if (formData.location.length < 3)
      newErrors.location = "Location must be at least 3 characters long.";

    if (!formData.startDate) newErrors.startDate = "Start Date is required.";
    if (!formData.currentlyWorking && !formData.endDate) {
      newErrors.endDate = "End Date is required unless currently working.";
    }

    if (formData.responsibility.length === 0)
      newErrors.responsibility = "At least one responsibility is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      currentlyWorking: checked,
      endDate: checked ? "" : prevData.endDate,
    }));
  };

  const [currentResponsibility, setCurrentResponsibility] = useState("");

  const removeResponsibility = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      responsibility: prevData.responsibility.filter((_, i) => i !== index),
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleResponsibilityChange = (e) => {
    setCurrentResponsibility(e.target.value);
  };

  const addResponsibility = () => {
    if (currentResponsibility.trim()) {
      setFormData((prevData) => ({
        ...prevData,
        responsibility: [...prevData.responsibility, currentResponsibility],
      }));
      setCurrentResponsibility("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);

      const response = await addExperience(formData);
      console.log("res", response);
    }
  };

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/education-details");
  };

  const handleNextClick = () => {
    navigate("/project-details"); // Navigate to the Basic Details route
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
              Tell us about your experience
            </h1>
            <p className="mb-6 text-lg text-zinc-900">
              Start with your most recent experience and work backward.
            </p>
            <p className="text-sm font-semibold mt-6 mb-5">
              * indicates a required field
            </p>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2 sm:col-span-1">
                  <label className="block mb-1 font-semibold text-gray-700">
                    What was your title?<span className="text-red-900">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Similar to a job title that best describes the work you did."
                    value={formData.title}
                    onChange={handleChange}
                    className="mt-1 h-fit block w-full px-3 py-2 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {errors.title && (
                    <p className="text-red-500 text-sm">{errors.title}</p>
                  )}
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block mb-1 font-semibold text-gray-700">
                    Who did you do this for?
                    <span className="text-red-900">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Person, organization, company, or family business you worked for."
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1 h-fit block w-full px-3 py-2 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {errors.company && (
                    <p className="text-red-500 text-sm">{errors.company}</p>
                  )}
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block mb-1 font-semibold text-gray-700">
                    Location<span className="text-red-900">*</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="e.g. Delhi, India"
                    value={formData.location}
                    onChange={handleChange}
                    className="mt-1 h-fit block w-full px-3 py-2 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {errors.location && (
                    <p className="text-red-500 text-sm">{errors.location}</p>
                  )}
                </div>
              

              {/* ======================================================== */}
              <div className="flex gap-4">
                <div className="">
                  <label className="block mb-1 font-semibold text-gray-700">
                    Start Date<span className="text-red-900">*</span>
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="mt-1 block h-fit w-[15.3rem] px-3 py-2 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {errors.startDate && (
                    <p className="text-red-500 text-sm">{errors.startDate}</p>
                  )}
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block mb-1 font-semibold text-gray-700">
                    End Date
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    disabled={formData.currentlyWorking} // Disable the input if currently working
                    className="mt-1 block h-fit w-[15.3rem] px-3 py-2 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {errors.endDate && (
                    <p className="text-red-500 text-sm">{errors.endDate}</p>
                  )}

                  <div className="flex items-center mt-3">
                    <input
                      type="checkbox"
                      id="current"
                      checked={formData.currentlyWorking}
                      onChange={handleCheckboxChange}
                      className="mr-2"
                    />
                    <label htmlFor="current" className="text-sm">
                      I currently work here
                    </label>
                  </div>
                </div>
              </div>
              </div>

              <div className="mt-6">
                <label className="block mb-1 font-semibold text-gray-700">
                  Responsibilities<span className="text-red-900">*</span>
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    name="responsibility"
                    placeholder="Add a responsibility"
                    value={currentResponsibility}
                    onChange={handleResponsibilityChange}
                    className="mt-1 block w-full h-fit px-3 py-2 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {errors.responsibility && (
                    <p className="text-red-500 text-sm">
                      {errors.responsibility}
                    </p>
                  )}

                  <button
                    type="button"
                    onClick={addResponsibility}
                    className="px-4 py-2 mt-1 h-fit bg-blue-600 text-white rounded-sm"
                  >
                    Add
                  </button>
                </div>
                <div className="mt-4">
                  <ul>
                    {formData.responsibility.map((res, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center text-sm text-gray-700 mb-2"
                      >
                        {res}
                        <button
                          type="button"
                          onClick={() => removeResponsibility(index)}
                          className="ml-2 text-red-600 hover:text-red-800"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* =============================================== */}

              <div className=" pr-5 pb-5 flex justify-end space-x-5 ">
                <button
                  type="button"
                  className="items-end h-fit py-3 px-5  border border-blue-800 rounded-full text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Preview
                </button>
                <button
                  type="submit"
                  onClick={handleNextClick}
                  className="items-end h-fit px-5 py-3 text-base font-medium border border-transparent rounded-full shadow-sm text-blue-700 bg-yellow-400 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceDetails;
