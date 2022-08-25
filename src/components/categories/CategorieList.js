import PropTypes from 'prop-types';

function CategoriesList(props) {
  const { hide } = props;
  const { selectHandler } = props;
  return (
    <ul className={hide ? classes.ul : classes.hidden}>
      <button type="button" name="Check Status" onClick={selectHandler}>Check Status</button>
    </ul>
  );
}

CategoriesList.propTypes = {
  hide: PropTypes.bool.isRequired,
  selectHandler: PropTypes.func.isRequired,
};

export default CategoriesList;
