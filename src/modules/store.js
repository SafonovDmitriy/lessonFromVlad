import thunk from "redux-thunk";
import { compose, createStore, combineReducers, applyMiddleware } from "redux";

import app from "./app/app.reducer";
import basket from "./basket/basket.reducer";
import posts from "./posts/posts.reducer";

const rootReducer = combineReducers({ app, basket, posts });

const store = createStore(rootReducer, undefined, compose(
	applyMiddleware( thunk.withExtraArgument()),
	window.devToolsExtension ? window.devToolsExtension() : (f) => f
));
// store.dispatch(initialize());


export default store;
