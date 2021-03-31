import { combineReducers } from 'redux';
import dispensariesReducer from './dispensaries_reducer';
import reviewsReducer from './reviews_reducer';
import photosReducer from './photos_reducer';

const entitiesReducer = combineReducers({
    dispensaries: dispensariesReducer,
    reviews: reviewsReducer,
    photos: photosReducer
});

export default entitiesReducer;