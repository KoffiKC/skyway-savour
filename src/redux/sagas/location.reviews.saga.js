import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchLocationReviews(action) {

    // console.log(event);
    console.log('this should be it', action.payload);
    
    try {
        const reviews = yield axios.get(`/api/reviews/location/${action.payload}`)
        console.log('The location reviews fetched from database', reviews.data);
        yield put({ type:'SET_LOCATION_R', payload: reviews.data})

    } catch (error) {
        console.log('the location reviews were not fetched D:', error);

    }

}

function* postLocationReview(action) {

    const data = action.payload
    console.log('I just wann alog that we get here lol', data);
    // console.log('this should be it', action.payload);
    
    try {
        yield axios.post(`/api/reviews/location/${data.location_id}`, {rating: data.rating, review: data.review})
        // console.log('The location reviews fetched from database', reviews.data);
        yield put({ type:'FETCH_LOCATION_R', payload: data.location_id})


    } catch (error) {
        console.log('the location reviews were not fetched D:', error);

    }

}

function* locationReviewsSaga() {
    yield takeLatest('FETCH_LOCATION_R', fetchLocationReviews);
    yield takeLatest('ADD_REVIEW', postLocationReview);
}

export default locationReviewsSaga