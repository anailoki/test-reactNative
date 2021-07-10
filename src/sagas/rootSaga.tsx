import { all, fork 
} from "redux-saga/effects";

import postSaga from './usersSaga'

export function* rootSaga(){
    yield all([fork(postSaga)])
}