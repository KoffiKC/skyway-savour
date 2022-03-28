import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';


import { useDispatch, useSelector } from 'react-redux';
import EditReviewForm from '../EditReviewForm/EditReviewForm';


function UserReviews({ reviews }) {
  // console.log('this is what reviews looks like... riGHT NOW!', reviews);
  const dispatch = useDispatch()

  const handleClick = (review) => {
    console.log('YOU WILL BE DELETED');
    dispatch({
      type: 'DELETE_REVIEW',
      payload: {
        user_id: review.user_id,
        review_id: review.id
      }
    })
  }

  return (
    <>
    <h2>REVIEWS</h2>
    <div className='carousel'>
      {reviews.map(review => (
        <div>
          {/* <h3>{review.name}</h3>
          <h3>{review.username} gives a rating of {review.rating}</h3>
          <p>{review.cohort}</p>
          <p>{review.review}</p> */}
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
         
            <div>
              <p>{review?.review}</p>
              <Rating name="read-only" value={review?.rating} sx={{ fontSize: 23, paddingLeft: '100opx' }} readOnly />
            </div>
            <div>
            <EditReviewForm Review={review}/>
            <Button color='secondary' onClick={() => handleClick(review)}>DELETE</Button>
            </div>
          </Box>
        </div>
      ))}
      </div>
    </>
  )
}

export default UserReviews