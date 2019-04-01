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
          name="groupName"
          label="GROUP NAME"
          validate={[required]}
        />
        <Field
          component={Input}
          as="textarea"
          rows="3"
          name="groupDescription"
          label="GROUP DESCRIPTION"
          validate={[required]}
        />
      </div>
      <div className="modal-footer">
        <Button className="btn-block" disabled={proceeding} type="submit">
          {proceeding ? 'Sending...' : 'Send request'}
        </Button>
      </div>
    </Form>
  );
};
