import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import { Row, Col, Container } from '../../components';
import { GroupsList, GroupProfile } from './Groups';
import { UserProfile } from './Users';
import { Sidebar } from '../../layouts';
import ModalContainer from '../../modals';

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
      <Container className="mw-100 p-md-4">
        <ModalContainer />
        <Row className="mx-md-4 mt-0 mb-4">
          <Sidebar />
          <Col className="p-0 ml-md-4">{this.renderAppRoutes()}</Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(AppModule);
