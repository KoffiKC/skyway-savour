import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function LocationItem({ local }) {

    const dispatch = useDispatch()
    const history = useHistory()

    const handleClick = () => {
        console.log('clciky wohoo');
        // dispatch({
        //     type: 'FETCH_DETAILS',
        //     payload: local.id
        // })
        // dispatch({
        //     type: 'FETCH_LOCATION_R',
        //     payload: local.id
        // })
        history.push(`/location/${local.id}`)
    }

    const showOnMap = () => {
        dispatch({
            type: 'SET_SELECTED',
            payload: local
        })
    }

    return (
        <div >
            <Card sx={{ maxWidth: 345, maxHeight: 320 }}>
                <CardMedia
                    component="img"
                    alt={local?.name}
                    height="200"
                    image={local?.image_url}
                />
                <CardContent sx={{ p: 0 }} >
                    <Button 
                    color="secondary" 
                    size="large"
                    onClick={handleClick}>Details</Button>
                    <Button
                    size="extra-large"
                    color="secondary"
                    onClick={showOnMap}
                    endIcon={<LocationOnIcon />}>Map</Button>
                    <Rating name="read-only" value={local.average} sx={{ fontSize: 65 }} readOnly />
                </CardContent>
            </Card>
        </div>
    )
}

export default LocationItem