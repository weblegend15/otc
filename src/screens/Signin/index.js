import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import Signin from './Signin';
import { signinRequest } from './redux/actions';

Signin.propTypes = {
  signinRequest: PropTypes.func,
  signinFormState: PropTypes.objectOf(PropTypes.object),
  currentUser: PropTypes.objectOf([
    PropTypes.object,
    PropTypes.bool,
  ]),
};

Signin.defaultProps = {
  signinRequest: () => {},
  signinFormState: {},
  currentUser: {},
};

const mapStateToProps = (state) => ({
  signinFormState: state.form.signinForm,
  currentUser: state.signin.currentUser,
});

const mapDispatchToProps = {
  signinRequest,
};

const withReduxform = reduxForm({
  form: 'signinForm',
})(Signin);

export default connect(mapStateToProps, mapDispatchToProps)(withReduxform);