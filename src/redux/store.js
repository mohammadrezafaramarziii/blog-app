import { applyMiddleware, createStore } from "redux"
import rootReducer from "./rootReducer";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";

const bindMiddleware = (middleware) => {
  if(process.env.NODE_ENV !== "production"){
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware))
  }

  return applyMiddleware(...middleware)
}


const masterReducer = (state, action) => {
  if(action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload
    }

    return nextState
  } else {
    return rootReducer(state, action)
  }
}

const initStore = () => {
  return createStore(masterReducer, bindMiddleware([thunk]))
}

export const wrapper = createWrapper(initStore);