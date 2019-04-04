import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Home from './Home';

import { readGroupRequest, listMembersRequest } from '../../redux/actions';
import toggleModal from '../../../../../modals/redux/actions';

Home.propTypes = {
  group: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
  groupMembers: PropTypes.object.isRequired,
  listMembersRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  group: state.app.group.group,
  groupMembers: state.app.group.groupMembers,
});

const mapDispatchToProps = {
  readGroupRequest,
  toggleModal,
  listMembersRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
