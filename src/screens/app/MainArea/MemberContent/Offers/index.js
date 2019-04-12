import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Offers from './Offers';

import { getOffersRequest } from '../../GroupContent/redux/actions';

Offers.propTypes = {
  getOffersRequest: PropTypes.func.isRequired,
  memberOffers: PropTypes.object.isRequired,
  selectedMember: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  memberOffers: state.app.offer.groupOffers,
  selectedGroupId: state.app.main.selectedGroupId,
  selectedGroupMemberId: state.app.main.selectedGroupMemberId,
  selectedMember: state.app.main.user,
});

const mapDispatchToProps = {
  getOffersRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Offers);
