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
				{/*<Route exact path={"/homepage"} />*/}
				{/*<Route path={"/homepage/:id"} render={*/}
					{/*(props)=><HomePageWithId {...props}  post={posts[props.match.params.id -1]} />*/}
				{/*} />*/}
				{/*<Route path={"/about"} component={About} />*/}
			</Switch>
		);
	}
}

export default withRouter(App);
