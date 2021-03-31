import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import InputErrorsReducer from './input_errors_reducer';

export default combineReducers({
  session: SessionErrorsReducer,
  input: InputErrorsReducer
});