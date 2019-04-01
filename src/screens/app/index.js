import React, { Component } from 'react';

import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { GroupsList, GroupProfile } from './Groups';
import { UserProfile } from './Users';

import { Sidebar, MobileSidebar } from '../../layouts';

class AppModule extends Component {
  renderAppRoutes = () => {
    const { match } = this.props;
    return (
      <Switch>
        <Route path={`${match.url}/home`} component={GroupsList} />
        <Route path={`${match.url}/profile`} component={UserProfile} />
        <Route path={`${match.url}/groups/:groupId`} component={GroupProfile} />
        <Route path={`${match.url}/groups`} component={GroupsList} />
        <Redirect to={`${match.url}/home`} />
      </Switch>
    );
  };

  render() {
    return (
      <Container className="mw-100 p-0">
        <MobileSidebar />
        <Row className="m-0">
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
