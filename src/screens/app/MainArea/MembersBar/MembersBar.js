import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';

import { LoadingContainer, GeneralAvatar, Input } from '../../../../components';

export default class MembersBar extends Component {
  componentDidMount() {
    const { selectGroupMember, selectedGroupId } = this.props;
    selectGroupMember('');
    if (selectedGroupId) {
      this.getGroupMembers();
    }
  }

  componentDidUpdate(prevProps) {
    const { selectedGroupId } = this.props;
    if (prevProps.selectedGroupId !== selectedGroupId && !!selectedGroupId) {
      this.getGroupMembers();
    }
  }

  getGroupMembers() {
    const { selectedGroupId, getGroupMembersRequest } = this.props;
    getGroupMembersRequest({
      limit: 1000,
      skip: 0,
      groupId: selectedGroupId,
    });
  }

  handleClick = id => {
    const { selectGroupMember } = this.props;
    selectGroupMember(id);
  };

  renderMemberList = list => {
    const {
      match: { url },
      selectedGroupMemberId,
    } = this.props;
    if (!list.length) {
      return (
        <div className="font-weight-semibold text-center p-5 h3-title">
          No data
        </div>
      );
    }

    return (
      <ListGroup>
        {list.map(({ firstName, city, country, _id }) => (
          <ListGroup.Item
            key={_id}
            as={Link}
            to={`${url}/member/${_id}`}
            onClick={() => this.handleClick(_id)}
            active={_id === selectedGroupMemberId}
          >
            <GeneralAvatar
              data={{ firstName, location: `${city}, ${country}` }}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  };

  render() {
    const {
      activeMembers: { list, loading },
      className,
    } = this.props;

    return (
      <div className={`members-bar-section ${className}`}>
        <div className="p-4 border-bottom border-default-color">
          <p className="font-weight-bold h4-title mb-4">Members</p>
          <Input
            icon="search"
            iconPosition="right"
            placeholder="Search people"
          />
        </div>
        <LoadingContainer loading={loading}>
          {this.renderMemberList(list)}
        </LoadingContainer>
      </div>
    );
  }
}
