import * as types from '@redux/actions/types';

const initialState = {
  userData: {
    id: 1,
    username: 'A B C I E >.',
    name: 'Kittitat',
    lastname: 'Poonsombutpinyo',
    avatar: 'https://placeimg.com/640/480/any',
    shortintro: 'Hello world~',
    isonline: true,
    numfriend: 542,
    about: {
      aboutme:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      email: 'kittitat.ice@gmail.com',
      phone: '0813716605',
      job: 'Programmer',
      salary: 500000,
    },
    skill: {
      skill: [
        {skillname: 'DSDS', level: 75},
        {skillname: 'ASRT', level: 50},
      ],
      language: [
        {lang: 'English', level: 80},
        {lang: 'Chinese', level: 20},
      ],
      exp: [
        {job: 'Programmer', numyear: 5},
        {job: 'Janitor', numyear: 15},
      ],
    },
    social: {
      github: 'kittitat-ice',
    },
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
