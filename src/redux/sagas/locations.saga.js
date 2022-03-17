import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchLocations() {

    try {
        const locations = yield axios.get('/api/locations')
        console.log('items fetched from database', locations);
        // yield put({ type:'SET_ITEMS', payload: shelfItems.data})

    } catch (error) {
        console.log('the shelf item were not fetched :/', error);

    }

}

function* locationsSaga() {
    yield takeLatest('FETCH_LOCATIONS', fetchLocations);
}

export default locationsSaga