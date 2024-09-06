import React, { useState, useEffect } from 'react';
import { getModalBasicDetails, updateSkillDetails } from '/src/services/ModalServices.jsx';

const ModalSkill = ({ isOpen, onClose, onSave, userId, id }) => {
  const [editedSkill, setEditedSkill] = useState({ skillType: '', skills: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchModalUserData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await getModalBasicDetails(userId);

        if (response && Array.isArray(response.skillList)) {
          const skillData = response.skillList.find((item) => item.id === id);

          if (skillData) {
            setUserData(skillData);
            setEditedSkill({
              skillType: skillData.skillType,
              skills: Array.isArray(skillData.skills) ? skillData.skills : [],
            });
          } else {
            setUserData({});
            setEditedSkill({ skillType: '', skills: [] });
          }
        } else {
          console.warn('Invalid response format or skillList is not an array', response);
          setUserData({});
          setEditedSkill({ skillType: '', skills: [] });
        }
      } catch (error) {
        console.error('Error in fetching user data', error);
        setUserData({});
        setEditedSkill({ skillType: '', skills: [] });
      } finally {
        setIsLoading(false);
      }
    };

    if (isOpen) {
      fetchModalUserData();
    }
  }, [id, isOpen, userId]);

  const handleSkillInputChange = (event) => {
    const newSkills = event.target.value.split(',').map((s) => s.trim());
    setEditedSkill((prev) => ({
      ...prev,
      skills: newSkills,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
  
      // Ensure that only the skills are included in the updatedSkillData
      const updatedSkillData = {
        skillList: [
          {
            skills: editedSkill.skills // Only include the `skills` array
          }
        ]
      };
  
      // Log the data being sent to the API
      console.log('Submitting data:', updatedSkillData);
  
      // Make the API call to update the skills
      const response = await updateSkillDetails(id, updatedSkillData);
  
      // Log the response from the API
      console.log('API response:', response);
  
      // if (response && response.data) {
      //   if (onSave) onSave(updatedSkillData);
      //   console.log("updatedSkills", updatedSkillData);
      //   alert('Skill updated successfully');
      //   onClose();
      // } else {
      //   alert('Failed to save skill. Please try again.');
      // }
    } catch (error) {
      console.error('Error updating skill:', error.message);
  
      // Check if there is an error response from the API
      if (error.response) {
        console.error('Error response:', error.response.data);
      }
  
      alert('Failed to save skill. Please check your internet connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-2xl font-bold mb-4">Edit Skill</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-md font-semibold text-gray-700 mb-2">Skill</label>

            <input
              type="text"
              value={editedSkill.skills.join(', ')}
              onChange={handleSkillInputChange}
              className="mt-1 block w-full px-3 h-10 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="flex justify-between pt-3 pb-16">
            <button
              type="submit"
              className="w-32 py-3 px-5 border h-full border-blue-800 rounded-full text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Save
            </button>

            <button
              type="button"
              onClick={onClose}
              className="py-3 px-5 text-base font-medium border border-transparent rounded-full shadow-sm text-blue-700 bg-yellow-400 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalSkill;
