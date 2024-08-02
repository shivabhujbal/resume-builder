import React, { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { Navigate, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

function ExperienceDetils() {
    const [formData, setFormData] = useState({
        title: '',
        companyName: '',
        companyLocation: '',
        startDate: '',
        endDate: '',
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

      const Navigate = useNavigate();

      const handleBackClick = () => {
        Navigate('/education-details'); // Navigate to the Basic Details route
      };
      const handleNextClick = () => {
        Navigate('/skill-details'); // Navigate to the Basic Details route
      };
    
      return (
        <div className="flex h-screen">
      {/* Sidebar Component */}
      <div className="flex-shrink-0 w-64">
        <Sidebar />
      </div>

        <div className="mx-auto w-full h-screen flex justify-center items-center">
          <div className="container w-[1120px] h-screen ml-[4.5rem] py-14 pl-2 mr-20">
            <button onClick={handleBackClick} className="text-blue-600 relative flex items-center mb-2 "><FaArrowLeft className="mr-2" />  Go Back</button>
            <h1 className="text-4xl font-semibold leading-tight mb-3">Tell us about your experience</h1>
            <p className="mb-6 text-lg text-zinc-900">
            Start with your most recent experience and work backward.
            </p>
            <p className='text-sm font-semibold mt-6 mb-5'>* indicates a required field</p>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2 sm:col-span-1">
                  <label className="block mb-1 font-semibold text-gray-700">
                  What was your title? *
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Similar to a job title that best describes the work you did."
                    value={formData.title}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block mb-1 font-semibold text-gray-700">
                  Who did you do this for?
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Person, organization, company, or family business you worked for."
                    value={formData.companyName}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block mb-1 font-semibold text-gray-700">
                    Location
                  </label>
                  <input
                    type="text"
                    name="companyLocation"
                    placeholder="e.g. Delhi, India"
                    value={formData.companyLocation}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="flex items-center mt-2">
            <input type="checkbox" id="remote" className="mr-2" />
            <label htmlFor="remote" className="text-sm">Remote</label>
          </div>
              <div className="grid grid-cols-2 gap-6 mt-6">
                <div className="col-span-2 sm:col-span-1">
                  <label className="block mb-1 font-semibold text-gray-700">
                  Start Date
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
                <div className="col-span-2 sm:col-span-1">
                  <label className="block mb-1 font-semibold text-gray-700">
                  End Date
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
                  <div className="flex items-center mt-3">
              <input type="checkbox" id="current" className="mr-2" />
              <label htmlFor="current" className="text-sm">I currently work here</label>
            </div>
                </div>
              </div>
            <div className="mt-28 pr-5 pb-5 flex justify-end space-x-5 ">
            <button
                type="submit"
                className="items-end w-32 py-3 px-5  border border-blue-800 rounded-full text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Preview
              </button>
                <button
                    type="submit"
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
      );
}


export default ExperienceDetils