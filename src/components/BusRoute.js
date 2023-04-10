import React from 'react';
import GoogleMapReact from 'google-map-react';

function BusRoute(props) {
    const { center, zoom } = props;

    // Define the coordinates of the bus route as an array of latitudes and longitudes
    const route = [
        { lat: 37.7749, lng: -122.4194 },
        { lat: 37.7609, lng: -122.4344 },
        { lat: 37.7553, lng: -122.4478 },
        { lat: 37.7653, lng: -122.4536 },
        { lat: 37.7767, lng: -122.4352 }
    ];

    return ( <
        div style = {
            { height: '500px', width: '100%' } } >
        <
        GoogleMapReact bootstrapURLKeys = {
            { key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY } }
        defaultCenter = { center }
        defaultZoom = { zoom } >
        {
            route.map((location, index) => ( <
                Marker key = { index }
                lat = { location.lat }
                lng = { location.lng }
                />
            ))
        } <
        /GoogleMapReact> <
        /div>
    );
}

function Marker() {
    return ( <
        div style = {
            { backgroundColor: 'red', width: '10px', height: '10px', borderRadius: '50%' } } > < /div>
    );
}

export default BusRoute;