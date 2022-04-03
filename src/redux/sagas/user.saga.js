import {call, put, takeLatest} from "redux-saga/effects";
import {LOGIN, SET_USER_DATA} from "../actions/user.actions.types";
import {loginApi} from "../../api/user.api";

function* login(action) {
    const response = yield call(loginApi, action.data);
    console.log(response);
    let resp;
    switch (response.status) {
        case 200:
            resp = yield call([response, "json"]);
            console.log({resp});
            yield put({type: SET_USER_DATA, data: {...resp, errorMessage: null}});
            break;
        case 400:
            resp = yield call([response, "json"]);
            yield put({
                type: SET_USER_DATA, data: {
                    ...resp, accessToken: null,
                    refreshToken: null,
                    email: null,
                    role: null,
                }
            });
            break;
        default:
            yield put({
                type: SET_USER_DATA, data: {
                    errorMessage: `${response.statusText} ${response.status}`, accessToken: null,
                    refreshToken: null,
                    email: null,
                    role: null,
                }
            });
    }
}

function* processUser(action) {
    try {
        switch (action.type) {
            case LOGIN:
                yield* login(action);
                return;
            default:
                return;
        }
    } catch (e) {
        console.error(e);
    }
}

export default function* UserSaga() {
    yield takeLatest([LOGIN], processUser);
}