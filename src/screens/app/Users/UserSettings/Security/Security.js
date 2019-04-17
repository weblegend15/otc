import React, { Component } from 'react';

import { Toggle } from '../../../../../components';

export default class Security extends Component {
  handleToggle = () => {
    const {
      toggleModal,
      generateTwoFARequest,
      disableTwoFAReqeust,
      currentUser: { is2faEnabled },
    } = this.props;

    if (!is2faEnabled) {
      generateTwoFARequest();
      toggleModal('addTwoFAModal');
    }

    if (is2faEnabled) {
      disableTwoFAReqeust();
    }
  };

  render() {
    const {
      currentUser: { is2faEnabled },
    } = this.props;

    return (
      <div className="p-4 mb-5">
        <div>
          <p className="mb-3 p-sm opacity-5 text-uppercase">
            TWO-Factor Authentication
          </p>
          <div className="d-flex flex-row align-items-center">
            <Toggle
              className="mr-4 ml-2"
              value={is2faEnabled}
              onClick={this.handleToggle}
            />
            <p>{is2faEnabled ? 'Enabled' : 'Disabled'}</p>
          </div>
        </div>
      </div>
    );
  }
}
