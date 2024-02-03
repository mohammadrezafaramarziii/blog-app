import {
    SIGNIN_USER_REQUEST, 
    SIGNIN_USER_FAILUR, 
    SIGNIN_USER_SUCCESS, 
    SIGNUP_USER_REQUEST, 
    SIGNUP_USER_FAILUR, 
    SIGNUP_USER_SUCCESS
} from "./userTypes";


export const userSigninReducer = (state = {}, action) =>{
    switch (action.type) {
        case SIGNIN_USER_REQUEST: 
            return { 
                ...state, 
                loading: true 
            };

        case SIGNIN_USER_FAILUR: 
            return { 
                loading: false, 
                error: action.payload, 
            };

        case SIGNIN_USER_SUCCESS: 
            return { 
                loading: false, 
                user:action.payload 
            };

        default:
            return state
    }
}

export const userSignupReducer = (state = {}, action) =>{
    switch (action.type) {
        case SIGNUP_USER_REQUEST: 
            return { 
                ...state, 
                loading: true 
            };

        case SIGNUP_USER_FAILUR: 
            return { 
                loading: false, 
                error: action.payload, 
            };

        case SIGNUP_USER_SUCCESS: 
            return { 
                loading: false, 
                user:action.payload 
            };

        default:
            return state
    }
}
