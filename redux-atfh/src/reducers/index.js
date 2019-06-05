import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import contractorsReducer from "./contractorsReducer";

export default combineReducers({
    //
    errors: errorsReducer,
    contractors: contractorsReducer
});