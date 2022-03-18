import React, { useEffect } from 'react';
import {
    HashRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function LocationsList() {
    
    const dispatch = useDispatch()
    const history = useHistory()

    const handleClick = (local) => {
        console.log('clciky wohoo');
        dispatch({
            type: 'FETCH_DETAILS',
            payload: local.id
        })
        history.push(`/location/${local.id}`)
    }

    const locations = useSelector(store => store.locations)
    const location_details = useSelector(store => store.details)
    console.log(locations, 'just one of the things', location_details);
    return (
        <>
            <p>I am the locatiosn weeee</p>
            {locations.map(local => (
                <>
                    <div key={local.id}>
                        <h1>{local.name}</h1>
                        <h3>{local.description}</h3>
                        <button onClick={() => handleClick(local)}>MORE INFO</button>
                    </div>
                </>
            ))}
        </>
    )
}

export default LocationsList