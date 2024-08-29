import React, { useState, useEffect } from 'react';
import { IoMdClose } from "react-icons/io";
import { getModalBasicDetails, updateEducationDetails } from '../../services/ModalServices';
import { useNavigate, useLocation } from 'react-router-dom';

const ModalEducation = ({ isOpen, onClose, onSave,userId,id}) => {
  const [userData, setUserData] = useState({}); // Initialize with an empty object
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchModalUserData = async () => {
      try {
        const response = await getModalBasicDetails(8);
        const educationData = response.educationList.find(item => item.id === id); // Find the specific education entry by id
        setUserData(educationData || {}); // Set the education data or fallback to an empty object
      } catch (error) {
        console.error('Error in fetching user data', error);
      }
    };

    if (isOpen) { // Fetch data only when the modal is open
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
      // Update the education data using the API
      await updateEducationDetails(id, userData); // Adjust the ID as needed
     // alert("Edication Data Updated Successfully")
      onSave(userData); // Call the onSave callback to update the parent component
      alert("Education Updated Successfully");
      //navigate('/template1-detail'); // Navigate to SummaryDetail.jsx (or the desired route)
      onClose(); // Close the modal after saving
    } catch (error) {
      console.error('Error in updating education data', error);
    }
  };

  console.log(userData.degree);
  if (!isOpen) return null;

  console.log(userData);

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-smoke-800 flex border shadow-md h-full ">
      <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg border shadow-md max-h-full ">
        <IoMdClose
          className="top-2 right-2 text-gray-700 relative h-6 w-10"
          onClick={onClose}
        />
        
        <h2 className="text-xl font-bold mb-4">Education</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="degree"
              className="block text-md font-semibold text-gray-700"
            >
              Degree
            </label>
            <input
              type="text"
              name="degree"
              value={userData.degree || ''} // Ensure controlled input
              onChange={handleChange}
              className="mt-1 block w-80 h-9 px-3 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="fieldOfStudy"
              className="block text-md font-semibold text-gray-700"
            >
              Field of Study
            </label>
            <input
              type="text"
              name="fieldOfStudy"
              value={userData.fieldOfStudy || ''} // Ensure controlled input
              onChange={handleChange}
              className="mt-1 block w-80 h-9 px-3 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="schoolName"
              className="block text-md font-semibold text-gray-700"
            >
              School Name
            </label>
            <input
              type="text"
              name="schoolName"
              value={userData.schoolName || ''} // Ensure controlled input
              onChange={handleChange}
              className="mt-1 block w-80 h-9 px-3 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="schoolLocation"
              className="block text-md font-semibold text-gray-700"
            >
              School Location
            </label>
            <input
              type="text"
              name="schoolLocation"
              value={userData.schoolLocation || ''} // Ensure controlled input
              onChange={handleChange}
              className="mt-1 block w-80 h-9 px-3 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="graduationYear"
              className="block text-md font-semibold text-gray-700"
            >
              Graduation Year
            </label>
            <input
              type="text"
              name="graduationYear"
              value={userData.graduationYear || ''} // Ensure controlled input
              onChange={handleChange}
              className="mt-1 block w-80 h-9 px-3 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="gapTaken"
              className="block text-md font-semibold text-gray-700"
            >
              Gap Taken
            </label>
            <select
              name="gapTaken"
              value={userData.gapTaken || ''} // Ensure controlled input
              onChange={handleChange}
              className="mt-1 block w-80 h-9 px-3 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          {userData.gapTaken === 'true' && (
            <div className="mb-4">
              <label
                htmlFor="gapYear"
                className="block text-md font-semibold text-gray-700"
              >
                Gap Year
              </label>
              <input
                type="text"
                name="gapYear"
                value={userData.gapYear || ''} // Ensure controlled input
                onChange={handleChange}
                className="mt-1 block w-80 h-9 px-3 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          )}
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
};

export default ModalEducation;
