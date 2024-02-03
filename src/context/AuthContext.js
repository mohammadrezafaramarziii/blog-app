import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react"
import ToastError from "src/common/toasts/ToastError";
import ToastSuccess from "src/common/toasts/ToastSuccess";
import { useReducerAsync } from "use-reducer-async";
import Router from "next/router";
import http from "src/services/httpService";


const AuthContext = createContext();
const AuthContextDispatcher = createContext();

const initialState = { user: null, loading: true, error: null };

const reducer = (state, action) => {
    switch (action.type) {
        case "SIGNIN_PENDING": 
            return { user: null, loading: true, error: false };
        case "SIGNIN_SUCCESS": 
            return { user: action.payload , loading: false, error: null };
        case "SIGNIN_REJECT": 
            return { user: null, loading: false, error: action.error };
        default:
            return {...state};
    }
}

const asyncActionHandlers = {
    SIGNIN: ({dispatch}) => (action) => {
        dispatch({ type: "SIGNIN_PENDING" });
        http.post("/user/signin", 
            action.payload, 
            { withCredentials : true }
        )
        .then(({ data }) => {
            ToastSuccess("با موفقیت وارد شدید");
            dispatch({ type: "SIGNIN_SUCCESS", payload: data });
            Router.push('/');
        })
        .catch((err) => {
            dispatch({ type: "SIGNIN_REJECT", error: err?.response?.data?.message });
            ToastError(err?.response?.data?.message);
        })
    },
    SIGNUP: ({dispatch}) => (action) => {
        dispatch({ type: "SIGNIN_PENDING" });
        http.post("/user/signup", 
            action.payload,
            { withCredentials : true }
        )
        .then(({ data }) => {
            ToastSuccess("ثبت نام با موفقیت انجام شد");
            dispatch({ type: "SIGNIN_SUCCESS", payload: data });
            Router.push('/');
        })
        .catch((err) => {
            dispatch({ type: "SIGNIN_REJECT", error: err?.response?.data?.message });
            ToastError(err?.response?.data?.message);
        })
    },
    LOAD_USER:({dispatch}) => (action) => {
        dispatch({ type: "SIGNIN_PENDING" });
        http.get("/user/load", { withCredentials : true })
        .then(({ data }) => {
            dispatch({ type: "SIGNIN_SUCCESS", payload: data });
        })
        .catch((err) => {
            dispatch({ type: "SIGNIN_REJECT", error: err?.response?.data?.message });
        })
    },
    SIGNOUT: ({dispatch}) => (action) => {
        http.get("/user/logout", { withCredentials : true })
        .then(({ data }) => {
            window.location.href = "/";
        })
        .catch((err) => {})
    },
}

const AuthProvider = ({children}) => {
    const [user, dispatch] = useReducerAsync(reducer, initialState, asyncActionHandlers);

    useEffect(()=>{
        dispatch({ type: "LOAD_USER" });
    }, []);

    return ( 
        <AuthContext.Provider value={user}>
            <AuthContextDispatcher.Provider value={dispatch}>
                {children}
            </AuthContextDispatcher.Provider>
        </AuthContext.Provider>
     );
}
 
export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
export const useAuthActions = () => useContext(AuthContextDispatcher);