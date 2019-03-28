import React from 'react';
import { Field } from 'redux-form';
import Form from 'react-bootstrap/Form';
import { Input } from '../fields';
import { Button } from '../../components';

import { required, confirmation, minLength } from '../../utils/validate';

export default ({ handleSubmit, submitting, onSubmit }) => {
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="modal-body px-4">
        <Field
          component={Input}
          type="password"
          name="password"
          label="NEW PASSWORD"
          validate={[required, minLength]}
        />
      </div>
      <div className="modal-body px-4">
        <Field
          component={Input}
          type="password"
          name="confirm_password"
          label="REPEAT PASSWORD"
          validate={[required, confirmation, minLength]}
        />
      </div>
      <div className="modal-footer px-4">
        <Button className="btn-block my-3 p-2" disabled={submitting} type="submit">
          DONE
        </Button>
      </div>
    </Form>
  );
};
