import React, { Component } from 'react';
import { getGroup } from '../../../../../utils/filterObject';
import Chats from '../../Chat';

class GroupChats extends Component {
  render() {
    const {
      selectedGroupId,
      myGroups: { list },
      members,
    } = this.props;
    const group = getGroup(list, selectedGroupId);

    return (
      selectedGroupId &&
      list.length &&
      members.list.length &&
      !members.loading &&
      group.chat && <Chats chatId={group.chat} />
    );
  }
}

export default GroupChats;
