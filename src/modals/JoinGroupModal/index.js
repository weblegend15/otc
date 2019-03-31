import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import JoinGroupModal from './JoinGroupModal';

import { joinGroupRequest } from '../../screens/app/Users/redux/actions';

JoinGroupModal.propTypes = {
  joinGroupRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  joinGroupRequest,
};

export default connect(
  null,
  mapDispatchToProps,
)(JoinGroupModal);
