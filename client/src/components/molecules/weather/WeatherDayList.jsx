import { useState, useEffect } from 'react';
import { weatherGet } from '../../services/axios';
import WeatherListCard from '../card/WeatherListCard';
import './weatherDayList.css';

const WeatherDayList = ({ position }) => {
    const [forecast, setForecast] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const data = await weatherGet(position);
                const filteredData = data.forecast.forecastday.map((hour) => hour.hour);
                setForecast(filteredData);

            } catch (error) {
                console.log('Erreur : ', error)
            }
        }
        fetchWeather()
    }, [position])

    return (
        <div className='weatherDayList-content'>
            <WeatherListCard forecast={forecast} />
        </div>
    )
}
export default WeatherDayList;