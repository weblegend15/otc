import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Card, Button } from '../../../components';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="profile">
        <Row className="mb-3">
          <Col lg={10}>
            <h3 className="m-0 h-100 d-flex align-items-center">User Profile</h3>
          </Col>
          <Col lg={2}>
            <Button className="w-100" variant="primary">
              EDIT
            </Button>
          </Col>
        </Row>
        <Card>
          <Card.Header className="p-0 border-bottom border-light">
            <Row className="bio-title px-4 py-3">
              <Col lg={10}>
                <h5>Bio</h5>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </span>
              </Col>
              <Col lg={2} className="text-center">
                <span className="join-date">Joined 24 Fed 2018</span>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body className="p-0 px-4 py-3">
            <Card.Title>Member Of</Card.Title>
            <Row>
              <Col lg={6} md={6} sm={6} xs={12}>
                <Card>
                  <Card.Body>
                    <h5>Demo OTC GROUP</h5>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </span>
                  </Card.Body>
                  <Card.Footer />
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Profile;
