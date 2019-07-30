import { ADD_USER_MESSAGE, FETCH_MESSAGES, SEND_USER_MESSAGE } from './actionTypes';
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

export const sendUserMessage = (message) => async dispatch => {
    const data = { text: message.content, userId: '1827367493' };
    const response = await axios.post('https://55bcd947.ngrok.io/api/df_text_query', data);
    const replies = response.data.fulfillmentMessages.map((response) => {
        return payloadReducer(response.payload);
    });
    return dispatch({
        type: SEND_USER_MESSAGE,
        payload: {
            replies
        }
    })
}

const payloadReducer = payload => {

    let result = {};

    for (let key in payload.fields) {
        if (payload.fields[key].stringValue) {
            result[key] = payload.fields[key].stringValue;
        } else {
            result[key] = payload.fields.content.listValue.values.map((item) => {
                let content = {};
                for (let key in item.structValue.fields) {
                    if (item.structValue.fields[key].stringValue) {
                        content[key] = item.structValue.fields[key].stringValue;
                    } else {
                        content[key] = payloadReducer(item.structValue.fields[key]);
                    }
                }
                return content;
            });
        }

    }

    return result;

};