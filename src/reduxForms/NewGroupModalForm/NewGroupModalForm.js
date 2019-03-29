import React from 'react';
import { Field } from 'redux-form';
import Form from 'react-bootstrap/Form';
import { Input } from '../fields';
import { Button } from '../../components';

import { required } from '../../utils/validate';

export default ({ handleSubmit, submitting, onSubmit }) => {
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="modal-body px-4">
        <Field
          component={Input}
          type="text"
          name="groupName"
          label="GROUP NAME"
          validate={[required]}
        />
        <Field
          component={Input}
          as="textarea"
          rows="4"
          name="groupDescription"
          label="GROUP DESCRIPTION"
          validate={[required]}
        />
      </div>
      <div className="modal-footer border-0 px-4">
        <Button
          className="btn-block my-2 p-2"
          disabled={submitting}
          type="submit"
        >
          SEND REQUEST
        </Button>
      </div>
    </Form>
  );
};
