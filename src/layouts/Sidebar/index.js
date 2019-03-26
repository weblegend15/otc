import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import './Sidebar.scss';

Sidebar.propTypes = {
  currentUser: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps)(Sidebar);
