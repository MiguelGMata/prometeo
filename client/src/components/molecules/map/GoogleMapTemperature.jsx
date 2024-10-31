import React, { useState, useEffect, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

const apiURL = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const weatherApiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

const containerStyle = {
    width: '100%',
    height: '500px',
};

const cities = [
    { name: "Paris", lat: 48.8566, lon: 2.3522 },
    { name: "Lyon", lat: 45.7640, lon: 4.8357 },
    { name: "Marseille", lat: 43.2965, lon: 5.3698 },
    { name: "Toulouse", lat: 43.6045, lon: 1.4442 },
    { name: "Nice", lat: 43.7102, lon: 7.2620 },
    { name: "Bordeaux", lat: 44.8378, lon: -0.5792 },
    { name: "Strasbourg", lat: 48.5734, lon: 7.7521 },
    { name: "Nantes", lat: 47.2184, lon: -1.5536 },
    { name: "Montpellier", lat: 43.6119, lon: 3.8772 },
    { name: "Rennes", lat: 48.1173, lon: -1.6778 },
    { name: "Reims", lat: 49.2583, lon: 4.0317 },
    { name: "Saint-Étienne", lat: 45.4397, lon: 4.3872 },
    { name: "Toulon", lat: 43.1242, lon: 5.9280 },
    { name: "Le Havre", lat: 49.4944, lon: 0.1079 },
    { name: "Grenoble", lat: 45.1885, lon: 5.7245 },
];

const GoogleMapComponent = () => {
    const defaultCenter = { lat: 46.6034, lng: 1.8883 }; // Centro aproximado de Francia
    const defaultZoom = 6;

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiURL,
    });

    const [markers, setMarkers] = useState([]); // Inicializamos vacíos
    const [infoWindow, setInfoWindow] = useState({ isOpen: false, data: null });

    const fetchTemperature = async (lat, lon) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`);
            const data = await response.json();
            return data.main.temp; // Retornar la temperatura en grados Celsius
        } catch (error) {
            console.error("Error fetching temperature data:", error);
            return null;
        }
    };

    const onLoad = useCallback((map) => {
        // Agregar capa de temperatura
        const temperatureLayer = new window.google.maps.ImageMapType({
            getTileUrl: (coord, zoom) => {
                return `https://tile.openweathermap.org/map/temp_new/${zoom}/${coord.x}/${coord.y}.png?appid=${weatherApiKey}`;
            },
            tileSize: new window.google.maps.Size(256, 256),
            opacity: 0.6,
            name: "Temperature Layer",
        });

        map.overlayMapTypes.insertAt(0, temperatureLayer);
    }, []);

    const handleMarkerClick = async (city) => {
        const temperature = await fetchTemperature(city.lat, city.lon);
        if (temperature !== null) {
            setInfoWindow({
                isOpen: true,
                data: { title: city.name, temperature, lat: city.lat, lng: city.lon },
            });
        }
    };

    useEffect(() => {
        if (isLoaded) {
            setMarkers(cities);
        }
    }, [isLoaded]);

    return isLoaded ? (
        <div style={{ width: "100%", backgroundColor: "white", padding: '30px' }}>
            <h1 style={{ textAlign: 'center', fontFamily: 'arial', color: 'black', fontSize: '1.5rem' }}>Températures par ville</h1>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={defaultCenter}
                zoom={defaultZoom}
                onLoad={onLoad}
            >
                {markers.map((city, index) => (
                    <Marker
                        key={index}
                        position={{ lat: city.lat, lng: city.lon }}
                        title={city.name}
                        onClick={() => handleMarkerClick(city)}
                    />
                ))}

                {infoWindow.isOpen && (
                    <InfoWindow
                        position={{ lat: infoWindow.data.lat, lng: infoWindow.data.lng }}
                        onCloseClick={() => setInfoWindow({ isOpen: false, data: null })}
                    >
                        <div>
                            <h2>{infoWindow.data.title}</h2>
                            <p>Température : {Math.round(infoWindow.data.temperature)}°C</p>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </div>
    ) : <></>;
};

export default React.memo(GoogleMapComponent);


