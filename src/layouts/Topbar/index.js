import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Topbar from './Topbar';

import './styles.scss';

import { signout } from '../../screens/auth/redux/actions';

Topbar.propTypes = {
  currentUser: PropTypes.object,
  signout: PropTypes.func,
};

Topbar.defaultProps = {
  currentUser: null,
  signout: () => {},
};

const mapDispatchToProps = {
  signout,
};

export default connect(
  null,
  mapDispatchToProps,
)(Topbar);
