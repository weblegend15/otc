import { createSelector } from 'reselect';

import { checkGroupPermission } from '../utils/permission';

const getActiveMembers = createSelector(
  [
    state => state.app.main.selectedGroupId,
    state => state.app.main.members,
    state => state.auth.currentUser,
  ],
  (selectedGroupId, { list, loading }, currentUser) => {
    const activeMembers = list.filter(
      item =>
        (checkGroupPermission(item, selectedGroupId).isMember ||
          checkGroupPermission(item, selectedGroupId).isGroupAdmin) &&
        item._id !== currentUser._id,
    );

    return {
      list: activeMembers,
      loading,
    };
  },
);

export default getActiveMembers;
