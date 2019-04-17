import React, { Component } from 'react';

import { Toggle } from '../../../../../components';

export default class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: true,
      push: false,
    };
  }

  handleClick = type => {
    const { email, push } = this.state;
    this.setState({ [type]: type === 'email' ? !email : !push });
  };

  render() {
    const { email, push } = this.state;

    return (
      <div className="p-4">
        <div className="mb-5">
          <p className="text-uppercase p-sm opacity-5 mb-3">
            Receive email from new posts
          </p>
          <div className="d-flex flex-row align-items-center">
            <Toggle
              className="mr-4 ml-2"
              onClick={() => this.handleClick('email')}
              value={email}
            />
            <p>{email ? 'On' : 'Off'}</p>
          </div>
        </div>
        <div className="mb-5">
          <p className="text-uppercase p-sm opacity-5 mb-3">
            push notifications
          </p>
          <div className="d-flex flex-row align-items-center">
            <Toggle
              className="mr-4 ml-2"
              onClick={() => this.handleClick('push')}
              value={push}
            />
            <p>{push ? 'On' : 'Off'}</p>
          </div>
        </div>
      </div>
    );
  }
}
