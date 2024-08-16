import React from 'react';
import templateData from './templateData';

const Template9 = () => {
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
    <div id="cv" className="w-full max-w-4xl mx-auto my-12 p-8 bg-gray-100 shadow-lg rounded-lg border border-gray-300">
      <header className="flex flex-col md:flex-row items-center border-b-4 border-teal-600 pb-8 mb-8">
       
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold text-teal-700">{`${firstname} ${lastname}`}</h1>
          <h2 className="text-xl font-semibold text-teal-600">{profession}</h2>
          <p className="text-teal-500 mt-2">{city}, {country}</p>
          <p className="text-teal-500">
            <a href={`mailto:${email}`} className="hover:text-teal-700">{email}</a>
          </p>
          <p className="text-teal-500">ph: {phone}</p>
          <p className="text-teal-500">
            LinkedIn: <a href={linkedIn} className="hover:text-teal-700">{linkedIn}</a>
          </p>
          <p className="text-teal-500">
            GitHub: <a href={GitHub} className="hover:text-teal-700">{GitHub}</a>
          </p>
        </div>
      </header>

      <section className="mb-8">
        <h1 className="text-3xl font-semibold text-teal-600 mb-4">Summary</h1>
        <p className="text-gray-800 leading-relaxed">{summary}</p>
      </section>

      <section className="mb-8">
        <h1 className="text-3xl font-semibold text-teal-600 mb-4">Work Experience</h1>
        {experience.map((exp, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">{exp.title}</h2>
            <p className="text-sm italic text-gray-600">{exp.company} - {exp.location}</p>
            <p className="text-sm italic text-gray-600">{exp.dateRange}</p>
            <ul className="list-disc ml-8 mt-2 text-gray-700">
              {exp.responsibilities.map((responsibility, idx) => (
                <li key={idx} className="mt-1">{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h1 className="text-3xl font-semibold text-teal-600 mb-4">Education</h1>
        {education.map((edu, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">{edu.sclName}</h2>
            <p className="text-sm italic text-gray-600">{edu.degree}, {edu.fieldOfStudy}</p>
            <p className="text-sm italic text-gray-600">{edu.sclLocation}</p>
            <p className="text-sm italic text-gray-600">{edu.gradeYear}</p>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h1 className="text-3xl font-semibold text-teal-600 mb-4">Key Skills</h1>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full">
            <h2 className="text-2xl font-semibold text-gray-800">Primary Skills</h2>
            <p className="text-gray-700">{skills.primaryList.join(', ')}</p>
          </div>
          <div className="w-full">
            <h2 className="text-2xl font-semibold text-gray-800">Secondary Skills</h2>
            <p className="text-gray-700">{skills.secondaryList.join(', ')}</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h1 className="text-3xl font-semibold text-teal-600 mb-4">Certifications</h1>
        <ul className="list-disc ml-8 text-gray-800">
          {certifications.map((certification, index) => (
            <li key={index} className="mt-1">{certification}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h1 className="text-3xl font-semibold text-teal-600 mb-4">Languages</h1>
        <ul className="list-disc ml-8 text-gray-800">
          {languages.map((language, index) => (
            <li key={index} className="mt-1">{language}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Template9;
