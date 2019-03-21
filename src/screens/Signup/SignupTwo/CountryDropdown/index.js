import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { change, getFormValues } from 'redux-form';
import CountryDropdown from './CountryDropdown';

import './CountryDropdown.scss';

CountryDropdown.propTypes = {
  stepTwoValues: PropTypes.object,
  selectCountry: PropTypes.func,
};

CountryDropdown.defaultProps = {
  stepTwoValues: {},
  selectCountry: () => {},
};

const mapStateToProps = state => ({
  stepTwoValues: getFormValues('signupForm')(state).stepTwo,
});

const mapDispatchToProps = {
  selectCountry: value => change('signupForm', 'stepTwo.country', value),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CountryDropdown);
