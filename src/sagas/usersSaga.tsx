import axios from "axios";
import { usersApi } from '../api/usersApi';
import { all, call, put, takeLatest,takeEvery } from "redux-saga/effects";
import { User } from '../interfaces/userInterfaces';
import { fetchUserSuccess } from '../actions/usersActions';
import { userTypes } from '../types/type';

export interface ResponseGenerator{
    config?:any,
    data?:any,
    headers?:any,
    request?:any,
    status?:number,
    statusText?:string
}

const getUsers = () => axios.get<User[]>("https://jsonplaceholder.typicode.com/users'");

function* fetchPostSaga() {
    try {
        const response:ResponseGenerator = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users');
        // const response:ResponseGenerator = yield call(getUsers);

        console.log("response-users", response);
        
        
        yield put(fetchUserSuccess({
            users: response.data
            })    
        );
    } catch (e) {
        console.log(e);
        
    }
}

function* postSaga() {
    yield all([takeLatest(userTypes.FETCH_USER_REQUEST, fetchPostSaga)])
}

export default postSaga;
