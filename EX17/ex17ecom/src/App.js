import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Make sure the path is correct
import HomePage from './components/HomePage';
import AboutUsPage from './components/AboutUsPage';
import ContactUsPage from './components/ContactUsPage';
import GastronomicGemsPage from './components/GastronomicGemsPage';
import LoginPage from './components/LoginPage';
import Footer from './components/Footer';

function App() {
    return ( 
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/aboutus" element={<AboutUsPage />} />
                <Route path="/gallery" element={<GastronomicGemsPage />} />
                <Route path="/contactus" element={<ContactUsPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;