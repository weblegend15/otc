const getMember = (members, memberId) => {
  return members.find(member => member._id === memberId);
};

const getGroup = (groups, id) => {
  return groups.find(group => group.group && group.group._id === id);
};

export { getMember, getGroup };
