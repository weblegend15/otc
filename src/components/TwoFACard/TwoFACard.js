import React, { Component } from 'react';
import QRCode from 'qrcode.react';

import LoadingContainer from '../LoadingContainer';
import Button from '../Button';
import Card from '../Card';

import appleAppDownloadIcon from '../../assets/images/appleAppImage.svg';
import androidAppDownloadIcon from '../../assets/images/androidAppImage.svg';

export default class TwoFACard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAction: 'proceed',
    };
  }

  handleProceed = () => {
    const { onProceed } = this.props;
    this.setState({ currentAction: 'proceed' });
    onProceed();
  };

  handleSkip = () => {
    const { onSkip } = this.props;
    this.setState({ currentAction: 'skip' });
    onSkip();
  };

  render() {
    const { loading, data, proceeding } = this.props;
    const { currentAction } = this.state;
    return (
      <Card className="sign-up-form border-0 m-auto text-center">
        <Card.Body>
          <LoadingContainer loading={loading}>
            <div className="mt-4 mb-5">
              Step 1: Download and Install Google Authentication APP:
            </div>
            <div className="mb-5 d-flex flex-row justify-content-center">
              <a
                href="https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8"
                target="_blank" // eslint-disable-line
              >
                <img src={appleAppDownloadIcon} alt="download" />
              </a>
              <a
                className="ml-3"
                href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en_US"
                target="_blank" // eslint-disable-line
              >
                <img src={androidAppDownloadIcon} alt="download" />
              </a>
            </div>
            <div className="mb-4">Step 2: Scan the code with your device:</div>
            <QRCode className="mb-3" value={data.otpauth_url} />
            <div className="mb-3 text-uppercase font-weight-bold opacity-5">
              Manual activation
            </div>
            <div className="text-primary font-weight-bold">NAME: </div>
            <p className="mb-4">otctrade</p>
            <div className="text-primary text-uppercase font-weight-bold">
              Secure private key:{' '}
            </div>
            <p className="mb-4">{data.base32}</p>
          </LoadingContainer>
        </Card.Body>
        <Card.Footer className="pb-5 d-flex flex-row card-footer-bg-color p-4">
          <Button
            className="w-50 btn-large font-weight-bold p-lg"
            disabled={proceeding}
            onClick={this.handleProceed}
          >
            {proceeding && currentAction === 'proceeed'
              ? 'PROCEEDING...'
              : 'PROCEED'}
          </Button>
          <Button
            className="w-50 btn-large ml-3 font-weight-bold p-lg"
            variant="dark"
            onClick={this.handleSkip}
          >
            {proceeding && currentAction === 'skip' ? 'SKIPING...' : 'SKIP'}
          </Button>
        </Card.Footer>
      </Card>
    );
  }
}
