import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./modules/store";
import { Provider } from "react-redux";

import history from "./modules/history";

import { BrowserRouter, Router, Switch, withRouter } from "react-router-dom";

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
document.getElementById('root'));
