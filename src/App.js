import React, { Component } from 'react';
import Circle from "./components/Circle/Circle";

import { LoaderContainer, loader } from "./components/Loader/Loader";

import classes from "./App.less";

class App extends Component {
	componentDidMount() {
		loader.show();
		setTimeout(()=> {
			loader.hide();
		}, 2000);
	}

	render() {
		return (
			<div className={classes.app}>
				Привет мир

				<LoaderContainer />
					<Circle />
			</div>
		);
	}
}

export default App;
