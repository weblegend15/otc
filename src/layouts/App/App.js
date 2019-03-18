import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

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
      </Container>
    );
  }
}

export default App;