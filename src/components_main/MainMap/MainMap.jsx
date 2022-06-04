import React, { useEffect } from 'react';
import GoogleMapReact from 'google-map-react'
import './map.css'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
// import baselinemylocation from '@iconify/icons-mdi/baseline-my-location'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';



export default function MainMap() {

    useEffect(()=>{
        getLocation()
    },[])

    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);

    if ('geolocation' in navigator) {
        /* geolocation is available */
        console.log('yes');

    } else {
        /* geolocation IS NOT available */
        console.log("nope");

    }

    const getLocation = () => {
        console.log('is anything happening?');

        setStatus('Locating...');
        navigator.geolocation.getCurrentPosition((position) => {
            setStatus('you have been geolocated');
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
        }, () => {
            setStatus('Unable to retrieve your location');
        });
    }

    // let userLocal = {
    //   status: status,
    //   lat: lat,
    //   lng: lng,
    //   name: "ITS MEEEEE!"
    // }


    const LocationPin = ({ text }) => (
        <div className="pin" /* onClick={() => console.log('if this were its own component, i could have all the opject info!')}*/>
            {text === selected.name  ? <><Icon icon={locationIcon} className="pin-icon" color="#ff0af0" width="30" height="30" />
            </> :
                <Icon icon={locationIcon} width="23" height="23"   />}
            {/* <p className="pin-text">{text}</p> */}

        </div>
    )

    const UserPin = ({ text }) => (
        <div className="pin" /* onClick={() => console.log('if this were its own component, i could have all the opject info!')}*/>
            <Icon icon="ic:baseline-my-location" color="#909" width="23" height="23" />
            <p className="pin-text">{text}</p>
        </div>
    )




    const dispatch = useDispatch()

    useEffect(() => {
        console.log('HAAI');
        dispatch({ type: 'FETCH_LOCATIONS' })
    }, [])

    const locations = useSelector(store => store.locations)
    const selected = useSelector(store => store.selected)
    console.log(locations);

    const handleClick = () => {
        console.log('Hewpoooo');
    }

    return (
        <>
            <div className="map">


                <div className="google-map">
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: process.env.MAP_API }}
                        defaultCenter={
                            {
                                address: '301 S 4th Ave #577, Minneapolis, MN 55415',
                                lat: 44.9774,
                                lng: -93.2720,
                            }}
                        defaultZoom={14}
                        options={{ gestureHandling: 'none', disableDefaultUI: true}}
                    >
                        {/* <img src="./Ihavenocluewhatimdoing.png" alt='I have no idea what im doing'></img> */}
                        
                        {locations.map(marker => (
                            <LocationPin
                                lat={marker.lat}
                                lng={marker.lng}
                                text={marker.name}
                                onClick={handleClick}
                            />
                        ))}
                        <UserPin
                            lat={lat}
                            lng={lng}
                            text={'IT meeeee'}
                        />
                    </GoogleMapReact>
                </div>
            </div>
        </>
    )
}



// const MainMap = ({ location, zoomLevel }) => (
//     <div className="map">
//         <h2 className="map-h2">Skyway Savor!</h2>

//         <div className="google-map">
//             <GoogleMapReact
//                 bootstrapURLKeys={{ key: process.env.MAP_API }}
//                 defaultCenter={
//                     {
//                         address: '301 S 4th Ave #577, Minneapolis, MN 55415',
//                         lat: 44.9780,
//                         lng: -93.2635,
//                     }}
//                 defaultZoom={17}
//             >
//                 {/* <img src="./Ihavenocluewhatimdoing.png" alt='I have no idea what im doing'></img> */}
//                 {/* {locations.map(marker => (
//                             <LocationPin
//                             lat={marker.lat}
//                             lng={marker.lng}
//                             text={marker.address}
//                             />
//                             ))} */}
//                 <LocationPin
//                     lat={44.9780}
//                     lng={-93.2635}
//                     text={'prime digital academy'}
//                 />
//             </GoogleMapReact>
//         </div>
//     </div>
// )


// export default MainMap