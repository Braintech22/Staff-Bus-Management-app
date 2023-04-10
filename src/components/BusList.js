import React from 'react';

function BusList(props) {
    const { buses } = props;

    return ( <
        div >
        <
        h2 > Buses < /h2> <
        ul > {
            buses.map(bus => ( <
                li key = { bus.id } >
                <
                strong > { bus.name } < /strong> <
                br / > { bus.description } <
                br / >
                <
                small > Capacity: { bus.capacity } < /small> <
                /li>
            ))
        } <
        /ul> <
        /div>
    );
}

export default BusList;