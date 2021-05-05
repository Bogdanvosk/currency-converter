import { applyMiddleware, compose, createStore } from 'redux'
import currenciesReducer from './reducers/currencies'
import thunk from "redux-thunk";
import logger from 'redux-logger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(currenciesReducer, composeEnhancers(applyMiddleware(thunk, logger)))