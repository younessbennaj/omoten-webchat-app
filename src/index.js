import React from 'react';
import ReactDOM from 'react-dom';
import WebChat from './containers/App';

import { Provider } from "react-redux";
import store from "./redux/store";

const rootElement = document.getElementById('root')
ReactDOM.render(
    <Provider store={store}>
        <WebChat />
    </Provider>,
    rootElement
)
