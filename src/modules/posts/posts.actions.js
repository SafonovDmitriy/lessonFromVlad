import { createAction } from "redux-act";

import customToastify from '../../customFunction/customToastify';

export const fetchPostsSuccess =  createAction("fetch posts success");
export const fetchPostsFailure =  createAction("fetch posts failure");

export const fetchPosts = createAction("fetchPosts posts");
