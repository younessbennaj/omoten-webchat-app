import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import store from "./redux/store";
import WebChat from './containers/App';
import styled from 'styled-components';

// const FakeContainer = styled.div`
//     height: 520px;
//     width: 350px;
//     border-radius: 3px;
// `

window.store = store;

const rootElement = document.getElementById('root')
render(

    <Provider store={store}>
        <WebChat />
    </Provider>,
    rootElement
)
