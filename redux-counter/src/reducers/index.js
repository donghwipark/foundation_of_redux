import number from './number';
import color from './color';

import { combineReducers } from 'redux';

console.log(number, color);
const reducers = combineReducers({
  numberData: number,
  colorData: color
})

export default reducers;