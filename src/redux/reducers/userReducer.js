import * as types from '@redux/actions/types';

const initialState = {
  userData: {
    id: 1,
    username: 'ABC>.',
    name: 'Kittitat',
    lastname: 'Poonsombutpinyo',
    avatar: 'https://placeimg.com/640/480/any',
    phone: '0813716605',
    email: 'kittitat.ice@gmail.com',
    github: 'kittitat-ice',
    job: 'Programmer',
    salary: 500000,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    /*
    case types.GET_FEED_SUCCESS:
      return {...state, feed: action.payload};
    case types.GET_FEED_FAIL:
      return {...state, feed: []};
    */
    default:
      return state;
  }
};
