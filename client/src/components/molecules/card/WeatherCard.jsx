import React from 'react';
import { FaArrowDown, FaArrowUp, FaMapMarkerAlt } from "react-icons/fa";
import Card from '../../atoms/card/Card';
import Image from '../../atoms/image/Image';
import './weatherCard.css';


const WeatherCard = ({ weatherData, translatedCondition }) => {

    return (
        <div className='weatherCard'>
            {weatherData && (
                <div className='weatherCard-content'>
                    <Card className='cardTrans'>
                        <h2>Ma position</h2>
                        <h3>{weatherData.location.name}  <FaMapMarkerAlt /></h3>
                        <h1>{Math.round(weatherData.current.temp_c)}°</h1>

                        {weatherData.forecast && weatherData.forecast.forecastday && (
                            <div>
                                <h3>{translatedCondition || weatherData.current.condition.text}</h3>
                                <div className='weatherCard-block'>
                                    <p><FaArrowDown /> {Math.round(weatherData.forecast.forecastday[0].day.mintemp_c)}°C</p>
                                    <p><FaArrowUp /> {Math.round(weatherData.forecast.forecastday[0].day.maxtemp_c)}°C</p>
                                </div>
                                <Image className='image-position' image={weatherData.current.condition.icon} width='100%' height='100%' />
                            </div>
                        )}
                    </Card>
                </div>
            )}
        </div>

    )
}
export default WeatherCard;
