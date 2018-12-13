import { compose, createStore, combineReducers, applyMiddleware } from "redux";

import app from "./app/app.reducer";
import basket from "./basket/basket.reducer";


const rootReducer = combineReducers({ app, basket });

const store = createStore(rootReducer, undefined, compose(
	window.devToolsExtension ? window.devToolsExtension() : (f) => f
));

// store.dispatch(initialize());


export default store;
