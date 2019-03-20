import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { Badge, Tabs, InputBox, Icon, IconButton, Button, Tooltip }  from '../../components/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false,
    };
  }

  componentDidMount() {
    const { getData } = this.props;
    getData();
  }

  showTooltip = (status) => {
    const tooltipStatus = status === 'on';
    this.setState({ on: tooltipStatus });
  };

  render() {
    const { data } = this.props;
    const { on } = this.state;
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
          <Icon onClick={() => {this.showTooltip('on');}} name="envelope-o" size="lg" color="primary" />
          { on && <Tooltip on={on} position="left" showTooltip={this.showTooltip} >End Listning</Tooltip>}
          <br />
          <br />
          <IconButton
            icon="envelope-o"
            content="Left Icon Button"
            size='lg'
            iconPosition="left"
            variant='primary'
          />

          <IconButton
            icon="envelope-o"
            size='lg'
            variant='link'
            disabled
          />


          <IconButton
            icon="envelope-o"
            size='lg'
            variant='outline-primary'
          />

          <br />
          <br />
          <IconButton
            iconPosition="right"
            icon="envelope-o" 
            content="Message"
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
          <Badge variant="primary" number={100} />
          <Badge variant="primary" number={3} />
          <Badge variant="primary" />
        </div>
        
      </Container>
    );
  }
}

export default App;