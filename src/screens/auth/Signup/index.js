import { reduxForm, destroy } from 'redux-form';
import { connect } from 'react-redux';
import Signup from './Signup';

const mapDispatchToProps = {
  destroy,
};

export default connect(
  null,
  mapDispatchToProps,
)(
  reduxForm({
    form: 'signupForm',
  })(Signup),
);
