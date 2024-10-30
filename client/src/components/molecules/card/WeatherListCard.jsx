import React from 'react';
import { FaCloudShowersHeavy } from "react-icons/fa";
import Image from '../../atoms/image/Image';
import './weatherListCard.css';

const WeatherListCard = ({ forecast }) => {
    // Obtener la hora actual en formato epoch
    const currentEpoch = Math.floor(Date.now() / 1000);

    // Filtrar los datos del pronóstico
    const sortedForecast = forecast ? forecast[0].slice().sort((a, b) => {
        return a.time_epoch - b.time_epoch; // Aseguramos que esté en orden
    }) : [];

    // Encontrar el índice de la hora actual (incluyendo la hora actual)
    const currentIndex = sortedForecast.findIndex(data => data.time_epoch > currentEpoch);

    // Si no se encuentra un índice, significa que todas las horas son anteriores a la actual
    const displayForecast = currentIndex !== -1
        ? [
            ...sortedForecast.slice(currentIndex - 1, currentIndex + 1), // Incluye la hora actual
            ...sortedForecast.slice(currentIndex + 1), // Luego las horas futuras
            ...sortedForecast.slice(0, currentIndex - 1) // Luego las horas pasadas
        ]
        : sortedForecast;

    return (
        <div className='weatherListCard'>
            {displayForecast && displayForecast.length > 0 && (
                <div className='weather-day'>
                    {displayForecast.map((data, index) => (
                        <div key={`${index}`} className='weather-day-block'>
                            <p>{data.time.split(" ")[1].split(":")[0] + "h"}</p>
                            <h3>{Math.round(data.temp_c)}°</h3>
                            <Image image={data.condition.icon} />
                            <p><strong><FaCloudShowersHeavy /> </strong>{data.chance_of_rain}%</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default WeatherListCard;

