import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import UserReviews from '../UserReviews/UserReviews';
import LogOutButton from '../../components/LogOutButton/LogOutButton';

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
    <div className='location-list'>
      <h1>Hi There, {user.username}</h1>
      <div>
      <h3>{user.cohort}</h3>
      <LogOutButton/>
      </div>
        <UserReviews reviews={reviews}/>
    </div >
  )
}

export default ProfileView

