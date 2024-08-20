import React from 'react';
import PropTypes from 'prop-types';

function ModalEducation({ isOpen, onClose, onSave, data, section }) {
  const [formData, setFormData] = React.useState(data);

  React.useEffect(() => {
    setFormData(data);
  }, [data]);

  const handleChange = (index, field, value) => {
    const updatedData = [...formData];
    updatedData[index] = { ...updatedData[index], [field]: value };
    setFormData(updatedData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-3xl">
        <h2 className="text-xl font-bold mb-4">{section === 'education' ? 'Edit Education' : ''}</h2>
        <form onSubmit={handleSubmit}>
          {section === 'education' && (
            <div>
              {formData.map((edu, index) => (
                <div key={edu.EducationID} className="mb-4">
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) => handleChange(index, 'degree', e.target.value)}
                    placeholder="Degree"
                    className="block w-full mb-2 p-2 border border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    value={edu.fieldOfStudy}
                    onChange={(e) => handleChange(index, 'fieldOfStudy', e.target.value)}
                    placeholder="Field of Study"
                    className="block w-full mb-2 p-2 border border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    value={edu.sclName}
                    onChange={(e) => handleChange(index, 'sclName', e.target.value)}
                    placeholder="College Name"
                    className="block w-full mb-2 p-2 border border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    value={edu.sclLocation}
                    onChange={(e) => handleChange(index, 'sclLocation', e.target.value)}
                    placeholder="Location"
                    className="block w-full mb-2 p-2 border border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    value={edu.gradeYear}
                    onChange={(e) => handleChange(index, 'gradeYear', e.target.value)}
                    placeholder="Passing Year"
                    className="block w-full mb-2 p-2 border border-gray-300 rounded"
                  />
                </div>
              ))}
            </div>
          )}
          <button
            type="button"
            onClick={onClose}
            className="mr-2 px-4 py-2 bg-gray-500 text-white rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  section: PropTypes.string.isRequired,
};

export default ModalEducation;
