import React, { useEffect } from 'react';
import GoogleMapReact from 'google-map-react'
import './map.css'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
// import baselinemylocation from '@iconify/icons-mdi/baseline-my-location'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';



export default function LocationMap({details, user}) {




  

const LocationPin = ({ text }) => (
    <div className="pin" /* onClick={() => console.log('if this were its own component, i could have all the opject info!')}*/>
        {text === `${details.name}` ?  <Icon icon={locationIcon} className="pin-icon"/> :
        <Icon icon="ic:baseline-my-location" color="#ff0af0" /> }
        <p className="pin-text">{text}</p>

    </div>
)

const UserPin = ({text}) => (
    <div className="pin" /* onClick={() => console.log('if this were its own component, i could have all the opject info!')}*/>
        <Icon icon="ic:baseline-my-location" color="#990099" width="30" height="30" ></Icon>
        <p className="pin-text">{text}</p>

    </div>
)




    const dispatch = useDispatch()

    // useEffect(() => {
    //     console.log('HAAI');
    //     getLocation()
    // }, [])




    return (
        <>
            <div className="map">

                <div className="google-map">
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: process.env.MAP_API}}
                        defaultCenter={
                            {
                                address: '',
                                lat: details.lat,
                                lng: details.lng,
                            }}
                        defaultZoom={15}
                        options={{ gestureHandling: 'none', disableDefaultUI: true}}
                    >
                        {/* <img src="./Ihavenocluewhatimdoing.png" alt='I have no idea what im doing'></img> */}
                        {/* {locations.map(marker => (
                            <LocationPin
                                lat={marker.lat}
                                lng={marker.lng}
                                text={marker.name}
                                onClick={handleClick}
                            />
                        ))} */}
                        <LocationPin
                            lat={details.lat}
                            lng={details.lng}
                            text={`${details.name}`}
                        />
                        <UserPin
                            lat={user.lat}
                            lng={user.lng}
                            text={user.name}
                        />
                    </GoogleMapReact>
                </div>
            </div>
        </>
    )
}