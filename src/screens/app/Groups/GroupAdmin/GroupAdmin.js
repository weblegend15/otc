import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Applications from './Applications';
import Members from './Members';
import Offers from './Offers';

import { Card, Timestamp, LoadingContainer } from '../../../../components';

class GroupAdminRoutes extends Component {
  componentDidMount() {
    const {
      match: {
        params: { groupId },
      },
      readGroupRequest,
    } = this.props;
    readGroupRequest(groupId);
  }

  renderHeader = () => {
    const {
      group: { data, loading },
    } = this.props;
    return (
      <LoadingContainer loading={loading}>
        <Card>
          <Card.Header className="border-0">
            <h3 className="row mx-0 font-weight-semibold">{data.name}</h3>
            <div className="row mx-0">
              <h6>
                Created on{' '}
                <Timestamp
                  className="d-inline"
                  timestamp={data.createdAt}
                  format="D MMM YYYY"
                />
              </h6>
            </div>
          </Card.Header>
          <Navbar>
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#applications">Applications</Nav.Link>
              <Nav.Link href="#members">Members</Nav.Link>
              <Nav.Link href="#offers">Offers</Nav.Link>
            </Nav>
          </Navbar>
        </Card>
      </LoadingContainer>
    );
  };

  renderRoutes = () => {
    const { match } = this.props;
    return (
      <Switch>
        <Route path={`${match.url}/home`} component={Applications} />
        <Route path={`${match.url}/applications`} component={Applications} />
        <Route path={`${match.url}/members`} component={Members} />
        <Route path={`${match.url}/offers`} component={Offers} />
        <Redirect to={`${match.url}/home`} component={Applications} />
      </Switch>
    );
  };

  render() {
    return this.renderRoutes();
  }
}

export default withRouter(GroupAdminRoutes);
