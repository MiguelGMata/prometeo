import React, { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
const apiURL = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

const containerStyle = {
    width: '100%',
    height: '500px',
};

const GoogleMapComponent = ({ filterPosition }) => {
    const latitud = filterPosition && filterPosition.location ? filterPosition.location.lat : 48.8566;
    const longitud = filterPosition && filterPosition.location ? filterPosition.location.lon : 2.3522;

    const defaultCenter = { lat: latitud, lng: longitud }; // Centro de París
    const defaultZoom = 12; // Nivel de zoom predeterminado

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiURL,
    });

    const [map, setMap] = useState(null);
    const [markers, setMarkers] = useState([]);

    const onLoad = React.useCallback((map) => {
        setMap(map);
    }, []);

    const onUnmount = React.useCallback(() => {
        setMap(null);
    }, []);

    useEffect(() => {
        if (isLoaded) {
            const initialMarker = { lat: latitud, lng: longitud, title: 'Emplacement' };
            setMarkers([initialMarker]);
        }
    }, [isLoaded, latitud, longitud]);

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={defaultCenter}
            zoom={defaultZoom}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            {markers.map((marker, index) => (
                <Marker
                    key={index}
                    position={{ lat: marker.lat, lng: marker.lng }}
                    title={marker.title}
                />
            ))}
        </GoogleMap>
    ) : <></>;
};

export default React.memo(GoogleMapComponent);