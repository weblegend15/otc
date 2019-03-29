import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import GroupsList from './GroupsList';
import './GroupsList.scss';
import { getGroupsRequest } from '../redux/actions';

GroupsList.propTypes = {
  groups: PropTypes.object.isRequired,
  getGroupsRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  groups: state.app.group.groups,
});

const mapDispatchToProps = {
  getGroupsRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GroupsList);
