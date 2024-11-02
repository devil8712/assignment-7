import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './components/Register';
import Home from './pages/Home';
import Internships from './pages/Internships';
import Login from './components/Login';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/internships" element={<Internships />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
