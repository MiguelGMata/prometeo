import { useState, useEffect } from 'react';
import WeatherCard from '../card/WeatherCard';
import './weatherReport.css';

const WeatherReport = ({ position, weatData }) => {
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
        "Fog": "Brouillard",
        "Partly Cloudy": "Partiellement nuageux",
        "Patchy rain nearby": "Pluie éparse à proximité",
        "Patchy light rain": "Pluie légère et éparse",
        "Moderate or heavy rain with thunder": "Pluie modérée ou forte avec tonnerre",
    };
    const getTranslatedCondition = (condition) => {
        return translateCondition[condition] || condition;
    };
    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const weatherData = weatData?.current?.condition?.text;
                if (weatherData) {
                    const translated = getTranslatedCondition(weatherData);
                    setTranslatedCondition(translated);
                }
            } catch (error) {
                console.log('Erreur : ', error)
            }
        }
        fetchWeather()
    }, [location, position, weatData])

    return (
        <div className='weatherReport-content'>
            <WeatherCard weatherData={weatData} translatedCondition={translatedCondition} />
        </div>
    )
}
export default WeatherReport;

