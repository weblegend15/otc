import React, { Component, Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  Card,
  Button,
  Pagination,
  LoadingContainer,
} from '../../../../components';
import { NewGroupModal } from '../../../../modals';
import { PAGE_LIMIT } from '../../../../config';

import GroupCard from './GroupCard';

class GroupsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      showNewGroupModal: false,
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

  handleToggleNewGroupModal = () => {
    const { showNewGroupModal } = this.state;
    this.setState({ showNewGroupModal: !showNewGroupModal });
  };

  renderGroupsList = () => {
    const { currentPage } = this.state;
    const { groups } = this.props;

    return (
      <Fragment>
        {groups.list.map(({ _id, ...rest }, idx) => (
          <Col className="p-0 px-md-2" lg={6} key={`group_${idx}`}>
            <GroupCard {...rest} memberCount={1231} groupId={_id} />
          </Col>
        ))}
        <Col md={12} className="d-flex">
          <Pagination
            className="ml-auto mr-3"
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
    const { groups } = this.props;
    const { showNewGroupModal } = this.state;

    return (
      <LoadingContainer loading={groups.loading}>
        <Row className="groups-list-title mx-2 d-none d-md-block">
          <h3 className="mr-auto">Home</h3>
        </Row>
        <Card className="groups-list-container">
          <Card.Header className="p-4 bg-none text-right">
            <Button
              className="ml-auto"
              variant="outline-primary"
              onClick={this.handleToggleNewGroupModal}
            >
              + NEW GROUP
            </Button>
          </Card.Header>
          <Card.Body>
            {!groups.list.length ? (
              <Card.Title className="text-center m-5">No Group</Card.Title>
            ) : (
              <Row>{this.renderGroupsList()}</Row>
            )}
          </Card.Body>
        </Card>
        <NewGroupModal
          show={showNewGroupModal}
          onHide={this.handleToggleNewGroupModal}
        />
      </LoadingContainer>
    );
  }
}

export default GroupsList;
