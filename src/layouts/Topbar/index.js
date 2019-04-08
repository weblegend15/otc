import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Topbar from './Topbar';

import './styles.scss';

import { signout } from '../../screens/auth/redux/actions';

Topbar.propTypes = {
  currentUser: PropTypes.object,
  signout: PropTypes.func,
  selectedGroupId: PropTypes.string.isRequired,
};

Topbar.defaultProps = {
  currentUser: null,
  signout: () => {},
};

const mapStateToProps = state => ({
  selectedGroupId: state.app.main.selectedGroupId,
});

const mapDispatchToProps = {
  signout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Topbar);
