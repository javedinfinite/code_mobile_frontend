import { combineReducers } from 'redux';
import socialReducers from './socialReducers';
 

const rootReducer = combineReducers({
    socialReducers: socialReducers
});

export default rootReducer;
