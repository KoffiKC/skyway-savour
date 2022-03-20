const detailsReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_DETAILS':
        return action.payload;
     case 'CLEAR_DETAILS':
        return {};
      default:
        return state;
    }
  };
  
  // details will be on the redux state at:
  // state.details
  export default detailsReducer;