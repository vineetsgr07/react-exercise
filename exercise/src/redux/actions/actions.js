import AuthService from '../../services/auth.js'


export const USER_LOGIN = 'USER_LOGIN';
const logIn = () => {
    return {
        type: USER_LOGIN,
        data: true
    };
}


export const USER_LOGOUT = 'USER_LOGOUT';
const logOut = () => {
    return {
        type: USER_LOGOUT,
        data: false
    };
}


export const SET_USER_DATA = "SET_USER_DATA";
const setUser = (payload) => {
    return {
        type: SET_USER_DATA,
        data: payload
    };
}


export const CLEAR_USER_DATA = "CLEAR_USER_DATA";
const clearUser = () => {
    return { type: CLEAR_USER_DATA };
}


export const SET_ERROR_MSG = "SET_ERROR_MSG";
const setErrMsg = (payload) => {
    return {
        type: SET_ERROR_MSG,
        data: payload
    }
}


export const CLEAR_ERROR_MSG = "CLEAR_ERROR_MSG";
export const clearErrMsg = () => {
    return { type: CLEAR_ERROR_MSG };
}


export const logOutUser = () => {
    return dispatch => {
        dispatch(logOut());
        dispatch(clearUser());
    }
}


export const signUpUser = (userData) => {
    return dispatch => {
        return AuthService.setUserData(userData)
            .then(() => dispatch(logInUser()))
            .catch((error) => {
                dispatch(setErrMsg(error));
            });
    }
}


export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
export const loadUserListSuccess = (users) => {
    return { type: LOAD_USERS_SUCCESS, users };
}


export const loadUserList = () => {
    return dispatch => {

        return fetch("http://localhost:3001/users/", {
            method: 'GET', headers: {
                Accept: 'application/json',
            },
        })
            .then(response => {
                if (response.ok) {
                    response.json().then(json => {
                        dispatch(loadUserListSuccess(json));
                    });
                }
            })
            .catch(function (error) {
                console.log('Request failed', error)
            });
    }
}


export const logInUser = () => {
    return dispatch => {
        return AuthService.getUserData()
            .then((result) => {
                dispatch(logIn());
                dispatch(setUser(result));
                dispatch(clearErrMsg());
            })
            .catch((error) => {
                dispatch(setErrMsg(error));
            });
    };
}
