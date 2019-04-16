import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Topbar from './Topbar';

import './styles.scss';

import { signout, setNotifications } from '../../screens/auth/redux/actions';

Topbar.propTypes = {
  currentUser: PropTypes.object,
  signout: PropTypes.func,
  setNotifications: PropTypes.func,
  selectedGroupId: PropTypes.string.isRequired,
};

Topbar.defaultProps = {
  currentUser: null,
  signout: () => {},
};

const mapStateToProps = state => ({
  selectedGroupId: state.app.main.selectedGroupId,
  notifications: state.auth.notifications,
});

const mapDispatchToProps = {
  signout,
  setNotifications,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Topbar);
