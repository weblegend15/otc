import React, { Component } from 'react';
import { Route, Switch, withRouter, NavLink, Redirect } from 'react-router-dom';
import {
  Col,
  Row,
  Card,
  LoadingContainer,
  Input,
  Dropdown,
  GeneralAvatar,
  Icon,
  Button,
  Navbar,
  Nav,
} from '../../../components';
import { PAGE_LIMIT } from '../../../config';
import Chat from './Chat';
import Offers from './Offers';
import Vouches from './Vouches';

class Dashboard extends Component {
  componentDidMount() {
    const {
      match: {
        params: { groupId },
      },
      getPermissionGroupsRequest,
      getGroupMembersRequest,
    } = this.props;
    getGroupMembersRequest({ skip: 0, limit: PAGE_LIMIT, groupId });
    getPermissionGroupsRequest();
  }

  renderMembersStatus = () => {
    return (
      <div className="px-4 pt-5 pb-4">
        <h5 className="font-weight-bold"> Members </h5>
        <div className="py-4">
          <Input icon="search" iconPosition="right" placeholder="Search People" />
        </div>
      </div>
    );
  };

  renderMember = member => {
    return (
      <Row className="py-2 m-0 border-top" key={member._id}>
        <GeneralAvatar
          data={{ firstName: member.firstName, location: 'London, UK' }}
          className="my-2 px-4"
        />
      </Row>
    );
  };

  renderGroupMessages = () => {
    const { groups } = this.props;
    const permissionGroups = groups.list
      .filter(item => item.permission.indexOf(['MEMEBER', 'ADMIN']) && !!item.group)
      .map(item => item.group)
      .filter(item => item.status === 'ACTIVE');

    return (
      <Col lg={9} className="pl-0">
        <div className="p-3 border-bottom d-flex justify-content-end">
          <p className="d-flex align-items-center mr-3">Select Group:</p>
          <Dropdown>
            <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
              Select Group
            </Dropdown.Toggle>
            <Dropdown.Menu>{permissionGroups.map(this.renderRooms)}</Dropdown.Menu>
          </Dropdown>
        </div>
        {this.renderDashboardMenu()}
        {this.renderDashboardRouter()}
      </Col>
    );
  };

  renderRooms = room => {
    return <Dropdown.Item key={room._id}>{room.name}</Dropdown.Item>;
  };

  renderDashboardMenu = () => {
    const { match } = this.props;
    return (
      <div className="px-3 pt-3 message-nav-bar">
        <span className="p-sm opacity-5">MESSAGE FROM ADMIN</span>
        <Icon name="long-arrow-right" className="ml-2 text-primary" />
        <Navbar className="px-0 pt-5 pb-0">
          <Nav className="mr-auto">
            <NavLink
              className="mx-3 pb-4 opacity-5 p-lg"
              activeClassName="active font-weight-bold"
              to={`${match.url}/chat`}
            >
              Chat
            </NavLink>
            <NavLink
              className="mx-3 pb-4 opacity-5 p-lg"
              activeClassName="active font-weight-bold"
              to={`${match.url}/offers`}
            >
              All Offers
            </NavLink>
            <NavLink
              className="mx-3 pb-4 opacity-5 p-lg"
              activeClassName="active font-weight-bold"
              to={`${match.url}/vouches`}
            >
              Vouches/Proposals
            </NavLink>
          </Nav>
          <Nav className="pb-3">
            <Button
              className="ml-auto d-flex px-3 mr-3 mr-md-0 mr-lg-4"
              variant="outline-primary"
            >
              + <p className="ml-2 d-none d-md-block"> NEW OFFER</p>
            </Button>
          </Nav>
        </Navbar>
      </div>
    );
  };

  renderDashboardRouter = () => {
    const { match } = this.props;
    return (
      <Switch>
        <Route path={`${match.url}/chat`} component={Chat} />
        <Route path={`${match.url}/offers`} component={Offers} />
        <Route path={`${match.url}/vouches`} component={Vouches} />
        <Redirect to={`${match.url}/offers`} component={Offers} />
      </Switch>
    );
  };

  render() {
    const { members } = this.props;

    return (
      <LoadingContainer loading={members.loading}>
        <Card>
          <Row>
            <Col lg={3} className="border-right pr-0">
              {this.renderMembersStatus()}
              <LoadingContainer loading={members.loading}>
                {members.list.map(this.renderMember)}
              </LoadingContainer>
            </Col>
            {this.renderGroupMessages()}
          </Row>
        </Card>
      </LoadingContainer>
    );
  }
}

export default withRouter(Dashboard);
