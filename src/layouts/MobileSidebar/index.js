import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MobileSidebar from './MobileSidebar';
import './MobileSidebar.scss';

MobileSidebar.propTypes = {
  selectedGroupId: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  selectedGroupId: state.app.main.selectedGroupId,
});

export default connect(mapStateToProps)(MobileSidebar);
