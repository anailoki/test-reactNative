import { userTypes } from '../types/type';
import { FetchUsersSuccessPayload } from '../interfaces/userInterfaces';
// import {
//     FetchUsersFailure,
//     FetchUsersFailurePayload,
//     FetchUsersRequest,
//     FetchUsersSuccess,
//     FetchUsersSuccessPayload,
//   } from '../../types/types';
 
  export const fetchUserRequest = () => ({
      type: userTypes.FETCH_USER_REQUEST
  })

  export const fetchUserSuccess = (payload:FetchUsersSuccessPayload): any => ({
    type: userTypes.FETCH_USER_SUCCESS,
    payload
})