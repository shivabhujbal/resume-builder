import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { useNavigate } from 'react-router-dom';
import { components } from 'react-select';
import resume1 from '../assets/imageSelector/resume1.png';
import resume2 from '../assets/imageSelector/resume2.png';
import resume3 from '../assets/imageSelector/resume3.png';
import resume4 from '../assets/imageSelector/resume4.png';
import resume5 from '../assets/imageSelector/resume5.png';
import resume6 from '../../public/image/resume1.png';
import resume7 from '../../public/image/resume2.png';
import resume8 from '../../public/image/resume3.png';
import resume9 from '../../public/image/resume4.png';
import resume10 from '../../public/image/resume5.png';
import resume11 from '../../public/image/resume6.png';
import resume12 from '../../public/image/resume7.png';
import resume13 from '../../public/image/resume8.png';
import resume14 from '../../public/image/resume9.png';
import resume15 from '../../public/image/resume1.png';
import resume16 from '../../public/image/resume2.png';
import resume17 from '../../public/image/resume3.png';
import resume18 from '../../public/image/resume4.png';
import resume19 from '../../public/image/resume5.png';
import resume20 from '../../public/image/resume8.png';


const TemplateSelector = () => {
  const [headshotFilter, setHeadshotFilter] = useState(null);
  const [columnFilter, setColumnFilter] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const navigate = useNavigate();

  const templates = [
    { id: 1, name: 'Template 1', image: resume1, headshot: 'with', columns: '1' ,component:"<Template1/>"},
    { id: 2, name: 'Template 2', image: resume2, headshot: 'without', columns: '2' },
    { id: 3, name: 'Template 3', image: resume3, headshot: 'without', columns: '2' },
    { id: 4, name: 'Template 4', image: resume4, headshot: 'without', columns: '2' },
    { id: 5, name: 'Template 5', image: resume5, headshot: 'without', columns: '2' },
    { id: 6, name: 'Template 6', image: resume6, headshot: 'without', columns: '2' },
    { id: 7, name: 'Template 7', image: resume7, headshot: 'without', columns: '2' },
    { id: 8, name: 'Template 8', image: resume8, headshot: 'without', columns: '2' },
    { id: 9, name: 'Template 9', image: resume9, headshot: 'without', columns: '2' },
    { id: 10, name: 'Template 10', image: resume10, headshot: 'without', columns: '2' },
    { id: 11, name: 'Template 11', image: resume11, headshot: 'without', columns: '2' },
    { id: 12, name: 'Template 12', image: resume12, headshot: 'without', columns: '2' },
    { id: 13, name: 'Template 13', image: resume13, headshot: 'without', columns: '2' },
    { id: 14, name: 'Template 14', image: resume14, headshot: 'without', columns: '2' },
    { id: 15,name: 'Template 15', image: resume15, headshot: 'without', columns: '2' },
    { id: 16, name: 'Template 16', image: resume16, headshot: 'without', columns: '2' },
    { id: 17, name: 'Template 17', image: resume17, headshot: 'without', columns: '2' },
    { id: 18, name: 'Template 18', image: resume18, headshot: 'without', columns: '2' },
    { id: 19, name: 'Template 19', image: resume19, headshot: 'without', columns: '2' },
    { id: 20, name: 'Template 20', image: resume20, headshot: 'without', columns: '2' },
    
  ];
  

  const handleImageClick = (id) => {
    setSelectedTemplate(id === selectedTemplate ? null : id);
    console.log("Selected id", id);
  };

  const handleTemplate =()=>{
    navigate("/basic-details")
  }

  return (
    <div className="container w-[1120px] mt-5 mb-5 ">
      <h1 className="text-4xl font-semibold leading-tight text-center mb-4">Choose from our best templates for Job Seekers</h1>
      <p className="text-center  font-semibold mb-12  border-t-2 border-indigo-900">You can always change your template later.</p>
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 p-4">
          <div className="mb-8">
            <h2 className="font-bold mb-4">Filters</h2>
            <div className="flex flex-col mb-6">
              <h3 className="font-bold mb-2">Headshot</h3>
              <label className="inline-flex items-center mb-2">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  onChange={() => setHeadshotFilter(headshotFilter === 'with' ? null : 'with')}
                />
                <span className="ml-2">With photo</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  onChange={() => setHeadshotFilter(headshotFilter === 'without' ? null : 'without')}
                />
                <span className="ml-2">Without photo</span>
              </label>
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold mb-2">Columns</h3>
              <label className="inline-flex items-center mb-2">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  onChange={() => setColumnFilter(columnFilter === '1' ? null : '1')}
                />
                <span className="ml-2">1 Column</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  onChange={() => setColumnFilter(columnFilter === '2' ? null : '2')}
                />
                <span className="ml-2">2 Columns</span>
              </label>
            </div>
          </div>
        </div>

        {/* Template Cards */}
        <div className="w-3/4 grid grid-cols-3 gap-4">
          {templates
            .filter(template => !headshotFilter || template.headshot === headshotFilter)
            .filter(template => !columnFilter || template.columns === columnFilter)
            .map(template => (
              <div
                key={template.id}
                className={`border rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-110 ${selectedTemplate === template.id ? 'border-blue-500 shadow-lg' : 'border-gray-300'} `}
                onClick={() => handleImageClick(template.id)}
              >
                <img src={template.image} alt={template.name} className="w-full h-fit object-cover transition-transform transform hover:scale-110" />
                <div className="p-2">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    checked={selectedTemplate === template.id}
                    readOnly
                  />
                  <span className="ml-2">{template.name}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="flex justify-end mt-8 space-x-4">
        <button 
          className="py-3 px-5 h-fit border border-blue-800 rounded-full text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >Choose Later</button>
        <button 
          className="py-3 px-5 text-base font-medium border border-transparent rounded-full shadow-sm text-blue-700 bg-yellow-400 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleTemplate}
        >Choose Template</button>
      </div>
    </div>
  );
};

export default TemplateSelector;
