import React, { useState , useEffect} from 'react';
import { IoMdClose } from "react-icons/io";
import { getModalBasicDetails,updateExperienceDetails } from '/src/services/ModalServices.jsx';

function ModalExperience({ isOpen, onClose, onSave, userId, id}) {
  const [userData, setUserData] = useState({}); // Initialize with an empty object
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchModalUserData = async () => {
     setIsLoading(true); // Set loading state
      setError(null); // Reset error state
      try {
        const response = await getModalBasicDetails(userId);
      
        if (response && Array.isArray(response.experianceList)) {
          console.log("String");
          // Ensure response and educationList are valid
          const experienceData = response.experianceList.find(item => item.id === id);
          console.log(experienceData);
          setUserData(experienceData || {});
          setIsLoading(false)
          console.log("Experience UserData",userData) ;// Set the education data or fallback to an empty object
        } else {
          console.warn('Invalid response format or educationList is not an array', response);
          setUserData({}); // Fallback to an empty object if response format is invalid
        
        }
      } catch (error) {
        console.error('Error in fetching user data', error);
        setUserData({}); // Fallback to an empty object in case of error
      }
    };
  
    if (isOpen) { // Fetch data only when the modal is open
      fetchModalUserData();
    }
  }, [id, isOpen, userId]);
  


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateExperienceDetails(id, userData); // Adjust the ID as needed
      onSave(userData); // Call the onSave callback to update the parent component
      alert("Experience Data Updated SuccessFully");
      onClose(); // Close the modal after saving
    } catch (error) {
      console.error('Error in updating education data', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 w-full h-full">
      <div className="bg-white p-8 rounded w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-md">
      <IoMdClose  className="top-2 left-[90%] text-gray-700  h-6 w-10 "
          onClick={onClose} />
     
        <h1 className="text-lg font-bold mb-4"> Experience</h1>
        
        <form className='transition-shadow duration-300 shadow-md justify-center ml-5 max-w-lg h-full ' 
          onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700 ml-1"
            >
              Company
            </label>
            <input
              type="text"
              name="company"
              id="company"
              value={userData.company}
              onChange={handleChange}
              className={`mt-1 block w-80 h-9 px-3
                bg-white border border-gray-300 rounded-sm 
                shadow-sm placeholder-gray-400 
                focus:outline-none focus:ring-indigo-500 
                focus:border-indigo-500 sm:text-sm` }
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="position"
              className="block text-sm font-medium text-gray-700 ml-1"
            >
              Position
            </label>
            <input
              type="text"
              name="position"
              id="position"
              value={userData.title}
              onChange={handleChange}
              className={`mt-1 block w-80 h-9 px-3
                bg-white border border-gray-300 rounded-sm 
                shadow-sm placeholder-gray-400 
                focus:outline-none focus:ring-indigo-500 
                focus:border-indigo-500 sm:text-sm` }
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="duration"
              className="block text-sm font-medium text-gray-700 ml-1"
            >
              Start Date
            </label>
            <input
              type="text"
              name="duration"
              id="duration"
              value={userData.startDate}
              onChange={handleChange}
              className={`mt-1 block w-80 h-9 px-3
                bg-white border border-gray-300 rounded-sm 
                shadow-sm placeholder-gray-400 
                focus:outline-none focus:ring-indigo-500 
                focus:border-indigo-500 sm:text-sm` }
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="duration"
              className="block text-sm font-medium text-gray-700 ml-1"
            >
            End Date
            </label>
            <input
              type="text"
              name="duration"
              id="duration"
              value={userData.endDate}
              onChange={handleChange}
              className={`mt-1 block w-80 h-9 px-3
                bg-white border border-gray-300 rounded-sm 
                shadow-sm placeholder-gray-400 
                focus:outline-none focus:ring-indigo-500 
                focus:border-indigo-500 sm:text-sm` }
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700 ml-1"
            >
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              value={userData.location}
              onChange={handleChange}
              className={`mt-1 block w-80 h-9 px-3
                bg-white border border-gray-300 rounded-sm 
                shadow-sm placeholder-gray-400 
                focus:outline-none focus:ring-indigo-500 
                focus:border-indigo-500 sm:text-sm` }
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="responsibilities"
              className="block text-sm font-medium text-gray-700 ml-1"
            >
              Responsibilities
            </label>
            <textarea
              name="responsibilities"
              id="responsibilities"
              value={userData.responsibility}
              onChange={handleChange}
              className={`mt-1 block w-80 h-24 px-3
                bg-white border border-gray-300 rounded-sm 
                shadow-sm placeholder-gray-400 
                focus:outline-none focus:ring-indigo-500 
                focus:border-indigo-500 sm:text-sm` }
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

export default ModalExperience;
