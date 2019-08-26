export interface MetaData {
  id: number;
  text?: string;
}

export interface Card {
  id: number;
  status: string;
  text: string;
}

export type headingTypes = 'To do' | 'In Progress' | 'Done';

export interface Column {
  heading: headingTypes;
  cards: Card[];
}

export interface RootState {
  todo: Column;
  inProgress: Column;
  done: Column;
}