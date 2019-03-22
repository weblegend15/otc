import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Topbar, Footer } from './layouts';

import Routes from './screens';

const MainRoutes = ({ currentUser }) => (
  <Fragment>
    <Topbar currentUser={currentUser} />
    <ToastContainer pauseOnFocusLoss={false} autoClose={3000} />
    <Routes />
    <Footer />
  </Fragment>
);

MainRoutes.propTypes = {
  currentUser: PropTypes.objectOf(PropTypes.bool),
};

MainRoutes.defaultProps = {
  currentUser: {},
};

const mapStateToProps = state => ({
  currentUser: state.auth.signin.currentUser,
});

export default connect(mapStateToProps)(MainRoutes);
