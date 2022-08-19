const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const fetchData = 'bookStore/books/fetchBooks';

// const getCurrentBooks = 'GET_CURRENT_Books';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const getBooks = (payload) => ({
  type: fetchData,
  payload,
});

let flag = false;
// books.js
const reducer = (state = initialState, action) => {
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

export default reducer;
