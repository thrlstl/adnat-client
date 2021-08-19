import { combineReducers } from "redux";
import authReducer from "./auth";
import userReducer from "./user";
import myOrgsReducer from "./myOrgs";
import myShiftsReducer from "./myShifts";
import selectedOrgReducer from "./selectedOrg";
import otherOrgsReducer from "./otherOrgs";

const allReducers = combineReducers({
    isAuthenticated: authReducer,
    user: userReducer,
    myOrgs: myOrgsReducer,
    otherOrgs: otherOrgsReducer,
    myShifts: myShiftsReducer,
    selectedOrg: selectedOrgReducer
})

export default allReducers;