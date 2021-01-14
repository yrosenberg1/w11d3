import * as SessionApiUtil from "../util/session_api_util"

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const REMOVE_CURRENT_USER =  'REMOVE_CURRENT_USER';

export const receiveCurrentUser = user =>({
    type: RECEIVE_CURRENT_USER,
    user
});

export const logoutCurrentUser = () =>({
    type: REMOVE_CURRENT_USER
});

export const receiveErrors = [errors]) =>({
    type:
}) 