import React from 'react';
import VehicleCard from './VehicleCard';

export default function WarehouseVehiclesGrid({ vehicles }) {
    return (
        <div className="grid grid-cols-5 place-items-center gap-0  w-full p-32 ">
            {vehicles.map(vehicle => (
                <VehicleCard vehicleData={vehicle} key={vehicle.id} />
            ))}
        </div>
    );
}