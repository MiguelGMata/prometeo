import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from '../pages/home/HomeScreen';

const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<HomeScreen />} />
        </Routes>
    )
}
export default AppRoutes;