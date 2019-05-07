import createSagaMiddleware from 'redux-saga';
import { compose, createStore, combineReducers, applyMiddleware } from "redux";

const sagaMiddleware = createSagaMiddleware();


import app from "./app/app.reducer";


const rootReducer = combineReducers({ app });

const store = createStore(rootReducer, undefined, compose(
	applyMiddleware(sagaMiddleware),
	window.devToolsExtension ? window.devToolsExtension() : (f) => f
));




export default store;
