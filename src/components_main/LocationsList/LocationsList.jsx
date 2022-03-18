import React, { useEffect } from 'react';
import {
    HashRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

function LocationsList() {

    const locations = useSelector(store => store.locations)
    console.log(locations);
    return (
        <>
            <p>I am the locatiosn weeee</p>
            {locations.map(local => (
                <div>
                    <h1>{local.name}</h1>
                    <h3>{local.description}</h3>
                    <button>MORE INFO</button>
                </div>
            ))}
        </>
    )
}

export default LocationsList