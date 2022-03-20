import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import UserReviews from '../UserReviews/UserReviews';


function ProfileView() {

  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch({
  //     type: 'FETCH_USER',
  //     payload: user.id
  //   });
  // }, [])

  const user = useSelector(store => store.user);
  const reviews = useSelector(store => store.userReviews);

  console.log('this is real, this si me!!', user, 'ALSO REVIEW WAU', reviews);
  return (
    <>
      <h1>Hi my name is {user.username}</h1>
      <h3>and I'm from the {user.cohort} cohort!</h3>
        <UserReviews reviews={reviews}/>
    </>
  )
}

export default ProfileView

