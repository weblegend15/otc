import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ViewApplicationModal from './ViewApplicationModal';

import {
  acceptApplicationRequest,
  rejectApplicationRequest,
} from '../../screens/app/Groups/GroupAdmin/redux/actions';

ViewApplicationModal.propTypes = {
  acceptApplicationRequest: PropTypes.func.isRequired,
  rejectApplicationRequest: PropTypes.func.isRequired,
  groupData: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  acceptApplicationLoading: state.app.groupAdmin.acceptApplicationLoading,
  rejectApplicationLoading: state.app.groupAdmin.rejectApplicationLoading,
  groupData: state.app.group.group.data,
});

const mapDispatchToProps = {
  acceptApplicationRequest,
  rejectApplicationRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewApplicationModal);
