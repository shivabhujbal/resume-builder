import React, { useState, useEffect } from 'react';
import { IoMdClose } from "react-icons/io";
import { getModalBasicDetails, updateEducationDetails } from '../../services/ModalServices';
import { useNavigate } from 'react-router-dom';

const ModalEducation = ({ isOpen, onClose, onSave, userId, id }) => {
   const [userData, setUserData] = useState({}); // Initialize with an empty object
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);
   const navigate = useNavigate();

   useEffect(() => {
    const fetchModalUserData = async () => {
      setIsLoading(true); // Set loading state
      setError(null); // Reset error state
      try {
        const response = await getModalBasicDetails(userId);
      
        if (response && Array.isArray(response.educationList)) {
          const educationData = response.educationList.find(item => item.id === id);
          setUserData(educationData || {});
          setIsLoading(false);
        } else {
          setUserData({});
          setIsLoading(false);
        }
      } catch (error) {
        setError('Error fetching education data');
        setIsLoading(false);
      }
    };
  
    if (isOpen) { 
      fetchModalUserData();
    }
  }, [id, isOpen, userId]);

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
      await updateEducationDetails(id, userData);
      onSave(userData);
      setTimeout(() => {
        onClose(); // Close modal
      }, 0);
    } catch (error) {
      console.error('Error in updating education data', error);
    }
  };

  if (!isOpen) return null;
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative p-8 bg-white w-full max-w-3xl m-auto flex-col flex rounded-lg shadow-lg overflow-auto h-[90%]">
        <IoMdClose
          className="absolute top-2 right-2 text-gray-700 text-2xl cursor-pointer"
          onClick={onClose}
        />

        <h2 className="text-xl font-bold mb-4">Education Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4">
            <label
              htmlFor="degree"
              className="block text-sm font-semibold text-gray-700"
            >
              Degree
            </label>
            <input
              type="text"
              name="degree"
              value={userData.degree || ''}
              onChange={handleChange}
              className="mt-1 block w-full h-10 px-3 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="fieldOfStudy"
              className="block text-sm font-semibold text-gray-700"
            >
              Field of Study
            </label>
            <input
              type="text"
              name="fieldOfStudy"
              value={userData.fieldOfStudy || ''}
              onChange={handleChange}
              className="mt-1 block w-full h-10 px-3 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="schoolName"
              className="block text-sm font-semibold text-gray-700"
            >
              School Name
            </label>
            <input
              type="text"
              name="schoolName"
              value={userData.schoolName || ''}
              onChange={handleChange}
              className="mt-1 block w-full h-10 px-3 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="schoolLocation"
              className="block text-sm font-semibold text-gray-700"
            >
              School Location
            </label>
            <input
              type="text"
              name="schoolLocation"
              value={userData.schoolLocation || ''}
              onChange={handleChange}
              className="mt-1 block w-full h-10 px-3 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="graduationYear"
              className="block text-sm font-semibold text-gray-700"
            >
              Graduation Year
            </label>
            <input
              type="text"
              name="graduationYear"
              value={userData.graduationYear || ''}
              onChange={handleChange}
              className="mt-1 block w-full h-10 px-3 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="gapTaken"
              className="block text-sm font-semibold text-gray-700"
            >
              Gap Taken
            </label>
            <select
              name="gapTaken"
              value={userData.gapTaken || ''}
              onChange={handleChange}
              className="mt-1 block w-full h-10 px-3 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>

          {userData.gapTaken === 'true' && (
            <div className="mb-4">
              <label
                htmlFor="gapYear"
                className="block text-sm font-semibold text-gray-700"
              >
                Gap Year
              </label>
              <input
                type="text"
                name="gapYear"
                value={userData.gapYear || ''}
                onChange={handleChange}
                className="mt-1 block w-full h-10 px-3 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          )}

          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="py-2 px-4 text-sm font-medium text-blue-700 bg-yellow-400 rounded-full hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="py-2 px-4 text-sm font-medium text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEducation;
