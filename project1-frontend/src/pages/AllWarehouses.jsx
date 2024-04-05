import React from 'react';
import WarehousesGrid from '../components/Warehouse/WarehousesGrid';
import { Link } from 'react-router-dom';
import NewWarehouseModal from '../components/Warehouse/NewWarehouseModal';
import { useState } from 'react';

const AllWarehouses = () => {
  const [isWarehouseModalOpen, setIsWarehouseModalOpen] = useState(false);
  const handleSaveWarehouse = async (newWarehouseData) => {
    try {
      const response = await fetch('http://localhost:8282/api/warehouses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newWarehouseData),
      });
      if (!response.ok) {
        throw new Error('Failed to create new warehouse');
      }
      // Refresh the list of warehouses here, if necessary
    } catch (error) {
      console.error('Error creating new warehouse:', error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen min-w-screen bg-[#F5F8FC]">
      <Link to="/admin"><img src="/tesla-logo-black.png" alt="Logo" className="absolute top-6 left-6 m-4 w-42" /></Link>
      <h1 className="text-5xl font-regular font-sfpro text-[#212121] mt-36">All Warehouses</h1>
      <button onClick={() => setIsWarehouseModalOpen(true)} className="mt-10 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">Add New Warehouse</button>
      <WarehousesGrid />
    </div>
  );
};

export default AllWarehouses;