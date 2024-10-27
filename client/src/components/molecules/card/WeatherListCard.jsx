import React from 'react';
import { FaCloudShowersHeavy } from "react-icons/fa";
import Image from '../../atoms/image/Image';
import './weatherListCard.css';

const WeatherLisCard = ({ forecast }) => {
    return (
        <div className='weatherListCard'>
            {forecast && forecast.length > 0 && (
                <div className='weather-day'>
                    {forecast.map((day, index) => (
                        day.map((data, idx) => (
                            <div key={`${index}-${idx}`} className='weather-day-block'>
                                <p>{data.time.split(" ")[1]}</p>
                                <h3>{Math.round(data.temp_c + 6)}°</h3>
                                <Image image={data.condition.icon} />
                                <p><strong><FaCloudShowersHeavy /> </strong>{data.chance_of_rain}%</p>
                            </div>
                        ))
                    ))}
                </div>
            )}
        </div>
    );
}

export default WeatherLisCard;

