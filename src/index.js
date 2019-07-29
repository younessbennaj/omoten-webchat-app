import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import store from "./redux/store";
import WebChat from './containers/App';

window.store = store;

const rootElement = document.getElementById('root')
render(
    <Provider store={store}>
        <WebChat />
    </Provider>,
    rootElement
)
