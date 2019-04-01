import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import GroupAdmin from './GroupAdmin';

import { readGroupRequest } from '../redux/actions';

GroupAdmin.propTypes = {
  data: PropTypes.object.isRequired,
  readGroupRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  data: state.group.group,
});

const mapDispatchToProps = {
  readGroupRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GroupAdmin);
