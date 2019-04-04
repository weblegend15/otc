import * as CONSTANTS from './constants';

const initialState = {
  groups: {
    loading: false,
    list: [],
    total: 0,
  },
  group: {
    loading: false,
    data: {},
  },

  groupMembers: {
    loading: false,
    list: [],
    total: 0,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.GET_GROUPS_REQUEST:
      return {
        ...state,
        groups: {
          ...state.groups,
          loading: true,
        },
      };
    case CONSTANTS.GET_GROUPS_SUCCESS:
      return {
        ...state,
        groups: {
          ...state.groups,
          loading: false,
          list: action.payload.data,
          total: action.payload.total,
        },
      };
    case CONSTANTS.GET_GROUPS_ERROR:
      return {
        ...state,
        groups: {
          ...state.groups,
          loading: false,
          list: [],
          total: 0,
        },
      };

    case CONSTANTS.CREATE_GROUP_REQUEST:
      return {
        ...state,
        group: {
          ...state.group,
          loading: true,
        },
      };
    case CONSTANTS.CREATE_GROUP_SUCCESS:
      return {
        ...state,
        group: {
          ...state.group,
          loading: false,
          data: action.payload,
        },
        groups: {
          ...state.group,
          list: [action.payload, ...state.groups.list],
          total: state.groups.total + 1,
        },
      };
    case CONSTANTS.CREATE_GROUP_ERROR:
      return {
        ...state,
        group: {
          ...state.group,
          loading: false,
          data: {},
        },
      };

    case CONSTANTS.READ_GROUP_REQUEST:
      return {
        ...state,
        group: {
          ...state.group,
          loading: true,
        },
      };
    case CONSTANTS.READ_GROUP_SUCCESS:
      return {
        ...state,
        group: {
          ...state.group,
          loading: false,
          data: action.payload,
        },
      };
    case CONSTANTS.READ_GROUP_ERROR:
      return {
        ...state,
        group: {
          ...state.group,
          loading: false,
          data: {},
        },
      };

    case CONSTANTS.UPDATE_GROUP_REQUEST:
      return {
        ...state,
        group: {
          ...state.group,
          loading: true,
        },
      };
    case CONSTANTS.UPDATE_GROUP_SUCCESS:
      return {
        ...state,
        group: {
          ...state.group,
          data: action.payload,
          loading: false,
        },
      };
    case CONSTANTS.UPDATE_GROUP_ERROR:
      return {
        ...state,
        group: {
          ...state.group,
          loading: false,
          data: {},
        },
      };

    case CONSTANTS.DELETE_GROUP_REQUEST:
      return {
        ...state,
        group: {
          ...state.group,
          loading: true,
        },
      };
    case CONSTANTS.DELETE_GROUP_SUCCESS:
      return {
        ...state,
        groups: {
          ...state.groups,
          list: state.groups.list.filter(item => item._id !== action.payload),
        },
        group: {
          ...state.group,
          loading: false,
        },
      };
    case CONSTANTS.DELETE_GROUP_ERROR:
      return {
        ...state,
        group: {
          ...state.group,
          loading: false,
          data: {},
        },
      };

    case CONSTANTS.APPROVE_GROUP_REQUEST:
      return {
        ...state,
        group: {
          ...state.group,
          loading: true,
        },
      };
    case CONSTANTS.APPROVE_GROUP_SUCCESS:
      return {
        ...state,
        groups: {
          ...state.groups,
          list: state.groups.list.map(item =>
            item._id === action.payload ? { ...item, status: 'ACTIVE' } : item,
          ),
        },
        group: {
          ...state.group,
          loading: false,
        },
      };
    case CONSTANTS.APPROVE_GROUP_ERROR:
      return {
        ...state,
        group: {
          ...state.group,
          loading: false,
          data: {},
        },
      };

    case CONSTANTS.LIST_MEMBERS_REQUEST:
      return {
        ...state,
        groupMembers: {
          ...state.groupMembers,
          loading: true,
        },
      };
    case CONSTANTS.LIST_MEMBERS_SUCCESS:
      return {
        ...state,
        groupMembers: {
          ...state.groupMembers,
          list: action.payload.data,
          total: action.payload.total,
          loading: false,
        },
      };
    case CONSTANTS.LIST_MEMBERS_ERROR:
      return {
        ...state,
        groupMembers: {
          ...state.groupMembers,
          loading: false,
          list: [],
          total: 0,
        },
      };

    default:
      return state;
  }
};
