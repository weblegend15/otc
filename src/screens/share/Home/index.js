import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { signinRequest } from '../../auth/redux/actions';
import Home from './Home';
import './Home.scss';

Home.propTypes = {
  signinRequest: PropTypes.func,
  signinFormState: PropTypes.object,
  currentUserLoading: PropTypes.bool.isRequired,
};

Home.defaultProps = {
  signinRequest: () => {},
  signinFormState: {},
};

const mapStateToProps = state => ({
  signinFormState: state.form.signinForm,
  currentUser: state.auth.currentUser,
  currentUserLoading: state.auth.currentUserLoading,
});

const mapDispatchToProps = {
  signinRequest,
};

const withReduxform = reduxForm({
  form: 'signinForm',
})(Home);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withReduxform);
