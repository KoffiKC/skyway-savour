import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

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
      {reviews.map(review => (
        <div>
          <h3>{review.name}</h3>
          <h3>{review.username} gives a rating of {review.rating}</h3>
          <p>{review.cohort}</p>
          <p>{review.review}</p>
          <EditReviewForm Review={review}/>
          <button onClick={() => handleClick(review)}>DELETE</button>
        </div>
      ))}
    </>
  )
}

export default UserReviews