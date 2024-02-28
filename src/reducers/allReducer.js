import { combineReducers } from "redux";
import { quantityReducer } from "./quantityReducer"
export const allReducers = combineReducers({
    quantityReducer,
})