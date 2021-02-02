import userReducer from "./user";
import { combineReducers } from  "redux";

const rootReducer = combineReducers({
    users: userReducer,
})

export default rootReducer;