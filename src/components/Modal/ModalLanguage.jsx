import React, { useState, useEffect } from 'react';
import { IoMdClose } from "react-icons/io";
import { getModalBasicDetails, updateSkillDetails } from '/src/services/ModalServices.jsx';

function ModalLanguage({ isOpen, onClose, onSave, userId, id }) {
  const [userData, setUserData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchModalUserData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await getModalBasicDetails(userId);

        if (response && Array.isArray(response.skillList)) {
          // Find the skill data by id
          const skillData = response.skillList.find(item => item.id === id);
          
          if (skillData && skillData.languages) {
            // Convert the languages string to an array
            const languagesArray = skillData.languages.split(',').map(lang => lang.trim());
            setUserData(languagesArray); // Set userData as an array of languages
          } else {
            setUserData([]); // Fallback to an empty array if no data is found
          }
          
          setIsLoading(false);
        } else {
          console.warn('Invalid response format or skillList is not an array', response);
          setUserData([]); // Fallback to an empty array if response format is invalid
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error in fetching user data', error);
        setUserData([]); // Fallback to an empty array in case of error
        setIsLoading(false);
      }
    };

    if (isOpen) { // Fetch data only when the modal is open
      fetchModalUserData();
    }
  }, [id, isOpen, userId]);
  
  const handleChange = (index, value) => {
    const newLanguages = [...userData];
    newLanguages[index] = value;
    setUserData(newLanguages);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const updatedLanguages = userData.join(','); // Convert array back to a comma-separated string
      console.log('Updating with data:', updatedLanguages);
      const response = await updateSkillDetails(id, { languages: updatedLanguages });
      console.log('API Update Response:', response);
      console.log("updatedLanguages",updatedLanguages);
      onSave(updatedLanguages);
      alert("Language Details Updated Successfully");
      onClose();
    } catch (error) {
      console.error('Error updating language details:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 shadow-lg transition-shadow duration-300">
      <div className="bg-white p-4 rounded shadow-lg max-w-lg w-full relative">
        <IoMdClose
          className="top-2 right-2 text-gray-700 absolute h-6 w-6"
          onClick={onClose}
        />
        <h2 className="text-lg font-bold mb-4">Languages</h2>
        <form onSubmit={handleSubmit}>
          <div>
            {userData.map((lang, index) => (
              <div key={index} className="mb-2">
                <input
                  type="text"
                  value={lang}
                  onChange={(e) => handleChange(index, e.target.value)}
                  placeholder="Enter language"
                  className="mt-1 block w-full h-10 px-3
                    bg-white border border-gray-300 rounded-sm
                    shadow-sm placeholder-gray-400
                    focus:outline-none focus:ring-indigo-500
                    focus:border-indigo-500 sm:text-sm"
                />
              </div>
            ))}
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
                  focus:ring-blue-500 h-full"
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

export default ModalLanguage;
