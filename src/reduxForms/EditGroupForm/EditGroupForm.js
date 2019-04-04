import React, { Component } from 'react';
import { Field } from 'redux-form';
import Form from 'react-bootstrap/Form';
import { Input } from '../fields';
import { Button } from '../../components';

import { required } from '../../utils/validate';

export default class EditGroupForm extends Component {
  componentWillMount() {
    const { initialize, defaultValue, fieldName } = this.props;
    initialize({ [fieldName]: defaultValue });
  }

  render() {
    const { handleSubmit, onSubmit, proceeding, fieldName } = this.props;
    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="modal-body">
          <Field
            component={Input}
            as="textarea"
            rows="3"
            name={fieldName}
            label={`group ${fieldName}`}
            validate={[required]}
          />
        </div>
        <div className="modal-footer">
          <Button className="btn-block" disabled={proceeding} type="submit">
            {proceeding ? 'Submitting...' : 'Submit'}
          </Button>
        </div>
      </Form>
    );
  }
}
