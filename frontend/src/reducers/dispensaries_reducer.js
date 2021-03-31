import { 
    RECEIVE_DISPENSARIES, 
    CLEAR_DISPENSARIES,
    RECEIVE_DISPENSARY_PHOTO
} from '../actions/dispensary_actions';

export default function dispensariesReducer(state = [], action) {
    // debugger;
    // Object.freeze(state);
    // let newState = Object.assign({}, state)
    // debugger;
    switch (action.type) {
        case RECEIVE_DISPENSARIES:
            return action.dispensaries.data;
        case CLEAR_DISPENSARIES:
            return [];
        default:
            return state;
    }
}