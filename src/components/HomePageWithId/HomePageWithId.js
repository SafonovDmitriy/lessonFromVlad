import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import classes from "../HomePage/HomePage.less";
import {connect} from "react-redux";


class HomePageWithId extends Component {
	renderItem = () => {
		const { posts } = this.props;

		const index = this.props.match.params.id - 1;

		return (
			<div className={classes.homePage}>
				<div className={classes.homePagePostWrapper} >
					<h1 >{ posts[index].title }</h1>
					<h4>{ posts[index].body }</h4>

					<button>
						<Link to='/'>
							Back to homepage
						</Link>
					</button>
				</div>
			</div>
		)
	}

	render() {
		const { posts } = this.props;

		return (

			<>
				{ posts.length === 0 ?
					<div> Loader </div>
					:
					this.renderItem()
				}
			</>
		);
	}
}
function mapStateToProps({ posts }) {
	return {
		posts: posts.posts,
	};
}
export default connect(mapStateToProps)(HomePageWithId);
