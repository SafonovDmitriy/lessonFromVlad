import { createAction } from "redux-act";

import customToastify from '../../customFunction/customToastify';


export const fetchPostsStart =  createAction("fetch posts  start");
export const fetchPostsSuccess =  createAction("fetch posts success");
export const fetchPostsFailure =  createAction("fetch posts failure");


export const fetchPosts = () => async(dispatch, getState) => {
	dispatch(fetchPostsStart());
	console.log(dispatch(getState));
	try {
		let result = await fetch('https://jsonplaceholder.typicode.com/posts');

		result = await result.json();

		customToastify("Пришли успешно", "success");
		dispatch(fetchPostsSuccess(result));
	}
	catch(e) {
		debugger;
		customToastify(`Ошибка ${e}`, "error");
		dispatch(fetchPostsFailure());
	}
};
