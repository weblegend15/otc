import React, { Component } from 'react';

import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import UserProfile from './UserProfile';
import UserSetting from './UserSetting';
import Users from './Users';
import MyGroups from './MyGroups';
import GroupProfile from './GroupProfile';
import { Sidebar } from '../../layouts';
import Home from './Home';

class AppModule extends Component {
  renderAppRoutes = () => {
    const { match } = this.props;
    return (
      <Switch>
        <Route path={`${match.url}/home`} component={Home} />
        <Route path={`${match.url}/profile`} component={UserProfile} />
        <Route path={`${match.url}/setting`} component={UserSetting} />
        <Route path={`${match.url}/users`} component={Users} />
        <Route
          path={`${match.url}/my-groups/:groupId`}
          component={GroupProfile}
        />
        <Route path={`${match.url}/my-groups`} component={MyGroups} />
        <Redirect to={`${match.url}/home`} />
      </Switch>
    );
  };

  render() {
    return (
      <Container className="mw-100">
        <Row>
          <Col className="my-4 ml-4 mr-lg-0" xl={3}>
            <Sidebar />
          </Col>
          <Col className="m-4">{this.renderAppRoutes()}</Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(AppModule);
