import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import booksReducer, { getBooks } from './books/books';

const getDataFromApi = 'getDataFromApi';
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const reducer = combineReducers({
  booksReducer,
  // additional reducers could be added here
});

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/olzSLHJZ1Ar07qIUABH0/books';
const fetchBooksMiddleware = (storeAPI) => (next) => (action) => {
  if (action.type === getDataFromApi) {
    // Make an API call to fetch Book from the server
    fetch(url).then((response) => response.json()).then((el) => storeAPI.dispatch(getBooks(el)));
  } else if (action.type === ADD_BOOK) {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        item_id: `${action.payload[0].id}`,
        title: `${action.payload[0].title}`,
        category: `${action.payload[0].category}`,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  } else if (action.type === REMOVE_BOOK) {
    fetch(`${url}/${action.payload.id}`, {
      method: 'DELETE',
      body: JSON.stringify({
        item_id: `${action.payload.id}`,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return next(action);
};
const composeEnchancer = compose(applyMiddleware(logger), applyMiddleware(fetchBooksMiddleware));
const store = createStore(
  reducer,
  composeEnchancer, // dispatching  actions asynchronously
);

export default store;
