import React, { useState } from 'react';
import EditVehicleModal from './EditVehicleModal';

const VehicleCard = ({ vehicleData }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const colorMap = {
        Red: '#FF5757',
        Blue: '#0085D0',
        Grey: '#FFFFFF',
        White: '#FFFFFF',
        Silver: '#FFFFFF',
        Black: '#212121'
    };
    const vehicleColorCode = colorMap[vehicleData.color] || '#000000';

    const handleEdit = () => {
        setIsModalOpen(true);
    };

    const handleSave = async (updatedVehicle) => {
        try {
            const savedVehicle = await updateVehicle(updatedVehicle);
            // Update the UI accordingly, e.g., refresh the vehicle list or update the state
            setIsModalOpen(false);
        } catch (error) {
            console.error('Error updating vehicle:', error);
            // Handle error, e.g., show an error message to the user
        }
    };

    const updateVehicle = async (updatedVehicle) => {
        const response = await fetch(`http://localhost:8282/api/vehicles/${updatedVehicle.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedVehicle),
        });

        if (!response.ok) {
            throw new Error('Failed to update vehicle');
        }

        return response.json();
    };

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:8282/api/vehicles/${vehicleData.id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete vehicle');
            }
            // Call a prop function to update the parent component's state
            onDelete(vehicleData.id);
        } catch (error) {
            console.error('Error deleting vehicle:', error);
            // Handle error, e.g., show an error message to the user
        }
        window.location.reload();
    };

    const modelImageMap = {
        'Tesla Roadster': '/tesla-roadster.png',
        'Tesla Cybertruck': '/tesla-cybertruck.png',
    };

    return (
        <>
            <div className="flex flex-col shadow-lg bg-[#F5F8FC] w-80 h-[21rem] m-4">
                <div style={{ backgroundColor: vehicleColorCode }} className="w-80 min-h-3"></div>
                <div className="p-4 w-full flex flex-col">
                    <img src={modelImageMap[vehicleData.model] || '/tesla-icon.png'} alt="Tesla" className="w-24 h-24 object-contain m-auto" />
                    <h3 className="text-3xl font-semibold font-sfpro text-[#212121]">{vehicleData.model}</h3>
                    <h4 className="text-xl font-semibold font-sfpro text-[#CACACA] -mt-1 mb-2">{vehicleData.warehouse.name}</h4>
                    <p className="text-base font-regular font-sfpro text-[#CACACA] -mt-1"><span className="text-base font-semibold font-sfpro text-[#212121]">ID</span> {vehicleData.id}</p>
                    <p className="text-base font-regular font-sfpro text-[#CACACA]"><span className="text-base font-semibold font-sfpro text-[#212121]">YEAR</span> {vehicleData.year}</p>
                    <p className="text-base font-regular font-sfpro text-[#CACACA] -mt-1"><span className="text-base font-semibold font-sfpro text-[#212121]">VIN</span> {vehicleData.vin}</p>
                </div>
                <div className="flex justify-center w-full">
                    <button onClick={handleEdit} className="bg-[#212121] text-white font-regular py-2 px-4  transition duration-300 ease-in-out hover:bg-transparent hover:text-[#212121] hover:border hover:border-[#212121]">Edit</button>
                    <button onClick={handleDelete} className="ml-4 bg-[#212121] text-white font-regular py-2 px-4  transition duration-300 ease-in-out hover:bg-transparent hover:text-[#212121] hover:border hover:border-[#212121]">Delete</button>
                </div>
            </div>
            <EditVehicleModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                vehicleData={vehicleData}
                onSave={handleSave}
            />
        </>
    );
};

export default VehicleCard;


