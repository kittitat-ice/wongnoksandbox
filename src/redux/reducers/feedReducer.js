import * as types from '../actions/types';

const initialState = {
  feed: [],
  feedDetail: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_FEED_SUCCESS:
      return {...state, feed: action.payload};
    case types.GET_FEED_FAIL:
      return {...state, feed: []};
    case types.GET_FEED_DETAIL_SUCCESS:
      return {...state, feedDetail: action.payload};
    case types.GET_FEED_DETAIL_FAIL:
      return {...state, feedDetail: []};
    default:
      return state;
  }
};
