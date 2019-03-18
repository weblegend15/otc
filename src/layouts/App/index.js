import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getData } from '../../redux/actions';

import App from './App';
import './App.scss';

App.propTypes = {
  getData: PropTypes.func.isRequired,
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  data: state.userData.data,
});

const mapDispatchToProps = {
  getData,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
