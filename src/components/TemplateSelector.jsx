import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { useNavigate } from 'react-router-dom';

const TemplateSelector = () => {
  const [headshotFilter, setHeadshotFilter] = useState(null);
  const [columnFilter, setColumnFilter] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const navigate = useNavigate();

  const templates = [
    { id: 1, name: 'Template 1', image: '/images/image.png', headshot: 'with', columns: '1' },
    { id: 2, name: 'Template 2', image: '/images/image.png', headshot: 'without', columns: '2' },
    { id: 3, name: 'Template 3', image: '/images/image.png', headshot: 'without', columns: '2' },
    { id: 4, name: 'Template 4', image: '/images/image.png', headshot: 'without', columns: '2' },
    { id: 5, name: 'Template 5', image: '/images/image.png', headshot: 'without', columns: '2' },
  ];

  const handleImageClick = (id) => {
    setSelectedTemplate(id === selectedTemplate ? null : id);
    console.log("Selected id", id);
  };

  const handleTemplate =()=>{
    navigate("/basic-details")
  }

  return (
    <div className="container w-[1120px] mt-5 mb-5">
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
                <img src={template.image} alt={template.name} className="w-full h-56 object-cover transition-transform transform hover:scale-110" />
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
