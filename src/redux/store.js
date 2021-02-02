import { createStore } from "redux";
import rootReducer from "./reducers";

const globalStore = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default globalStore;