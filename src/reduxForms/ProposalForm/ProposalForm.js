import React from 'react';
import { Field } from 'redux-form';
import Form from 'react-bootstrap/Form';
import { Input } from '../fields';
import { Button, Row, Col } from '../../components';

import { required } from '../../utils/validate';

export default ({ handleSubmit, onSubmit, proceeding }) => {
  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="proposal-form">
      <div className="modal-body p-0 border-top border-default-color">
        <p className="py-2 px-4 py-3 m-0">Your Proposal</p>
        <Row className="your-proposal-label m-0 text-uppercase text-center">
          <Col className="py-2 border-right border-default-color opacity-5">
            I have
          </Col>
          <Col className="py-2 opacity-5">I want</Col>
        </Row>
        <Row className="m-0">
          <Col className="p-4 border-right border-default-color">
            <Field
              component={Input}
              as="textarea"
              rows="3"
              name="have"
              validate={[required]}
            />
          </Col>
          <Col className="p-4">
            <Field
              component={Input}
              as="textarea"
              rows="3"
              name="want"
              validate={[required]}
            />
          </Col>
        </Row>
      </div>
      <div className="modal-footer">
        <Button className="btn-block" disabled={proceeding} type="submit">
          {proceeding ? 'Submitting...' : 'Submit proposal'}
        </Button>
      </div>
    </Form>
  );
};
