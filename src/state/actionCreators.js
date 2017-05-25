import {
  FETCH_USERS__BEGIN,
  FETCH_USERS__SUCCESS,
  USER_NOT_FOUND,
  FETCH_PEOPLE_BEGIN,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_FAILURE,
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

export const fetchPeople = () => dispatch => {
  dispatch({ type: FETCH_PEOPLE_BEGIN })
  fetch(
    process.env.PUBLIC_URL + '/data/peopleList.json'
  ).then(
    response => response.json()
    ).then(
    people => dispatch({ type: FETCH_PEOPLE_SUCCESS, people })
    ).catch(
    error => dispatch({ type: FETCH_PEOPLE_FAILURE, failureOccurred: true })
    )
}
