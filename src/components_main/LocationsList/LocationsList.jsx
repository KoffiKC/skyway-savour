import React, { useEffect } from 'react';
import {
    HashRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

function LocationsList() {

    const handleClick = () => {
        console.log('clciky wohoo');
    }

    const locations = useSelector(store => store.locations)
    console.log(locations);
    return (
        <>
            <p>I am the locatiosn weeee</p>
            {locations.map(local => (
                <>
                    <div key={local.id}>
                        <h1>{local.name}</h1>
                        <h3>{local.description}</h3>
                        <button onClick={handleClick}>MORE INFO</button>
                    </div>
                </>
            ))}
        </>
    )
}

export default LocationsList