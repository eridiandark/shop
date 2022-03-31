import {call, put, takeLatest, select} from "redux-saga/effects";
import {SET_TEST_DATA, TEST, TEST2} from "../actions/test.actions.types";

import {testApi, testApi2} from "../../api/test.api";
import {testDataSelector} from "../selectors/test.selector";

function* test(action) {
    const response = yield call(testApi, action.data);
    console.log(response);
    let resp;
    switch (response.status) {
        case 200:
            resp = yield call([response, "json"]);
            yield put({type: SET_TEST_DATA, data: 'Bearer ' + resp.accessToken});
            break;
        case 400:
            resp = yield call([response, "json"]);
            yield put({type: SET_TEST_DATA, data: resp.message});
            break;
        default:
            yield put({type: SET_TEST_DATA, data: `${response.statusText} ${response.status}`});
    }
}

function* test2(){
    let token = yield select(testDataSelector);
    const response = yield call(testApi2, token);
    let resp;
    switch (response.status) {
        case 200:
            resp = yield call([response, "json"]);
            console.log(resp);
            break;
        default:
            console.log(`${response.statusText} ${response.status}`);
    }
}

function* processTest(action) {
    try {
        switch (action.type) {
            case TEST:
                yield* test(action);
                return;
            case TEST2:
                yield* test2(action);
                return;
            default:
                return;
        }
    } catch (e) {
        console.error(e);
    }
}

export default function* TestSaga() {
    yield takeLatest([TEST, TEST2], processTest);
}