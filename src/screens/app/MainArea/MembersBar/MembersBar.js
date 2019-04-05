import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';

import { LoadingContainer, GeneralAvatar, Input } from '../../../../components';
import { checkGroupPermission } from '../../../../utils/permission';

export default class MembersBar extends Component {
  componentDidMount() {
    const { selectGroupMember } = this.props;
    selectGroupMember('');
  }

  componentDidUpdate(prevProps) {
    const { selectedGroupId, getGroupMembersRequest } = this.props;
    if (prevProps.selectedGroupId !== selectedGroupId && !!selectedGroupId) {
      getGroupMembersRequest({ limit: 20, skip: 0, groupId: selectedGroupId });
    }
  }

  handleClick = id => {
    const { selectGroupMember } = this.props;
    selectGroupMember(id);
  };

  render() {
    const {
      members: { list, loading },
      selectedGroupMemberId,
      match: { url },
      selectedGroupId,
      currentUser,
    } = this.props;

    const realMembers = list.filter(
      item =>
        (checkGroupPermission(item, selectedGroupId).isMember ||
          checkGroupPermission(item, selectedGroupId).isGroupAdmin) &&
        item._id !== currentUser._id,
    );

    return (
      <LoadingContainer loading={loading} className="members-bar-section">
        <div className="p-4 border-bottom border-default-color">
          <p className="font-weight-bold h4-title mb-4">Members</p>
          <Input
            icon="search"
            iconPosition="right"
            placeholder="Search people"
          />
        </div>
        <ListGroup>
          {realMembers.map(({ firstName, _id }) => (
            <ListGroup.Item
              key={_id}
              as={Link}
              to={`${url}/member/${_id}`}
              onClick={() => this.handleClick(_id)}
              active={_id === selectedGroupMemberId}
            >
              <GeneralAvatar data={{ firstName, location: 'London, UK' }} />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </LoadingContainer>
    );
  }
}
