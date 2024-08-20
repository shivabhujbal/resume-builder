import React, { useState, useEffect } from 'react';
import { IoMdClose } from "react-icons/io";
import { getModalBasicDetails, updateProjectDetails } from '/src/services/ModalServices.jsx';

function ModalProject({ isOpen, onClose, onSave, data }) {
  const [userData, setUserData] = useState({}); // Initialize with an empty object

  useEffect(() => {
    const fetchModalUserData = async () => {
      try {
        const response = await getModalBasicDetails(2);
        const projectData = response.projectList[0]; // Assuming you need the first item in the array
       // setUserData(projectData || {}); // Set the project data or fallback to an empty object
       setUserData(response.projectList[0]); // Set basicDetails directly
      } catch (error) {
        console.error('Error in fetching user data', error);
      }
    };

    fetchModalUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Submitting project data:', userData); // Log data being sent
    try {
      await updateProjectDetails(2, userData);
      onSave(userData);
      alert("Project Updated Successfully");
      onClose();
    } catch (error) {
      console.error('Error in updating project data:', error);
      alert(`Failed to update project: ${error.response ? error.response.data.message : error.message}`);
    }
  };
  


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center 
    bg-black bg-opacity-50 z-50 shadow-lg transition-shadow duration-300 ">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg transition-shadow duration-300 overflow-y-auto">
        <IoMdClose className="top-2 right-2 text-gray-700 relative ml-[28rem] h-6 w-10" onClick={onClose} />
        <h2 className="text-lg font-bold mb-4">Project Details</h2>
        <form className='shadow-lg transition-shadow duration-300' onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="projectTitle" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              id="projectTitle"
              type="text"
              name="projectTitle"
              value={userData.projectTitle || ''}
              onChange={handleChange}
              className="mt-1 block w-80 h-9 px-3 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ml-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={userData.description || ''}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-80 h-36 px-3 
              bg-white border 
              border-gray-300 rounded-sm shadow-sm 
              placeholder-gray-400 focus:outline-none 
              focus:ring-indigo-500 
              focus:border-indigo-500 sm:text-sm ml-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="techstack" className="block text-sm font-medium text-gray-700">
              Technologies
            </label>
            <input
              id="techstack"
              type="text"
              name="techstack"
              value={userData.techstack || ''}
              onChange={handleChange}
              className="mt-1 block w-80 h-9 px-3 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ml-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="projectLink" className="block text-sm font-medium text-gray-700">
              Project Link
            </label>
            <input
              id="projectLink"
              type="text"
              name="projectLink"
              value={userData.projectLink || ''}
              onChange={handleChange}
              className="mt-1 block w-80 h-9 px-3 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ml-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="projectRole" className="block text-sm font-medium text-gray-700">
              Project Role
            </label>
            <input
              id="projectRole"
              type="text"
              name="projectRole"
              value={userData.projectRole || ''}
              onChange={handleChange}
              className="mt-1 block w-80 h-9 px-3 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ml-1"
            />
          </div>
          <div className="flex justify-between pt-3 pb-16">
            <div></div>
            <div className="flex gap-4">
              <button
                type="submit"
                className="items-end w-32 py-3 px-5 border 
                border-blue-800 rounded-full 
                text-blue-700 bg-white 
                hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 
                focus:ring-blue-500
                h-full"
              >
                Save
              </button>

              <button
                type="button"
                onClick={onClose}
                className="py-3 px-5 text-base font-medium border border-transparent rounded-full shadow-sm text-blue-700 bg-yellow-400 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 h-full w-full"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalProject;
