import React, { useEffect } from 'react';
import {
    HashRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import LocationReviews from '../LocationReviews/LocationReviews';
import ReviewForm from '../ReviewForm/ReviewForm';

function LocationHeader({ details }) {

    const reviews = useSelector(store => store.locationReviews);

    const handleClick = () => {
        console.log('maur clickiibhss :)');
      }

    return (
        <>
            <h1>{details.name}</h1>
            <img src={details.image_url} alt="" width={375} />
            <p>{details.description}</p>
            <h3>{details.price_status}</h3>
            <button onClick={handleClick}>Add Review</button>
            <ReviewForm details={details} />
            <LocationReviews reviews={reviews} />
        </>
    )
}

export default LocationHeader