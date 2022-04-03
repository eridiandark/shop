import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

import logger from "redux-logger";
import createRootReducer from "./root-reducer";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import TestSaga from "./sagas/test.saga";
import UserSaga from "./sagas/user.saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [logger, sagaMiddleware];

export const history = createBrowserHistory();
const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
        : compose;

const enhancer = composeEnhancers(
    applyMiddleware(routerMiddleware(history), ...middlewares)
);
export const store = createStore(createRootReducer(history), enhancer);

export function* rootSaga() {
  yield all([
      TestSaga(),
      UserSaga()
  ]);
}

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

const allStore = { store, persistor, history };

export default allStore;
