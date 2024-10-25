import { useState, useEffect } from 'react';
import { weatherGet } from '../../services/axios';
import WeatherListCard from '../card/WeatherListCard';
import './weatherDayList.css';

const WeatherDayList = () => {
    const [forecast, setForecast] = useState(null);
    const location = 'Paris';


    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const data = await weatherGet(location);
                const filteredData = data.forecast.forecastday.map((hour) => hour.hour);
                setForecast(filteredData);

            } catch (error) {
                console.log('Erreur : ', error)
            }
        }
        fetchWeather()
    }, [location])

    return (
        <div className='weatherDayList-content'>
            <WeatherListCard forecast={forecast} />
        </div>
    )
}
export default WeatherDayList;