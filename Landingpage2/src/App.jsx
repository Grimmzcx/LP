import React, { useEffect } from 'react'; // Import useEffect
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
