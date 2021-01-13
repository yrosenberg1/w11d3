import * as SessionsUtil from "../utils/sessions"

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"

export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"

// SYNC 
export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user,
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,

});


// async

export const createNewUser = formUser => dispatch =>(
    SessionsUtil.postUser(formUser).then(user => dispatch(receiveCurrentUser(user)))
);

export const login = formUser => dispatch => (
    SessionsUtil.postSession(formUser).then(user => dispatch(receiveCurrentUser(user)))
);

export const logout = () => dispatch => (
    SessionsUtil.deleteSession().then(() => dispatch(logoutCurrentUser()))
);