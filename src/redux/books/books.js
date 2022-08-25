/* eslint-disable default-param-last */
import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [{
  title: 'THE HUNTER GAMES ',
  author: 'Malbare',
  id: uuidv4(),
},
{
  title: 'MOVE TO CHICAGO ',
  author: 'babaleo',
  id: uuidv4(),
},
{
  title: 'SEE YOU AGAIN',
  author: 'Banard',
  id: uuidv4(),
},
{
  title: 'SANDLE',
  author: 'reducle',
  id: uuidv4(),
}];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.content,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => (book.id !== action.id));
    default: return state;
  }
};

export const addnewBook = (id, title, author) => ({
  type: ADD_BOOK,
  content: {
    id,
    title,
    author,
  },
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default bookReducer;
