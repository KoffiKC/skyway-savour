import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

function UserReviews({ reviews }) {
  return (
    <>
      {reviews.map(review => (
        <div>
          <h3>{review.name}</h3>
          <p>{review.review}</p>
        </div>
      ))}
    </>
  )
}

export default UserReviews