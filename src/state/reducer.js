import {
  FETCH_PEOPLE_BEGIN,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_FAILURE,
} from './actionTypes';

const initialState = {
  pending: false,
  people: [],
  failureOccurred: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
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
