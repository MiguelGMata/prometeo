import { useState, useEffect } from 'react';
import WeatherDayList from '../../molecules/weather/WeatherDayList';
import WeatherReport from '../../molecules/weather/WeatherReport';
import WeatherSearch from '../../molecules/weather/WeatherSearch';
const apiURL = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
import './weather.css';

const Weather = () => {
    const [currentLocation, setCurrentLocation] = useState(null);
    const [cityName, setCityName] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        // Demander l'emplacement actuel de l'appareil
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setCurrentLocation({ lat: latitude, lon: longitude });

                // Convertit les coordonnées en nom de ville
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

                if (cityComponent) {
                    setCityName(cityComponent.long_name);
                } else {
                    setCityName('Ville inconnue');
                }
            } else {
                console.error('Geocode error:', data.status);
                setCityName('Ville inconnue');
            }
        } catch (error) {
            console.error("Erreur lors de l'obtention du nom de la ville :", error);
            setCityName('Ville inconnue');
        }
    };

    return (
        <div className='weather-content'>
            {error ? (
                <p className="error-message">{error}</p>
            ) : currentLocation ? (
                <>
                    <WeatherReport position={cityName} />
                    <WeatherDayList position={cityName} />
                    <WeatherSearch position={cityName} />
                </>
            ) : (

                <>
                    <p className="loading-message">Obtenir l'emplacement actuel...</p>
                    <WeatherReport position="Paris" />
                    <WeatherDayList position="Paris" />
                    <WeatherSearch position="Paris" />
                </>

            )}
        </div>
    );
};

export default Weather;
