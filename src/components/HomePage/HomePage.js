import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import classes from "./HomePage.less";
import {connect} from "react-redux";


class HomePage extends Component {
	renderPost = (post) => {
		const { id, title } = post;

		return (<div key={id} className={classes.homePagePostWrapper}>
			<Link to={`/homepage/${id}`} >{ title }</Link>
		</div>
		)
	}

	render() {
		const { posts } = this.props;

		return (
			<div className={classes.homePage}>
				<ul>
					{
						posts.map(post => {
							return this.renderPost(post);
						})
					}
				</ul>
			</div>
		);
	}
}

function mapStateToProps({ posts }) {
	return {
		posts: posts.posts,
	};
}
export default connect(mapStateToProps)(HomePage);
