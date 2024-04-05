import React, { useState, useEffect } from 'react';

const NewVehicleModal = ({ isOpen, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        model: '',
        year: '',
        color: '',
        vin: '',
        warehouse: { // Nested warehouse object
            warehouseId: '',
            name: '',
            location: '',
        }
    });
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'warehouseId') {
            setFormData(prev => ({
                ...prev,
                warehouse: {
                    ...prev.warehouse,
                    warehouseId: value
                }
            }));
        } else {
            const keys = name.split('.'); // Split the name by dot to identify nested properties
            if (keys.length > 1) {
                setFormData(prev => ({
                    ...prev,
                    [keys[0]]: { // First part is the parent property
                        ...prev[keys[0]],
                        [keys[1]]: value // Second part is the nested property
                    }
                }));
            } else {
                setFormData(prev => ({
                    ...prev,
                    [name]: value
                }));
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    // State for warehouses
    const [warehouses, setWarehouses] = useState([]);

    // Fetch warehouses on component mount
    useEffect(() => {
        fetch('http://localhost:8282/api/warehouses')
            .then(response => response.json())
            .then(data => setWarehouses(data))
            .catch(error => console.error('Error fetching warehouses:', error));
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="modal bg-white p-4 rounded-lg shadow-lg w-80">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="model"
                        placeholder="Model"
                        value={formData.model}
                        onChange={handleChange}
                        className="input-class border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        name="year"
                        placeholder="Year"
                        value={formData.year}
                        onChange={handleChange}
                        className="input-class border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        name="color"
                        placeholder="Color"
                        value={formData.color}
                        onChange={handleChange}
                        className="input-class border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        name="vin"
                        placeholder="VIN Number"
                        value={formData.vin}
                        onChange={handleChange}
                        className="input-class border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <select
                        name="warehouseId"
                        value={formData.warehouseId}
                        onChange={handleChange}
                        className="input-class border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select a Warehouse</option>
                        {warehouses.map(warehouse => (
                            <option key={warehouse.warehouseId} value={warehouse.warehouseId}>
                                {warehouse.name}
                            </option>
                        ))}
                    </select>
                    <button type="submit" className="btn-save mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">Save</button>
                    <button onClick={onClose} className="btn-cancel ml-2 mt-4 bg-gray-500 text-white font-semibold py-2 px-4 rounded hover:bg-gray-600">Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default NewVehicleModal;