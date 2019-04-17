import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MainArea from './MainArea';
import './MainArea.scss';

import {
  getPermissionGroupsRequest,
  refreshFirebaseTokenRequest,
} from './redux/actions';

MainArea.propTypes = {
  getPermissionGroupsRequest: PropTypes.func.isRequired,
  refreshFirebaseTokenRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  getPermissionGroupsRequest,
  refreshFirebaseTokenRequest,
};

export default connect(
  null,
  mapDispatchToProps,
)(MainArea);
