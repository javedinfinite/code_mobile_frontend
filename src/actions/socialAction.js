import Actions from '../actionConstants/socialActionConstants';
import axios from 'axios';

// const base_url = 'http://localhost:4000'
const base_url = 'https://codemymobile.herokuapp.com'

export const getusers = () => {
  return async (dispatch) => {
    dispatch({type: Actions.USERS_REQUESTED});

    try {
      let response = await axios.get(base_url+'/social/users');
      // console.log(response.data.users)
      dispatch({
        type: Actions.USERS_RECEIVED,
        payload: {usersList: response.data.users},
      });
    } catch (e) {
      dispatch({
        type: Actions.USERS_ERROR,
        error: "API to get USERS list is failed with error : "+e,
      });
    }
  };
};


export const getUsersCount = () => {
  return async (dispatch) => {
    dispatch({type: Actions.USERS_COUNT_REQUESTED});
    console.log("count api calling")
    try {
      let response = await axios.get(base_url+'/social/users/pagecount');
      // console.log(response.data)
      dispatch({
        type: Actions.USERS_COUNT_RECEIVED,
        payload: {count: response.data.count},
      });
    } catch (e) {
      console.log(e)
      dispatch({
        type: Actions.USERS_COUNT_ERROR,
        error: "API to get users count is failed with error : "+e,
      });
    }
  };
};

export const getSomeUsers = (page_number) => {
  return async (dispatch) => {
    dispatch({type: Actions.SOME_USERS_REQUESTED});

    console.log("some users calling")

    try {
      let response = await axios.get(base_url+'/social/someusers/'+page_number);
      // console.log(response)
      dispatch({
        type: Actions.SOME_USERS_RECEIVED,
        payload: {someUsers: response.data.users},
      });
    } catch (e) {
      dispatch({
        type: Actions.SOME_USERS_ERROR,
        error: "API to get some users  list is failed with error : "+e,
      });
    }
  };
};

export const getUserFriends = (user_id) => {
  return async (dispatch) => {
    dispatch({type: Actions.USERS_FRIENDS_REQUESTED});

    console.log("from socialAction",user_id)

    try {
      let response = await axios.get(base_url+'/social/friends/'+user_id);
      console.log(response)
      dispatch({
        type: Actions.USERS_FRIENDS_RECEIVED,
        payload: {userFriends: response.data.users},
      });
    } catch (e) {
      dispatch({
        type: Actions.USERS_FRIENDS_ERROR,
        error: "API to get some users  list is failed with error : "+e,
      });
    }
  };
};

export const getUserFofF = (user_id) => {
  return async (dispatch) => {
    dispatch({type: Actions.USER_FOFF_REQUESTED});

    console.log("from socialAction getUserFofF",user_id)

    try {
      let response = await axios.get(base_url+'/social/foff/'+user_id);
      console.log(response)
      dispatch({
        type: Actions.USER_FOFF_RECEIVED,
        payload: {userFofF: response.data.users},
      });
    } catch (e) {
      dispatch({
        type: Actions.USER_FOFF_ERROR,
        error: "API to get FofF users  list is failed with error : "+e,
      });
    }
  };
};