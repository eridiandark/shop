import {SET_TEST_DATA} from "../actions/test.actions.types";

const INITIAL_STATE = {
    testData: null
};
export default function testReducer(state = INITIAL_STATE, action){
    switch (action.type) {
        case SET_TEST_DATA:
            return {...state, testData: action.data}
        default: return state;
    }
}