import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import { Row, Col, Container } from '../../components';
import { GroupsList, GroupProfile, GroupAdmin } from './Groups';
import { UserProfile, Offers, UserSettings } from './Users';

import {
  Sidebar,
  MobileSidebar,
  GroupAdminNav,
  MainAreaMobileNav,
} from '../../layouts';
import MainArea from './MainArea';
import ModalContainer from '../../modals';

class AppModule extends Component {
  renderAppRoutes = () => {
    const { match } = this.props;
    return (
      <Switch>
        <Route path={`${match.url}/home`} component={GroupsList} />
        <Route path={`${match.url}/profile`} component={UserProfile} />
        <Route path={`${match.url}/settings`} component={UserSettings} />
        <Route path={`${match.url}/offers/:offerType`} component={Offers} />
        <Route
          path={`${match.url}/groups/:groupId/admin`}
          component={GroupAdmin}
        />
        <Route path={`${match.url}/groups/:groupId`} component={GroupProfile} />
        <Route path={`${match.url}/my-groups/:groupId`} component={MainArea} />
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
      !pathname.includes('/my-groups') && <Sidebar />
    );
  };

  render() {
    const {
      location: { pathname },
    } = this.props;

    return (
      <Container className="mw-100 p-0 p-md-2 p-lg-4">
        <ModalContainer />

        {!!pathname.includes('/admin') && <GroupAdminNav />}
        {!!pathname.includes('/my-groups') && <MainAreaMobileNav />}
        {!!pathname.includes('/home') && <MobileSidebar />}

        <Row className="mx-md-2 m-0 mb-4 mx-lg-4">
          {this.renderSidebar()}
          <Col className="p-0 m-md-0">{this.renderAppRoutes()}</Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(AppModule);
