import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import NewOfferModalForm from './NewOfferModalForm';

NewOfferModalForm.propTypes = {
  proceeding: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  proceeding: state.app.offer.groupOffer.loading,
});

const withConnect = connect(mapStateToProps)(NewOfferModalForm);

export default reduxForm({
  form: 'newOfferModalForm',
})(withConnect);
