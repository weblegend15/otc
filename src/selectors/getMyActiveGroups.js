import { createSelector } from 'reselect';

const getMyActiveGroups = createSelector(
  [state => state.app.main.myGroups],
  ({ list, loading }) => {
    const myActiveGroups = list
      .filter(
        item =>
          !!item.group &&
          ['MEMBER', 'ADMIN'].indexOf(item.permission) > -1 &&
          item.group.status === 'ACTIVE',
      )
      .map(item => item.group);

    return {
      loading,
      list: myActiveGroups,
    };
  },
);

export default getMyActiveGroups;
