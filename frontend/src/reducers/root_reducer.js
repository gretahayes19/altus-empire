import { combineReducers } from 'redux';
import session from './session_reducer';
import ui from './ui_reducer';
import search from './search_reducer';
import errors from './errors_reducer';
import entitiesReducer from './entities_reducer';

const RootReducer = combineReducers({
  session,
  entities: entitiesReducer,
  errors,
  ui,
  search
});

export default RootReducer;