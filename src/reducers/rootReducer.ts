import { combineReducers } from 'redux';
import { todosReducer } from './todosReducers';
import { withUpdateDelete } from './withUpdateDelete';

export const rootReducer = combineReducers({
  todo: withUpdateDelete('To do', todosReducer),
  inProgress: withUpdateDelete('In Progress'),
  done: withUpdateDelete('Done'),
});

