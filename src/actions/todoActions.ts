import { Card, MetaData } from '../utilities/interfaces';

export enum TodoActionTypes {
  CREATE_CARD = 'CREATE_CARD',
  UPDATE_CARD = 'UPDATE_CARD',
  DELETE_CARD = 'DELETE_CARD',
  MOVE_CARD_LEFT = 'MOVE_CARD_LEFT',
  MOVE_CARD_RIGHT = 'MOVE_CARD_RIGHT',
}

export enum todoStatus {
  TODO = 'todoStatus/TODO',
  IN_PROGRESS = 'todoStatus/IN_PROGRESS',
  DONE = 'todoStatus/DONE',
}

interface CreateCardAction {
  type: TodoActionTypes.CREATE_CARD,
  payload: Card,
}

interface DeleteCardAction {
  type: TodoActionTypes.DELETE_CARD,
  payload: MetaData
}

interface UpdateCardAction {
  type: TodoActionTypes.UPDATE_CARD,
  payload: MetaData
}

export type Actions = CreateCardAction | DeleteCardAction | UpdateCardAction;
 
// 2 ways of writing (typing)
// # 1:
// export const TodoActions = {
//   createCard: (payload: Card) => createAction<TodoActionTypes.CREATE_CARD, Card>(
//     TodoActionTypes.CREATE_CARD,
//     payload
//   ),
//   deleteCard: (payload: MetaData) => createAction<TodoActionTypes.DELETE_CARD, MetaData>(
//     TodoActionTypes.DELETE_CARD,
//     payload
//   )
// };

// # 2:
export const TodoActions = {
  createCard: (payload: Card): Actions => createAction(
    TodoActionTypes.CREATE_CARD,
    payload
  ),
  deleteCard: (payload: MetaData): Actions => createAction(
    TodoActionTypes.DELETE_CARD,
    payload
  ),
  updateCard: (payload: MetaData): Actions => createAction(
    TodoActionTypes.UPDATE_CARD,
    payload
  ),
}

const createAction = <T, P>(type: T, payload: P) => ({
  type,
  payload
});