import React, { useState } from 'react';
import templateData from './templateData';
import './template2.css';

function Template2() {
  const [profilePicture, setProfilePicture] = useState(null);

  // Handle file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white p-4 shadow-md border border-gray-300 rounded w-8/12 mx-auto h-[95vh] overflow-y-auto font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-gray-300 p-4 hyphens-auto w-full col-span-1 md:col-span-1">
          {/* Profile Picture Section */}
          <div className="flex justify-center mb-2"> {/* Reduced margin */}
            <div className="text-center">
              <label htmlFor="fileInput" className="custom-file-upload mb-2 block mx-auto"> {/* Reduced margin */}
                {profilePicture ? (
                  <img
                    src={profilePicture}
                    alt="Profile"
                    className="w-32 h-32 object-cover rounded-full mx-auto"
                  />
                ) : (
                  "Upload Profile Picture"
                )}
              </label>
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          </div>

          <h3 className="text-base font-bold mt-3">Contact</h3> {/* Reduced top margin */}

          <ul>
            <li className='text-xs'>
              <i className="fas fa-map-marker-alt text-xs" /> {templateData.city}, {templateData.country}
            </li>
            <li className='text-xs'>
              <i className="fas fa-phone text-xs" /> {templateData.phone}
            </li>
            <li>
              <i className="fas fa-envelope text-xs" />
              <a className='text-xs' href={`mailto:${templateData.email}`}>{templateData.email}</a>
            </li>
            <li>
              <i className="fab fa-linkedin text-xs" />
              <a className='text-xs' href={templateData.linkedIn}>LinkedIn</a>
            </li>
            <li>
              <i className="fab fa-github text-xs" />
              <a className='text-xs' href={templateData.GitHub}>GitHub</a>
            </li>
            
            <hr className="mt-2 mb-4 border-gray-300 h-full w-full" />
          </ul>

          <h3 className="text-base font-bold">Certifications</h3>
          <ul>
            {templateData.certifications.map((cert, index) => (
              <li key={index} className="text-xs">{cert}</li>
            ))}
            
            <hr className="mt-2 mb-4 border-gray-300 h-full w-full" />
          </ul>

          <h3 className="text-base font-bold">Languages</h3>
          <ul>
            {templateData.languages.map((lang, index) => (
              <li key={index} className="text-xs">{lang}</li>
            ))}
          </ul>
          
          <hr className="my-4 border-gray-300" />
        </div>

        <div className="p-4 w-full">
          <div className="flex justify-start mb-4">
            <div className="text-left">
              <h1 className="text-xl font-bold ">{templateData.firstname} {templateData.lastname}</h1>
              <h2 className="text-xl font-bold">{templateData.profession}</h2>

              <hr className="mt-2 mb-4 border-gray-300 h-full w-11/12" />
            </div>
          </div>
          <h3 className="text-base font-bold">Education</h3>
          <ul className='text-xs'>
            {templateData.education.map((edu, index) => (
              <li className='text-xs' key={index}>
                <h4 className="text-xs font-bold">{edu.sclName}, {edu.sclLocation}</h4>
                <p className="text-xs">
                  {edu.degree} in {edu.fieldOfStudy}, {edu.gradeYear}
                </p>
              </li>
            ))}
          </ul>
          <hr className="my-4 border-gray-300" />
          
          <h3 className="text-base font-bold">Skills</h3>
          <table>
            <tbody>
              <tr>
                <td className='text-sm font-bold'>Primary Skills</td>
                <td className="text-xs">{templateData.skills.primaryList.join(', ')}</td>
              </tr>
              <tr>
                <td className='text-sm font-bold'>Secondary Skills</td>
                <td className="text-xs">{templateData.skills.secondaryList.join(', ')}</td>
              </tr>
            </tbody>
          </table>
          
          <hr className="my-4 border-gray-300" />
         
          <h3 className="text-base font-bold">Experience</h3>
          <ul>
            {templateData.experience.map((exp, index) => (
              <li key={index}>
                <h4 className="text-xs font-bold">{exp.title}, {exp.company}</h4>
                <p className="text-xs">
                  {exp.location}, {exp.dateRange}
                </p>
                <ul>
                  {exp.responsibilities.map((resp, index) => (
                    <li key={index} className="text-xs">{resp}</li>
                  ))}
                </ul>
              </li>
            ))}
           
            <hr className="mt-2 mb-4 border-gray-300 h-full w-full" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Template2;
