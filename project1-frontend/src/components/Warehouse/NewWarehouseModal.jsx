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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8282/api/warehouses', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error('Failed to create new warehouse');
            }
            onSave(); // Callback to refresh the warehouse list in the parent component
            onClose(); // Close the modal
        } catch (error) {
            console.error('Error creating new warehouse:', error);
        }
    };

    return (
        <div className={`modal ${isOpen ? 'is-active' : ''} fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center`}>
            <div className="modal-background" onClick={onClose}></div>
            <div className="modal-content bg-white p-4 rounded-lg shadow-lg w-80">
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
            <button className="modal-close is-large" aria-label="close" onClick={onClose}></button>
            
        </div>
    );
};

export default NewWarehouseModal;


