import { combineReducers } from 'redux';
import dispensariesReducer from './dispensaries_reducer'

const entitiesReducer = combineReducers({
    dispensariesReducer
});

export default entitiesReducer;