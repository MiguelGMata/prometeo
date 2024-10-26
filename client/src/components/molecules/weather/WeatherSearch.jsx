import { useState, useEffect } from 'react';
import { weatherGet } from '../../services/axios';
import { FaArrowDown, FaArrowUp, FaSearch } from "react-icons/fa";
import Card from '../../atoms/card/Card';
import Image from '../../atoms/image/Image';
import GoogleMap from '../map/GoogleMap';
import './weather.css';


const WeatherReport = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [filter, setFilter] = useState(" ")
    const [translatedCondition, setTranslatedCondition] = useState('');
    const [error, setError] = useState(null);
    const [location, setLocation] = useState('');
    const [position, setPosition] = useState('Paris');
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
        "Light rain shower": "Averse de pluie légère"
    };
    const getTranslatedCondition = (condition) => {
        return translateCondition[condition] || condition;
    };
    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };


    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const data = await weatherGet(location);
                setWeatherData(data);
                const dataPosition = await weatherGet(position);
                setFilter(dataPosition)
                const translated = getTranslatedCondition(data.current.condition.text);
                setTranslatedCondition(translated);
            } catch (error) {
                console.log('Vous ne pourrez pas obtenir des informations sur la météo.');
            }
        }
        fetchWeather()
    }, [location])

    return (
        <div className='weatherSearch'>
            <div className="input-container">
                <input
                    type="text"
                    value={location}
                    onChange={handleLocationChange}
                    placeholder="Saisir la ville"
                />
                <button onClick={() => setLocation(location)}>
                    <i className="fa fa-search"><FaSearch /></i> {/* Ícono de lupa */}
                </button>
            </div>
            {error && <p>{error}</p>}
            {weatherData && (
                <div className='weatherSearch-content'>
                    <Card >
                        <h3>{weatherData.location.name} - {weatherData.location.country}</h3>
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
            <GoogleMap filterPosition={weatherData ? weatherData : filter} />
        </div>
    )
}
export default WeatherReport;

/**       */