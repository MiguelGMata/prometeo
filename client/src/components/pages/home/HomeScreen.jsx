import { useState, useEffect } from 'react';
import Weather from '../../organisms/weather/Weather';
import './homeScreen.css';

const HomeScreen = () => {

    return (

        <main className='home-screen'>
            <Weather />
        </main>


    )
}
export default HomeScreen;