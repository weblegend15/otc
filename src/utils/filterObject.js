const getMember = (members, memberId) => {
  return members.find(member => member._id === memberId);
};

const findByField = (list, fieldName, fieldValue) => {
  return list.find(item => item && item[fieldName] === fieldValue);
};

const getGroup = (groups, id) => {
  return groups.find(group => group && group._id === id);
};

export { getMember, findByField, getGroup };
