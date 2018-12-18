import React, { Component } from 'react';
import HomePage from "./components/HomePage/HomePage";
import HomePageWithId from "./components/HomePageWithId/HomePageWithId";
import About from "./components/About/About";

import { ToastContainer } from 'react-toastify';

import { string, func } from "prop-types";

import { Route, Switch, withRouter, Link } from "react-router-dom";

import { connect } from "react-redux";

import 'react-toastify/dist/ReactToastify.css';

import classes from "./App.less";
import * as postsActions from "./modules/posts/posts.actions";

class App extends Component {
	static propTypes = {
		nameGetValue: string,
		fetchPosts: func
	}

	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		const { nameGetValue } = this.props;

		return (
			<>
				<h1>Your name is {nameGetValue}</h1>
				<Link to={`/about`} >about</Link>
				<ToastContainer />
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

export default withRouter(connect(mapStateToProps, { ...postsActions })(App));
