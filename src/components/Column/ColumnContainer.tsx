import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Card, MetaData, RootState } from '../../utilities/interfaces';
import { Actions, TodoActions } from '../../actions/todoActions';
import { Column } from './Column';

export interface OwnProps {
  value: keyof RootState;
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => ({
  heading: state[ownProps.value].heading,
  cards: state[ownProps.value].cards
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  createCard: (card: Card) => dispatch(TodoActions.createCard(card)),
  deleteCard: (payload: MetaData) => dispatch(TodoActions.deleteCard(payload)),
  updateCard: (payload: MetaData) => dispatch(TodoActions.updateCard(payload))
});

export const ColumnContainer = connect(mapStateToProps, mapDispatchToProps)(Column);