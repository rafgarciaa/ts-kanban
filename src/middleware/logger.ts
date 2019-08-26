import { MiddlewareAPI, Dispatch } from 'redux';
import { Actions } from '../actions/todoActions';
import { RootState } from '../utilities/interfaces';

export const logger = ({ getState }: MiddlewareAPI<Dispatch, RootState>) => (next: Dispatch<Actions>) => (action: Actions) => {
  console.log(`ACTION: `, action.type);
  console.log(`OLD STATE: `, getState());
  next(action);
}