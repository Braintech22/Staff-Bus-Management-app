import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';
import Map from './Map';
import BusMarker from './BusMarker';

const App = ({ apiKey }) => {
    const [buses, setBuses] = useState([]);

    useEffect(() => {
        const db = firebase.firestore();
        db.collection('buses').onSnapshot((snapshot) => {
            const buses = snapshot.docs.map((doc) => doc.data());
            setBuses(buses);
        });
    }, []);

    return ( <
        Map apiKey = { apiKey } > {
            buses.map((bus) => ( <
                BusMarker key = { bus.id }
                lat = { bus.lat }
                lng = { bus.lng }
                />
            ))
        } <
        /Map>
    );
};

export default App;