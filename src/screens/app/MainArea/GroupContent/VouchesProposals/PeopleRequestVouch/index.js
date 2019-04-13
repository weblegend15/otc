import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PeopleRequestVouch from './PeopleRequestVouch';

import { getActiveMembers } from '../../../../../../selectors';

import toggleModal from '../../../../../../modals/redux/actions';
import { getMyVouchesRequest } from './redux/actions';

PeopleRequestVouch.propTypes = {
  myVouches: PropTypes.object.isRequired,
  getMyVouchesRequest: PropTypes.func.isRequired,
  selectedGroupId: PropTypes.string.isRequired,
  currentUser: PropTypes.object.isRequired,
  groupMembers: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  myVouches: state.app.groupVouches.myVouches,
  selectedGroupId: state.app.main.selectedGroupId,
  currentUser: state.auth.currentUser,
  groupMembers: getActiveMembers(state),
});

const mapDispatchToProps = {
  getMyVouchesRequest,
  toggleModal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PeopleRequestVouch);
