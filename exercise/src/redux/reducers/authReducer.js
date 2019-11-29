import * as actions from '../actions/actions';

let initState = {
    authError: null,
    isUserLogged: false,
    userData: {
        firstName: '',
        lastName: ''
    }
};

export default (state = initState, action) => {
    switch (action.type) {
        case actions.USER_LOGIN:
            console.log("USER_LOGIN: Reducer")
            return {
                ...state,
                isUserLogged: action.data
            };
        case actions.USER_LOGOUT:
            return {
                ...state,
                isUserLogged: action.data
            };
        case actions.SET_USER_DATA:
            return {
                ...state,
                userData: action.data
            };
        case actions.CLEAR_USER_DATA:
            return {
                ...state,
                userData: initState.userData
            };
        case actions.SET_ERROR_MSG:
            return {
                ...state,
                authError: action.data
            };
        case actions.CLEAR_ERROR_MSG:
            return {
                ...state,
                authError: initState.authError
            };
        default:
            return state
    }
}