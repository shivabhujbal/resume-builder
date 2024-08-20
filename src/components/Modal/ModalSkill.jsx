import React, { useState, useEffect } from 'react';
import { getModalBasicDetails, updateSkillDetails } from '/src/services/ModalServices.jsx';

const ModalSkill = ({ isOpen, onClose, onSave }) => {
  const [editedSkills, setEditedSkills] = useState([]);

  useEffect(() => {
    const fetchModalUserData = async () => {
      try {
        const response = await getModalBasicDetails(3);
        const skillData = response.skillList || []; // Assuming skillList is an array
        setEditedSkills(skillData);
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };

    if (isOpen) {
      fetchModalUserData();
    }
  }, [isOpen]);

  const handleSkillChange = (skillType, index, newSkills) => {
    const updatedSkills = editedSkills.map((skill, i) =>
      i === index && skill.skillType === skillType
        ? { ...skill, skills: newSkills }
        : skill
    );
    setEditedSkills(updatedSkills);
  };

  const handleSkillInputChange = (skillType, index, event) => {
    const newSkills = event.target.value.split(',').map(s => s.trim());
    handleSkillChange(skillType, index, newSkills);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Ensure editedSkills is an array
    if (!Array.isArray(editedSkills)) {
      alert('Invalid skill data');
      return;
    }
  
    try {
      // Update skill details
      const response = await updateSkillDetails(3, { skillList: editedSkills });
  
      // Check if the response is successful
      if (response && response.status === 200) {
        if (onSave) onSave(editedSkills); // Call the onSave callback if provided
        alert("Skills Updated Successfully");
        onClose();
      } else {
        // Handle unsuccessful response
        alert("Failed to Save Skills");
      }
    } catch (error) {
      // Handle errors from the API
      console.error('Error updating skills:', error);
      alert("Failed to Save Skills");
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
        <h2 className="text-2xl font-bold mb-4">Skills</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-md font-semibold text-gray-700 mb-2">
              Primary Skills
            </label>
            {editedSkills
              .filter(skill => skill.skillType === 'PRIMARY')
              .map((skill, index) => (
                <div key={index} className="mb-2">
                  <input
                    type="text"
                    value={skill.skills.join(', ')}
                    onChange={(e) => handleSkillInputChange('PRIMARY', index, e)}
                    className="mt-1 block w-full px-3 h-10 
                    bg-white border 
                    border-gray-300 rounded-sm shadow-sm 
                    placeholder-gray-400 focus:outline-none 
                    focus:ring-indigo-500 
                    focus:border-indigo-500 sm:text-sm"
                  />
                  
                </div>
              ))}
          </div>

          <div className="mb-4">
            <label className="block text-md font-semibold text-gray-700 mb-2">
              Secondary Skills
            </label>
            {editedSkills
              .filter(skill => skill.skillType === 'SECONDARY')
              .map((skill, index) => (
                <div key={index} className="mb-2">
                  <input
                    type="text"
                    value={skill.skills.join(', ')}
                    onChange={(e) => handleSkillInputChange('SECONDARY', index, e)}
                    className="mt-1 block w-full px-3 h-10
                    bg-white border 
                    border-gray-300 rounded-sm shadow-sm 
                    placeholder-gray-400 focus:outline-none 
                    focus:ring-indigo-500 
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalSkill;
