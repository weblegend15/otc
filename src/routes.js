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
    <ToastContainer />
    <div className="app-content">
      <Routes />
    </div>
    <Footer />
  </Fragment>
);

MainRoutes.propTypes = {
  currentUser: PropTypes.object,
};

MainRoutes.defaultProps = {
  currentUser: null,
};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps)(MainRoutes);
