import {
    ADD_USER_MESSAGE,
    FETCH_MESSAGES,
    SEND_USER_MESSAGE,
    ADD_WELCOME_MESSAGE,
    SEND_EVENT_QUERY_MESSAGE
} from './actionTypes';

import axios from 'axios';

export const addUserMessage = (message) => {
    return {
        type: ADD_USER_MESSAGE,
        payload: {
            message
        }
    }
}

export const addWelcomeMessage = () => async dispatch => {
    const data = { event: 'Welcome' };
    const response = await axios.post('https://bba98cc7.ngrok.io/api/df_event_query', data);
    const replies = response.data.fulfillmentMessages.map((response) => {
        return payloadParser(response);
    });
    return dispatch({
        type: ADD_WELCOME_MESSAGE,
        payload: {
            replies
        }
    });
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

export const sendEventQueryMessage = (event) => async dispatch => {
    const data = { event };
    const response = await axios.post('https://bba98cc7.ngrok.io/api/df_event_query', data);
    const replies = response.data.fulfillmentMessages.map((response) => {
        return payloadParser(response);
    });
    return dispatch({
        type: SEND_EVENT_QUERY_MESSAGE,
        payload: {
            replies
        }
    });
}

export const sendTextQueryMessage = (text) => async dispatch => {

    console.log(text);
    const data = { text, userId: '1827367493' };
    const response = await axios.post('https://bba98cc7.ngrok.io/api/df_text_query', data);
    console.log(response.data.fulfillmentMessages);
    const replies = response.data.fulfillmentMessages.map((response) => {
        return payloadParser(response);
    });
    return dispatch({
        type: SEND_USER_MESSAGE,
        payload: {
            replies
        }
    })
}

// export const sendUserMessage = (message) => async dispatch => {
//     const data = { text: message.content, userId: '1827367493' };
//     const response = await axios.post('https://bba98cc7.ngrok.io/api/df_text_query', data);
//     const replies = response.data.fulfillmentMessages.map((response) => {
//         return payloadParser(response);
//     });
//     // console.log(replies);

//     return dispatch({
//         type: SEND_USER_MESSAGE,
//         payload: {
//             replies
//         }
//     })
// }

const payloadParser = (response) => {
    let result = {};
    let { fields: messageProps } = response.payload;
    for (let key in messageProps) {
        if (messageProps[key].stringValue) {
            //Si c'est une simple string 
            result[key] = messageProps[key].stringValue;
        } else {
            //Si c'est un objet ou un tableau... 

            //Cette fonction permet de parser la payload pour extraire les tableaux
            //et objets imbriqués.
            //Permet de traduire depuis la structure utilisé par DialogFlow.
            const typeProp = (value) => {

                //Si c'est un tableau alors...
                if (value.listValue) {
                    const array = value.listValue.values.map(item => {
                        if (item.stringValue) {
                            return item.stringValue;
                        }
                        //... Tant que ce n'est pas une string ... on recommence
                        return typeProp(item);
                    })
                    //Retourne le tableau qui correspond au bon format
                    return array;
                }

                //Si c'est un objet alors...
                if (value.structValue) {
                    let { fields: objectProps } = value.structValue;
                    let object = {}
                    for (let key in objectProps) {
                        if (objectProps[key].stringValue) {
                            object[key] = objectProps[key].stringValue;
                        } else {
                            //... Tant que ce n'est pas une string ... on recommence
                            object[key] = typeProp(objectProps[key]);
                        }
                    }
                    //Retourne l'objet qui correspond au bon format
                    return object;
                }

            }

            result[key] = typeProp(messageProps[key]);
        }
    }

    return result;
}