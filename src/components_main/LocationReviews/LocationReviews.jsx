import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

function LocationReviews() {

  const reviews = useSelector(store => store.locationReviews);
  

  console.log('this is what LOCATION reviews looks like... riGHT NOW!', reviews);
  return (
    <>
      {reviews?.map(review => (
        <div>
          <h3>{review?.name}</h3>
          <h3>{review?.username} gives a rating of {review?.rating}</h3>
          <p>{review?.cohort}</p>
          <p>{review?.review}</p>
        </div>
      ))}
    </>
  )
}

export default LocationReviews