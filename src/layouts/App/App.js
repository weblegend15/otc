import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { Tabs, InputBox, Icon, IconButton, Button }  from '../../components/index';

class App extends Component {
  componentDidMount() {
    const { getData } = this.props;
    getData();
  }

  render() {
    const { data } = this.props;

    if (!data) {
      return <Container>Loading...</Container>;
    }

    return (
      <Container className="App">
        User name: {data.username}
        <br />
        Password: {data.password}
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
          <br />

          <Tabs headers={['tab1', 'tab2', 'tab3']} size='lg' defaultActiveTab='tab1'>
            <div everyKey='tab1' >
              <h1> Hello Allan</h1>
            </div>
            <div everyKey='tab2' >
              <h1> Hello Emil</h1>
            </div>
            <div everyKey='tab3' >
              <h1> Hello Keith</h1>
            </div>
          </Tabs>
        </div>
        
      </Container>
    );
  }
}

export default App;