import * as postsAPI from "../api/posts";
import {
  createPromiseThunk,
  reducerUtils,
  handleAsyncActions,
} from "../lib/asyncUtils";

/* 액션 타입 */

// 포스트 여러개 조회
const GET_POSTS = "GET_POSTS"; // 요청 시작
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS"; // 요청 성공
const GET_POSTS_ERROR = "GET_POSTS_ERROR"; // 요청 실패

// 포스트 하나 조회
const GET_POST = "GET_POST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_ERROR = "GET_POST_ERROR";

// 포스트 비우기
const CLEAR_POST = "CLEAR_POST";

// util에 정의해둔 함수로, thunk 함수 만듬
export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
export const getPost = createPromiseThunk(GET_POST, postsAPI.getPostById);

export const clearPost = () => ({ type: CLEAR_POST });

// 리팩토링 완료
const initialState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial(),
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return handleAsyncActions(GET_POSTS, "posts", true)(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return handleAsyncActions(GET_POST, "post")(state, action);
    case CLEAR_POST:
      return {
        ...state,
        post: reducerUtils.initial(),
      };
    default:
      return state;
  }
}
