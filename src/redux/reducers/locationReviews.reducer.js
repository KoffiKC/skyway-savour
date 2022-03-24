const locationReviewsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_LOCATION_R':
        return action.payload;
      default:
        return state;
    }
  };
  
  // details will be on the redux state at:
  // state.details
  export default locationReviewsReducer;