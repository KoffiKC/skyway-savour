import React, { useEffect } from 'react';


import { useDispatch, useSelector } from 'react-redux';


import UserReviews from '../UserReviews/UserReviews';
import LocationReviews from '../LocationReviews/LocationReviews';
import ReviewForm from '../ReviewForm/ReviewForm';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function LocationView() {

  const id = useParams().id
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'FETCH_DETAILS',
      payload: id
    });
    dispatch({
      type: 'FETCH_LOCATION_R',
      payload: id
  })
  }, [])


  // const reviews = useSelector(store => store.locationReviews);
  const location_details = useSelector(store => store.details);

  const handleClick = () => {
    console.log('maur clickiibhss :)');
  }


  const details = location_details[0]

  console.log('location details and location id', details, id);
  return (
    <>
      <h1>{details?.name}</h1>
      <img src={details?.image_url} alt="" width={375} />
      <p>{details?.description}</p>
      <h3>{details?.price_status}</h3>
      <button onClick={handleClick}>Add Review</button>
      <ReviewForm details={location_details} />
      <LocationReviews   />
    </>
  )
}

export default LocationView