import React, { Component } from 'react';

class Map extends Component {
    componentDidMount() {
        // Initialize the map
        const map = new window.google.maps.Map(this.refs.map, {
            center: { lat: 37.7749, lng: -122.4194 },
            zoom: 8
        });
    }

    render() {
        return ( <
            div ref = "map"
            style = {
                { height: '400px', width: '100%' } } > < /div>
        );
    }
}

export default Map;