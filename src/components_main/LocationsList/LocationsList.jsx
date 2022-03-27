import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import LocationItem from '../LocationItem/LocationItem';
import MainMap from '../MainMap/MainMap';
import SearchBar from '../SearchBar/SearchBar';

function LocationsList() {

    const dispatch = useDispatch()
    const history = useHistory()

    // useEffect(() => {
    //     dispatch({ type: 'FETCH_LOCATIONS'});
    //   }, []);

    const locations = useSelector(store => store.locations)
    const location_details = useSelector(store => store.details)
    console.log(locations, 'just one of the things', location_details);
    return (
        <>
            <div className='location-list'>
            <SearchBar/>
            <MainMap/>
        
                <div className='carousel'>
            {locations?.map(local => (
                
                    <LocationItem
                        key={local.id}
                        local={local} /> 
                // </div> 
                        ))}
                        </div> 
            </div>
        </>
    )
}

export default LocationsList