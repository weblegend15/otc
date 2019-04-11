import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GroupChat from './GroupChat';

GroupChat.propTypes = {
  myGroups: PropTypes.object.isRequired,
  selectedGroupId: PropTypes.string.isRequired,
};

const matStateToProps = state => ({
  myGroups: state.app.main.myGroups,
  selectedGroupId: state.app.main.selectedGroupId,
  members: state.app.main.members,
});

const mapDispatchToProps = {};

export default connect(
  matStateToProps,
  mapDispatchToProps,
)(GroupChat);
