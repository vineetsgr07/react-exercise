import { combineReducers } from 'redux';
import login from './authReducer';
import users, * as fromUsers from './usersReducer';

const rootReducer = combineReducers({
    login,
    users
});

export const getUserByNickName = (users, nickName) => fromUsers.getUserByNickName(users, nickName);

export default rootReducer;