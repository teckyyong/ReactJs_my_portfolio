import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero'; 
import Footer from './Components/Footer/Footer';
import AboutPage from './Components/AboutPage/AboutPage'; 
import AboutServices from './Components/AboutServices/AboutServices';
import Contact from './Components/Contact/Contact';
import AboutWork from './Components/AboutWork/AboutWork';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <div id="contact">
              <Contact /> {/* Add the id here to enable scrolling */}
            </div>
            <Footer />
          </>
        } />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<AboutServices />} />
        <Route path="/mywork" element={<AboutWork />} /> 
      </Routes>
    </Router>
  );
}

export default App;

