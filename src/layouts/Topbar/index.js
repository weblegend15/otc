import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Topbar from './Topbar';

import './styles.scss';
import { setNotifications } from '../../screens/app/Groups/redux/actions';
import { signout } from '../../screens/auth/redux/actions';

Topbar.propTypes = {
  currentUser: PropTypes.object,
  signout: PropTypes.func,
  selectedGroupId: PropTypes.string.isRequired,
  setNotifications: PropTypes.func,
};

Topbar.defaultProps = {
  currentUser: null,
  signout: () => {},
};

const mapStateToProps = state => ({
  notifications: state.app.group.notifications,
  selectedGroupId: state.app.main.selectedGroupId,
});

const mapDispatchToProps = {
  signout,
  setNotifications,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Topbar);
