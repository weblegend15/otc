import React, { Component } from 'react';

import { Toggle } from '../../../../../components';

export default class Security extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: false,
    };
  }

  handleToggle = () => {
    const { isEnabled } = this.state;
    this.setState({ isEnabled: !isEnabled });
  };

  render() {
    const { isEnabled } = this.state;
    return (
      <div className="p-4 mb-5">
        <div>
          <p className="mb-3 p-sm opacity-5 text-uppercase">
            TWO-Factor Authentication
          </p>
          <div className="d-flex flex-row align-items-center">
            <Toggle
              className="mr-4 ml-2"
              value={isEnabled}
              onClick={this.handleToggle}
            />
            <p>{isEnabled ? 'Enabled' : 'Disabled'}</p>
          </div>
        </div>
      </div>
    );
  }
}
