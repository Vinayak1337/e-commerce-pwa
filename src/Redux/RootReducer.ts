import { combineReducers } from "redux";
import { userReducer } from "./User/UserReducer";

export default combineReducers({
    users: userReducer,
})