import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Topbar from './Topbar';

import './styles.scss';

import { signout } from '../../screens/auth/Signin/redux/actions';

Topbar.propTypes = {
  currentUser: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  ).isRequired,
  signout: PropTypes.func,
};

Topbar.defaultProps = {
  currentUser: {},
  signout: () => {},
};

const mapDispatchToProps = {
  signout,
};

export default connect(
  null,
  mapDispatchToProps,
)(Topbar);
