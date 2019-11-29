import * as actions from '../actions/actions';

let initState = [];

export default (state = initState, action) => {
    switch (action.type) {
        case actions.LOAD_USERS_SUCCESS:
            return [
                ...state,
                ...action.users
            ];
        default:
            return state
    }
}

export const getUserByNickName = (users, nickName) => users.find((user) => user.login.username === nickName);