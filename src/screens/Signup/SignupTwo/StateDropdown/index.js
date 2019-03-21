import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { change, getFormValues } from 'redux-form';
import StateDropdown from './StateDropdown';

import './StateDropdown.scss';

StateDropdown.propTypes = {
  stepTwoValues: PropTypes.object,
  selectState: PropTypes.func,
};

StateDropdown.defaultProps = {
  stepTwoValues: {},
  selectState: () => {},
};

const mapStateToProps = state => ({
  stepTwoValues: getFormValues('signupForm')(state).stepTwo,
});

const mapDispatchToProps = {
  selectState: value => change('signupForm', 'stepTwo.state', value),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StateDropdown);
