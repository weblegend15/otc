import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GroupCard from './GroupCard';
import './GroupCard.scss';

import toggleModal from '../../../../../modals/redux/actions';

GroupCard.propTypes = {
  currentUser: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
});

const mapDispatchToProps = {
  toggleModal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GroupCard);
