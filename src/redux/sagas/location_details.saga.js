import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchDetails(action) {

    // console.log(event);
    
    try {
        const details = yield axios.get(`/api/locations/details/${action.payload}`)
        console.log('The details fetched from database', details.data);
        yield put({ type:'SET_DETAILS', payload: details.data})
        // yield put({ type:'FETCH_LOCATION_R', payload: details.data[0].id})

    } catch (error) {
        console.log('the location details were not fetched :/', error);

    }

}

function* detailsSaga() {
    yield takeLatest('FETCH_DETAILS', fetchDetails);
}

export default detailsSaga
