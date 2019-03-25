import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { signinRequest } from '../redux/actions';
import Signin from './Signin';

Signin.propTypes = {
  signinRequest: PropTypes.func,
  signinFormState: PropTypes.object,
  currentUserLoading: PropTypes.bool.isRequired,
};

Signin.defaultProps = {
  signinRequest: () => {},
  signinFormState: {},
};

const mapStateToProps = state => ({
  signinFormState: state.form.signinForm,
  currentUserLoading: state.auth.currentUserLoading,
});

const mapDispatchToProps = {
  signinRequest,
};

const withReduxform = reduxForm({
  form: 'signinForm',
})(Signin);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withReduxform);
