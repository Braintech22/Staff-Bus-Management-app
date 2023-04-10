import React from 'react';
import GoogleMapReact from 'google-map-react';

function BusStop(props) {
    const { stop, center, zoom } = props;

    // Define the coordinates of the bus stop as an object with latitude and longitude properties
    const stopLocation = { lat: 37.7819, lng: -122.4042 };

    return ( <
        div style = {
            { height: '500px', width: '100%' } } >
        <
        GoogleMapReact bootstrapURLKeys = {
            { key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY } }
        defaultCenter = { center }
        defaultZoom = { zoom } >
        <
        Marker lat = { stopLocation.lat }
        lng = { stopLocation.lng }
        /> <
        /GoogleMapReact> <
        /div>
    );
}

function Marker() {
    return ( <
        div style = {
            { backgroundColor: 'blue', width: '10px', height: '10px', borderRadius: '50%' } } > < /div>
    );
}

export default BusStop;