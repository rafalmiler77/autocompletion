import {
  FETCH_USERS__BEGIN,
  FETCH_USERS__SUCCESS,
  USER_NOT_FOUND,
  FETCH_PEOPLE_BEGIN,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_FAILURE,
} from './actionTypes';

const initialState = {
  users: [],
  pending: false,
  isUserFound: true,
  people: [],
  failureOccurred: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS__BEGIN:
      return {
        ...state,
        pending: true,
      };
    case FETCH_USERS__SUCCESS:
      return {
        ...state,
        users: action.users,
        pending: false,
      };
    case USER_NOT_FOUND:
      return {
        ...state,
        isUserFound: false,
      };
    case FETCH_PEOPLE_BEGIN:
      return {
        ...state,
        pending: true
      }
    case FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        people: action.people,
        pending: false,
        failureOccurred: false,
      }
    case FETCH_PEOPLE_FAILURE:
      return {
        ...state,
        failureOccurred: true,
        pending: false
      }
    default:
      return state;
  }
};
