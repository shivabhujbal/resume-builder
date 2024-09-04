import React, { useState, useEffect } from 'react';
import { IoMdClose } from "react-icons/io";
import { getModalBasicDetails, updateSkillDetails } from '/src/services/ModalServices.jsx';

function ModalLanguage({ isOpen, onClose, onSave, userId, id }) {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchModalUserData = async () => {
      if (id && userId) {
        setIsLoading(true);
        setError(null);
        try {
          const response = await getModalBasicDetails(userId);
          if (response && Array.isArray(response.skillList)) {
            const skillData = response.skillList.find(item => item.id === id);
            if (skillData && skillData.languages) {
              const languagesArray = skillData.languages.split(',').map(lang => lang.trim());
              setUserData(languagesArray);
            } else {
              setUserData([]);
            }
          } else {
            console.warn('Invalid response format or skillList is not an array', response);
            setUserData([]);
          }
          setIsLoading(false);
        } catch (error) {
          console.error('Error in fetching user data', error);
          setUserData([]);
          setIsLoading(false);
        }
      }
    };

    if (isOpen) {
      fetchModalUserData();
    }
  }, [id, userId, isOpen]);
  
  const handleChange = (index, value) => {
    const newLanguages = [...userData];
    newLanguages[index] = value;
    setUserData(newLanguages);
  };

  const handleSubmit = async (event) => {
    //event.preventDefault();

    try {
      const updatedLanguages = userData.join(','); // Convert array back to a comma-separated string
      console.log('Updating with data:', updatedLanguages);

      const response = await updateSkillDetails(id, { languages: updatedLanguages }); // Make sure to pass `id` and not `selectedLanguageId`
      console.log('API Update Response:', response);

      onSave(updatedLanguages); // Pass updated data to parent component
      alert("Language Details Updated Successfully");
      onClose(); // Close the modal after saving
    } catch (error) {
      console.error('Error updating language details:', error);
    }
  };

  const handleSave = (updatedLanguages) => {
    console.log('Languages saved:', updatedLanguages);
    // Update the parent component's state or perform other actions
  };
  

  if (!isOpen) return null;

  console.log("Language", id);

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
