import { useState, useEffect } from 'react';
import React from 'react';
import './ModalBasicDetail.css'; // Add styles for the modal
import { IoMdClose } from "react-icons/io";
import { getModalBasicDetails , updateBasicDetails } from '/src/services/ModalServices.jsx';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the toastify CSS
//import { Navigate } from 'react-router-dom';

const ModalBasicDetail = ({ isOpen, onClose, onSave, userId }) => {
  if (!isOpen) return null;

  const [userData, setUserData] = useState(null);
// To Get Data From DataBase GET API
useEffect(() => {
  const fetchModalUserData = async () => {
    if (userId) {  // Check if userId is valid
      try {
        const response = await getModalBasicDetails(userId);
        setUserData(response.besicDetails);
      } catch (error) {
        console.error('Error in fetching user data', error);
      }
    } else {
      console.error('Invalid userId:', userId);
    }
  };

  fetchModalUserData();
}, [userId]);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };
//For Editing data PUT API
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateBasicDetails(userId, userData);
      onSave(userData); // Call the onSave callback if provided
      alert("BasicDetails Updated Successfully");
       onClose();
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  return (
    <div className="modal-overlay h-full">
      <div className="modal-content h-full">
        <IoMdClose 
          className="top-1 right-2 text-gray-700 relative ml-[56rem] h-6 w-10"
          onClick={onClose}
        />
          
        {userData && (
          <div>
            <h1 className='font-bold mb-2'>Basic Details</h1>
            <h5 className='text-sm text-gray-400 mb-5'>Details like userid, firstname, lastname, city, country etc.</h5>
            <form className="form-grid px-4 mt-5 space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="first_name" className="block text-md font-semibold text-gray-700">First Name *</label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  value={userData.first_name}
                  onChange={handleChange}
                  placeholder="e.g. Saanvi"
                  className="mt-1 block w-80 h-9 px-3 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="last_name" className="block text-md font-semibold text-gray-700">Last Name *</label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  value={userData.last_name}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="mt-1 block w-80 h-9 px-3 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="profession" className="block text-md font-semibold text-gray-700">Profession *</label>
                <input
                  type="text"
                  name="profession"
                  id="profession"
                  value={userData.profession}
                  onChange={handleChange}
                  placeholder="Profession"
                  className="mt-1 block w-80 h-9 px-3 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-md font-semibold text-gray-700">City *</label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={userData.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="mt-1 block w-80 h-9 px-3 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-md font-semibold text-gray-700">Country *</label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  value={userData.country}
                  onChange={handleChange}
                  placeholder="Country"
                  className="mt-1 block w-80 h-9 px-3 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-md font-semibold text-gray-700">Phone *</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={userData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="mt-1 block w-80 h-9 px-3 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-md font-semibold text-gray-700">Email *</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={userData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="mt-1 block w-80 h-9 px-3 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="linkdin" className="block text-md font-semibold text-gray-700">LinkedIn</label>
                <input
                  type="text"
                  name="linkdin"
                  id="linkdin"
                  value={userData.linkdin}
                  onChange={handleChange}
                  placeholder="LinkedIn"
                  className="mt-1 block w-80 h-9 px-3 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="github" className="block text-md font-semibold text-gray-700">GitHub</label>
                <input
                  type="text"
                  name="github"
                  id="github"
                  value={userData.github}
                  onChange={handleChange}
                  placeholder="GitHub"
                  className="mt-1 block w-80 h-9 px-3 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div className="flex justify-between pt-3 pb-16">
                <div></div>
                <div className="flex gap-4">
                  <button
                    type="submit"
                    onSubmit={handleSubmit}
                    className="items-end w-32 py-3 px-5 border
                    border-blue-800 rounded-full 
                    text-blue-700 bg-white
                    hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2
                    focus:ring-blue-500 h-full">
                    Save
                  </button>

                  <button
                    type="button"
                    onClick={onClose}
                    className="py-3 px-5 text-base font-medium border border-transparent rounded-full shadow-sm text-blue-700 bg-yellow-400 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 h-full w-full">
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
      <ToastContainer /> {/* Add this container to render toasts */}
    </div>
  );
};

export default ModalBasicDetail;