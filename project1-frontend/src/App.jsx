import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Admin from './pages/Admin';
import NavBar from './components/NavBar.jsx';

export default function App() {

  return (
    <>
      <BrowserRouter basename='/'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}
