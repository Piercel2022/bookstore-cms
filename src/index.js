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
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route
            path="/"
            exact
            element={(
            // Import Redux Provider and the store in the main component of the app.

              <Books />

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
    </Provider>
  </div>,
  document.getElementById('root'),
);
