import * as types from '../action/ActionTypes';

const initialState = {
  color: 'black'
};

const color = (state = initialState, action) => {
  switch(action.type) {
    case types.SET_COLOR:
      return {
        color: action.color
      };
    default:
      return state;
  }
}

export default color;