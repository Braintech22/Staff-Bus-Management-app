import React from 'react';

const BusMarker = ({ lat, lng }) => {
    return ( <
        div style = {
            {
                height: '20px',
                width: '20px',
                borderRadius: '50%',
                backgroundColor: 'blue',
            }
        }
        />
    );
};

export default BusMarker;