import React from 'react'
import VehiclesGrid from '../components/Vehicle/VehiclesGrid'

export default function Admin() {
  
  return (
    <div className='bg-[#F5F8FC] min-h-screen flex justify-center items-center'>
      <img src="/tesla-logo-black.png" alt="Logo" className="absolute top-6 left-6 m-4 w-42" />

      <a href="/admin/vehicles">
        <div className="h-[320px] w-80 bg-red-700 p-6 rounded-md relative cursor-pointer hover:scale-95 transition-transform">
          <h2 className="text-white text-5xl pt-5 font-medium font-sfpro">Vehicles</h2>
          <p className="text-white text-xl font-regular font-sfpro pt-2">View all vehicles across all warehouses</p>
          <img src="/vehicle-icon.png" alt="Vehicle" className="absolute bottom-0 right-0 m-4 w-32 object-contain" />
        </div>
      </a>
      <div className="w-[40px] text-[#F5F8FC]">.</div>

      <a href="/admin/warehouses">
        <div className="h-[320px] w-80 bg-[#818181] p-6 rounded-md relative cursor-pointer hover:scale-95 transition-transform">
          <h2 className="text-white text-5xl pt-5 font-medium font-sfpro">Warehouses</h2>
          <p className="text-white text-xl font-regular font-sfpro pt-2">View all warehouses across the United States</p>
          <img src="/warehouse-icon.png" alt="Vehicle" className="absolute bottom-0 right-0 m-4 w-32 object-contain" />
        </div>
      </a>

    </div>
  )
}



