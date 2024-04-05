import React, { useState, useEffect } from 'react';
import VehicleCard from './VehicleCard';

export default function VehiclesGrid() {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        fetchVehicles();
    }, []);

    const fetchVehicles = async () => {
        const response = await fetch('http://localhost:8282/api/vehicles/all');
        const data = await response.json();
        setVehicles(data);
    };

    const handleVehicleUpdate = (updatedVehicle) => {
        const updatedVehicles = vehicles.map(vehicle => vehicle.id === updatedVehicle.id ? updatedVehicle : vehicle);
        setVehicles(updatedVehicles);
    };

    const handleVehicleDelete = (deletedVehicleId) => {
        setVehicles(vehicles.filter(vehicle => vehicle.id !== deletedVehicleId));
    };

    return (
        <div className="grid grid-cols-5 place-items-center gap-0  w-full p-32 ">
            {vehicles.map(vehicle => (
                <VehicleCard vehicleData={vehicle} key={vehicle.id} onDelete={handleVehicleDelete} onUpdate={handleVehicleUpdate} />
            ))}
        </div>
    );
}

// {vehicles.map(vehicle => (
//     <div key={vehicle.id} className="border rounded-lg p-4 shadow-lg bg-red-700 w-96 m-4">
//         <h3 className="text-lg font-semibold">{vehicle.model}</h3>
//         <p>Color: {vehicle.warehouse.name}</p>
//         <p>Year: {vehicle.year}</p>
//         <p>Color: {vehicle.color}</p>
//         <p>Color: {vehicle.vin}</p>
//         <p>Color: {vehicle.id}</p>
//         {/* Add more vehicle details as needed */}
//     </div>
// ))}