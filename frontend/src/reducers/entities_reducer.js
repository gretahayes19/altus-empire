import { combineReducers } from 'redux';
import dispensariesReducer from './dispensaries_reducer';
import reviewsReducer from './reviews_reducer';

const entitiesReducer = combineReducers({
    dispensaries: dispensariesReducer,
    reviews: reviewsReducer
});

export default entitiesReducer;