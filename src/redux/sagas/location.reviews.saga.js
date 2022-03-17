import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchLocationReviews(action) {

    // console.log(event);
    
    try {
        const reviews = yield axios.get(`/api/reviews/location/${action.payload}`)
        console.log('The location reviews fetched from database', reviews.data);
        yield put({ type:'SET_LOCATION_R', payload: reviews.data})

    } catch (error) {
        console.log('the location reviews were not fetched D:', error);

    }

}

function* locationReviewsSaga() {
    yield takeLatest('FETCH_LOCATION_R', fetchLocationReviews);
}

export default locationReviewsSaga