import React from 'react';
import { Button } from '../../../../../components';

export default () => {
  return (
    <div>
      <div className="profile-settings-content m-4">
        <p className="font-weight-semibold p-lg mb-2">Identity Verification</p>
        <p className="p-sm mb-3">
          Upload a scanned copy of your government issued ID (passport, ID card
          or driving lisense), your recent photo and click “VERIFY”. We will
          verify your identity and notify your by email. The process usually
          takes 5-7 days.
        </p>
      </div>
      <div className="profile-settings-footer border-top border-default-color px-2">
        <Button className="btn-large mx-auto mx-md-4 my-4 btn-block">
          Submit
        </Button>
      </div>
    </div>
  );
};
