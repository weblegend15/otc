import React, { Component } from 'react';
import cx from 'classnames';
import { Route, Switch, withRouter, Redirect, NavLink } from 'react-router-dom';

import Applications from './Applications';
import Members from './Members';
import Offers from './Offers';
import Home from './Home';
import Form from './Form';

import { Card, Timestamp, Row, Navbar, Nav } from '../../../../components';

class GroupAdminRoutes extends Component {
  renderHeader = data => (
    <Card.Header className="border-bottom pb-0 pt-4 px-4 border-default-color d-none d-md-flex flex-column">
      <Row className="mx-0 mb-4">
        <div className="d-flex justify-content-center align-items-center">
          <p className="row mx-0 font-weight-semibold h2-title">{data.name}</p>
          <p className="opacity-5 p-sm text-uppercase ml-4">Admin area</p>
        </div>
        <div className="ml-auto p-sm d-flex">
          <p className="opacity-5">Created on&nbsp;</p>
          <Timestamp
            className="d-inline"
            timestamp={data.createdAt}
            format="D MMM YYYY"
          />
        </div>
      </Row>
      <Navbar className="group-admin-nav p-0">
        <Nav className="p-0">
          <NavLink
            className="ml-0 mr-5 pb-3 h4-title opacity-5"
            activeClassName="active font-weight-bold"
            to={`/app/groups/${data._id}/admin/home`}
          >
            Home
          </NavLink>
          <NavLink
            className="mx-5 pb-3 h4-title opacity-5"
            activeClassName="active font-weight-bold"
            to={`/app/groups/${data._id}/admin/applications`}
          >
            Applications
          </NavLink>
          <NavLink
            className="mx-5 pb-3 h4-title opacity-5"
            activeClassName="active font-weight-bold"
            to={`/app/groups/${data._id}/admin/members`}
          >
            Members
          </NavLink>
          <NavLink
            className="mx-5 pb-3 h4-title opacity-5"
            activeClassName="active font-weight-bold"
            to={`/app/groups/${data._id}/admin/offers`}
          >
            Offers
          </NavLink>
          <NavLink
            className="mx-5 pb-3 h4-title opacity-5"
            activeClassName="active font-weight-bold"
            to={`/app/groups/${data._id}/admin/form`}
          >
            Form
          </NavLink>
        </Nav>
      </Navbar>
    </Card.Header>
  );

  renderRoutes = path => (
    <Switch>
      <Route path={`${path}/home`} component={Home} />
      <Route path={`${path}/applications`} component={Applications} />
      <Route path={`${path}/members/:searchKey`} component={Members} />
      <Route path={`${path}/members`} component={Members} />
      <Route path={`${path}/offers`} component={Offers} />
      <Route path={`${path}/form`} component={Form} />
      <Redirect to={`${path}/home`} component={Applications} />
    </Switch>
  );

  render() {
    const {
      location: { pathname },
      match: { path },
      group: { data },
    } = this.props;

    const className = cx('group-admin-area m-3 m-md-0', {
      'bg-white': pathname.includes('/home'),
    });

    return (
      <Card className={className}>
        {this.renderHeader(data)}
        {this.renderRoutes(path)}
      </Card>
    );
  }
}

export default withRouter(GroupAdminRoutes);
