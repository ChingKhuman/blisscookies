import {applyMiddleware, createStore, } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducer/rootReducer';

const middlewares=[reduxThunk];

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middlewares)));