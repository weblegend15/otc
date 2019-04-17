import React, { Component } from 'react';

import { PersonalDataForm } from '../../../../../reduxForms';
import { LoadingContainer } from '../../../../../components';

export default class PersonalData extends Component {
  componentDidMount() {
    const { getProfileRequest } = this.props;
    getProfileRequest();
  }

  handleSubmit = values => {
    const { updateProfileRequest } = this.props;

    updateProfileRequest(values);
  };

  render() {
    const {
      profile: { loading },
    } = this.props;
    return (
      <LoadingContainer loading={loading}>
        <PersonalDataForm onSubmit={this.handleSubmit} />
      </LoadingContainer>
    );
  }
}
