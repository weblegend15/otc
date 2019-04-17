import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import './Sidebar.scss';

Sidebar.propTypes = {
  currentUser: PropTypes.object.isRequired,
  selectedGroupId: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  selectedGroupId: state.app.main.selectedGroupId,
});

export default connect(mapStateToProps)(Sidebar);
