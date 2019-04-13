import React, { Component } from 'react';
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
    this.getGroups();
  }

  getGroups(currentPage) {
    const { getGroupsRequest } = this.props;
    getGroupsRequest({
      skip: (currentPage || 0) * PAGE_LIMIT,
      limit: PAGE_LIMIT,
    });
  }

  handlePageChange = value => {
    this.setState({ currentPage: value });
    this.getGroups(value);
  };

  renderGroupsList = () => {
    const {
      groups: { list },
    } = this.props;

    if (!list.length) {
      return (
        <div className="h3-title font-weight-semibold text-center">No data</div>
      );
    }

    return list.map(({ _id, ...rest }, idx) => (
      <Col lg={6} key={`group_${idx}`} className="px-lg-4 mb-4 mb-lg-5">
        <GroupCard {...rest} memberCount={1231} groupId={_id} />
      </Col>
    ));
  };

  render() {
    const {
      groups: { loading, total },
      toggleModal,
    } = this.props;
    const { currentPage } = this.state;

    return (
      <div>
        <Row className="groups-list-title mx-2 d-none d-md-block">
          <h3 className="mr-auto">Home</h3>
        </Row>
        <Card className="groups-list-container pt-3 pt-md-0 border-0">
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
            <Row className="m-0">
              <LoadingContainer loading={loading} className="mx-auto">
                {this.renderGroupsList()}
              </LoadingContainer>

              {total && (
                <Col md={12} className="d-flex mb-2">
                  <Pagination
                    className="ml-auto"
                    total={total}
                    perPage={PAGE_LIMIT}
                    currentPage={currentPage}
                    onChange={this.handlePageChange}
                  />
                </Col>
              )}
            </Row>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default GroupsList;
