import React from 'react';
import { Field } from 'redux-form';
import Form from 'react-bootstrap/Form';
import { Input } from '../fields';
import { Button } from '../../components';

import { required, isEmail } from '../../utils/validate';

export default ({ handleSubmit, submitting, onSubmit }) => {
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="px-4">
        <Field
          component={Input}
          type="email"
          name="email"
          label="EMAIL"
          validate={[required, isEmail]}
        />
      </div>
      <div className="px-4">
        <Button className="btn-block my-3 p-2" disabled={submitting} type="submit">
          CONTINUE
        </Button>
      </div>
    </Form>
  );
};
