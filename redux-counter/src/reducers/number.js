import * as types from '../action/ActionTypes';

const initialState = {
  number: 0
};

const number = (state = initialState, action) => {
  switch(action.type) {
    case types.INCREMENT:
      return {
        number: action.number + 1
      };
    case types.DECREMENT:
      return {
        number: action.number - 1
      }
    default:
      return state;
  }
}

export default number;