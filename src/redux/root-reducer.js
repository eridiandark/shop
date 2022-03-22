import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import testReducer from "./reducers/test.reducer";

const createRootReducer = (history) => {
    const persistConfig = {
        key: "root",
        storage,
        whitelist: ["test"],
    };
    return persistReducer(
        persistConfig,
        combineReducers({
            router: connectRouter(history),
            test: testReducer
        })
    );
};

export default createRootReducer;
