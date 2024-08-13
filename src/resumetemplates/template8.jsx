import React from 'react';
import templateData from './templateData';

const Template8 = () => {
  const {
    profileImage,
    firstname,
    lastname,
    profession,
    city,
    country,
    phone,
    email,
    linkedIn,
    GitHub,
    education,
    experience,
    skills,
    certifications,
    languages,
    summary,
  } = templateData;

  return (
    <div id="cv" className="w-full max-w-3xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg border border-gray-200 h-full">
      <header className="flex items-center border-b-2 border-orange-500 pb-6 mb-6">
        
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800">{`${firstname} ${lastname}`}</h1>
          <h2 className="text-0xl font-semibold text-gray-600">{profession}</h2>
          <p className="text-gray-600 mt-2">{city}, {country}</p>
          <p className="text-gray-600">
            <a href={`mailto:${email}`} className="text-blue-600 hover:text-orange-500">{email}</a>
          </p>
          <p className="text-gray-600">ph: {phone}</p>
          <p className="text-gray-600">
            LinkedIn: <a href={linkedIn} className="text-blue-600 hover:text-orange-500">{linkedIn}</a>
          </p>
          <p className="text-gray-600">
            GitHub: <a href={GitHub} className="text-blue-600 hover:text-orange-500">{GitHub}</a>
          </p>
        </div>
      </header>

      <section className="mb-6">
        <h1 className="text-2xl font-semibold text-orange-500 mb-2">Summary</h1>
        <p className="text-gray-700 leading-relaxed">{summary}</p>
      </section>

      <section className="mb-6">
        <h1 className="text-2xl font-semibold text-orange-500 mb-2">Work Experience</h1>
        {experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <h2 className="text-xl font-bold text-gray-800">{exp.title}</h2>
            <p className="text-sm italic text-gray-600">{exp.company} - {exp.location}</p>
            <p className="text-sm italic text-gray-600">{exp.dateRange}</p>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              {exp.responsibilities.map((responsibility, idx) => (
                <li key={idx} className="mt-1">{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h1 className="text-2xl font-semibold text-orange-500 mb-2">Education</h1>
        {education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h2 className="text-xl font-bold text-gray-800">{edu.sclName}</h2>
            <p className="text-sm italic text-gray-600">{edu.degree}, {edu.fieldOfStudy}</p>
            <p className="text-sm italic text-gray-600">{edu.sclLocation}</p>
            <p className="text-sm italic text-gray-600">{edu.gradeYear}</p>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h1 className="text-2xl font-semibold text-orange-500 mb-2">Key Skills</h1>
        <div className="flex flex-wrap gap-4">
          <div className="w-full">
            <h2 className="text-xl font-semibold text-gray-800">Primary Skills</h2>
            <p className="text-gray-700">{skills.primaryList.join(', ')}</p>
          </div>
          <div className="w-full">
            <h2 className="text-xl font-semibold text-gray-800">Secondary Skills</h2>
            <p className="text-gray-700">{skills.secondaryList.join(', ')}</p>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h1 className="text-2xl font-semibold text-orange-500 mb-2">Certifications</h1>
        <ul className="list-disc ml-6 text-gray-800">
          {certifications.map((certification, index) => (
            <li key={index} className="mt-1">{certification}</li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h1 className="text-2xl font-semibold text-orange-500 mb-2">Languages</h1>
        <ul className="list-disc ml-6 text-gray-800">
          {languages.map((language, index) => (
            <li key={index} className="mt-1">{language}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Template8;
