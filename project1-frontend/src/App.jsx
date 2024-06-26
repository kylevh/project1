import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Admin from './pages/Admin';
import AllWarehouses from './pages/AllWarehouses';
import AllVehicles from './pages/AllVehicles';
import WarehousePage from './pages/WarehousePage';

export default function App() {

  return (
    <>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/warehouses" element={<AllWarehouses />} />
          <Route path="/admin/vehicles" element={<AllVehicles />} />
          <Route path="/warehouse/:warehouseId" element={<WarehousePage />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}
