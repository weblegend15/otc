import { NOTIFICATION_TYPE } from '../config';

export default (payload, type) => {
  switch (type) {
    case NOTIFICATION_TYPE.GROUP.ACTIVE:
      return `Your New Group <b>${
        payload.group.name
      }</b> has been <span class="text-primary">published</span>`;

    case NOTIFICATION_TYPE.GROUP.INACTIVE:
      return `Your New Group <b>${
        payload.group.name
      }</b> has been <span class="text-danger">deleted</span>`;

    case NOTIFICATION_TYPE.PERMISSION.RECEIVED_APPLICATION:
      return `Your application to request to <b>${
        payload.group.name
      }</b> has been <span class="text-primary">received</span>`;
    case NOTIFICATION_TYPE.PERMISSION.REJECTED_APPLICATION:
      return `Your application to request to <b>${
        payload.group.name
      }</b> has been <span class="text-danger">rejected</span>`;
    case NOTIFICATION_TYPE.PERMISSION.REVOKED_APPLICATION:
      return `Your application to request to <b>${
        payload.group.name
      }</b> has been <span class="text-danger">denied</span>`;
    case NOTIFICATION_TYPE.PERMISSION.BANNED:
      return `Your permission in <b>${
        payload.group.name
      }</b> has been <span class="text-danger">denied</span>`;
    case NOTIFICATION_TYPE.PERMISSION.UNBANNED:
      return `Your permission in <b>${
        payload.group.name
      }</b> has been <span class="text-danger">retrieved</span>`;
    case NOTIFICATION_TYPE.PERMISSION.GRANTED_MEMBER:
      return `Your request to join to <b>${
        payload.group.name
      }</b> has been <span class="text-primary">accepted</span>`;
    case NOTIFICATION_TYPE.PERMISSION.REVOKED_MEMBER:
      return `Your request to join to <b>${
        payload.group.name
      }</b> has been <span class="text-danger>denied</span>`;
    case NOTIFICATION_TYPE.PERMISSION.GRANTED_ADMIN:
      return `Your permission in <b>${
        payload.group.name
      }</b> has been <span class="text-primary">upgraded</span> to Admin`;
    case NOTIFICATION_TYPE.PERMISSION.REVOKED_ADMIN:
      return `Your admin permission in <b>${
        payload.group.name
      }</b> has been <span class="text-primary">denied</span>`;
    case NOTIFICATION_TYPE.OFFER.EXPIRED:
      return `Your <b>${payload.offer.have} to ${
        payload.offer.want
      }</b> offer in <b>${
        payload.group.name
      }</b> has been <span class="text-danger>expired</span>`;
    case NOTIFICATION_TYPE.OFFER.ENDED:
      return `Your <b>${payload.offer.have} to ${
        payload.offer.want
      }</b> offer in <b>${
        payload.group.name
      }</b> has been <span class="text-danger">ended</span>`;
    case NOTIFICATION_TYPE.OFFER.FEEDBACK:
      return `<b>${
        payload.user.firstName
      }</b> has been left the feedback to your <b>${payload.offer.have} to ${
        payload.offer.want
      }</b> offer`;
    case NOTIFICATION_TYPE.PROPOSAL.RECEIVED:
      return `You <span class="text-primary">recieved</span> the proposal from <b>${
        payload.user.firstName
      }</b> in <b>${payload.offer.have} to ${payload.offer.want}`;
    case NOTIFICATION_TYPE.PROPOSAL.ACCEPTED:
      return `Your proposal has been <span class="text-primary">accepted</span> by <b>${
        payload.user.firstName
      }</b> in <b>${payload.offer.have} to ${payload.offer.want}`;
    case NOTIFICATION_TYPE.PROPOSAL.REJECTED:
      return `You <span class="text-primary">rejected</span> the proposal from <b>${
        payload.user.firstName
      }</b> in <b>${payload.offer.have} to ${payload.offer.want}`;
    case NOTIFICATION_TYPE.VOUCH.RECEIVED:
      return `You <span class="text-primary">recieved</span> the vouch from <b>${
        payload.user.firstName
      }</b> in <b>${payload.offer.have} to ${payload.offer.want}`;
    case NOTIFICATION_TYPE.VOUCH.ACCEPTED:
      return `Your vouch in <b>${payload.offer.have} to ${
        payload.offer.want
      } offer has been <span class="text-primary">accepted</span>`;
    case NOTIFICATION_TYPE.VOUCH.REJECTED:
      return `Your vouch in <b>${payload.offer.have} to ${
        payload.offer.want
      } offer has been <span class="text-danger">denied</span>`;
    default:
      return null;
  }
};
