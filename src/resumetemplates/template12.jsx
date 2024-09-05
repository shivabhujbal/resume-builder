import React from 'react'
import templateData from './templateData'

function template12() {
  return (
    <div className="h-[1122.5px] w-[793.7px] bg-sky-300 mx-auto my-10 px-4 py-6" style={{ fontFamily: 'Times New Roman' }}> 
      <div>
        <div className="flex flex-col items-center text-center mb-8"> 
          <div>
            <h1 className="text-4xl font-bold" >
              {`${templateData.firstname} ${templateData.lastname}`}</h1>
            <h2 className="text-xl font-medium">
              {templateData.profession}</h2>
          </div>
        </div>
        <hr className="w-full h-full mt-4 border-gray-400 border-2" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="col-span-1 md:col-span-1 bg-gray-300 p-4 rounded-sm shadow-md">
            <h3 className="text-xl font-bold mb-1" >CONTACT</h3>
            <ul className="text-base"> {/* Applied text-sm class */}
              <li><span className='font-semibold'>Location :</span> {`${templateData.city}, ${templateData.country}`}</li>
              <li><span className='font-semibold'>Mobile No :</span> {templateData.phone}</li>
              <li><span className='font-semibold'>Email :</span> {templateData.email}</li>
              <li>
              <span className='font-semibold'>LinkedIn :</span> <a href={templateData.linkedIn} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                  {templateData.linkedIn}
                </a>
              </li>
              <li>
              <span className='font-semibold'>GitHub : </span><br />
                <a href={templateData.GitHub} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                  {templateData.GitHub}
                </a>
              </li>
            </ul>

            <div className='mt-36'>
            <h3 className="text-xl font-bold mb-1 ">SKILLS</h3>
            <ul className="text-sm"> {/* Applied text-sm class */}
              <li>
                <strong>Primary:</strong> {templateData.skills.primaryList.join(", ")}
              </li>
              <li>
                <strong>Secondary:</strong> {templateData.skills.secondaryList.join(", ")}
              </li>
            </ul>
            </div>

            <h3 className="text-base font-bold mb-1 mt-8">LANGUAGES</h3>
            <ul className="text-sm"> {/* Applied text-sm class */}
              {templateData.languages.map((lang, index) => (
                <li key={index}>{lang}</li>
              ))}
            </ul>
           
          </div>

          <div className="col-span-1 md:col-span-1">
            <h3 className="text-base font-bold mb-4">EDUCATION</h3>
            <ul className="text-sm"> {/* Applied text-sm class */}
              {templateData.education.map((edu, index) => (
                <li key={edu.EducationID}>
                  {`${edu.sclName} | ${edu.sclLocation}`}
                  <br />
                  {`${edu.degree} in ${edu.fieldOfStudy}, ${edu.gradeYear}`}
                </li>
              ))}
            </ul>
            +

            <h3 className="text-base font-bold mb-4 mt-8">EXPERIENCE</h3>
            <ul className="text-sm"> {/* Applied text-sm class */}
              {templateData.experience.map((exp, index) => (
                <li key={index}>
                  {`${exp.dateRange}`}
                  <br />
                  {`${exp.title} | ${exp.company}`}
                  <br />
                  {exp.location}
                  <ul className="text-sm"> {/* Applied text-sm class for nested list */}
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            
            <h3 className="text-base font-bold mb-4 mt-8">CERTIFICATIONS</h3>
            <ul className="text-sm"> {/* Applied text-sm class */}
              {templateData.certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
           
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default template12