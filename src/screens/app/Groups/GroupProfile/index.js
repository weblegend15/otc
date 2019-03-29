import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GroupProfile from './GroupProfile';
import './GroupProfile.scss';
import { readGroupRequest } from '../redux/actions';

GroupProfile.propTypes = {
  group: PropTypes.object.isRequired,
  readGroupRequest: PropTypes.func.isRequired,
};

const matStateToProps = state => ({
  group: state.app.group.group,
});

const mapDispatchToProps = {
  readGroupRequest,
};

export default connect(
  matStateToProps,
  mapDispatchToProps,
)(GroupProfile);
