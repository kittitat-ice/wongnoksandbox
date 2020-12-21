import * as types from '@redux/actions/types';

const initialState = {
  userData: {
    id: 1,
    username: 'A B C J E >.',
    name: 'Alex',
    lastname: 'Johnson',
    avatar: 'https://placeimg.com/640/480/any',
    shortintro: 'Hello world~',
    job: 'Programmer',
    from: 'San Diego, California',
    countrycode: 'us',
    country: 'United States',
    isonline: true,
    numfriend: 341,
    follower: 568342,
    about: {
      aboutme:
        'I am Alex Johnson, The Biggest social media Influencer in the world, The Best Programmer in the Tech Industry and the richest man on earth.',
      email: 'abcde@test.com',
      phone: '0987654321',
      birthday: new Date('1 1 2000'),
      address: '141 University Ave, San Diego, California',
    },
    skills: {
      skilllist: [
        {skillname: 'JS', level: 75},
        {skillname: 'MSWords', level: 50},
        {skillname: 'MSExcel', level: 25},
        {skillname: 'Singing', level: 87},
        {skillname: 'Photoshop', level: 44},
        {skillname: 'Management', level: 10},
        {skillname: 'Business', level: 15},
        {skillname: 'Electronic', level: 30},
        {skillname: 'Cleaning', level: 100},
      ],
      language: [
        {lang: 'English', level: 90},
        {lang: 'Chinese', level: 15},
        {lang: 'Japanese', level: 45},
        {lang: 'Thai', level: 75},
        {lang: 'Korean', level: 65},
        {lang: 'French', level: 25},
        {lang: 'German', level: 55},
        {lang: 'Spanish', level: 10},
        {lang: 'Arabic', level: 5},
      ],
      exp: [
        {job: 'Programmer', numyear: 2},
        {job: 'Manager', numyear: 1},
        {job: 'Actor', numyear: 2},
        {job: 'Singer', numyear: 1},
        {job: 'CEO', numyear: 1},
        {job: 'Technician', numyear: 3},
        {job: 'Janitor', numyear: 10},
      ],
    },
    social: [
      {name: 'github', data: 'alex-johnson-test-github'},
      {name: 'facebook', data: 'Alex Johnson'},
      {name: 'twitter', data: 'Alex Johnson Official'},
      {name: 'twitch', data: 'AJGaming'},
      {name: 'instagram', data: 'AJ Photo'},
      {name: 'linkedin', data: 'Alex Johnson'},
      {name: 'line', data: 'Alex Johnson Official Line'},
      {name: 'skype', data: 'AJ Skype'},
      {name: 'snapchat', data: 'Alex Johnson Official'},
    ],
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
