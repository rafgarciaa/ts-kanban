import { Reducer } from 'redux';
import { TodoActionTypes, Actions } from '../actions/todoActions';
import { Column, headingTypes, Card } from '../utilities/interfaces';

export const withUpdateDelete = (heading: headingTypes, reducer?: Reducer<Column, Actions>) => {
  const defaultState: Column = {
    heading,
    cards: []
  };

  return (state = defaultState, action: Actions) => {
    switch(action.type) {
      case TodoActionTypes.DELETE_CARD:
        const newCards = state.cards.filter((card) => card.id !== action.payload.id);
        return { ...state, cards: newCards };

      case TodoActionTypes.UPDATE_CARD:
        const findCardIndex = (card: Card) => card.id === action.payload.id;
        const oldCardIndex = state.cards.findIndex(findCardIndex);
        const oldCard = state.cards[oldCardIndex];
        const newCard = { ...oldCard, text: action.payload.text || '' };
        const updatedCards = [...state.cards.slice(0, oldCardIndex), newCard, ...state.cards.slice(oldCardIndex + 1, state.cards.length)];
        
        return oldCard ? { ...state, cards: updatedCards } : state;

      default:
        return reducer ? reducer(state, action) : state;
    }
  }
}