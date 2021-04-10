import {combineReducers} from 'redux';
import todos from './todos';
import detailsReducer from'./details'

const rootReducer = combineReducers({
  todos,
  detailsReducer
});

export default rootReducer;
