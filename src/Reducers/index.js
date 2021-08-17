import { combineReducers } from "redux";
import authReducer from "./auth";
import userReducer from "./user";

const allReducers = combineReducers({
    isAuthenticated: authReducer,
    user: userReducer
})

export default allReducers;