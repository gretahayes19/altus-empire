import { combineReducers } from 'redux';
import dispensariesReducer from './dispensaries_reducer'

const entitiesReducer = combineReducers({
    dispensaries: dispensariesReducer
});

export default entitiesReducer;