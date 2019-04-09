import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Messaging from '../../MemberContent/Messaging';
import GroupChat from './GroupChat';

Messaging.propTypes = {
  myGroups: PropTypes.object.isRequired,
  selectedGroupId: PropTypes.object.isRequired,
};

const matStateToProps = state => ({
  myGroups: state.app.main.myGroups,
  selectedGroupId: state.app.main.selectedGroupId,
});

const mapDispatchToProps = {};

export default connect(
  matStateToProps,
  mapDispatchToProps,
)(GroupChat);
