import React from "react";
import templateData from "./templateData";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function Template() {
  const {
    firstname,
    lastname,
    profession,
    city,
    country,
    phone,
    email,
    linkedIn,
    GitHub,
    summary,
    experience,
    education,
    skills,
    certifications,
    languages,
  } = templateData;

  const downloadPDF = () => {
    const input = document.getElementById('pdfContent');
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`${firstname}_${lastname}_Resume.pdf`);
    });
  };

  return (
    <div className="form bg-zinc-100 w-[60%] h-auto mx-auto border border-zinc-800 p-4 m-10">
      <div id="pdfContent">
        <div className="w-full mb-4">
          <div className="flex justify-between items-start">
            <div className="font-[Roboto_Condensed] mb-4">
              <p className="text-4xl font-bold leading-tight mb-0">
                {firstname} {lastname}
              </p>
              <p className="text-lg font-semibold">{profession}</p>
              <p className="text-gray-600">
                {city}, {country}
              </p>
            </div>
            <div className="text-right mb-4">
              <div className="space-y-1">
                <p>{email}</p>
                <p>{phone}</p>
                <p>
                  <a href={linkedIn} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </p>
                <p>
                  <a href={GitHub} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8"> {/* Increased spacing between sections */}
          {/* Summary Section */}
          <div className="break-words">
            <p className="text-lg uppercase border-t-2 border-gray-300 py-2 font-[Roboto_Condensed]">
              Summary
            </p>
            <div className="ml-4">
              <p>{summary}</p>
            </div>
          </div>

          {/* Work Experience Section */}
          <div className="break-words">
            <p className="text-lg uppercase border-t-2 border-gray-300 py-2 font-[Roboto_Condensed]">
              Work Experience
            </p>
            <div className="ml-4 space-y-4">
              {experience.map((job, index) => (
                <div className="relative pl-6" key={index}>
                  <div className="absolute top-2 left-0 w-3 h-3 bg-blue-500 rounded-full"></div>
                  <p className="text-xl font-[Roboto_Condensed]">{job.title}</p>
                  <p>
                    <span className="font-bold text-gray-600">{job.company}</span>
                    , {job.location}
                  </p>
                  <p className="text-gray-600">{job.dateRange}</p>
                  <ul className="list-none pl-0 space-y-1">
                    {job.responsibilities.map((task, idx) => (
                      <li key={idx} className="leading-snug ml-4">
                        • {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="break-words">
            <p className="text-lg uppercase border-t-2 border-gray-300 py-2 font-[Roboto_Condensed]">
              Education
            </p>
            <div className="ml-4 space-y-4">
              {education.map((edu, index) => (
                <div className="relative pl-6" key={index}>
                  <div className="absolute top-2 left-0 w-3 h-3 bg-blue-500 rounded-full"></div>
                  <p className="text-xl font-[Roboto_Condensed]">
                    {edu.degree} in {edu.fieldOfStudy}
                  </p>
                  <p>
                    {edu.sclName}, {edu.sclLocation}
                  </p>
                  <p className="text-gray-600">{edu.gradeYear}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="break-words">
            <p className="text-lg uppercase border-t-2 border-gray-300 py-2 font-[Roboto_Condensed]">
              Skills
            </p>
            <div className="ml-4 space-y-2">
              <p>
                <span className="font-semibold">Primary Skills:</span>{" "}
                {skills.primaryList.join(", ")}
              </p>
              <p>
                <span className="font-semibold">Secondary Skills:</span>{" "}
                {skills.secondaryList.join(", ")}
              </p>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="break-words">
            <p className="text-lg uppercase border-t-2 border-gray-300 py-2 font-[Roboto_Condensed]">
              Certifications
            </p>
            <div className="ml-4">
              <ul className="list-disc pl-5 space-y-1">
                {certifications.map((cert, index) => (
                  <li key={index} className="leading-snug">{cert}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Languages Section */}
          <div className="break-words pb-4">
            <p className="text-lg uppercase border-t-2 border-gray-300 py-2 font-[Roboto_Condensed]">
              Languages
            </p>
            <div className="ml-4">
              <ul className="list-disc pl-5 space-y-1">
                {languages.map((language, index) => (
                  <li key={index} className="leading-snug">{language}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Place the button outside the content div */}
      <button
        onClick={downloadPDF}
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
      >
        Download PDF
      </button>
    </div>
  );
}

export default Template;
