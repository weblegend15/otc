import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import VerifyEmail from './VerifyEmail';

import { verifyEmailRequest } from '../redux/actions';

VerifyEmail.propTypes = {
  verifyEmailRequest: PropTypes.func,
};

VerifyEmail.defaultProps = {
  verifyEmailRequest: () => {},
};

const mapDispatchToProps = {
  verifyEmailRequest,
};

export default connect(
  null,
  mapDispatchToProps,
)(VerifyEmail);
