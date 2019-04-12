import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import GroupContent from './GroupContent';
import './GroupContent.scss';

import toggleModal from '../../../../modals/redux/actions';

GroupContent.propTypes = {
  selectedGroupId: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  selectedGroupId: state.app.main.selectedGroupId,
});

const mapDispatchToProps = {
  toggleModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupContent);
