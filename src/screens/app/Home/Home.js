import React, { Component, Fragment } from 'react';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Card, Button, Pagination, Icon, Input } from '../../../components';

import { formatNumber } from '../../../utils/common';

const PAGE_LIMIT = 4;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
    };
  }

  componentDidMount() {
    const { getGroupsRequest } = this.props;
    getGroupsRequest({ skip: 0, limit: PAGE_LIMIT });
  }

  handlePageChange = value => {
    const { getGroupsRequest } = this.props;

    this.setState({ currentPage: value });
    getGroupsRequest({ skip: value * PAGE_LIMIT, limit: PAGE_LIMIT });
  };

  handleCreateNewGroup = () => {
    // HERE event for new group button
  };

  renderGroupsList = () => {
    const { groupsList } = this.props;
    const { currentPage } = this.state;
    return groupsList.map(
      ({ name, groupStatus, description, membersCount }, idx) => (
        <Fragment>
          <Col md={6} key={`group_card_${idx}`}>
            <Card className="m-3">
              <Card.Body>
                <Card.Title className="d-flex flex-row justify-content-between align-items-center">
                  <h4>{name}</h4>
                  <div className="text-dark d-flex flex-row">
                    <Icon name="lock" className="mr-3" />
                    <p className="m-0 p-md d-flex align-items-center">
                      {groupStatus}
                    </p>
                  </div>
                </Card.Title>
                <Card.Text className="text-dark mb-4">{description}</Card.Text>
              </Card.Body>
              <Card.Footer className="border-0 d-flex flex-row justify-content-between align-items-center">
                <div className="text-dark">
                  {formatNumber(membersCount)} members
                </div>
                <Button variant="outline-primary">REQUEST ACCESS</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Pagination
            className="ml-auto mr-3"
            total={groupsList.data.length}
            perPage={PAGE_LIMIT}
            currentPage={currentPage}
            onChange={this.handlePageChange}
          />
        </Fragment>
      ),
    )();
  };

  render() {
    const { groupsList, groupsListLoading } = this.props;

    if (groupsListLoading) {
      return <div>Loading...</div>;
    }

    if (!groupsList.data) {
      return null;
    }

    return (
      <div>
        <Row className="mx-2 mb-2">
          <h3 className="mr-auto">Home</h3>
          <Row>
            <Col>
              <Form.Control as="select">
                <option>All countries</option>
                <option>Independently owned</option>
                <option>Hedge funds</option>
                <option>Exchanges</option>
                <option>Escrows</option>
              </Form.Control>
            </Col>
            <Col>
              <Input placeholder="Keyword" icon="search" iconPosition="left" />
            </Col>
          </Row>
        </Row>
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
              <Button
                className="ml-auto"
                variant="outline-primary"
                onClick={this.handleCreateNewGroup}
              >
                + NEW GROUP
              </Button>
            </Nav>
          </Card.Header>
          <Card.Body>
            {!groupsList.data.length ? (
              <Card.Title className="text-center m-5">No Group</Card.Title>
            ) : (
              <Row>{this.renderGroupsList()}</Row>
            )}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Home;
