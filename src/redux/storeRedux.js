import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import produceCards from './reducers/reducerCards';

//middlewarews
import { getCards} from './middleWares/crud1'

const reducer = combineReducers({produceCards});

const store = createStore(reducer, applyMiddleware( getCards));
window.store = store;
export default store;

