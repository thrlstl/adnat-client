import { combineReducers } from "redux";
import authReducer from './auth'

const allReducers = combineReducers({
    user: authReducer
})

export default allReducers;