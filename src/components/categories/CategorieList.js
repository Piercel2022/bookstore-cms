import PropTypes from 'prop-types';
import classes from './CategorieList.module.css';

function CategoriesList(props) {
  const { hide } = props;
  const { selectHandler } = props;
  return (
    <ul className={hide ? classes.ul : classes.hidden}>
      <button type="button" name="Action" onClick={selectHandler}>Action</button>
      <button type="button" name="Science Fiction" onClick={selectHandler}>Science Fiction</button>
      <button type="button" name="Comedy" onClick={selectHandler}>Comedy</button>
      <button type="button" name="Romance" onClick={selectHandler}>Romance</button>
      <button type="button" name="Romantic Comedy" onClick={selectHandler}>Romantic Comedys</button>
      <button type="button" name="Adventure" onClick={selectHandler}>Adventure</button>
      <button type="button" name="Fiction" onClick={selectHandler}>Fiction</button>
      <button type="button" name="Dystopian Fiction" onClick={selectHandler}>Dystopian Fiction</button>
      <button type="button" name="Fantasy" onClick={selectHandler}>Fantasy</button>
      <button type="button" name="Super Hero" onClick={selectHandler}>Super Hero</button>
      <button type="button" name="Drama" onClick={selectHandler}>Drama</button>
      <button type="button" name="Horror" onClick={selectHandler}>  Horror</button>
      <button type="button" name="Thriller" onClick={selectHandler}>Thriller</button>
      <button type="button" name="Musical" onClick={selectHandler}>Musical</button>
      <button type="button" name="War" onClick={selectHandler}>War</button>
      <button type="button" name="Crime" onClick={selectHandler}>Crime</button>
      <button type="button" name="Western" onClick={selectHandler}>Western</button>
      <button type="button" name="Mystery" onClick={selectHandler}>Mystery</button>
      <button type="button" name="Disaster" onClick={selectHandler}>Disaster</button>
      <button type="button" name="Animation" onClick={selectHandler}>Animation</button>
      <button type="button" name="Historical" onClick={selectHandler}>Historical</button>
      <button type="button" name="Biographical" onClick={selectHandler}>Biographical</button>
      <button type="button" name="Spy" onClick={selectHandler}>Spy</button>
      <button type="button" name="Sports" onClick={selectHandler}>Sports</button>
    </ul>
  );
}

CategoriesList.propTypes = {
  hide: PropTypes.bool.isRequired,
  selectHandler: PropTypes.func.isRequired,
};

export default CategoriesList;
