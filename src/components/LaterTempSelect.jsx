import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { templates } from '../constants/templateList';

const LaterTempSelect = () => {
    const [headshotFilter, setHeadshotFilter] = useState(null);
    const [columnFilter, setColumnFilter] = useState(null);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const navigate = useNavigate();
  
    
    
  
    const handleImageClick = (id) => {
      setSelectedTemplate(id === selectedTemplate ? null : id);
      console.log("Selected id", id);
    };
  
    const handleTemplate = () => {
      if (selectedTemplate) {
        localStorage.setItem('templateId', selectedTemplate);
      }
      navigate('/template-loader');
    };


    return (
      <div className="container w-full mx-auto p-6 shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-center mb-6">Choose Your Resume Template</h1>
      <p className="text-center mb-8 text-gray-600">Easily switch templates later if you change your mind.</p>
        
  <div className="grid grid-cols-4 gap-8">
    {/* Filter Section */}
    <div className="col-span-1 p-4 bg-gray-100 rounded-lg shadow-inner">
      <h2 className="text-lg font-bold mb-4">Filters</h2>
  
      {/* Headshot Filter */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Headshot</h3>
        <div className="flex items-center mb-2">
          <input
            type="radio"
            id="allTemplates"
            name="headshot"
            value="all"
            checked={headshotFilter === null}
            onChange={() => {
              setHeadshotFilter(null);
              setColumnFilter(null);
            }}
            className="mr-2"
          />
          <label htmlFor="allTemplates" className="cursor-pointer">All</label>
        </div>
        <div className="flex items-center mb-2">
          <input
            type="radio"
            id="withPhoto"
            name="headshot"
            value="with"
            checked={headshotFilter === 'with'}
            onChange={() => setHeadshotFilter('with')}
            className="mr-2"
          />
          <label htmlFor="withPhoto" className="cursor-pointer">With Photo</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="withoutPhoto"
            name="headshot"
            value="without"
            checked={headshotFilter === 'without'}
            onChange={() => setHeadshotFilter('without')}
            className="mr-2"
          />
          <label htmlFor="withoutPhoto" className="cursor-pointer">Without Photo</label>
        </div>
      </div>
  
      {/* Columns Filter */}
      <div>
        <h3 className="font-semibold mb-2">Columns</h3>
        <div className="flex items-center mb-2">
          <input
            type="radio"
            id="oneColumn"
            name="columns"
            value="1"
            checked={columnFilter === '1'}
            onChange={() => setColumnFilter('1')}
            className="mr-2"
          />
          <label htmlFor="oneColumn" className="cursor-pointer">1 Column</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="twoColumns"
            name="columns"
            value="2"
            checked={columnFilter === '2'}
            onChange={() => setColumnFilter('2')}
            className="mr-2"
          />
          <label htmlFor="twoColumns" className="cursor-pointer">2 Columns</label>
        </div>
      </div>
    </div>
  
    {/* Template Selection Grid */}
    <div className="col-span-3 grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
      {templates
        .filter((template) => !headshotFilter || template.headshot === headshotFilter)
        .filter((template) => !columnFilter || template.columns === columnFilter)
        .map((template) => (
          <div
            key={template.id}
            className={`relative border rounded-lg overflow-hidden shadow-md p-4 cursor-pointer transition-transform transform hover:scale-105 ${
              selectedTemplate === template.id ? 'border-blue-500' : 'border-gray-300'
            }`}
  
            onClick={() => handleImageClick(template.id)}
          >
            <img
              src={template.image}
              alt={template.name}
              className="w-full h-48 object-contain mb-4"
            />
             {/* Checkbox only visible when the template is selected */}
          {selectedTemplate === template.id && (
            <div className="absolute top-4 right-4">
              <input
                type="checkbox"
                checked={selectedTemplate === template.id}
                onChange={() => handleImageClick(template.id)} // This is for toggling the selection
                className="form-checkbox h-5 w-5 text-blue-600"
              />
            </div>
          )}
          
          <div className="text-center font-semibold">{template.name}</div>
  
            
  
            {/* Show Choose Template button at the bottom of the selected template */}
            {selectedTemplate === template.id && (
              <div className="flex justify-center mt-4">
              <button
                className="py-2 px-3 text-base font-medium border border-transparent rounded-full shadow-sm text-white bg-orange-600 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleTemplate}
              >
                Choose Template
              </button>
            </div>
            )}
          </div>
        ))}
    </div>
  </div>
  
    </div>
    );
  };

export default LaterTempSelect