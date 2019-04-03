import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import { Row, Col, Container } from '../../components';
import { GroupsList, GroupProfile } from './Groups';
import { UserProfile } from './Users';
import { Sidebar, MobileSidebar } from '../../layouts';
import { Dashboard } from './Dashboard';
import ModalContainer from '../../modals';

class AppModule extends Component {
  renderAppRoutes = () => {
    const { match } = this.props;
    return (
      <Switch>
        <Route path={`${match.url}/home`} component={GroupsList} />
        <Route path={`${match.url}/profile`} component={UserProfile} />
        <Route path={`${match.url}/groups/:groupId/dashboard`} component={Dashboard} />
        <Route path={`${match.url}/groups/:groupId`} component={GroupProfile} />
        <Route path={`${match.url}/groups`} component={GroupsList} />
        <Redirect to={`${match.url}/home`} />
      </Switch>
    );
  };

  renderSidebar = () => {
    const {
      location: { pathname },
    } = this.props;

    return (
      !pathname.includes('/admin') &&
      !pathname.includes('/dashboard') && <Sidebar className="mr-md-4" />
    );
  };

  render() {
    return (
      <Container className="mw-100 p-0 p-md-4">
        <ModalContainer />
        <MobileSidebar />
        <Row className="mx-md-4 m-0 mb-4">
          {this.renderSidebar()}
          <Col className="p-0 m-md-0 ml-md-4">{this.renderAppRoutes()}</Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(AppModule);
