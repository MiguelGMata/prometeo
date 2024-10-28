import { useState, useEffect } from 'react';
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import Image from '../../atoms/image/Image';
import './weatherCardWeek.css';

const ForecastCardWeek = ({ weatData }) => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        if (weatData) {
            const weatDatas = weatData.forecast.forecastday;
            setWeatherData(weatDatas);
        } else {
            console.log("Vous devrez saisir une ville pour pouvoir voir la prévision...");
        }
    }, [weatData]); // Esto hará que la lógica solo se ejecute cuando `weatData` cambie

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
                                <li><FaArrowUp /> {Math.round(week.day.maxtemp_c)}°</li>
                            </div>
                        </ul>
                    )}
                </div>
            ) : (
                <p className="loading-message">Vous devrez saisir une ville pour pouvoir voir la prévision...</p>
            )}
        </div>
    );
};

export default ForecastCardWeek;
