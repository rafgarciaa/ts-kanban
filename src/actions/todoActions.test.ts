import { TodoActions, Actions, TodoActionTypes } from './todoActions';
import { Card, MetaData } from '../utilities/interfaces';

describe('Actions', () => {
  it ('should create a createCard Todo action', () => {
    const sampleCard: Card = {
      id: 0,
      status: 'todoStatus/TODO',
      text: 'Bring umbrella'
    };
    const expectedAction = {
      type: TodoActionTypes.CREATE_CARD,
      payload: sampleCard
    };
    expect(TodoActions.createCard(sampleCard)).toEqual(expectedAction);
  })

  it ('should create a deleteCard Todo action', () => {
    const samplePayload: MetaData = { id: 0 };
    const expectedAction = {
      type: TodoActionTypes.DELETE_CARD,
      payload: samplePayload
    };
    expect(TodoActions.deleteCard(samplePayload)).toEqual(expectedAction);
  })
})