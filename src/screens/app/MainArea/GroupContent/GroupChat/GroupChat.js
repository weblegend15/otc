import React, { Component } from 'react';
import { getGroup } from '../../../../../utils/filterObject';

class GroupChats extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate(prevProp) {
    const { selectedGroupId, myGroups } = this.props;
    if (prevProp.myGroups !== myGroups && myGroups.list.length) {
      const group = getGroup(myGroups.list, selectedGroupId);
      console.log(group);
    }
  }

  render() {
    return <h1>Hello</h1>;
  }
}

export default GroupChats;
