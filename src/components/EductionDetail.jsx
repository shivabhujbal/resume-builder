import React, { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'; // Correct the import here
import Sidebar from './Sidebar';

function EducationDetail() {
  const [formData, setFormData] = useState({
    schoolName: '',
    schoolLocation: '',
    degree: '',
    fieldOfStudy: '',
    graduationMonth: '',
    graduationYear: '',
    additionalCoursework: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission
  };

  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/experience-details'); // Navigate to experience details
  };

  const handleBackClick = () => {
    navigate('/'); // Navigate back to the home page
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar Component */}
      <div className="flex-shrink-0 w-64">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow overflow-y-auto">
        <div className="w-full h-full flex justify-center items-start py-10">
          <div className="container w-[1120px] py-4 pl-3">
            <button onClick={handleBackClick} className="text-blue-600 flex items-center mb-2">
              <FaArrowLeft className="mr-2" />
              Go Back
            </button>
            <h1 className="text-4xl font-semibold leading-tight mb-3">Tell us about your education</h1>
            <p className="mb-6 text-lg text-zinc-900">
              Enter your education experience so far, even if you are a current student or did not graduate.
            </p>
            <p className='text-sm font-semibold mt-6 mb-5'>* indicates a required field</p>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2 sm:col-span-1">
                  <label className="block mb-1 font-semibold text-gray-700">
                    School Name
                  </label>
                  <input
                    type="text"
                    name="schoolName"
                    placeholder="e.g. Delhi University"
                    value={formData.schoolName}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block mb-1 font-semibold text-gray-700">
                    School Location
                  </label>
                  <input
                    type="text"
                    name="schoolLocation"
                    placeholder="e.g. Delhi, India"
                    value={formData.schoolLocation}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block mb-1 font-semibold text-gray-700">
                    Degree
                  </label>
                  <select
                    name="degree"
                    value={formData.degree}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">Select</option>
                    <option value="bachelor">Bachelor</option>
                    <option value="master">Master</option>
                    <option value="phd">PhD</option>
                  </select>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block mb-1 font-semibold text-gray-700">
                    Field Of Study
                  </label>
                  <input
                    type="text"
                    name="fieldOfStudy"
                    placeholder="e.g. Financial Accounting"
                    value={formData.fieldOfStudy}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block mb-1 font-semibold text-gray-700">
                    Graduation Date (Or Expected Graduation Date)
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <select
                      name="graduationMonth"
                      value={formData.graduationMonth}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value="">Month</option>
                      <option value="January">January</option>
                      <option value="February">February</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="August">August</option>
                      <option value="September">September</option>
                      <option value="October">October</option>
                      <option value="November">November</option>
                      <option value="December">December</option>
                    </select>
                    <select
                      name="graduationYear"
                      value={formData.graduationYear}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value="">Year</option>
                      {Array.from({ length: 10 }, (_, i) => {
                        const year = new Date().getFullYear() - i;
                        return <option key={year} value={year}>{year}</option>;
                      })}
                    </select>
                  </div>
                </div>
              </div>
  
              <div className="mt-6">
                <label className="block mb-1 font-semibold text-gray-700">
                  Additional Coursework
                </label>
                <textarea
                  name="additionalCoursework"
                  value={formData.additionalCoursework}
                  onChange={handleChange}
                  placeholder="Add any additional coursework you're proud to showcase"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  rows="4"
                />
              </div>
              <div className="mt-10 pr-5 pb-10 flex justify-end space-x-5">
                <button
                  type="submit"
                  className="items-end w-32 py-3 px-5 border border-blue-800 rounded-full text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Preview
                </button>
                <button
                  type="button" // Changed to button to prevent form submission on next click
                  onClick={handleNextClick}
                  className="items-end px-5 py-3 text-base font-medium border border-transparent rounded-full shadow-sm text-blue-700 bg-yellow-400 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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

export default EducationDetail;
