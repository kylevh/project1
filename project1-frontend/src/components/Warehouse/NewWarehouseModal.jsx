import React, { useState } from 'react';

const NewWarehouseModal = ({ isOpen, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        capacity: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    if(!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="modal bg-white p-4 rounded-lg shadow-lg w-80">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="input-class border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={formData.location}
                        onChange={handleChange}
                        className="input-class border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="number"
                        name="capacity"
                        placeholder="Capacity"
                        value={formData.capacity}
                        onChange={handleChange}
                        className="input-class border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button type="submit" className="btn-save mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">Save Warehouse</button>
                    <button onClick={onClose} className="btn-cancel ml-2 mt-4 bg-gray-500 text-white font-semibold py-2 px-4 rounded hover:bg-gray-600">Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default NewWarehouseModal;


