import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import  userReducer from './state/reducer';

const reducer = combineReducers({
  userData: userReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunkMiddleware 
  ),
)

const store = createStore(reducer, enhancer);

export default store