import React from 'react';

function BusListItem(props) {
    const { bus } = props;

    return ( <
        li >
        <
        strong > { bus.name } < /strong> <
        br / > { bus.description } <
        br / >
        <
        small > Capacity: { bus.capacity } < /small> <
        /li>
    );
}

export default BusListItem;