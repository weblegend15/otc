/**
 * check group permisson
 */
const checkGroupPermission = (userProfile, groupId) => {
  const isGroupAdmin = userProfile.groups.find(
    item => item.group === groupId && item.permission === 'ADMIN',
  );

  const isBanned = userProfile.groups.find(
    item => item.group === groupId && item.permission === 'BANNED',
  );

  const isApplied = userProfile.groups.find(
    item => item.group === groupId && item.permission === 'APPLIED',
  );

  const isMember = userProfile.groups.find(
    item => item.group === groupId && item.permission === 'MEMBER',
  );

  return {
    isGroupAdmin: !!isGroupAdmin,
    isBanned: !!isBanned,
    isApplied: !!isApplied,
    isMember: !!isMember,
  };
};

export { checkGroupPermission };
