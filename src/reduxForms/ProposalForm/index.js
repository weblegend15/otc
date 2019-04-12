import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import ProposalForm from './ProposalForm';
import './ProposalForm.scss';

ProposalForm.propTypes = {
  proceeding: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  proceeding: state.app.proposal.proposal.loading,
});

const withConnect = connect(mapStateToProps)(ProposalForm);

export default reduxForm({
  form: 'proposalForm',
})(withConnect);
