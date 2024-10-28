import React from 'react';
import { FaCloudShowersHeavy } from "react-icons/fa";
import Image from '../../atoms/image/Image';
import './weatherListCard.css';

const WeatherLisCard = ({ forecast }) => {
    console.log(forecast)
    return (
        <div className='weatherListCard'>
            {forecast && forecast.length > 0 && (
                <div className='weather-day'>
                    {forecast.map((day, index) => (
                        day.slice(0, 24).map((data, idx) => (
                            <div key={`${index}-${idx}`} className='weather-day-block'>
                                {/* <p>{data.time.split(" ")[0]}</p>*/}
                                <p>{data.time.split(" ")[1].split(":")[0] + "h"}</p>
                                <h3>{Math.round(data.temp_c)}°</h3>
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

