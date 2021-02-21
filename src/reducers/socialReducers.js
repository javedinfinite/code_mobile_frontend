import Actions from  '../actionConstants/socialActionConstants'

const initialState = {
  userList: [],
  isLoading: false,
  selecteduser: {},
  totalUsersCount: '',
  someUsers: [],
  error: '',
};

export default (state = initialState, action) => {
switch (action.type) {
case Actions.USERS_REQUESTED:
  return {
    ...state,
    error: '',
    userList: [],
    isLoading: true,
  };
  case Actions.USERS_RECEIVED:
  return {
    ...state,
    error: '',
    userList: action.payload.usersList || [],
    // selecteduser: action.payload.usersList[0] || {},
    isLoading: false,
  };
  case Actions.USERS_ERROR:
  return {
    ...state,
    error: action.error || 'Something went wrong while fetching user list',
    isLoading: false,
  };

  case Actions.USERS_COUNT_REQUESTED:
    return {
      ...state,
      error: action.error || '',
      totalUsersCount:   '',
      isLoading: true,
    };
    case Actions.USERS_COUNT_RECEIVED:
    return {
      ...state,
      error:  '',
      totalUsersCount: action.payload.count || '',
      isLoading: false,
    };
    case Actions.USERS_COUNT_ERROR:
    return {
      ...state,
      error: action.error || 'Something went wrong while fetching users counts',
      isLoading: false,
    };

    case Actions.SOME_USERS_REQUESTED:
      return {
        ...state,
        error: action.error || '',
        someUsers:   {},
        isLoading: false,
      };
      case Actions.SOME_USERS_RECEIVED:
      return {
        ...state,
        error:  '',
        someUsers: action.payload.someUsers || {},
        isLoading: false,
      };
      case Actions.SOME_USERS_ERROR:
      return {
        ...state,
        error: action.error || 'Something went wrong while fetching some users ',
        isLoading: false,
      };


default:
  return state;
}
};