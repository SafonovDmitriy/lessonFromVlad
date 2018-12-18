import { createReducer } from "redux-act";

import * as postsAction from "./posts.actions";

const initialState = {
	posts: [],
	postStatus: ""
};
// const reducer = {};
const reducer = {
	[postsAction.fetchPostsStart]: (state) => ({
		...state,
		postStatus: "pending"
	}),
	[postsAction.fetchPostsSuccess]: (state, data) => ({
		...state,
		postStatus: "success",
		posts: data
	}),
	[postsAction.fetchPostsFailure]: (state) => ({
		...state,
		postStatus: "failure",
	}),
};


export default createReducer(reducer, initialState);
