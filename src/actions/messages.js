import { ADD_USER_MESSAGE, FETCH_MESSAGES } from './actionTypes';
import axios from 'axios';

// (async () => {
//     const response = await axios.get('https://my-json-server.typicode.com/younessbennaj/messages-database/messages');
//     console.log(response.data);
// })();

export const addUserMessage = (message) => {
    return {
        type: ADD_USER_MESSAGE,
        payload: {
            message
        }
    }
}

export const fetchMessages = () => async dispatch => {
    const response = await axios.get('https://my-json-server.typicode.com/younessbennaj/messages-database/messages');
    return dispatch({
        type: FETCH_MESSAGES,
        payload: {
            messages: response.data
        }
    })
}