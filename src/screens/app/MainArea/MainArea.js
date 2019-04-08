import React, { Component } from 'react';
import { Link, Switch, Route, withRouter, Redirect } from 'react-router-dom';

import { Card, LoadingContainer, Dropdown } from '../../../components';

import MembersBar from './MembersBar';
import GroupContent from './GroupContent';
import MemberContent from './MemberContent';

import { getMyActiveGroups } from '../../../utils/permission';

class MainArea extends Component {
  componentDidMount() {
    const {
      getPermissionGroupsRequest,
      refreshFirebaseTokenRequest,
    } = this.props;
    getPermissionGroupsRequest();
    refreshFirebaseTokenRequest();
  }

  handleSelectGroup = groupId => {
    const { selectActiveGroup, selectGroupMember } = this.props;
    selectActiveGroup(groupId);
    selectGroupMember('');
  };

  renderHeader = () => {
    const {
      groups: { list },
      selectedGroupId,
    } = this.props;

    const myActiveGroups = getMyActiveGroups(list);

    if (!myActiveGroups.length) {
      return <div>You are not a member in any group!</div>;
    }

    const selectedGroup = myActiveGroups.find(
      item => item._id === selectedGroupId,
    );

    return (
      <div className="ml-auto d-flex flex-row align-items-center">
        <p className="p-lg ml-auto mr-3 opacity-5">Select group: </p>
        <Dropdown className="mr-3" onSelect={this.handleSelectGroup}>
          <Dropdown.Toggle>
            {selectedGroup && selectedGroup.name}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {myActiveGroups.map(item => (
              <Dropdown.Item
                key={item._id}
                eventKey={item._id}
                active={item._id === selectedGroupId}
                as={Link}
                to={`/app/my-groups/${item._id}/group`}
              >
                {item.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  };

  renderRoutes = () => {
    const {
      match: { path },
    } = this.props;

    return (
      <Switch>
        <Route path={`${path}/member/:userId`} component={MemberContent} />
        <Route path={`${path}/group`} component={GroupContent} />
        <Redirect to={`${path}/group`} />
      </Switch>
    );
  };

  render() {
    const {
      groups: { loading },
    } = this.props;

    return (
      <LoadingContainer loading={loading}>
        <Card className="p-0 d-flex flex-row border-0 overflow-hidden">
          <MembersBar {...this.props} />
          <div className="d-flex flex-column p-0 w-100 border-left border-default-color">
            <div className="border-bottom p-3 border-default-color">
              {this.renderHeader()}
            </div>
            {this.renderRoutes()}
          </div>
        </Card>
      </LoadingContainer>
    );
  }
}

export default withRouter(MainArea);
