import React from 'react';
import { Field } from 'redux-form';
import Form from 'react-bootstrap/Form';
import { Input } from '../fields';
import { Button } from '../../components';

import { required } from '../../utils/validate';

export default ({ handleSubmit, onSubmit, proceeding }) => {
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="modal-body">
        <Field
          className="mb-4"
          component={Input}
          type="text"
          name="have"
          label="I have"
          validate={[required]}
        />
        <Field
          className="mb-4"
          component={Input}
          type="text"
          name="want"
          label="I want"
          validate={[required]}
        />
        <Field
          component={Input}
          as="textarea"
          rows="3"
          name="note"
          label="Notes"
          validate={[required]}
        />
      </div>
      <div className="modal-footer">
        <Button className="btn-block" disabled={proceeding} type="submit">
          {proceeding ? 'Adding...' : 'Add offer'}
        </Button>
      </div>
    </Form>
  );
};
