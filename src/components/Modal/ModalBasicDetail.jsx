import { useState, useEffect } from 'react';
import React from 'react';
import { IoMdClose } from "react-icons/io";
import { getModalBasicDetails, updateBasicDetails } from '/src/services/ModalServices.jsx';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the toastify CSS

const ModalBasicDetail = ({ isOpen, onClose, onSave, userId }) => {
  if (!isOpen) return null;

  const [userData, setUserData] = useState(null);

  // Fetch data on mount
  useEffect(() => {
    const fetchModalUserData = async () => {
      if (userId) {
        try {
          const response = await getModalBasicDetails(userId);
          setUserData(response.besicDetails);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      } else {
        console.error('Invalid userId:', userId);
      }
    };

    fetchModalUserData();
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateBasicDetails(userId, userData);
      onSave(userData); // Call onSave callback if provided
      toast.success('Basic Details Updated Successfully');
      onClose();
    } catch (error) {
      console.error('Error updating user data:', error);
      toast.error('Error updating basic details');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl p-8 relative overflow-auto h-[90%]">
        <IoMdClose
          className="absolute top-2 right-2 text-2xl text-gray-700 cursor-pointer"
          onClick={onClose}
        />
        {userData && (
          <div>
            <h1 className="font-bold text-2xl mb-4">Basic Details</h1>
            <h5 className="text-sm text-gray-500 mb-6">
              Details like userid, firstname, lastname, city, country, etc.
            </h5>
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="first_name" className="block font-semibold text-gray-700">
                  First Name *
                </label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  value={userData.first_name}
                  onChange={handleChange}
                  placeholder="e.g. Saanvi"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="last_name" className="block font-semibold text-gray-700">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  value={userData.last_name}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="profession" className="block font-semibold text-gray-700">
                  Profession *
                </label>
                <input
                  type="text"
                  name="profession"
                  id="profession"
                  value={userData.profession}
                  onChange={handleChange}
                  placeholder="Profession"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="city" className="block font-semibold text-gray-700">
                  City *
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={userData.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="country" className="block font-semibold text-gray-700">
                  Country *
                </label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  value={userData.country}
                  onChange={handleChange}
                  placeholder="Country"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block font-semibold text-gray-700">
                  Phone *
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={userData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-semibold text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={userData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="linkdin" className="block font-semibold text-gray-700">
                  LinkedIn
                </label>
                <input
                  type="text"
                  name="linkdin"
                  id="linkdin"
                  value={userData.linkdin}
                  onChange={handleChange}
                  placeholder="LinkedIn"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="github" className="block font-semibold text-gray-700">
                  GitHub
                </label>
                <input
                  type="text"
                  name="github"
                  id="github"
                  value={userData.github}
                  onChange={handleChange}
                  placeholder="GitHub"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="col-span-2 flex justify-end gap-4 pt-5">
                <button
                  type="submit"
                  className="py-2 px-4 rounded-full bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="py-2 px-4 rounded-full bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
      <ToastContainer /> {/* Render toasts */}
    </div>
  );
};

export default ModalBasicDetail;
