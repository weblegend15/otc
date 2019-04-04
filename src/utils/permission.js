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

export { checkGroupPermission };
