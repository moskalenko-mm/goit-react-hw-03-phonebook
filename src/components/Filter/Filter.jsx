import PropTypes from 'prop-types';
import css from '../Filter/Filter.module.css';

const Filter = ({ handelSearch }) => {
  return (
    <label className={css.label}>
      Find contacts by name
      <input type="text" name="filter" onInput={handelSearch} />
    </label>
  );
};

Filter.propTypes = {
  handelSearch: PropTypes.func.isRequired,
};

export default Filter;
