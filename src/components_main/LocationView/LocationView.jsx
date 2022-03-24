import React, { useEffect } from 'react';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';


import UserReviews from '../UserReviews/UserReviews';
import LocationReviews from '../LocationReviews/LocationReviews';
import LocationMap from '../MainMap/LocationMap';
import ReviewForm from '../ReviewForm/ReviewForm';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function LocationView() {

  const id = useParams().id
  const dispatch = useDispatch();

  const [map, setMap] = useState(false)

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

  const toggleMap =()=>{
    console.log('boops');
    setMap(!map)
  }


  // const reviews = useSelector(store => store.locationReviews);
  const location_details = useSelector(store => store.details);

  const handleClick = (map) => {
    console.log('maur clickiibhss :)', map);
   
  }


  const details = location_details[0]

  console.log('location details and location id', details, id);
  return (
    <>
      <h1>{details?.name}</h1>
      {map ? <img src={details?.image_url} alt="" width={375} /> :
        <LocationMap/>
      }
      {/* <img src={details?.image_url} alt="" width={375} />
      <LocationMap/> */}
      <p>{details?.description}</p>
      <h3>{details?.price_status}</h3>
      <button onClick={handleClick}>Add Review</button>
      <button onClick={() => toggleMap(map)}>Show map</button>
      <ReviewForm details={location_details} />
      <LocationReviews   />
    </>
  )
}

export default LocationView