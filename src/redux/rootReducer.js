import { combineReducers } from "redux";
import { userSigninReducer, userSignupReducer } from "./user/userReducer";


const rootReducer = combineReducers({
    userSignin: userSigninReducer,
    userSingup: userSignupReducer
});

export default rootReducer;
