import React, { Component, Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  Card,
  Button,
  Pagination,
  LoadingContainer,
} from '../../../../components';
import { PAGE_LIMIT } from '../../../../config';

import GroupCard from './GroupCard';

class GroupsList extends Component {
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

  renderGroupsList = () => {
    const { currentPage } = this.state;
    const { groups } = this.props;

    return (
      <Fragment>
        {groups.list.map(({ _id, ...rest }, idx) => (
          <Col lg={6} key={`group_${idx}`} className="px-lg-4 mb-4 mb-lg-5">
            <GroupCard {...rest} memberCount={1231} groupId={_id} />
          </Col>
        ))}
        <Col md={12} className="d-flex mb-2">
          <Pagination
            className="ml-auto"
            total={groups.total}
            perPage={PAGE_LIMIT}
            currentPage={currentPage}
            onChange={this.handlePageChange}
          />
        </Col>
      </Fragment>
    );
  };

  render() {
    const { groups, toggleModal } = this.props;

    return (
      <LoadingContainer loading={groups.loading}>
        <Row className="groups-list-title mx-2 d-none d-md-block">
          <h3 className="mr-auto">Home</h3>
        </Row>
        <Card className="groups-list-container pt-3 pt-md-0">
          <Card.Header className="p-3 p-lg-4 bg-none text-right">
            <Button
              className="ml-auto d-flex px-3 mr-3 mr-md-0 mr-lg-4"
              variant="outline-primary"
              onClick={() => toggleModal('newGroupModal')}
            >
              + <p className="ml-2 d-none d-md-block"> NEW GROUP</p>
            </Button>
          </Card.Header>
          <Card.Body className="pt-3 px-0 px-lg-4 pt-lg-5">
            {!groups.list.length ? (
              <Card.Title className="text-center m-5">No Group</Card.Title>
            ) : (
              <Row className="m-0">{this.renderGroupsList()}</Row>
            )}
          </Card.Body>
        </Card>
      </LoadingContainer>
    );
  }
}

export default GroupsList;
