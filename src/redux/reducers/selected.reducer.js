const selectedReducer = (state = {
    name: '',
    lat:44.97622112351434,
    lng:-93.27059878833734}, action) => {
    switch (action.type) {
      case 'SET_SELECTED':
          console.log(action.payload);
          
        // return action.payload;
     case 'CLEAR_DETAILS':
        return {};
      default:
        return state;
    }
  };
  
  // details will be on the redux state at:
  // state.details
  export default selectedReducer;