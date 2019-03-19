import PropTypes from 'prop-types';

import Pagination from './Pagination';
import './Pagination.scss';

Pagination.propTypes = {
  total: PropTypes.number,
  perPage: PropTypes.number,
  currentPage: PropTypes.number,
  onChange: PropTypes.func,
};

Pagination.defaultProps = {
  total: 0,
  perPage: 10,
  currentPage: 0,
  onChange: () => {},
};

export default Pagination;