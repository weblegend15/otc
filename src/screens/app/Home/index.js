import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Home from './Home';
import { getGroupsRequest, createGroupRequest } from '../redux/actions';

Home.propTypes = {
  groupsList: PropTypes.object.isRequired,
  groupsListLoading: PropTypes.bool.isRequired,
  getGroupsRequest: PropTypes.func.isRequired,
  createGroupRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  groupsList: state.app.groupsList,
  groupsListLoading: state.app.groupsListLoading,
});

const mapDispatchToProps = {
  getGroupsRequest,
  createGroupRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
