import {
  FETCH_USERS__BEGIN,
  FETCH_USERS__SUCCESS,
  USER_NOT_FOUND
} from './actionTypes';

const fetchUser = actualInput =>
  dispatch => {
    dispatch({ type: FETCH_USERS__BEGIN });

    fetch(
      `https://api.github.com/users/${actualInput}`,
    ).then(
      response => {
        if (response.status === 404) {
          dispatch({
            type: USER_NOT_FOUND,
            user: actualInput,
          });
          return false;
        }
        return response.json();
      },
    ).then(
      user => dispatch({
        type: FETCH_USERS__SUCCESS,
        user,
      }),
    );
  };

export default fetchUser;
