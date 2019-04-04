import React, { Component } from 'react';
import { Route, Switch, withRouter, NavLink, Redirect, Link } from 'react-router-dom';
import {
  Col,
  Row,
  Card,
  LoadingContainer,
  Input,
  Dropdown,
  GeneralAvatar,
  Icon,
  Navbar,
  Nav,
} from '../../../../components';

import Chat from '../Chat';
import Offers from '../Offers';
import Vouches from '../Vouches';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const {
      match: {
        params: { groupId },
      },
      getGroupsRequest,
      getGroupMembersRequest,
    } = this.props;
    getGroupMembersRequest({ skip: 0, limit: 100, groupId });
    getGroupsRequest({ skip: 0, limit: 100 });
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
    const memberInfo = {};
    memberInfo.firstName = member.firstName;
    memberInfo.location = 'London, UK';

    return (
      <Row className="py-2 m-0 border-top" key={member._id}>
        <GeneralAvatar data={memberInfo} className="my-2 px-4" />
      </Row>
    );
  };

  renderGroupMessages = () => {
    const { groups } = this.props;

    return (
      <Col lg={9} className="pl-0">
        <div className="p-3 border-bottom d-flex justify-content-end">
          <p className="d-flex align-items-center mr-3">Select Group:</p>
          <Dropdown>
            <Dropdown.Toggle variant="outline-primary" id="dropdown-basic" />
            <Dropdown.Menu>
              {groups.list.map(room => this.renderRooms(room))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {this.renderDashboardMenu()}
        {this.renderDashboardRouter()}
      </Col>
    );
  };

  renderRooms = room => {
    return (
      room.status === 'ACTIVE' && (
        <Dropdown.Item key={room._id}>{room.name}</Dropdown.Item>
      )
    );
  };

  renderDashboardMenu = () => {
    const { match } = this.props;
    return (
      <div className="px-3 pt-3 message-nav-bar">
        <span className="opacity-5">MESSAGE FROM ADMIN</span>
        <Icon name="long-arrow-right" className="ml-2 text-primary" />
        <Navbar className="px-0 pt-5 pb-0">
          <Nav className="mr-auto">
            <NavLink className="mx-3 pb-4 opacity-5" to={`${match.url}/chat`}>
              Chat
            </NavLink>
            <NavLink className="mx-3 pb-4 opacity-5" to={`${match.url}/offers`}>
              All Offers
            </NavLink>
            <NavLink className="mx-3 pb-4 opacity-5" to={`${match.url}/vouches`}>
              Vouches/Proposals
            </NavLink>
          </Nav>
          <Nav className="pr-5 pb-3">
            <Link
              className="d-block w-100 text-center text-primary link-size btn btn-outline-primary"
              to={`${match.url}/chat`}
            >
              + NEW OFFER
            </Link>
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
      <LoadingContainer>
        <Card>
          <Row>
            <Col lg={3} className="border-right pr-0">
              {this.renderMembersStatus()}
              <LoadingContainer loading={members.loading}>
                {members.list.map(member => this.renderMember(member))}
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
