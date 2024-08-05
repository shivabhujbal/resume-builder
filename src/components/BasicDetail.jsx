import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 
import '../App.css';
import Sidebar from './Sidebar';

function BasicDetail() {
  // State to manage dynamically added fields
  const [linkedinFields, setLinkedinFields] = useState([]);
  const [websiteFields, setWebsiteFields] = useState([]);

  // Initialize the useNavigate hook
  const navigate = useNavigate();

  // Handler to add LinkedIn input fields
  const handleAddLinkedIn = () => {
    if (linkedinFields.length === 0) {
      // Ensure only one additional LinkedIn field
      setLinkedinFields([...linkedinFields, { id: linkedinFields.length }]);
    }
  };

  // Handler to add Website input fields
  const handleAddWebsite = () => {
    if (websiteFields.length === 0) {
      // Ensure only one additional Website field
      setWebsiteFields([...websiteFields, { id: websiteFields.length }]);
    }
  };

  // Handler for navigation
  const handleNextClick = () => {
    navigate('/education-details'); // Navigate to the EducationDetails route
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar Component */}
      <div className="sticky top-0">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow overflow-y-auto mx-auto w-full h-screen">
        <div className="container w-[1120px] h-screen ml-[4.5rem] py-14">
          <div className="px-4">
            {/* Arrow alignment fix using flex properties */}
            <button className="text-blue-600 relative flex items-center mb-1">
              <FaArrowLeft className="mr-2" /> {/* Add margin-right for spacing */}
              Go Back
            </button>
            <h1 className="text-4xl font-semibold leading-tight">
              What’s the best way for employers to
            </h1>
            <h1 className="text-4xl font-semibold">contact you?</h1>
            <p className="text-zinc-900 text-lg pt-4">
              We suggest including an email and phone number.
            </p>
          </div>
          <p className="text-sm font-semibold px-4 mt-6">
            * indicates a required field
          </p>
          <form className="px-4 mt-5 space-y-5">
            <div className="flex gap-8">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-md font-semibold text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="e.g. Saanvi"
                  className="mt-1 block w-80 h-9 px-3 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="surname"
                  className="block text-md font-semibold text-gray-700"
                >
                  Surname
                </label>
                <input
                  type="text"
                  id="surname"
                  placeholder="e.g. Patel"
                  className="mt-1 block w-80 h-9 px-3 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" // Added border
                />
              </div>
            </div>

            <div className="grid">
              <div>
                <label
                  htmlFor="profession"
                  className="block text-md font-semibold text-gray-700"
                >
                  Profession
                </label>
                <input
                  type="text"
                  id="profession"
                  placeholder="e.g. Software Engineer"
                  className="mt-1 block w-[675px] h-9 px-3 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" // Added border
                />
              </div>
            </div>

            <div className="flex gap-8">
              <div>
                <label
                  htmlFor="city"
                  className="block text-md font-semibold text-gray-700"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  placeholder="e.g. New Delhi"
                  className="mt-1 block w-80 h-9 px-3 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" // Added border
                />
              </div>
              <div className="flex gap-4">
                <div>
                  <label
                    htmlFor="country"
                    className="block text-md font-semibold text-gray-700"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    placeholder="e.g. India"
                    className="mt-1 block w-40 h-9 px-3 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="pinCode"
                    className="block text-md font-semibold text-gray-700"
                  >
                    Pin Code
                  </label>
                  <input
                    type="text"
                    id="pinCode"
                    placeholder="e.g. 110034"
                    className="mt-1 block w-36 h-9 px-3 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" // Added border
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-8">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-md font-semibold text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="e.g. +91 22 1234 5677"
                  className="mt-1 block w-80 h-9 px-3 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" // Added border
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-md font-semibold text-gray-700"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="e.g. saanvipatel@sample.in"
                  className="mt-1 block w-80 h-9 px-3 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" // Added border
                  required
                />
              </div>
            </div>

            <div className="flex gap-8">
              <div>
                <label
                  htmlFor="linkedin"
                  className="block text-md font-semibold text-gray-700"
                >
                  LinkedIn
                </label>
                <input
                  type="url"
                  id="linkedin"
                  placeholder="e.g. linkedin.com/in/saanvi-patel"
                  className="mt-1 block w-80 h-9 px-3 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" // Added border
                />
              </div>

              <div>
                <label
                  htmlFor="website"
                  className="block text-md font-semibold text-gray-700"
                >
                  GitHub
                </label>
                <input
                  type="url"
                  id="website"
                  placeholder="e.g. http://medium.com/saanvi-patel"
                  className="mt-1 block w-80 h-9 px-3 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" // Added border
                />
              </div>
            </div>

            {/* Dynamically rendered LinkedIn fields */}
            {/* {linkedinFields.map((field) => (
              <div className="flex gap-8" key={field.id}>
                <div>
                  <label
                    htmlFor={`linkedin${field.id}`}
                    className="block text-sm font-semibold text-gray-700"
                  >
                    LinkedIn {field.id + 1}
                  </label>
                  <input
                    type="url"
                    id={`linkedin${field.id}`}
                    placeholder="e.g. linkedin.com/in/saanvi-patel"
                    className="mt-1 block w-80 h-9 px-3 border border-gray-300 rounded-sm shadow-sm focus:border-blue-500 focus:ring-blue-500" // Added border
                  />
                </div>
              </div>
            ))} */}

            {/* Dynamically rendered Website fields */}
            {/* {websiteFields.map((field) => (
              <div className="flex gap-8" key={field.id}>
                <div>
                  <label
                    htmlFor={`website${field.id}`}
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Website {field.id + 1}
                  </label>
                  <input
                    type="url"
                    id={`website${field.id}`}
                    placeholder="e.g. http://medium.com/saanvi-patel"
                    className="mt-1 block w-80 h-9 px-3 border border-gray-300 rounded-sm shadow-sm focus:border-blue-500 focus:ring-blue-500" // Added border
                  />
                </div>
              </div>
            ))} */}

            {/* <div className="flex space-x-4 mt-4">
              <button
                type="button"
                onClick={handleAddLinkedIn} // LinkedIn handler
                className="flex items-center px-4 py-2 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                LinkedIn +
              </button>
              <button
                type="button"
                onClick={handleAddWebsite} // Website handler
                className="flex items-center px-4 py-2 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Website +
              </button>
            </div> */}

            {/* Flexbox for aligning the last three buttons */}
            <div className="flex justify-between pt-6 pb-16">
              {/* Left-aligned button */}
              <div></div>
              <div className="flex-grow">
                <button
                  type="submit"
                  className="py-3 px-4 rounded-full shadow-sm text-base font-medium text-white bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Optional: Personal Details
                </button>
              </div>

              {/* Right-aligned buttons */}
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="items-end w-32 py-3 px-5  border border-blue-800 rounded-full text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Preview
                </button>

                <button
                  type="button"
                  onClick={handleNextClick} // Use navigate handler for routing
                  className="py-3 px-5 text-base font-medium border border-transparent rounded-full shadow-sm text-blue-700 bg-yellow-400 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Next: Education
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BasicDetail;
