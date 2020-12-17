import * as types from './types';

export const loginUser = (params) => {
  return async (dispatch) => {
    const response = await fetch(
      'http://110.164.48.254/web_test/Test_line/login',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: params.username,
          password: params.password,
        }),
      },
    );

    if (response.status === 200) {
      const resBody = await response.json();
      if (resBody.code === 200) {
        dispatch(loginSuccess());
      } else {
        alert(resBody.desc)
        dispatch(loginFail());
      }
    } else {
      alert("Network Error")
      dispatch(loginFail());
    }
  };
};

export const loginSuccess = () => {
  return {type: types.LOGIN_SUCCESS};
};

export const loginFail = () => {
  return {type: types.LOGIN_FAIL};
};
