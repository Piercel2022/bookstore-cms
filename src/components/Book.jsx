import React from 'react';
import PropTypes from 'prop-types';

function Book({ book, remove }) {
  const { id, title, author } = book;
  return (
    <li id={id} key={id}>
      <div className="book">
        <div>
          <div>fiction</div>
          <div>{title}</div>
          <div>{author}</div>
        </div>
        <div>
          <button type="button">Comments</button>
          <button type="button" onClick={remove}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div>
        <div>
          <div>50%</div>
          <div>Complete</div>
        </div>
      </div>
      <div>
        <div>
          <span>Current Chapter</span>
          <span>Chapter</span>
          <button type="button">Update Progress</button>
        </div>
      </div>
    </li>
  );
}

Book.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  book: PropTypes.object,
  remove: PropTypes.func.isRequired,
};

Book.defaultProps = {
  book: {},
};

export default Book;
