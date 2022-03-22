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

    useEffect(() => {
        dispatch({ type: 'FETCH_LOCATIONS'});
      }, []);

    const locations = useSelector(store => store.locations)
    const location_details = useSelector(store => store.details)
    console.log(locations, 'just one of the things', location_details);
    return (
        <>
            {locations.map(local => (
                    <LocationItem
                        key={local.id}
                        local={local} />   
            ))}
        </>
    )
}

export default LocationsList