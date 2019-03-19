import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Signup from './Signup';
// import { signupRequest } from './redux/actions';

Signup.propTypes = {
  // signupRequest: PropTypes.func,
};

Signup.defaultProps = {
  // signupRequest: null,
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
  // signupRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);