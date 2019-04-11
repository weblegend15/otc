import { createSelector } from 'reselect';

const getActiveGroupOffers = createSelector(
  [state => state.app.offer.groupOffers, state => state.auth.currentUser],
  ({ list, loading }, currentUser) => {
    const activeGroupOffers = list.filter(
      item => item.offeredBy === currentUser._id,
    );

    return {
      loading,
      list: activeGroupOffers,
    };
  },
);

export default getActiveGroupOffers;
