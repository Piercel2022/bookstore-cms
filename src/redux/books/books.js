// Actions
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const fetchData = 'bookStore/books/fetchBooks';
const initialState = [
  {
    bookTitle: 'THE HUNGER GAMES',
    bookAuthor: 'Larem',
    bookCategorie: 'Romance',
    id: 1,
  },
  {
    bookTitle: 'THE HUNGER GAMES',
    bookAuthor: 'Larem',
    bookCategorie: 'Romance',
    id: 1,
  },
];
// Remove Book Creator
export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const getBooks = (payload) => ({
  type: fetchData,
  payload,
});

let flag = false;
// Write your reducer and export it as default.
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    case fetchData:
      if (!flag) {
        flag = true;
        return [...state, ...Object.entries(action.payload).map((el) => ({ ...el[1], id: `${el[0]}` }))];
      }
      return state;

    default:
      return state;
  }
};

export default booksReducer;
