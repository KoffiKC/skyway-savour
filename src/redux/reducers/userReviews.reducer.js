const userReviewsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_USER_R':
        return action.payload;
     /*  case 'UNSET_USER':
        return {}; */
      default:
        return state;
    }
  };
  
  // details will be on the redux state at:
  // state.details
  export default userReviewsReducer;