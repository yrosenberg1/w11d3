import {combineReducers} from "redux";
import sessonErrorReducer from './session_error_reducer';

const errorsReducers = combineReducers({
   session: sessonErrorReducer,
});

export default errorsReducers