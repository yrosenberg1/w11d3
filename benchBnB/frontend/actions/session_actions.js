import * as SessionApiUtil from "../util/session_api_util"

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER =  'LOGOUT_CURRENT_USER';
export const ERRORS = 'ERRORS';

export const receiveCurrentUser = user =>({
    type: RECEIVE_CURRENT_USER,
    user
});

export const logoutCurrentUser = () =>({
    type: LOGOUT_CURRENT_USER
});

export const receiveErrors = ([errors]) =>({
    type: ERRORS
    [errors]
}); 





export const login = user => dispatch => (
    SessionApiUtil.postSession(user).then(user => dispatch(receiveCurrentUser(user)))
);

export const logout = () => dispatch => (
    SessionApiUtil.deleteSession.then( () => dispatch(logoutCurrentUser()))
);

export const signup = user => dispatch => (
    SessionApiUtil.postUser(user).then(user => dispatch(receiveCurrentUser(user)))
);