import React, { Component } from 'react';
import { NavLink, Switch, Route, withRouter, Redirect } from 'react-router-dom';
import {
  LoadingContainer,
  Avatar,
  Nav,
  Rating,
  Icon,
  Timestamp,
  Row,
  Col,
  Button,
} from '../../../../components';

import { history } from '../../../../configureStore';

import Profile from './Profile';
import Feedback from './Feedback';
import Offers from './Offers';
import Messaging from './Messaging';

class MemberContent extends Component {
  componentDidMount() {
    const {
      readUserRequest,
      createPrivateChatRequest,
      selectedGroupMemberId,
      selectedGroupId,
      setResetMessages,
      getGroupsRequest,
    } = this.props;
    readUserRequest(selectedGroupMemberId);
    setResetMessages();
    createPrivateChatRequest(selectedGroupMemberId, selectedGroupId);
    getGroupsRequest({ skip: 0, limit: 1000 });
  }

  componentDidUpdate(prevProps) {
    const { readUserRequest, selectedGroupMemberId } = this.props;
    if (
      prevProps.selectedGroupMemberId !== selectedGroupMemberId &&
      !!selectedGroupMemberId
    ) {
      readUserRequest(selectedGroupMemberId);
    }
  }

  handleBackClick = () => {
    const { selectedGroupId } = this.props;
    history.push(`/app/my-groups/${selectedGroupId}`);
  };

  renderTabs = () => {
    const {
      match: { url },
    } = this.props;
    return (
      <Nav className="w-100 d-flex justify-content-around flex-row">
        <NavLink
          className="pb-3 px-1 mx-3 p-lg"
          activeClassName="active font-weight-bold"
          to={`${url}/profile`}
        >
          Profile
        </NavLink>
        <NavLink
          className="pb-3 px-1 mx-3 p-lg"
          activeClassName="active font-weight-bold"
          to={`${url}/feedback`}
        >
          Feedback
        </NavLink>
        <NavLink
          className="pb-3 px-1 mx-3 p-lg"
          activeClassName="active font-weight-bold"
          to={`${url}/offers/current`}
        >
          Current Offers
        </NavLink>

        <NavLink
          className="pb-3 px-1 mx-3 p-lg"
          activeClassName="active font-weight-bold"
          to={`${url}/offers/past`}
        >
          Past Offers
        </NavLink>
        <NavLink
          className="pb-3 px-1 ml-auto messaging-nav"
          activeClassName="active font-weight-bold"
          to={`${url}/messaging`}
        >
          <Icon className="mr-2" name="envelope" />
          Messaging
        </NavLink>
      </Nav>
    );
  };

  renderHeader = () => {
    const {
      userData: { data },
    } = this.props;

    return (
      <div className="border-bottom border-default-color px-3 pt-3 member-content-section-header">
        <Row className="mx-0 mb-3 d-flex align-items-center">
          <Button
            variant="outline-link"
            className="p-0 mr-auto text-primary font-weight-semibold p-lg"
            onClick={this.handleBackClick}
          >
            <Icon name="arrow-left" className="mr-2" />
            Back
          </Button>
          <div className="opacity-5 p-sm d-flex flex-row">
            Joined
            <Timestamp className="ml-2" date={new Date()} format="D MMM YYYY" />
          </div>
        </Row>
        <Row className="d-flex flex-row justify-content-between align-items-center mb-5 mx-0">
          <Col>
            <Avatar
              data={{
                firstName: data.firstName,
                lastName: data.lastName,
              }}
              location="London, UK"
            />
          </Col>
          <Col className="border-right border-left border-default-color text-center py-3">
            <Rating initialRating={3.7} readonly />
          </Col>
          <Col>
            <div className="d-flex flex-row align-items-center justify-content-center">
              <Icon className="mx-3 h4-title opacity-5" name="linkedin" />
              <Icon className="mx-3 h4-title text-primary" name="paper-plane" />
              <Icon className="mx-3 h4-title opacity-5" name="facebook" />
              <Icon className="mx-3 h4-title opacity-5" name="twitter" />
            </div>
          </Col>
        </Row>

        {this.renderTabs()}
      </div>
    );
  };

  renderRoutes = () => {
    const {
      match: { url },
    } = this.props;

    return (
      <Switch>
        <Route path={`${url}/profile`} component={Profile} />
        <Route path={`${url}/feedback`} component={Feedback} />
        <Route path={`${url}/offers/:offerType`} component={Offers} />
        <Route path={`${url}/messaging`} component={Messaging} />
        <Redirect to={`${url}/messaging`} />
      </Switch>
    );
  };

  render() {
    const {
      userData: { loading },
    } = this.props;
    return (
      <LoadingContainer className="member-content-section" loading={loading}>
        {this.renderHeader()}
        {this.renderRoutes()}
      </LoadingContainer>
    );
  }
}

export default withRouter(MemberContent);
