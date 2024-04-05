import React from 'react';
import WarehousesGrid from '../components/Warehouse/WarehousesGrid';

const AllWarehouses = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen min-w-screen bg-[#F5F8FC]">
            <h1 className="text-5xl font-regular font-sfpro text-[#212121] mt-36">All Warehouses</h1>
            <WarehousesGrid/>
        </div>
    );
};

export default AllWarehouses;