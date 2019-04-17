import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MainAreaMobileNav from './MainAreaMobileNav';
import './MainAreaMobileNav.scss';

MainAreaMobileNav.propTypes = {
  selectedGroupId: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  selectedGroupId: state.app.main.selectedGroupId,
});

export default connect(mapStateToProps)(MainAreaMobileNav);
