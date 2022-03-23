import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* searchLocations(action) {

    console.log('nothings happening huh?');
    

    try {
        const locations = yield axios.get(`/api/search/${action.payload}`)
        console.log('data fetched based on search term', locations.data);
        yield put({ type:'SET_LOCATIONS', payload: locations.data})

    } catch (error) {
        console.log('the locations were not searched :[', error);

    }

}

function* sortLocations(action) {

    try {
        const locations = yield axios.get('/api/search/sort/;id')
        console.log('items fetched in a specific order', locations.data);
        yield put({ type:'SET_LOCATIONS', payload: locations.data})
        // yield put({ type:'SET_', payload: locations.data})

    } catch (error) {
        console.log('the locations were not sorted :{', error);

    }

}

function* searchSaga() {
    yield takeLatest('RUN_SEARCH', searchLocations);
    yield takeLatest('RUN_SORT', sortLocations);
}

export default searchSaga