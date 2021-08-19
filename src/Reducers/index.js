import { combineReducers } from "redux";
import authReducer from "./auth";
import userReducer from "./user";
import myOrgsReducer from "./myOrgs";
import myShiftsReducer from "./myShifts";
import allOrgsReducer from "./allOrgs";
import selectedOrgReducer from "./selectedOrg";

const allReducers = combineReducers({
    isAuthenticated: authReducer,
    user: userReducer,
    myOrgs: myOrgsReducer,
    myShifts: myShiftsReducer,
    allOrgs: allOrgsReducer,
    selectedOrg: selectedOrgReducer
})

export default allReducers;