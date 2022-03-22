import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {ConnectedRouter} from "connected-react-router";
import { store, persistor, history } from "./redux/store";
import {PersistGate} from "redux-persist/integration/react";

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    document.getElementById("root")
);
