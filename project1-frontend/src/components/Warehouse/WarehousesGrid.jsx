import React, { useState, useEffect } from 'react';
import WarehouseCard from './WarehouseCard';

export default function WarehousesGrid() {
    const [warehouses, setWarehouses] = useState([]);

    useEffect(() => {
        fetchWarehouses();
    }, []);

    const fetchWarehouses = async () => {
        const response = await fetch('http://localhost:8282/api/warehouses');
        const data = await response.json();
        setWarehouses(data);
    };
    

    return (
        <div className="grid grid-cols-5 place-items-center w-full p-32">
            {warehouses.map(warehouse => (
                <WarehouseCard warehouseData={warehouse} key={warehouse.warehouseId}/>
            ))}
        </div>
    );
}