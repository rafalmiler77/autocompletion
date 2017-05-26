import {
  FETCH_PEOPLE_BEGIN,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_FAILURE,
} from './actionTypes';


const fetchPeople = () => dispatch => {
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
export default fetchPeople;
