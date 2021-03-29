import { combineReducers } from 'redux';
import session from './session_reducer';
import ui from './ui_reducer';
import search from './search_reducer'

const RootReducer = combineReducers({
  session,
  ui,
  search
});

export default RootReducer;