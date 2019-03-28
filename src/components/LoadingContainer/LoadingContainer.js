import React, { Fragment } from 'react';
import Modal from '../Modal';
import loadingIcon from '../../assets/icons/loading.gif';

const loadingImg = () => (
  <img className="mx-auto my-auto" src={loadingIcon} alt="loading" />
);

export default ({ loading, children, ...rest }) => (
  <Fragment>
    <Modal
      className="loading-overlay"
      centered
      dialogAs={loadingImg}
      show={loading}
      backdrop="static"
      {...rest}
    />
    {children}
  </Fragment>
);
