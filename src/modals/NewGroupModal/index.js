import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NewGroupModal from './NewGroupModal';
import './NewGroupModal.scss';

import { createGroupRequest } from '../../screens/app/Groups/redux/actions';

NewGroupModal.propTypes = {
  createGroupRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  createGroupRequest,
};

export default connect(
  null,
  mapDispatchToProps,
)(NewGroupModal);
