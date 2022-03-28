import React, { useEffect } from 'react';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
//MUI THINGS
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import RateReviewIcon from '@mui/icons-material/RateReview';
import MapIcon from '@mui/icons-material/Map';

import UserReviews from '../UserReviews/UserReviews';
import LocationReviews from '../LocationReviews/LocationReviews';
import LocationMap from '../MainMap/LocationMap';
import ReviewForm from '../ReviewForm/ReviewForm';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function LocationView() {

  const id = useParams().id
  const dispatch = useDispatch();

  const [map, setMap] = useState(true)

  useEffect(() => {
    dispatch({
      type: 'FETCH_DETAILS',
      payload: id
    });
    dispatch({
      type: 'FETCH_LOCATION_R',
      payload: id
    })
    // getLocation()
  }, [])

  const toggleMap = () => {
    console.log('boops');
    setMap(!map)
    getLocation()
  }
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  if ('geolocation' in navigator) {
    /* geolocation is available */
    console.log('yes');

  } else {
    /* geolocation IS NOT available */
    console.log("nope");

  }

  const getLocation = () => {
    console.log('is anything happening?');

    setStatus('Locating...');
    navigator.geolocation.getCurrentPosition((position) => {
      setStatus('you have been geolocated');
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    }, () => {
      setStatus('Unable to retrieve your location');
    });
  }

  let userLocal = {
    status: status,
    lat: lat,
    lng: lng,
    name: "ITS MEEEEE!"
  }



  // const reviews = useSelector(store => store.locationReviews);
  const location_details = useSelector(store => store.details);

  const handleClick = (map) => {
    console.log('maur clickiibhss :)', map);

  }


  const details = location_details[0]

  // console.log('location details and location id', lat, lng);
  console.log('The LAT and the LN are:', lat, lng, status);

  return (
    <>
       <div className='location-list'>
      {/* <img src={details?.image_url} alt="" width={375} />
      <LocationMap/> */}
      {/* <button onClick={handleClick}>Add Review</button> */}
      <Card sx={{ maxWidth: 389, maxHeight: 851, bgcolor: '#ffcc66' }}>
        <h1>{details?.name}</h1>
        <CardContent sx={{ marginRight: '100px'}}>
          {map ? <img src={details?.image_url} alt="" width={375} /> :
            <LocationMap details={details} user={userLocal} />
          }
        </CardContent>
        <CardContent sx={{ display: 'flex', justifyContent: 'center' }} >
          
          <Button size="large"  onClick={() => toggleMap(map)} ><MapIcon/></Button>
          <Rating name="read-only" value={Number(details?.average)} sx={{ fontSize: 30, p: '0px'  }} readOnly />
          <h3>{details?.price_status}</h3>
        </CardContent>
          <p>{details?.description}</p>
        <CardContent  >

          {/* <button onClick={() => toggleMap(map)}>Show map</button> */}
          <div>
          <ReviewForm details={location_details} />
          </div>
          <div className='carousel' >
          <LocationReviews />
          </div>
        </CardContent>
      </Card>
      </div>
    </>
  )
}

export default LocationView