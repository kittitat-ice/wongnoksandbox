import * as types from './types';

export const getFeed = () => {
  return async (dispatch) => {
    const response = await fetch(
      'http://110.164.48.254/web_test/Test_line/feed_2',
    );
    if (response.status === 200) {
      const resBody = await response.json();
      if (resBody.code == 200) {
        dispatch(getFeedSuccess(resBody.result));
      } else {
        dispatch(getFeedFail());
      }
      //dispatch(getFeedSuccess(await response.json()));
    } else {
      dispatch(getFeedFail());
    }
  };
};

export const getFeedSuccess = (payload) => {
  return {type: types.GET_FEED_SUCCESS, payload: payload};
};

export const getFeedFail = () => {
  return {type: types.GET_FEED_FAIL};
};

export const getFeedDetail = (id) => {
  return async (dispatch) => {
    const response = await fetch(
      `http://110.164.48.254/web_test/Test_line/feed_detail?id=${id}`,
    );
    if (response.status === 200) {
      const resBody = await response.json();
      if (resBody.code == 200) {
        dispatch(getFeedDetailSuccess(resBody.result[0]));
      } else {
        dispatch(getFeedDetailFail());
      }
    } else {
      dispatch(getFeedDetailFail());
    }
  };
};

export const getFeedDetailSuccess = (payload) => {
  return {type: types.GET_FEED_DETAIL_SUCCESS, payload: payload};
};

export const getFeedDetailFail = () => {
  return {type: types.GET_FEED_DETAIL_FAIL};
};

export const getPost = (userId) => {
  return async (dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (response.status === 200) {
      let json = await response.json();

      let filtered = json.filter((val) => val.userId === userId);

      dispatch(getPostSuccess(filtered));
    } else {
      dispatch(getPostFail());
    }
  };
};

export const getPostSuccess = (payload) => {
  return {
    type: types.GET_POST_SUCCESS,
    payload: payload.map((val) => {
      val.time = new Date().toLocaleString();
      return val;
    }),
  };
};

export const getPostFail = () => {
  return {type: types.GET_POST_FAIL};
};

export const likePost = (postId) => {
  return {type: types.LIKE_POST, payload: postId};
};
export const unlikePost = (postId) => {
  return {type: types.UNLIKE_POST, payload: postId};
};
