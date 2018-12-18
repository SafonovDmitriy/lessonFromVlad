import customToastify from '../../customFunction/customToastify';
import * as postsActions from "./posts.actions";
import { takeEvery, put, select } from "redux-saga/effects";

export const postSelect = (state) => state;


function* sagaFetchPosts(data) {

	try {
		console.log(yield select(postSelect));
		let result = yield fetch('https://jsonplaceholder.typicode.com/posts/');

		result = yield result.json();

		customToastify("Пришли успешно", "success");
		yield put(postsActions.fetchPostsSuccess(result));
	}
	catch(e) {
		customToastify("Пришли успешно", "error");
		yield put(postsActions.fetchPostsFailure());
	}
	//yield put(authAction.removeToLocalStorage("user"));
}

export function* watchPosts() {
	yield takeEvery(postsActions.fetchPosts, sagaFetchPosts);
}


