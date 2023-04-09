import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map = ({ apiKey }) => {
    return ( <
        div style = {
            { height: '100vh', width: '100%' } } >
        <
        GoogleMapReact bootstrapURLKeys = {
            { key: apiKey } }
        defaultCenter = {
            { lat: 37.7749, lng: -122.4194 } }
        defaultZoom = { 12 }
        /> <
        /div>
    );
};

export default Map;