import {combineReducers} from "redux";
import cartCount from "./cartCount"
import user from "./user"
export default combineReducers({
    cartCount,
    user,
})