import VehiclesGrid from "../components/Vehicle/VehiclesGrid";

const AllVehicles = () => {
    return (
      <div className="flex flex-col justify-center items-center  min-h-screen min-w-screen bg-[#F5F8FC]">
      <img src="/tesla-logo-black.png" alt="Logo" className="absolute top-6 left-6 m-4 w-42" />

        <h1 className="text-5xl font-regular font-sfpro text-[#212121] mt-36">All Vehicles</h1>
        <VehiclesGrid/>
      </div>
    );
  };
  
  export default AllVehicles;
  
  