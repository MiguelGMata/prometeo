import { useState, useEffect } from 'react';
import { weatherGet } from '../../services/axios';
import WeatherCard from '../card/WeatherCard';
import './weatherReport.css';

const WeatherReport = ({ position }) => {

    const [weatherData, setWeatherData] = useState(null);
    const [translatedCondition, setTranslatedCondition] = useState('');
    const location = position;
    const translateCondition = {
        "Sunny": "Ensoleillé",
        "Partly cloudy": "Partiellement nuageux",
        "Cloudy": "Nuageux",
        "Overcast": "Couvert",
        "Rain": "Pluie",
        "Light rain": "Pluie légère",
        "Heavy rain": "Pluie forte",
        "Thunderstorm": "Orage",
        "Snow": "Neige",
        "Clear": "Clair",
        "Mist": "Brume",
        "Partly Cloudy": "Partiellement nuageux",
    };
    const getTranslatedCondition = (condition) => {
        return translateCondition[condition] || condition;
    };
    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const data = await weatherGet(location);
                setWeatherData(data);
                const translated = getTranslatedCondition(data.current.condition.text);
                setTranslatedCondition(translated);
            } catch (error) {
                console.log('Erreur : ', error)
            }
        }
        fetchWeather()
    }, [location])

    return (
        <div className='weatherReport-content'>
            <WeatherCard weatherData={weatherData} translatedCondition={translatedCondition} />
        </div>
    )
}
export default WeatherReport;

