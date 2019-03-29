import React from 'react';
import { Field } from 'redux-form';
import Form from 'react-bootstrap/Form';
import { Input } from '../fields';
import { Button } from '../../components';

import { required, isEmail } from '../../utils/validate';

export default ({ handleSubmit, submitting, onSubmit }) => {
  return (
    <Form className="card forgot-password-form m-auto" onSubmit={handleSubmit(onSubmit)}>
      <div className="card-body">
        <div className="card-title">
          <p className="text-center pt-4">Please enter your email address below</p>
          <p className="text-center">
            and we`ll send you instructions on how to reset your password:
          </p>
        </div>
        <div className="px-1 pb-3">
          <Field
            component={Input}
            type="email"
            name="email"
            label="EMAIL"
            validate={[required, isEmail]}
          />
        </div>
      </div>
      <div className="p-4 card-footer card-footer-bg-color">
        <Button className="btn-block my-3 p-2" disabled={submitting} type="submit">
          CONTINUE
        </Button>
      </div>
    </Form>
  );
};
