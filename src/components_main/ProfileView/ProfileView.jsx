import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

function ProfileView() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: 'FETCH_USER_R',
      payload: user.id
    });
  }, [])

  const user = useSelector(store => store.user);
  const reviews = useSelector(store => store.userReviews);

  console.log('this is real, this si me!!', user, 'ALSO REVIEW WAU', reviews);
  return (
    <>
      <h1>Hi my name is {user.username}</h1>
      {reviews.map(review => (
        <div>
          <h3>{review.name}</h3>
          <p>{review.review}</p>
        </div>
      ))}
    </>
  )
}

export default ProfileView
