import {combineReducers} from 'redux';
import entitiesReducer from './entities_reducer';
import errorsReducers from './error_reducer';

const rootReducer = combineReducers({
    entities: entitiesReducer,
    errors: errorsReducers,
});

export default rootReducer