const INITIAL_STATE = {
  color: '#999'
};

const ColorReducer = (state = INITIAL_STATE, action) => {
 switch(action.type){
   case '@color/update':
     let newState = state.color = action.payload.color;
     return newState;
  default:
    return state;
 }
};

export default ColorReducer;