const getMember = (members, memberId) => {
  return members.find(member => member._id === memberId);
};

export default getMember;
