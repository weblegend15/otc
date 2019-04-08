import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import GroupAdmin from './GroupAdmin';
import './GroupAdmin.scss';

GroupAdmin.propTypes = {
  group: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  group: state.app.group.group,
});

export default connect(mapStateToProps)(GroupAdmin);
