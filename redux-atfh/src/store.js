import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};
const middleware = [thunk];

const ReactReduxDevTools =
window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_();

let store;

store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
	    applyMiddleware(
	      thunk
	    )
	  )
);

export default store;