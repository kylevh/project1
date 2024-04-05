import VehiclesGrid from "../components/Vehicle/VehiclesGrid";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import NewVehicleModal from '../components/Vehicle/NewVehicleModal';

const AllVehicles = () => {
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


  return (
    <div className="flex flex-col justify-center items-center  min-h-screen min-w-screen bg-[#F5F8FC]">
      <Link to="/admin"><img src="/tesla-logo-black.png" alt="Logo" className="absolute top-6 left-6 m-4 w-42" /></Link>

      <h1 className="text-5xl font-regular font-sfpro text-[#212121] mt-36">All Vehicles</h1>
      <button onClick={() => setIsModalOpen(true)} className="mt-10 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">Add New Vehicle</button>

      <VehiclesGrid />
      <NewVehicleModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={handleSave} />
    </div>
  );
};

export default AllVehicles;

