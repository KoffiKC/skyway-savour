import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchLocations() {

    try {
        const locations = yield axios.get('/api/locations')
        console.log('items fetched from database', locations);
        yield put({ type:'SET_LOCATIONS', payload: locations.data})

    } catch (error) {
        console.log('the locations were not fetched :/', error);

    }

}

function* locationsSaga() {
    yield takeLatest('FETCH_LOCATIONS', fetchLocations);
}

export default locationsSaga