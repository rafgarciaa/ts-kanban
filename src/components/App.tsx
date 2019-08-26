import React from 'react';
import { Provider } from 'react-redux';
import { RootState } from '../utilities/interfaces';
import { configureStore } from '../store/store';
import { ColumnContainer } from './Column/ColumnContainer';

const sampleData: RootState = {
  "todo": {
    heading: 'To do',
    cards: [
      {
        id: 1,
        status:
          'todoStatus/TODO',
        text: 'Buy Milk'
      },
      {
        id: 2,
        status:
          'todoStatus/TODO',
        text: 'Get gas'
      }
    ]
  },
  "inProgress": {
    heading: 'In Progress',
    cards: [
      {
        id: 3,
        status:
          'todoStatus/IN_PROGRESS',
        text: 'Study for test'
      }
    ]
  },
  "done": {
    heading: 'Done',
    cards: []
  }
};

const store = configureStore(sampleData);

export const App: React.FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      <>
        <h1>Kanban</h1>        
        <ColumnContainer value={"todo"}/>
        <ColumnContainer value={"inProgress"}/>
        <ColumnContainer value={"done"}/>
      </>
    </Provider>
  );
}