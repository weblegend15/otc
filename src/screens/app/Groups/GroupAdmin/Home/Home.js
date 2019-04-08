import React, { Component } from 'react';

import {
  LoadingContainer,
  Card,
  Button,
  Icon,
  Row,
  Col,
  Badge,
} from '../../../../../components';

import { checkGroupPermission } from '../../../../../utils/permission';

export default class Home extends Component {
  componentDidMount() {
    const {
      match: {
        params: { groupId },
      },
      readGroupRequest,
      listMembersRequest,
    } = this.props;
    readGroupRequest(groupId);
    listMembersRequest(groupId);
  }

  handleEdit = field => {
    const { toggleModal } = this.props;
    toggleModal('editGroupModal', field);
  };

  render() {
    const {
      group: { data, loading },
      groupMembers: { list },
    } = this.props;

    const applicationsCount = list.filter(
      item => checkGroupPermission(item, data._id).isApplied === true,
    ).length;
    return (
      <LoadingContainer loading={loading}>
        <Card.Body className="p-0">
          <div className="border-bottom p-4 border-default-color">
            <div className="d-flex">
              <p className="opacity-5 text-uppercase mb-3">Description</p>
              <Icon
                name="edit"
                className="h4-title ml-3 pt-1 btn-link cursor-pointer"
                onClick={() => this.handleEdit('description')}
              />
            </div>
            <p>{data.description}</p>
          </div>
          <div className="border-bottom p-4 border-default-color">
            <div className="d-flex">
              <p className="opacity-5 text-uppercase mb-3">Rules</p>
              <Icon
                name="edit"
                className="h4-title ml-3 pt-1 btn-link cursor-pointer"
                onClick={() => this.handleEdit('rules')}
              />
            </div>
            <p>{data.rules}</p>
          </div>
          <div className="border-bottom p-4 border-default-color">
            <p className="opacity-5 text-uppercase mb-3">Group post</p>
            <Button
              variant="outline-primary font-weight-bold p-lg"
              className="text-uppercase"
              onClick={() => this.handleEdit('post')}
            >
              + Add post
            </Button>
          </div>
          <div className="p-4">
            <p className="opacity-5 text-uppercase mb-3">Statistics</p>
            <Row className="mb-5">
              <Col
                className="d-flex align-items-center h4-title justify-content-between"
                md={5}
                lg={4}
                xl={3}
              >
                <div className="d-flex align-items-center">
                  <Icon name="users" className="mr-3 opacity-5" />
                  <p className="font-weight-semibold">Group members</p>
                </div>
                <p className="text-primary p-lg font-weight-bold">125</p>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col
                className="d-flex align-items-center justify-content-between h4-title"
                md={5}
                lg={4}
                xl={3}
              >
                <div className="d-flex align-items-center">
                  <Icon name="copy" className="mr-3 opacity-5" />
                  <p className="font-weight-semibold">New applications</p>
                </div>
                <Badge variant="primary" className="p-lg font-weight-semibold">
                  {applicationsCount}
                </Badge>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col
                className="d-flex align-items-center justify-content-between h4-title"
                md={5}
                lg={4}
                xl={3}
              >
                <div className="d-flex align-items-center">
                  <Icon name="home" className="mr-3 opacity-5" />
                  <p className="font-weight-semibold">New offers</p>
                </div>
                <Badge variant="primary p-lg font-weight-semibold">99</Badge>
              </Col>
            </Row>
          </div>
        </Card.Body>
      </LoadingContainer>
    );
  }
}
