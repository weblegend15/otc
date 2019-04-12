import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GroupChat from './GroupChat';
import { getMyActiveGroups } from '../../../../../selectors';

GroupChat.propTypes = {
  myGroups: PropTypes.object.isRequired,
  selectedGroupId: PropTypes.string.isRequired,
};

const matStateToProps = state => ({
  myGroups: getMyActiveGroups(state),
  selectedGroupId: state.app.main.selectedGroupId,
  members: state.app.main.members,
});

export default connect(matStateToProps)(GroupChat);
