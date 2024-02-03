import {SIGNIN_USER_REQUEST, SIGNIN_USER_FAILUR, SIGNIN_USER_SUCCESS, SIGNUP_USER_REQUEST, SIGNUP_USER_FAILUR, SIGNUP_USER_SUCCESS} from "./userTypes";
import http from "src/services/httpService";


// * signin action creator *

export function signinUserRequest(){
    return {
        type: SIGNIN_USER_REQUEST,
    }
}

export function signinUserFailur(error){
    return {
        type: SIGNIN_USER_FAILUR,
        payload: error
    }
}

export function signinUserSuccess(users){
    return {
        type: SIGNIN_USER_SUCCESS,
        payload: users
    }
}

export const userSignin = (data) =>{
    return function(dispatch){
        dispatch(signinUserRequest());
        http.post('/user/signin', data, { withCredentials : true })
        .then(res=>{
            dispatch(signinUserSuccess(users));
        })
        .catch(err=>{
            dispatch(signinUserFailur(err.message));
        })
    }
}



// * signup action creator *

export function signupUserRequest(){
    return {
        type: SIGNUP_USER_REQUEST,
    }
}

export function signupUserFailur(error){
    return {
        type: SIGNUP_USER_FAILUR,
        payload: error
    }
}

export function signupUserSuccess(users){
    return {
        type: SIGNUP_USER_SUCCESS,
        payload: users
    }
}

export const userSignup = (data) =>{
    return function(dispatch){
        dispatch(signupUserRequest());
        http.post('/user/signup', data, { withCredentials : true })
        .then(res=>{
            dispatch(signupUserSuccess(users));
        })
        .catch(err=>{
            dispatch(signupUserFailur(err.message));
        })
    }
}
