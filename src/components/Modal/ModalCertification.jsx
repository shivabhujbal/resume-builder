import React, { useState, useEffect } from 'react';
import { IoMdClose } from "react-icons/io";
import { getModalBasicDetails, updateCertificationDetails } from '/src/services/ModalServices.jsx';

function ModalCertification({ isOpen, onClose, onSave }) {
  const [userData, setUserData] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const fetchCertificationData = async () => {
      try {
        const response = await getModalBasicDetails(2); // Adjust based on actual userId or parameter
        console.log('API Response:', response.certification);

        // Adjust based on actual response structure
        const educationList = response?.educationList || [];
        if (educationList.length > 0) {
          const certs = educationList[0]?.certification || [];
          if (Array.isArray(certs)) {
            setUserData(certs);
          } else {
            console.error('Unexpected data format for certifications:', certs);
          }
        } else {
          console.error('Education list is empty.');
        }
      } catch (error) {
        console.error('Error in fetching certification data', error);
      }
    };

    if (isOpen) {
      fetchCertificationData();
    }
  }, [isOpen]);

  const handleChange = (index, value) => {
    const updatedCertifications = [...userData];
    updatedCertifications[index] = value;
    setUserData(updatedCertifications);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Submitting certifications:', userData);
    try {
        const response = await updateCertificationDetails(2, { certification: userData }); // Use the 'certifications' state
        console.log('Update response:', response); // Log the response
        onSave(userData); // Pass the updated certifications to the parent component
        alert("Certification Data Updated Successfully");
        onClose(); // Close the modal after saving
    } catch (error) {
      console.error('Error updating user data:', error);
      alert("Failed to update Certification Data");
    }
};

  

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 shadow-lg transition-shadow duration-300">
      <div className="relative bg-white p-4 rounded shadow-lg max-w-lg w-full">
        <IoMdClose
          className="absolute top-2 right-2 text-gray-700 h-6 w-6 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="text-lg font-bold mb-4">Certifications</h2>
        
        <form onSubmit={handleSubmit}>
          <div>
            {userData.length > 0 ? (
              userData.map((cert, index) => (
                <div key={index} className="mb-2">
                  <input
                    value={cert}
                    onChange={(e) => handleChange(index, e.target.value)}
                    placeholder="Enter certification"
                    className="mt-1 block w-full h-10 px-3
                      bg-white border border-gray-300 rounded-sm
                      shadow-sm placeholder-gray-400
                      focus:outline-none focus:ring-indigo-500
                      focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              ))
            ) : (
              <p>No certifications available.</p>
            )}
          </div>
          <div className="flex justify-between pt-6 pb-16">
            <div></div>
            <div className="flex gap-4">
              <button
                type="submit"
                className="w-32 h-10 py-3 px-5 border
                  border-blue-800 rounded-full
                  text-blue-700 bg-white
                  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2
                  focus:ring-blue-500">
                Save
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-32 h-10 py-3 px-5 border
                  border-blue-800 rounded-full
                  text-blue-700 bg-white
                  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2
                  focus:ring-blue-500">
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalCertification;