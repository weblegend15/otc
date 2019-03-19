import React from 'react';
import { InputBox, Icon, IconButton, Button }  from '../../components/index';

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

    <Button size='lg' variant='primary'>Message</Button>
    <br/>
    <br/>
    <Button size='lg' variant='outline-primary'>Message</Button>
    <br/>
    <br/>
    <Button size='lg' variant='muted'>Message</Button>
    <br/>
    <InputBox placeholder="serach" icon="search" iconPosition="left" />
    <InputBox placeholder="serach" icon="search" iconPosition="right" />
    <InputBox />

  </div>
);