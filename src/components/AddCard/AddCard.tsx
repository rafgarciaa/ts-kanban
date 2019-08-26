import React from 'react';
import { Card } from '../../utilities/interfaces';
import { generateId } from '../../utilities/generateId';

interface AddCardProps {
  createCard: (payload: Card) => void;
}

export const AddCard: React.FC<AddCardProps> = ({ createCard }): JSX.Element => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    const inputText = window.prompt('Add A Task');
    
    if (inputText) {
      const card = {
        id: generateId(),
        status: 'todoStatus/TODO',
        text: inputText
      }
      createCard(card);
    } else {
      alert('You must add a text!');
    }
  }
  
  return (
    <button onClick={handleClick}>Add A Card</button>
  );
}

