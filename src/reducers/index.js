import {combineReducers} from "redux";
import cartCount from "./cartConut"
import user from "./user"
export default combineReducers({
    cartCount,
    user,
})