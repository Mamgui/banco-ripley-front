import {combineReducers} from "redux";
import {reducer as authenticationReducer} from "./authentication/authentication";

const reducers = combineReducers({authentication: authenticationReducer})

export default reducers