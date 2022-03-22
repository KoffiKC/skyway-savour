import React, { useEffect } from 'react';
import {
    HashRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function LocationItem({ local }) {

    const dispatch = useDispatch()
    const history = useHistory()

    const handleClick = (local) => {
        console.log('clciky wohoo');
        dispatch({
            type: 'FETCH_DETAILS',
            payload: local.id
        })
        // dispatch({
        //     type: 'FETCH_LOCATION_R',
        //     payload: local.id
        // })
        history.push(`/location/${local.id}`)
    }

    return (
        <>
            <h1>{local.name}</h1>
            <h3>{local.description}</h3>
            <button onClick={() => handleClick(local)}>MORE INFO</button>
        </>
    )
}

export default LocationItem