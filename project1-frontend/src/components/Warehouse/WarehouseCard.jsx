import React from 'react';

const WarehouseCard = ({ warehouseData }) => {
    return (
        <div className="flex flex-col shadow-lg bg-[#F5F8FC] w-80 h-[21rem] m-4">
            <div className="p-4 w-full flex flex-col">
                <h3 className="text-3xl font-semibold font-sfpro text-[#212121]">{warehouseData.name}</h3>
                <p className="text-base font-regular font-sfpro text-[#CACACA]">Location: {warehouseData.location}</p>
                <p className="text-base font-regular font-sfpro text-[#CACACA]">Capacity: {warehouseData.capacity}</p>
            </div>
        </div>
    );
};

export default WarehouseCard;