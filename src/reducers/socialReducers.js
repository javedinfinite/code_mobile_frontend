import Actions from  '../actionConstants/socialActionConstants'

const initialState = {
  userList: [],
  isLoading: false,
  selecteduser: {},
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
default:
  return state;
}
};