import React from 'react';
import { Card, MetaData } from '../../utilities/interfaces';
import { OwnProps } from './ColumnContainer';
import { AddCardContainer } from '../AddCard/AddCardContainer';

interface ColumnProps {
  heading: string;
  cards: Card[];
  deleteCard: (payload: MetaData) => void;
  updateCard: (payload: MetaData) => void;
}

export const Column: React.FC<ColumnProps & OwnProps> = 
({ heading, cards, deleteCard, updateCard }): JSX.Element => {
  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const metaData = { id: Number(event.currentTarget.id) };
    deleteCard(metaData);
  }

  const handleUpdate = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const inputText = window.prompt('Update Card');
    if (inputText) {
      const metaData: MetaData = {
        id: Number(event.currentTarget.id),
        text: inputText
      }
      updateCard(metaData);
    } else {
      alert("Text can't be empty!");
    }
  }

  return (
    <ul>
      <h1>{heading}</h1>
      {cards.map((card) => {
        console.log(card);
        return (
          <li key={card.id}>
            {card.text}
            <button id={`${card.id}`} onClick={handleDelete}>Delete Card</button>
            <button id={`${card.id}`} onClick={handleUpdate}>Update Card</button>
          </li>
        );
      })}
      <br/>
      {(heading === 'To do') ? <AddCardContainer /> : null  }
    </ul>
  );
}

