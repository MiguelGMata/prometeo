import { useState, useEffect } from 'react';
import { weatherGet } from '../../services/axios';
import WeatherDayList from '../../molecules/weather/WeatherDayList';
import WeatherReport from '../../molecules/weather/WeatherReport';
import WeatherSearch from '../../molecules/weather/WeatherSearch';
const apiURL = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
import './weather.css';
const getWeatherClass = (condition) => {
    if (!condition) return '';

    const lowerCondition = condition.toLowerCase();
    if (lowerCondition.includes('sunny') || lowerCondition.includes('clear')) {
        return 'sunny';
    } else if (lowerCondition.includes('cloudy') || lowerCondition.includes('overcast')) {
        return 'cloudy';
    } else if (lowerCondition.includes('rain') || lowerCondition.includes('showers')) {
        return 'rainy';
    } else if (lowerCondition.includes('snow') || lowerCondition.includes('sleet')) {
        return 'snowy';
    } else if (lowerCondition.includes('storm') || lowerCondition.includes('thunder')) {
        return 'stormy';
    } else {
        return '';
    }
};

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [currentLocation, setCurrentLocation] = useState(null);
    const [cityName, setCityName] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setCurrentLocation({ lat: latitude, lon: longitude });
                fetchCityName(latitude, longitude);
            },
            (error) => {
                console.error("Erreur lors de l'obtention de la position :", error);
                setError("Impossible d'obtenir l'emplacement. Veuillez autoriser l'accès à l'emplacement.");
            },
            { enableHighAccuracy: true }
        );
    }, []);

    const fetchCityName = async (latitude, longitude) => {
        const apiKey = apiURL;
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.status === 'OK') {
                const addressComponents = data.results[0].address_components;
                const cityComponent = addressComponents.find(component =>
                    component.types.includes('locality')
                );
                setCityName(cityComponent ? cityComponent.long_name : 'Ville inconnue');
            } else {
                setCityName('Ville inconnue');
            }
        } catch (error) {
            setCityName('Ville inconnue');
        }
    };

    useEffect(() => {
        const fetchWeather = async () => {
            if (cityName) {
                try {
                    const data = await weatherGet(cityName);
                    setWeatherData(data);
                } catch (error) {
                    console.log('Erreur : ', error);
                    setWeatherData(null);
                }
            }
        };
        fetchWeather();
    }, [cityName]);

    const weatherClass = getWeatherClass(weatherData?.current?.condition?.text);

    return (
        <div className='weather'>
            {error ? (
                <p className="error-message">{error}</p>
            ) : currentLocation ? (
                <>
                    {weatherData ? (
                        <>
                            <div className={`weather-content ${weatherClass}`}>
                                <WeatherReport position={cityName} weatData={weatherData} />
                                <WeatherDayList position={cityName} weatData={weatherData} />

                            </div>
                            <WeatherSearch position={cityName} weatData={weatherData} />

                        </>
                    ) : (
                        <p className="loading-message">Chargement des données météo...</p>
                    )}
                </>
            ) : (
                <p className="loading-message">Obtenir l'emplacement actuel...</p>
            )}
        </div>
    );
};

export default Weather;
