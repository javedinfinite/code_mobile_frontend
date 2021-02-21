import Actions from '../actionConstants/socialActionConstants';
import axios from 'axios';

export const getusers = () => {
  return async (dispatch) => {
    dispatch({type: Actions.USERS_REQUESTED});

    try {
      let response = await axios.get('http://localhost:4000/social/users');
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