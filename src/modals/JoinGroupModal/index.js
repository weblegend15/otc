import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import JoinGroupModal from './JoinGroupModal';
import './JoinGroupModal.scss';

import { joinGroupRequest } from '../../screens/app/Users/redux/actions';

JoinGroupModal.propTypes = {
  submitting: PropTypes.bool.isRequired,
  joinGroupRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  submitting: state.app.user.joinRequestLoading,
});

const mapDispatchToProps = {
  joinGroupRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(JoinGroupModal);
