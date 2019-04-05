import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import GroupContent from './GroupContent';
import './GroupContent.scss';

GroupContent.propTypes = {
  selectedGroupId: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  selectedGroupId: state.app.main.selectedGroupId,
});

export default connect(mapStateToProps)(GroupContent);
