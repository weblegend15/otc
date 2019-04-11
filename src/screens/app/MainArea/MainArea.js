import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { history } from '../../../configureStore';
import {
  Card,
  LoadingContainer,
  Form,
  Icon,
  Button,
} from '../../../components';

import MembersBar from './MembersBar';
import GroupContent from './GroupContent';
import MemberContent from './MemberContent';

import { getMyActiveGroups } from '../../../utils/permission';

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

  handleSelectGroup = groupId => {
    const { selectActiveGroup, selectGroupMember } = this.props;
    selectActiveGroup(groupId.target.value);
    history.push(`/app/my-groups/${groupId.target.value}`);
    selectGroupMember('');
  };

  handleHamburgerClick = () => {
    const { isCollapsed } = this.state;
    this.setState({ isCollapsed: !isCollapsed });
  };

  renderHeader = () => {
    const {
      groups: { list },
    } = this.props;

    const myActiveGroups = getMyActiveGroups(list);

    if (!myActiveGroups.length) {
      return <div>You are not a member in any group!</div>;
    }

    return (
      <div className="d-flex flex-row align-items-center justify-content-between">
        <Button
          className="p-0"
          variant="outline-link"
          onClick={this.handleHamburgerClick}
        >
          <Icon name="bars" size="2x" />
        </Button>
        <Form.Group
          className="d-flex flex-row my-group-selector"
          controlId="activeGroupSelect"
          onChange={this.handleSelectGroup}
        >
          <Form.Label className="m-0 d-flex align-items-center text-unset">
            Select group:{' '}
          </Form.Label>
          <Form.Control as="select" className="h4-title font-weight-semibold">
            {myActiveGroups.map(item => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
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
      groups: { loading },
    } = this.props;

    const { isCollapsed } = this.state;

    return (
      <LoadingContainer loading={loading}>
        <Card className="p-0 d-flex flex-row border-0 overflow-hidden">
          <MembersBar
            className={isCollapsed ? 'collapsed' : 'expanded'}
            {...this.props}
          />
          <div className="d-flex flex-column p-0 w-100 border-left border-default-color">
            <div className="border-bottom py-3 pl-3 pr-4 border-default-color">
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
