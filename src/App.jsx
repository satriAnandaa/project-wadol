import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Testing from './pages/Test';
import PrivateRoute from './komponen/Layout/PrivateRoute';
import PageUts from './pages/Booking-uts/PageUts';
import LoginPage from './pages/Login/LoginPage';
import LandingPage from './pages/LandingPage/LandingPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} /> {/* Ensure the LoginPage is routed correctly */}
        <Route path='/dashboard' element={<PrivateRoute component={<Dashboard />} />} />
        <Route path='/test' element={<PrivateRoute component={<Testing />} />} />
        <Route path='/booking' element={<PrivateRoute component={<PageUts />} />} />
        <Route path='/Home' element={<Testing />} />
        <Route path='/Profile' element={<Testing />} />
      </Routes>
    </>
  );
};

export default App;
