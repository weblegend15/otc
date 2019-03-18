import React from 'react';
import Icon from '../../components/Icon';
import IconButton from '../../components/Buttons/IconButton';
import CustomButton from '../../components/Buttons/Button';

export default () => (
  <div>
    dashboard
    <br />
    <Icon name="envelope-o" size="lg" color="primary" />
    <br />
    <br />
    <IconButton
      icon="envelope-o"
      content="Message"
      iconSize="lg"
      size='lg'
      color='primary'
      variant='primary'
    />

    <br />
    <br />
    <IconButton
      iconPosition="left"
      icon="envelope-o" 
      content="Message"
      iconSize="lg"
      size='lg'
      variant='outline-primary'
    />
    <br />
    <br />

    <CustomButton size='lg' variant='primary'>Message</CustomButton>
    <br/>
    <br/>
    <CustomButton size='lg' variant='outline-primary'>Message</CustomButton>
    <br/>
    <br/>
    <CustomButton size='lg' variant='muted'>Message</CustomButton>
  </div>
);