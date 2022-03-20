import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchUserReviews(action) {

    // console.log(event);

    console.log('WHAT IS THIS THO??????', action);
    
    
    try {
        const reviews = yield axios.get(`/api/user/reviews/${action.payload}`)
        console.log('The user reviews fetched from database', reviews.data);
        yield put({ type:'SET_USER_R', payload: reviews.data})

    } catch (error) {
        console.log('the user reviews were not fetched D:', error);

    }

}

function* updateUserReviews(action) {


    // console.log('WHAT IS THIS THO??????', action.payload);
    const data = action.payload
    
    
    try {
        yield axios.put(`/api/reviews/user/${data.review_id}`, {rating: data.rating, review: data.review})
        yield put({ type:'FETCH_USER_R', payload: data.user_id})

    } catch (error) {
        console.log('the user review was not updated', error);

    }

}

function* deleteUserReview(action) {


    console.log('WHAT?????', action.payload);
    const data = action.payload
    
    
    try {
        yield axios.delete(`/api/reviews/user/${data.review_id}`)
        yield put({ type:'FETCH_USER_R', payload: data.user_id})

    } catch (error) {
        console.log('the user review was not updated', error);

    }

}

function* userReviewsSaga() {
    yield takeLatest('FETCH_USER_R', fetchUserReviews);
    yield takeLatest('UPDATE_REVIEW', updateUserReviews);
    yield takeLatest('DELETE_REVIEW', deleteUserReview);
}

export default userReviewsSaga