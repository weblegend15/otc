import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Input, CountryDropdown, StateDropdown, PhoneInput } from '../fields';
import { Button, Row, Col, Form } from '../../components';

import { required, isEmail, phoneRequire } from '../../utils/validate';

export default class PersonalDataForm extends Component {
  componentWillMount() {
    const {
      initialize,
      profile: { data },
    } = this.props;
    const profileData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      country: data.country,
      state: data.state,
      city: data.city,
      address1: data.address1,
      address2: data.address2,
    };
    initialize(profileData);
  }

  handleCountryChange = () => {
    const { selectState } = this.props;
    selectState(null);
  };

  render() {
    const {
      handleSubmit,
      onSubmit,
      profile: { loading },
      personalDataFormValues,
    } = this.props;

    return (
      <Form className="personal-data-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="personal-data-section m-0 m-md-4">
          <Field
            className="my-4"
            component={Input}
            type="text"
            name="firstName"
            label="FIRST NAME"
            validate={[required]}
          />
          <Field
            className="mb-4"
            component={Input}
            type="text"
            name="lastName"
            label="LAST NAME"
            validate={[required]}
          />
          <Field
            className="mb-4"
            component={Input}
            type="email"
            name="email"
            label="EMAIL"
            validate={[required, isEmail]}
          />
          <Field
            className="my-4"
            component={PhoneInput}
            type="phone"
            name="phone"
            label="PHONE NUMBER"
            validate={[phoneRequire]}
          />
          <Field
            className="mb-4"
            type="select"
            name="country"
            label="COUNTRY"
            onChange={this.handleCountryChange}
            validate={[required]}
            component={CountryDropdown}
          />
          <Row className="mb-4">
            <Col xs={{ span: 4 }}>
              <Field
                type="select"
                name="state"
                label="STATE"
                validate={[required]}
                component={StateDropdown}
                {...{
                  country: personalDataFormValues
                    ? personalDataFormValues.country
                    : '',
                }}
              />
            </Col>
            <Col xs={{ span: 8 }}>
              <Field
                component={Input}
                type="text"
                name="city"
                label="CITY"
                validate={[required]}
              />
            </Col>
          </Row>
          <div className="mb-4">
            <Field
              className="mb-3"
              component={Input}
              type="text"
              name="address1"
              label="ADDRESS"
            />
            <Field component={Input} type="text" name="address2" />
          </div>
        </div>
        <div className="px-2 py-4 p-md-4 personal-data-form-footer profile-settings-footer border-top border-default-color">
          <Button
            className="btn-block font-weight-bold p-lg btn-large text-uppercase"
            disabled={loading}
            type="submit"
          >
            {loading ? 'Submiting...' : 'Submit'}
          </Button>
        </div>
      </Form>
    );
  }
}
