import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import { logger } from '../middleware/logger';
import { rootReducer } from '../reducers/rootReducer';

export const configureStore = (preloadedState = {}) => 
  createStore(rootReducer, preloadedState, applyMiddleware(logger));