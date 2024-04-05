import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EditWarehouseModal from './EditWarehouseModal';

const WarehouseCard = ({ warehouseData }) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const navigate = useNavigate();
    const { warehouseId } = useParams();

    
    const handleEdit = () => {
        setIsEditModalOpen(true);
    };

    const handleSave = async (udpatedWarehouse) => {
        try {
            const savedWarehouse = await updateWarehouse(udpatedWarehouse);
            // Update the UI accordingly, e.g., refresh the vehicle list or update the state
            setIsEditModalOpen(false);
        } catch (error) {
            console.error('Error updating warehouse:', error);
            // Handle error, e.g., show an error message to the user
        }
    };

    const updateWarehouse = async (updatedWarehouse) => {
        const response = await fetch(`http://localhost:8282/api/warehouse/${updatedWarehouse.warehouseId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedWarehouse),
        });

        if (!response.ok) {
            throw new Error('Failed to update vehicle');
        }

        return response.json();
    };


    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:8282/api/warehouses/${warehouseData.warehouseId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete warehouse');
            }
            // Call a prop function to update the parent component's state
            onDelete(vehicleData.id);
        } catch (error) {
            console.error('Error deleting warehouse:', error);
            // Handle error, e.g., show an error message to the user
        }
        window.location.reload();
    };





    return (
        <>
            <div className="flex flex-col shadow-lg bg-[#F5F8FC] w-80 h-[21rem] m-4 cursor-pointer hover:scale-95 transition-transform" >
                <div className="p-4 mt-5 w-full flex flex-col relative h-full">
                    <h3 className="text-4xl font-semibold font-sfpro text-[#212121]" onClick={() => navigate(`/warehouse/${warehouseData.warehouseId}`)}>{warehouseData.name}</h3>
                    <p className="text-base font-semibold font-sfpro text-[#212121] mt-3">ID <span className="text-[#CACACA]">{warehouseData.warehouseId}</span></p>
                    <p className="text-base font-semibold font-sfpro text-[#212121] -mt-1">LOCATION <span className="text-[#CACACA]">{warehouseData.location}</span></p>
                    <p className="text-base font-semibold font-sfpro text-[#212121] -mt-1">CAPACITY <span className="text-[#CACACA]">{warehouseData.capacity}</span></p>
                    <button onClick={handleEdit} className="mt-6 mb-2 bg-[#212121] text-white font-regular py-2 px-4  transition duration-300 ease-in-out hover:bg-transparent hover:text-[#212121] hover:border hover:border-[#212121]">Edit</button>
                    <button onClick={handleDelete} className=" bg-[#212121] text-white font-regular py-2 px-4  transition duration-300 ease-in-out hover:bg-transparent hover:text-[#212121] hover:border hover:border-[#212121]">Delete</button>

                </div>
            </div>
            <EditWarehouseModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                warehouseData={warehouseData}
                onSave={handleSave}
            />
        </>

    );
};

export default WarehouseCard;