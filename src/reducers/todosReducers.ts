import { TodoActionTypes, Actions } from '../actions/todoActions';
import { Column } from '../utilities/interfaces';

const initialState: Column = {
  heading: 'To do',
  cards: []
};

export const todosReducer = (state = initialState, action: Actions): Column => {
  switch (action.type) {
    case TodoActionTypes.CREATE_CARD:
      return {...state, cards: [...state.cards, action.payload]};
      
    default:
      return state;
  }
}