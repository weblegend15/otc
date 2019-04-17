import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { Card, Icon, Button } from '../../../components';

import MembersBar from './MembersBar';
import GroupContent from './GroupContent';
import MemberContent from './MemberContent';
import GroupSelector from './GroupSelector';

class MainArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: false,
    };
  }

  componentDidMount() {
    const {
      getPermissionGroupsRequest,
      refreshFirebaseTokenRequest,
    } = this.props;
    getPermissionGroupsRequest();
    refreshFirebaseTokenRequest();
  }

  handleHamburgerClick = () => {
    const { isCollapsed } = this.state;
    this.setState({ isCollapsed: !isCollapsed });
  };

  renderHeader = () => {
    return (
      <div className="d-flex flex-row align-items-center justify-content-between">
        <Button
          className="p-0"
          variant="outline-link"
          onClick={this.handleHamburgerClick}
        >
          <Icon name="bars" size="2x" />
        </Button>
        <GroupSelector />
      </div>
    );
  };

  renderRoutes = () => {
    const {
      match: { url },
    } = this.props;

    return (
      <Switch>
        <Route path={`${url}/member/:userId`} component={MemberContent} />
        <Route path={`${url}/group`} component={GroupContent} />
        <Redirect to={`${url}/group`} />
      </Switch>
    );
  };

  render() {
    const {
      match: { url },
    } = this.props;
    const { isCollapsed } = this.state;

    return (
      <Card className="p-0 d-flex flex-row border-0 overflow-hidden main-area">
        <MembersBar
          className={`d-none d-md-block ${
            isCollapsed ? 'collapsed' : 'expanded'
          }`}
          baseUrl={url}
        />
        <div className="d-flex flex-column p-0 w-100 border-left border-default-color">
          <div className="border-bottom py-3 pl-3 pr-4 border-default-color d-none d-md-block">
            {this.renderHeader()}
          </div>
          {this.renderRoutes()}
        </div>
      </Card>
    );
  }
}

export default withRouter(MainArea);
