import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from '../pages/home/HomeScreen';
import ForecastScreen from '../pages/forecast/ForecastScreen';
import PrivacyPolicyScreen from '../pages/policy/PrivacyPolicyScreen';

const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/previsions' element={<ForecastScreen />} />
            <Route path='/confiabilite' element={<PrivacyPolicyScreen />} />
        </Routes>
    )
}
export default AppRoutes;