import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import WarehouseVehiclesGrid from '../components/Vehicle/WarehouseVehiclesGrid';
import NewVehicleModal from '../components/Vehicle/NewVehicleModal';
import NewWarehouseModal from '../components/Warehouse/NewWarehouseModal';

const WarehousePage = () => {
    const { warehouseId } = useParams();
    const [vehicles, setVehicles] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSave = async (newVehicle) => {
        console.log("SAINVG!");
        try {
            const response = await fetch('http://localhost:8282/api/vehicles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newVehicle),
            });
            if (!response.ok) {
                throw new Error('Failed to create new vehicle');
            }
            setIsModalOpen(false);
            // Optionally refresh the list of vehicles here
        } catch (error) {
            console.error('Error creating new vehicle:', error);
        }
    };

    useEffect(() => {
        const fetchVehicles = async () => {
            const response = await fetch(`http://localhost:8282/api/vehicles/warehouse/${warehouseId}`);
            const data = await response.json();
            setVehicles(data);
        };
        fetchVehicles();
    }, []);

    const handleVehicleUpdate = (updatedVehicle) => {
        const updatedVehicles = vehicles.map(vehicle => vehicle.id === updatedVehicle.id ? updatedVehicle : vehicle);
        setVehicles(updatedVehicles);
    };

    const handleVehicleDelete = (deletedVehicleId) => {
        setVehicles(vehicles.filter(vehicle => vehicle.id !== deletedVehicleId));
    };


    return (
        <div className="flex flex-col justify-center items-center  min-h-screen min-w-screen bg-[#F5F8FC]">
            <Link to="/admin"><img src="/tesla-logo-black.png" alt="Logo" className="absolute top-6 left-6 m-4 w-42" /></Link>
            <h1 className="text-5xl font-regular font-sfpro text-[#212121] mt-36">Warehouse {warehouseId}</h1>
            <button onClick={() => setIsModalOpen(true)} className="mt-10 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">Add New Vehicle</button>
            <WarehouseVehiclesGrid vehicles={vehicles} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={handleSave} />
            <NewVehicleModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={handleSave} />

        </div>
    );
};

export default WarehousePage;

