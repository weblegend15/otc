import { createSelector } from 'reselect';

import { checkGroupPermission } from '../utils/permission';

const getActiveMembers = createSelector(
  [
    state => state.app.main.selectedGroupId,
    state => state.app.main.members.list,
    state => state.auth.currentUser,
  ],
  (selectedGroupId, list, currentUser) => {
    const activeMembers = list.filter(
      item =>
        (checkGroupPermission(item, selectedGroupId).isMember ||
          checkGroupPermission(item, selectedGroupId).isGroupAdmin) &&
        item._id !== currentUser._id,
    );

    return activeMembers;
  },
);

export default getActiveMembers;
