import {
  FETCH_USERS__BEGIN,
  FETCH_USERS__SUCCESS,
  USER_NOT_FOUND,
} from './actionTypes';

const initialState = {
  users: [],
  pending: false,
  isUserFound: true,
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
        users: state.users.concat(action.user),
        pending: false,
      };
    case USER_NOT_FOUND:
      return {
        ...state,
        isUserFound: false,
      };
    default:
      return state;
  }
};
