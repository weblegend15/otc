import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Card, Button } from '../../../components';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>Home</h3>
        <Card>
          <Card.Header>
            <Nav variant="tabs" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link href="#first">All</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#link">Independently owned</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#hedge">Hedge funds</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#escrows">Escrows</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#trading">OTC Trading</Nav.Link>
              </Nav.Item>
              <Button className="ml-auto" variant="outline-primary">
                + NEW GROUP
              </Button>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Home;
