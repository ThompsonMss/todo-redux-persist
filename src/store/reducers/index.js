import { combineReducers } from 'redux';

import TaskReducers from './TaskReducers';
import ColorReducer from './ColorReducer';

export default combineReducers({
  tasks: TaskReducers,
  color: ColorReducer
});