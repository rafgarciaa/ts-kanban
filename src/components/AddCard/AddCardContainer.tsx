import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AddCard } from './AddCard';
import { TodoActions, Actions } from '../../actions/todoActions';
import { Card } from '../../utilities/interfaces';

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  createCard: (payload: Card) => dispatch(TodoActions.createCard(payload))
});

export const AddCardContainer = connect(null, mapDispatchToProps)(AddCard);