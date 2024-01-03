import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Ensure the path is correct
import HomePage from './components/HomePage';
import AboutUsPage from './components/AboutUsPage';
import ContactUsPage from './components/ContactUsPage';
import GastronomicGemsPage from './components/GastronomicGemsPage';
import LoginPage from './components/LoginPage';
import Footer from './components/Footer';

function App() {
    return ( 
        <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <div className="container-fluid flex-grow-1">
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/aboutus" element={<AboutUsPage />} />
                    <Route path="/gallery" element={<GastronomicGemsPage />} />
                    <Route path="/contactus" element={<ContactUsPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
