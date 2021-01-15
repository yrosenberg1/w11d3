import {ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions'

const sessonErrorReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case ERRORS:
            return Object.assign({}, state, action.errors);
            
        case RECEIVE_CURRENT_USER:
            return []
        default:
            return state;
    }
};

export default sessonErrorReducer