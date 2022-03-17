const locationsReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_LOCATIONS':
        return action.payload;
     /*  case 'UNSET_USER':
        return {}; */
      default:
        return state;
    }
  };
  
  // locaions will be on the redux state at:
  // state.locations
  export default locationsReducer;