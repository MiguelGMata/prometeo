import React from 'react';
import { FaArrowDown, FaArrowUp, FaMapMarkerAlt } from "react-icons/fa";
import Card from '../../atoms/card/Card';
import Image from '../../atoms/image/Image';
import './weatherCardWeek.css';


const WeatherCardWeek = ({ weatData, translatedCondition }) => {
    const weatherData = weatData.forecast.forecastday;
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };


    return (
        <div className='weatherCardWeek'>
            {weatherData && (
                <div className='weatherCardWeek-content'>
                    <h1>Prévisions de la semaine</h1>
                    {weatherData.map((week) =>
                        <ul>
                            <div className='weatherCardWeek-week-day'>
                                <li>{capitalizeFirstLetter(new Date(week.date).toLocaleDateString('fr-FR', { weekday: 'long' }))}</li>
                            </div>
                            <div className='weatherCardWeek-week-day'>
                                <li><Image image={week.day.condition.icon} /></li>
                                <li><FaArrowDown /> {Math.round(week.day.mintemp_c + 5)}°</li>
                                <li><FaArrowUp /> {Math.round(week.day.maxtemp_c + 5)}°</li></div>
                        </ul>
                    )}
                </div>
            )}
        </div>

    )
}
export default WeatherCardWeek;