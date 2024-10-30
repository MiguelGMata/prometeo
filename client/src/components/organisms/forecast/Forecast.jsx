import { useState, useEffect } from 'react';
import { weatherGet } from '../../services/axios';
import WeatherSearch from '../../molecules/weather/WeatherSearch';
const apiURL = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
import '../weather/weather.css';

const Forecast = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [currentLocation, setCurrentLocation] = useState(null);
    const [cityName, setCityName] = useState('');
    const [error, setError] = useState(null);
    const [isDayTime, setIsDayTime] = useState(true);

    useEffect(() => {
        const hour = new Date().getHours();
        // Considera que de 6 AM a 6 PM es de día, de lo contrario, es de noche
        if (hour >= 6 && hour < 18) {
            setIsDayTime(true);
        } else {
            setIsDayTime(false);
        }
    }, []);

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


    return (
        <div className={isDayTime ? 'day-background' : 'night-background'}>
            {error ? (
                <p className="error-message">{error}</p>
            ) : currentLocation ? (
                <>
                    {weatherData ? (
                        <div className="weather-content">
                            <WeatherSearch position={cityName} weatData={weatherData} />
                        </div>
                    ) : (
                        <p className="loading-message">Chargement des données météo...</p>
                    )}
                </>
            ) : (
                <p className="loading-message">Pour obtenir l'emplacement actuel...</p>
            )}
        </div>
    );
};

export default Forecast;
