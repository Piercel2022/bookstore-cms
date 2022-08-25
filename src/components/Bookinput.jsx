import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addnewBook } from '../redux/books/books';

function Bookinput() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handletitle = (e) => {
    setTitle(e.target.value);
  };

  const handleauthor = (e) => {
    setAuthor(e.target.value);
  };

  const dispatch = useDispatch();
  const Submit = (e) => {
    const id = uuidv4();
    e.preventDefault();
    if (title.trim() && author.trim()) {
      dispatch(
        addnewBook(id, title, author),
      );
    } else {
      return;
    }
    setTitle('');
    setAuthor('');
  };
  return (
    <form action="#" onSubmit={Submit}>
      <input type="text" value={title} placeholder="book title" onChange={handletitle} />
      <input type="text" value={author} placeholder="auther" onChange={handleauthor} />
      <button type="submit">submit</button>
    </form>
  );
}

export default Bookinput;
