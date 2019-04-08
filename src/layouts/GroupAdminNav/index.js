import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GroupAdminNav from './GroupAdminNav';
import './GroupAdminNav.scss';

GroupAdminNav.propTypes = {
  groupData: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  groupData: state.app.group.group.data,
});

export default connect(mapStateToProps)(GroupAdminNav);
