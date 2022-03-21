import React, { useEffect } from 'react';
// import {
//     HashRouter as Router,
//     Redirect,
//     Route,
//     Switch,
// } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import LocationItem from '../LocationItem/LocationItem';

function LocationsList() {

    const dispatch = useDispatch()
    const history = useHistory()

    const handleClick = (local) => {
        console.log('clciky wohoo');
        // dispatch({
        //     type: 'FETCH_DETAILS',
        //     payload: local.id
        // })
        // dispatch({
        //     type: 'FETCH_LOCATION_R',
        //     payload: local.id
        // })
        history.push(`/location/${local.id}`)
    }

    const locations = useSelector(store => store.locations)
    const location_details = useSelector(store => store.details)
    console.log(locations, 'just one of the things', location_details);
    return (
        <>
            <p>I am the locatiosn weeee</p>
            {locations.map(local => (
                    <LocationItem
                        key={local.id}
                        local={local} />   
            ))}
        </>
    )
}

export default LocationsList