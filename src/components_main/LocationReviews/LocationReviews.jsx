import React, { useEffect } from 'react';
import Box from '@mui/material/Box';


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
              borderRadius: '20px',
              display: 'grid',

            }}
            >
            <h3>{review?.name}</h3>
            <h3>{review?.username} gives a rating of {review?.rating}</h3>
            <p>{review?.cohort}</p>
            <p>{review?.review}</p>
            
          </Box>
        </div>
      ))}
    </>
  )
}

export default LocationReviews