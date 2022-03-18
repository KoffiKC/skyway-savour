import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

function LocationView () {
    return (
        <>
        <p>Im a the location!</p>
        </>
    )
}

export default LocationView