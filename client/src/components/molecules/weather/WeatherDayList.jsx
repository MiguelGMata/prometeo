import { useState, useEffect } from 'react';
import WeatherListCard from '../card/WeatherListCard';
import './weatherDayList.css';

const WeatherDayList = ({ position, weatData }) => {
    const [forecast, setForecast] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const filteredData = weatData?.forecast?.forecastday;
                if (filteredData) {
                    const filtered = filteredData.map((hour) => hour.hour);
                    setForecast(filtered);
                }
            } catch (error) {
                console.log('Erreur : ', error)
            }
        }
        fetchWeather()
    }, [position, weatData])

    return (
        <div className='weatherDayList-content'>
            {error ? (
                <p className="error-message">{error}</p>
            ) : forecast ? (
                <>
                    <WeatherListCard forecast={forecast} />
                </>
            ) : (
                <>
                    <p className="loading-message">Obtenir l'emplacement actuel...</p>
                </>
            )}
        </div>
    )
}
export default WeatherDayList;