/* Base reducer object that represents all the state of our application */
import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

export default combineReducers({
    user: userReducer
});