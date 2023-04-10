import React from 'react';

import "./Home.module.scss";



function Home() {
    return ( <
        div >
        <
        h1 > Welcome to Bustrak App < /h1> <
        p > Our app helps manage bus schedules and routes
        for staff transportation. < /p> <
        ul >
        <
        li > View bus routes and stops on a map < /li> <
        li > Check real - time bus arrival and departure times < /li> <
        li > Manage bus schedules and routes < /li> <
        li > Track bus usage and occupancy < /li> <
        /ul> <
        p > Sign up or log in to get started! < /p> <
        /div>
    );
}

export default Home;