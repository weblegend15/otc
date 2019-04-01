import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field } from 'redux-form';

import { Checkbox, Input } from '../fields';
import { Button, Form } from '../../components';
import { required } from '../../utils/validate';

class JoinGroupModalForm extends Component {
  renderCheckboxLabel = () => (
    <div>
      I agree to the{' '}
      <Link to="/app/groups/group-policy" target="_blank">
        Group Policy
      </Link>
    </div>
  );

  render() {
    const { onSubmit, handleSubmit, proceeding } = this.props;
    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="modal-body">
          <p>Question Example 1</p>
          <Field
            className="mb-4"
            label="YOUR ANSWER"
            name="answerOne"
            component={Input}
            validate={[required]}
          />
          <p>Question Example 2</p>
          <Field
            className="mb-4"
            label="YOUR ANSWER"
            name="answerTwo"
            component={Input}
            validate={[required]}
          />
          <p>Question Example 3</p>
          <Field
            className="mb-4"
            label="YOUR ANSWER"
            name="answerThree"
            as="textarea"
            rows="3"
            component={Input}
            validate={[required]}
          />
          <Field
            name="agreeGroupTerms"
            type="checkbox"
            label={this.renderCheckboxLabel()}
            component={Checkbox}
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

export default JoinGroupModalForm;
