import React, { useState, useEffect } from 'react';
import { IoMdClose } from "react-icons/io";
import { getModalBasicDetails} from '/src/services/ModalServices.jsx'; // Replace with actual service
import { updateBasicDetails } from '../../services/ModalServices';

const ModalSummary = ({ isOpen, onClose, onSave, initialSummary }) => {
  if (!isOpen) return null;

  const [userData, setUserData] = useState({}); // Initialize with an empty object

  useEffect(() => {
    const fetchModalUserData = async () => {
      try {
        const response = await getModalBasicDetails(2);
        setUserData(response.besicDetails || {}); // Set basicDetails directly
      } catch (error) {
        console.error('Error in fetching user data', error);
      }
    };

    fetchModalUserData();
  }, []);

  const handleChange = (e) => {
    setUserData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateBasicDetails(2, userData);
      onSave(userData);
      console.log(userData);
      alert("Summary Updated Successfully");
      onClose();
    } catch (error) {
      // Error handling as you have it
    }
  };
  
  return (
    <div className="modal-overlay h-full">
      <div className="modal-content h-full">
        <IoMdClose 
          className="top-1 right-2 text-gray-700 relative ml-[56rem] h-6 w-10"
          onClick={onClose}
        />
          
        <div>
          <h1 className='font-bold mb-2'>Summary</h1>
          <h5 className='text-sm text-gray-400 mb-5'>Provide a brief summary about yourself.</h5>
          <form className="form-grid px-4 mt-5 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="summary" className="block text-md font-semibold text-gray-700">Summary *</label>
              <textarea
                name="message"
                id="summary"
                value={userData.message || ''}
                onChange={handleChange}
                placeholder="Write your summary here..."
                className="mt-1 block w-80 h-40 px-3 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
    </div>
  );
};

export default ModalSummary;
