import { combineReducers } from "redux";
import userReducer from "./user";
import tokenReducer from './token'
import authReducer from "./auth";

const allReducers = combineReducers({
    user: userReducer,
    token: tokenReducer,
    isAuthenticated: authReducer
})

export default allReducers;