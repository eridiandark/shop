import { call, put, takeLatest, select } from "redux-saga/effects";
import {SET_TEST_DATA, TEST} from "../actions/test.actions.types";

import {testApi} from "../../api/test.api";

function* test(action){
    const response = yield call(testApi);
    yield put({type: SET_TEST_DATA, data: response.data})
}

function* processTest(action){
    try {
        switch (action.type){
            case TEST:
                yield* test(action);
                return;
            default:
                return;
        }
    } catch (e) {
        console.error(e);
    }
}

export default function* TestSaga(){
    yield takeLatest([TEST], processTest);
}