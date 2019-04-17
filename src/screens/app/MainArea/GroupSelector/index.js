import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GroupSelector from './GroupSelector';

import { getMyActiveGroups } from '../../../../selectors';
import { selectActiveGroup, selectGroupMember } from '../redux/actions';
import { setResetMessages } from '../Chat/redux/actions';

GroupSelector.propTypes = {
  selectActiveGroup: PropTypes.func.isRequired,
  selectGroupMember: PropTypes.func.isRequired,
  setResetMessages: PropTypes.func.isRequired,
  myActiveGroups: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  myActiveGroups: getMyActiveGroups(state),
  selectedGroupId: state.app.main.selectedGroupId,
});

const mapDispatchToProps = {
  selectActiveGroup,
  selectGroupMember,
  setResetMessages,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GroupSelector);
