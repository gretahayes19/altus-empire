import { 
    RECEIVE_DISPENSARIES, 
    CLEAR_DISPENSARIES,
    // RECEIVE_REVIEW 
} from '../actions/dispensary_actions';

export default function dispensariesReducer(state = [], action) {
    switch (action.type) {
        case RECEIVE_DISPENSARIES:
            return action.dispensaries.data;
        case CLEAR_DISPENSARIES:
            return [];
        // case RECEIVE_REVIEW:
        //     return action.dispensaries.data
        default:
            return state;
    }
}