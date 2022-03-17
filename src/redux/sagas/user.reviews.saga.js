import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchUserReviews(action) {

    // console.log(event);
    
    try {
        const reviews = yield axios.get(`/user/${action.payload}`)
        console.log('The user reviews fetched from database', reviews.data);
        yield put({ type:'SET_USER_R', payload: reviews.data})

    } catch (error) {
        console.log('the user reviews were not fetched D:', error);

    }

}

function* userReviewsSaga() {
    yield takeLatest('FETCH_USER_R', fetchUserReviews);
}

export default userReviewsSaga