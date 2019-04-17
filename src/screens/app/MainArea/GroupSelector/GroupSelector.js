import React, { Component } from 'react';

import { history } from '../../../../configureStore';

import { LoadingContainer, Form } from '../../../../components';

export default class GroupSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSelectGroup = groupId => {
    const {
      selectActiveGroup,
      selectGroupMember,
      setResetMessages,
    } = this.props;
    selectActiveGroup(groupId.target.value);
    history.push(`/app/my-groups/${groupId.target.value}`);
    selectGroupMember('');
    setResetMessages();
  };

  render() {
    const {
      myActiveGroups: { list, loading },
    } = this.props;
    if (!list.length) {
      return <div>You are not a member in any group!</div>;
    }

    return (
      <LoadingContainer className="p-md-0" loading={loading}>
        <Form.Group
          className="d-flex flex-row my-group-selector"
          controlId="activeGroupSelect"
          onChange={this.handleSelectGroup}
        >
          <Form.Label className="m-0 d-flex align-items-center text-unset p-lg">
            Select group:{' '}
          </Form.Label>
          <Form.Control as="select" className="h4-title font-weight-semibold">
            {list.map(item => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </LoadingContainer>
    );
  }
}
