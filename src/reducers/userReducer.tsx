
import { userTypes } from '../types/type';
import {  UserState } from '../interfaces/userInterfaces';

// const initialState: User[]  = []
const initialState: UserState = {
  loading: false,
  users: []
}
  

const userReducer = (state = initialState , action: any) => {
  console.log('action');
  console.log(action);
  
  switch (action.type) {
    case userTypes.FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case userTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload.users
      };

    default:
      return {...state}
  }
};

export default userReducer;
