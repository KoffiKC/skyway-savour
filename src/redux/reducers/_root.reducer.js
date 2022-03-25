import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import locations from './locations.reducer';
import details from './details.reducer';
import locationReviews from './locationReviews.reducer';
import userReviews from './userReviews.reducer'
import selected from './selected.reducer';
// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  locations, // hold all locations currently in the database
  details, // holds only information on one location
  locationReviews, // holds the reviews for a specific location
  userReviews, // hold all the reviews made by an individual user
  selected, // holds data for the specific location clicked on the map view
});

export default rootReducer;
