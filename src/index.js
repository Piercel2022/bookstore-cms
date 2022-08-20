import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import Books from './components/books/Books';
import Categories from './components/categories/Categories';
import Navigation from './components/Navigation';
import store from './redux/configureStore';

ReactDOM.render(
  <div className="container">
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route
          path="/"
          exact
          element={(
            <Provider store={store}>
              <Books />

            </Provider>
          )}
        />
        <Route
          path="/Categories"
          exact
          element={
            <Categories />
          }
        />
      </Routes>
    </BrowserRouter>
  </div>,
  document.getElementById('root'),
);
