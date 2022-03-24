import React, { useEffect } from 'react';
import {
    HashRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import GoogleMapReact from 'google-map-react'
import './map.css'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import { useDispatch, useSelector } from 'react-redux';


<p>hewwo lorld</p>

const LocationPin = ({ text }) => (
    <div className="pin" /* onClick={() => console.log('if this were its own component, i could have all the opject info!')}*/>
        <Icon icon={locationIcon} className="pin-icon" />
        <p className="pin-text">{text}</p>
    </div>
)

const MainMap = ({ location, zoomLevel }) => (
    <div className="map">
        <h2 className="map-h2">Come Visit Us At Our Campus</h2>

        <div className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.MAP_API }}
                defaultCenter={
                    {
                        address: '301 S 4th Ave #577, Minneapolis, MN 55415',
                        lat: 44.9780,
                        lng: -93.2635,
                    }}
                defaultZoom={17}
            >
                {/* <img src="./Ihavenocluewhatimdoing.png" alt='I have no idea what im doing'></img> */}
                {/* {location.map(marker => (
                            <LocationPin
                            lat={marker.lat}
                            lng={marker.lng}
                            text={marker.address}
                            />
                            ))} */}
                <LocationPin
                    lat={44.9780}
                    lng={-93.2635}
                    text={'prime digital academy'}
                />
            </GoogleMapReact>
        </div>
    </div>
)


export default MainMap