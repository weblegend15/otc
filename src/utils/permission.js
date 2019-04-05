/**
 * check group permisson by user profile
 */
const checkGroupPermission = (userProfile, groupId) => {
  const perm = userProfile.groups.find(item => item.group === groupId);

  const isGroupAdmin = perm && perm.permission === 'ADMIN';
  const isBanned = perm && perm.permission === 'BANNED';
  const isApplied = perm && perm.permission === 'APPLIED';
  const isMember = perm && perm.permission === 'MEMBER';

  return {
    isGroupAdmin: !!isGroupAdmin,
    isBanned: !!isBanned,
    isApplied: !!isApplied,
    isMember: !!isMember,
  };
};

/**
 * get my active groups
 *
 * @param {*} groups
 * @returns
 */
const getMyActiveGroups = groups => {
  return groups
    .filter(
      item =>
        !!item.group &&
        ['MEMBER', 'ADMIN'].indexOf(item.permission) > -1 &&
        item.group.status === 'ACTIVE',
    )
    .map(item => item.group);
};

export { checkGroupPermission, getMyActiveGroups };
