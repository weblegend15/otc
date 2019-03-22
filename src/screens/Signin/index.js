import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Signin from './Signin';
import './Signin.scss';
import { signinRequest } from './redux/actions';

Signin.propTypes = {
  signinRequest: PropTypes.func,
};

Signin.defaultProps = {
  signinRequest: null,
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  signinRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signin);
