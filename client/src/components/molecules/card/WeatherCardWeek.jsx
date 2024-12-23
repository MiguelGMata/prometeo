import React from 'react';
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import Image from '../../atoms/image/Image';
import './weatherCardWeek.css';


const WeatherCardWeek = ({ weatData }) => {
    const weatherData = weatData.forecast.forecastday;
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };


    return (
        <div className='weatherCardWeek'>
            {weatherData ? (
                <div className='weatherCardWeek-content'>
                    <h1>Prévisions de la semaine</h1>
                    {weatherData.map((week) =>
                        <ul key={week.date_epoch}>
                            <div className='weatherCardWeek-week-day'>
                                <li>{capitalizeFirstLetter(new Date(week.date).toLocaleDateString('fr-FR', { weekday: 'long' }))}</li>
                            </div>
                            <div className='weatherCardWeek-week-day'>
                                <li><Image image={week.day.condition.icon} /></li>
                                <li><FaArrowDown /> {Math.round(week.day.mintemp_c)}°</li>
                                <li><FaArrowUp /> {Math.round(week.day.maxtemp_c)}°</li></div>
                        </ul>
                    )}
                </div>
            )
                :
                <p className="loading-message">Chargement des données météo...</p>
            }
        </div>

    )
}
export default WeatherCardWeek;