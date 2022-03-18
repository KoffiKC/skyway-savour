import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

function LocationView () {

    const location_details = useSelector(store => store.details)
    const details = location_details[0]

console.log('I am the details on the wall',details);
    return (
        <>
            <h1>{details.name}</h1>
            <img src={details.image_url} alt="" width={375}/>
            <p>{details.description}</p>
            <h3>{details.price_status}</h3>
        </>
    )
}

export default LocationView