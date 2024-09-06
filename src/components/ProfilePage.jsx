import React, { useState, useEffect } from 'react';
import { getBasicDetails } from '/src/services/SummaryDetailService';
import ProfileSection from './ProfileSection';
import { FiMail, FiMapPin, FiPhone} from 'react-icons/fi'; // Importing the email icon from react-icons
import { FaCamera } from 'react-icons/fa'; // Import the photo icon
import { PaperClipIcon } from '@heroicons/react/24/outline'; // Ensure this icon exists


const ProfilePage = () => {
  const [profilePic, setProfilePic] = useState('/path/to/profile-pic.jpg'); // Default profile picture
  const [userData, setUserData] = useState(null);
  const [resume, setResume] = useState(null); // State for managing the resume

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (file.type.includes('pdf') || file.type.includes('doc') || file.type.includes('docx')) {
          setResume(file.name); // Save the file name or file data
        } else if (file.type.includes('image')) {
          setProfilePic(reader.result); // Update profilePic state if it's an image
        } else {
          alert('Please upload a valid resume file (.pdf, .doc, .docx)');
        }
      };
      reader.readAsDataURL(file);
    }
  };


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getBasicDetails(1);
        setUserData(response);

      } catch (error) {
        console.error('Error in fetching user data', error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const checkMissingFields = () => {
    const missingFields = [];
    if (!profile.name) missingFields.push('Name');
    if (!profile.email) missingFields.push('Email');
    if (!profile.phone) missingFields.push('Phone');
    // Add more fields as needed
    return missingFields;
  };

     // Safely check for userData.experienceList and userData.besicDetails
  const { besicDetails, experienceList } = userData;
  const company = experienceList?.company || 'Unknown Company';

  return (
    <div>
      <div className="max-w-7xl mx-auto my-1 p-4 space-y-4">
        <div className="p-4 bg-white rounded-lg shadow-md flex justify-between max-h-72">

          <div className="flex justify-between items-start w-full">
            {/* ProfileHeader */}
            <div className="flex items-center  w-1/2 mb-auto min-h-[300px]"> {/* Increased min-height */}
              <div className="relative">
                <div className="w-40 h-40 bg-gray-300 rounded-full border flex items-center justify-center text-4xl text-white mb-16"> {/* Increased width and height */}
                  {/* Profile Picture Placeholder */}
                  <img
                    className="rounded-full w-full h-full object-cover"
                    src={profilePic}
                    alt="Profile Picture"
                  />
                </div>
                {/* <div className="absolute bottom-0 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded-full mb-20">
                  85%
                </div> */}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="absolute bottom-0 right-0 opacity-0 w-full h-full cursor-pointer"
                />
              </div>
              <div className="ml-10 flex-1">
                <h2 className="text-2xl font-semibold">{userData.besicDetails.first_name} {userData.besicDetails.last_name}</h2>
                <p className="text-sm text-gray-600">{userData.besicDetails.profession}</p>
                <p className="text-sm text-gray-400">Profile last updated - 10 Aug, 2024</p>
                {/* Horizontal Line */}
                <hr className="my-2 border-t border-gray-300" />
                {/* ProfileDetails */}
                <div className="flex items-center space-x-4 mt-2">
                 
                    <div className="flex items-center space-x-2">
                      <FiMapPin className="text-gray-400" /> {/* Added location icon with some styling */}
                      <span className="text-gray-400 text-sm">
                        {userData.besicDetails.city},{userData.besicDetails.country}
                      </span>
                    </div>
                  
                  <div className="flex items-center space-x-2">
                    <FiMail className="text-gray-400 text-sm" /> {/* Added email icon with some styling */}
                    <span className="text-gray-400 text-sm">{userData.besicDetails.email}</span>
                  </div>
                  {/* Vertical Line */}
                  <div className="h-10 border-l border-gray-300 mx-4"></div>
                  <FiPhone className="text-gray-400" /> {/* Added phone icon with some styling */}
                    <span className='text-gray-400 text-sm'>{userData.besicDetails.phone}</span>
                 
                </div>
              </div>
            </div>

            {/* CompletionDetails */}
            <div className="p-4 bg-orange-100 rounded-lg shadow-md w-[35%] ml-auto mb-auto min-h-[250px]"> {/* Adjusted height here */}
              <div className="flex flex-col items-center justify-between h-full">
                <div>
                  <div className="flex items-center space-x-2">
                  <PaperClipIcon className="h-5 w-5 mr-2" /> {/* React icon */}
                    <div className="flex items-center space-x-2">
                      {/* Hidden file input */}
                      <input
                        type="file"
                        id="resumeInput"
                        accept=".pdf,.doc,.docx"
                        style={{ display: 'none' }} // Hide the input
                        onChange={handleFileChange} // Handle file selection
                      />
                      {/* Button to trigger file input */}
                      <button
                        onClick={() => document.getElementById('resumeInput').click()}
                        className="px-0 py-2 text-black rounded"
                      >
                        
                        Add Resume
                      </button>
                      {/* <span className="text-green-500">+10%</span> */}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                  <FaCamera className="w-5 h-5 text-gray-600" /> {/* Added photo icon */}
                    <div>
                      <div className="flex items-center space-x-2">
                        {/* Hidden file input for photo upload */}
                        <input
                          type="file"
                          accept="image/*" // Accept all image file types
                          style={{ display: 'none' }} // Hide the input element
                          onChange={handleFileChange} // Handle the file selection
                          className="hidden"
                          id="profilePicUpload"
                        />

                        {/* Button to trigger file input */}
                        <label
                          htmlFor="profilePicUpload"
                          className="px-2 py-2 text-black cursor-pointer"
                        >
                          Add Photo
                        </label>

                        {/* <span className="text-green-500">+5%</span> */}
                      </div>

                    </div>

                  </div>
                </div>
                
                <button className="bg-red-500 text-white px-4 py-2 rounded-full mt-16">Add 2 missing details</button>
              </div>
            </div>

          </div>
        </div>

      </div>
      <div>
        <ProfileSection />
      </div>
    </div>
  );
};

export default ProfilePage;
