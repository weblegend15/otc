import { NOTIFICATION_TYPE } from '../config';

export default payload => {
  switch (payload.type) {
    case NOTIFICATION_TYPE.GROUP.ACTIVE:
      return `Your New Group <b>${
        payload.group.name
      }</b> has been <span className="text-primary">published</span>`;

    case NOTIFICATION_TYPE.GROUP.INACTIVE:
      return `Your New Group <b>${
        payload.group.name
      }</b> has been <span className="text-danger">deleted</span>`;

    case NOTIFICATION_TYPE.PERMISSION.RECEIVED_APPLICATION:
      return `Your application to request to <b>${
        payload.group.name
      }</b> has been <span className="text-primary">received</span>`;
    case NOTIFICATION_TYPE.PERMISSION.REJECTED_APPLICATION:
      return `Your application to request to <b>${
        payload.group.name
      }</b> has been <span className="text-danger">rejected</span>`;
    case NOTIFICATION_TYPE.PERMISSION.REVOKED_APPLICATION:
      return `Your application to request to <b>${
        payload.group.name
      }</b> has been <span className="text-danger">denied</span>`;
    case NOTIFICATION_TYPE.PERMISSION.BANNED:
      return `Your permission in <b>${
        payload.group.name
      }</b> has been <span className="text-danger">denied</span>`;
    case NOTIFICATION_TYPE.PERMISSION.UNBANNED:
      return `Your permission in <b>${
        payload.group.name
      }</b> has been <span className="text-danger">retrieved</span>`;
    case NOTIFICATION_TYPE.PERMISSION.GRANTED_MEMBER:
      return `Your request to join to <b>${
        payload.group.name
      }</b> has been <span className="text-primary>accepted</span>`;
    case NOTIFICATION_TYPE.PERMISSION.REVOKED_MEMBER:
      return `Your request to join to <b>${
        payload.group.name
      }</b> has been <span className="text-danger>denied</span>`;
    case NOTIFICATION_TYPE.PERMISSION.GRANTED_ADMIN:
      return `Your permission in <b>${
        payload.group.name
      }</b> has been <span className="text-primary">upgraded</span>`;
    case NOTIFICATION_TYPE.PERMISSION.REVOKED_ADMIN:
      return `Your admin permission in <b>${
        payload.group.name
      }</b> has been <span className="text-primary">denied</span>`;
    case NOTIFICATION_TYPE.OFFER.EXPIRED:
      return `Your <b>${payload.offer.have} to ${
        payload.offer.want
      }</b> offer in <b>${
        payload.group.name
      }</b> has been <span className="text-danger>expired</span>`;
    case NOTIFICATION_TYPE.OFFER.ENDED:
      return `Your <b>${payload.offer.have} to ${
        payload.offer.want
      }</b> offer in <b>${
        payload.group.name
      }</b> has been <span className="text-danger">ended</span>`;
    case NOTIFICATION_TYPE.OFFER.FEEDBACK:
      return `<b>${
        payload.user.firstName
      }</b> has been left the feedback to your <b>${payload.offer.have} to ${
        payload.offer.want
      }</b> offer`;
    case NOTIFICATION_TYPE.PROPOSAL.RECEIVED:
      return `<b>${}</b>`
    default:
      return null;
  }
};
