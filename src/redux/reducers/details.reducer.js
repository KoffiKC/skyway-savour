const detailsReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_DETAILS':
        return action.payload;
     /*  case 'UNSET_USER':
        return {}; */
      default:
        return state;
    }
  };
  
  // details will be on the redux state at:
  // state.details
  export default detailsReducer;