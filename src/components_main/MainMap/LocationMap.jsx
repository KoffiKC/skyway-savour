import React, { useEffect } from 'react';
import GoogleMapReact from 'google-map-react'
import './map.css'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
// import baselinemylocation from '@iconify/icons-mdi/baseline-my-location'
import { useDispatch, useSelector } from 'react-redux';



export default function LocationMap({details, user}) {

const LocationPin = ({ text }) => (
    <div className="pin" /* onClick={() => console.log('if this were its own component, i could have all the opject info!')}*/>
        {text === `${details.name}` ? <Icon icon="ic:baseline-my-location" color="#ff0af0" />  :
        <Icon icon={locationIcon} className="pin-icon"/> }
        <p className="pin-text">{text}</p>

    </div>
)

const UserPin = () => (
    <div className="pin" /* onClick={() => console.log('if this were its own component, i could have all the opject info!')}*/>
        <Icon icon="ic:baseline-my-location" color="#ff0af0" />
        <p className="pin-text">{text}</p>

    </div>
)




    const dispatch = useDispatch()

    useEffect(() => {
        console.log('HAAI');
        dispatch({ type: 'FETCH_LOCATIONS' })
    }, [])

    const locations = useSelector(store => store.locations)

    console.log(locations);

    const handleClick = () => {
        console.log('Hewpoooo');
    }

    return (
        <>
            <div className="map">
                <h2 className="map-h2">Skyway Savor!</h2>

                <div className="google-map">
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyAq_lGv4XjzCddzO_oKkBx5j2drPXR8U5A' }}
                        defaultCenter={
                            {
                                address: '',
                                lat: details.lat,
                                lng: details.lng,
                            }}
                        defaultZoom={15}
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
                            text={'prime digital academy'}
                        />
                    </GoogleMapReact>
                </div>
            </div>
        </>
    )
}