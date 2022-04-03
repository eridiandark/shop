import {SET_USER_DATA} from "../actions/user.actions.types";

const INITIAL_STATE = {
    accessToken: null,
    refreshToken: null,
    email: null,
    role: null,
    errorMessage: null,
};
export default function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data}
        default:
            return state;
    }
}