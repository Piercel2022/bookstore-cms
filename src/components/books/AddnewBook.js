import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import classes from './AddnewBook.module.css';
import CategoriesList from '../categories/CategorieList';
import store from '../../redux/configureStore';

function AddnewBook() {
  const [errorTextContent, setErrorTextContent] = useState('');
  const [categoryButton, setCategoryButton] = useState('Category');
  const books = useSelector((state) => state.booksReducer);
  const [hide, setHide] = useState(false);
  const [categorie, setCategorie] = useState('');
  const bookTitle = useRef();
  const bookCategorie = useRef();
  const bookAuthor = useRef();
  const onClick = () => {
    setHide(!hide);
  };
  const addBook = () => { };
  const onSubmit = (e) => {
    const title = bookTitle.current.value;
    const enteredCategorie = categorie;
    const author = bookAuthor.current.value;
    if ((!author.length) || (!title.length) || (!enteredCategorie.length)) {
      e.preventDefault();
      setErrorTextContent('Please make sure you entered the title,author and Category ');
    } else if (author.length > 50 || title.length > 50) {
      e.preventDefault();
      setErrorTextContent('Your are allowed to enter max 50 chars author and title text length');
    } else {
      setErrorTextContent('');
      const id = `item${books.length + 1}`;
      const newBook = [{
        title, author, category: enteredCategorie, id,
      }];
      store.dispatch(addBook(newBook));
      setCategoryButton('Category');
      bookTitle.current.value = '';
      bookAuthor.current.value = '';
    }
  };
  const selectHandler = (e) => {
    setCategoryButton(e.target.name);
    setCategorie(e.target.name);
    setHide(false);
  };
  return (
    <div className={classes.container}>
      <h1 className={classes.h1}>ADD NEW BOOK</h1>
      <p className={classes.error}>{errorTextContent}</p>
      <form className={classes.form}>
        <input type="text" name="add-book" placeholder="Book title" className={classes.input} ref={bookTitle} />
        <input type="text" name="add-book" placeholder="Author" className={classes.inputAuthor} ref={bookAuthor} />
        <div className={classes.div}>
          <button type="button" className={classes.button} name="Category" onClick={onClick} ref={bookCategorie}>
            {categoryButton}
            {hide ? (
              <FaCaretUp className={
                classes.icon
              }
              />
            ) : (
              <FaCaretDown className={
                classes.icon
              }
              />
            )}

          </button>
          <CategoriesList hide={hide} selectHandler={selectHandler} />
        </div>
        <button type="button" className={classes.addBook} onClick={onSubmit}>ADD BOOK</button>
      </form>

    </div>
  );
}

export default AddnewBook;
