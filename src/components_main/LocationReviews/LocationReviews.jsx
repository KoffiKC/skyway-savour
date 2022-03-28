import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';



import { useDispatch, useSelector } from 'react-redux';

function LocationReviews() {

  const reviews = useSelector(store => store.locationReviews);


  console.log('this is what LOCATION reviews looks like... riGHT NOW!', reviews);
  return (
    <>
      {reviews?.map(review => (
        <div>
          <Box
            sx={{
              width: 300,
              height: 100,
              backgroundColor: 'primary.dark',
              opacity: [0.9, 0.8, 0.7],
              borderRadius: '10px',
              padding: 1,
              display: 'flex',
              margin: 2,
              marginLeft: 2.5,


            }}
          >

            {/* <h3>{review?.username} gives a rating of {review?.rating}</h3> */}
            <div className='review'>
              <h3>{review?.username}</h3>
              <p>{review?.cohort}</p>
            </div>
            <div>
              <p>{review?.review}</p>
              <Rating name="read-only" value={review?.rating} sx={{ fontSize: 23, paddingLeft: '100opx' }} readOnly />
            </div>
          </Box>
        </div>
      ))}
    </>
  )
}

export default LocationReviews