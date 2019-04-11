import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Profile from './Profile';

Profile.propTypes = {
  memberProfile: PropTypes.object.isRequired,
  groupsList: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  memberProfile: state.app.main.user,
  groupsList: state.app.group.groups.list,
});

export default connect(mapStateToProps)(Profile);
