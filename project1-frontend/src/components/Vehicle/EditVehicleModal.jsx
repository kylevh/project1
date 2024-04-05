import React, { useState } from 'react';

const EditVehicleModal = ({ isOpen, onClose, vehicleData, onSave }) => {
  const [formData, setFormData] = useState(vehicleData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="modal bg-white p-4 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            className="input-class border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="input-class border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="btn-save mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Save</button>
          <button onClick={onClose} className="btn-cancel ml-2 mt-4 bg-gray-500 text-white font-semibold py-2 px-4 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default EditVehicleModal;