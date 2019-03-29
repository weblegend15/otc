import React from 'react';
import { Field } from 'redux-form';
import Form from 'react-bootstrap/Form';
import { Input } from '../fields';
import { Button } from '../../components';

import { required, confirmation, minLength } from '../../utils/validate';

export default ({ handleSubmit, submitting, onSubmit }) => {
  return (
    <Form className="card m-auto" onSubmit={handleSubmit(onSubmit)}>
      <div className="px-4 card-body">
        <p className="text-center pt-3 card-title">
          Please enter your new password below:
        </p>
        <div className="pb-3">
          <Field
            component={Input}
            type="password"
            name="password"
            label="NEW PASSWORD"
            validate={[required, minLength]}
          />
          <Field
            component={Input}
            type="password"
            name="confirm_password"
            label="REPEAT PASSWORD"
            validate={[required, confirmation, minLength]}
          />
        </div>
      </div>
      <div className="px-4 card-footer card-footer-bg-color">
        <Button className="btn-block my-4 p-2" disabled={submitting} type="submit">
          DONE
        </Button>
      </div>
    </Form>
  );
};
