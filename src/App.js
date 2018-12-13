import React, { Component } from 'react';
import HomePage from "./components/HomePage/HomePage";
import HomePageWithId from "./components/HomePageWithId/HomePageWithId";
import About from "./components/About/About";

import { string } from "prop-types";

import { Route, Switch, withRouter } from "react-router-dom";

import { connect } from "react-redux";

import classes from "./App.less";

class App extends Component {
	static propTypes = {
		nameGetValue: string
	}

	render() {
		const { nameGetValue } = this.props;

		return (
			<>
				<h1>Your name is {nameGetValue}</h1>
				<Switch>
					<Route exact path={"/"} component={HomePage} />
					<Route exact path={"/about"} component={About} />
					<Route path={"/homepage/:id"} component={HomePageWithId} />
				</Switch>
			</>
		);
	}
}

function mapStateToProps({ app }) {
	return {
		nameGetValue: app.name,
	};
}

export default withRouter(connect(mapStateToProps, null)(App));
