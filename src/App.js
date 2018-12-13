import React, { Component } from 'react';
import HomePage from "./components/HomePage/HomePage";
import HomePageWithId from "./components/HomePageWithId/HomePageWithId";
import About from "./components/About/About";

import { Route, Switch, withRouter } from "react-router-dom";

import classes from "./App.less";

class App extends Component {


	render() {
		return (
			<Switch>
				<Route exact path={"/"} component={HomePage} />
				<Route exact path={"/about"} component={About} />
				<Route path={"/homepage/:id"} component={HomePageWithId} />
			</Switch>
		);
	}
}

export default withRouter(App);
