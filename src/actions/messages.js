import {
    ADD_USER_MESSAGE,
    FETCH_MESSAGES,
    SEND_USER_MESSAGE,
    ADD_WELCOME_MESSAGE,
    SEND_EVENT_QUERY_MESSAGE,
    ADD_QUICK_REPLIES,
    DELETE_QUICK_REPLIES
} from './actionTypes';

import axios from 'axios';

export const sendMessage = (query) => async dispatch => {
    let apiUrl = `https://bba98cc7.ngrok.io/api/df_${query.type}_query`;
    let data = { userId: '1827367493' };
    data[query.type] = query.value;

    //We send our query and get response from dialogflow
    const response = await axios.post(apiUrl, data);

    //We parse the dialogflow response to obtain the correct format
    const replies = response.data.fulfillmentMessages.map((response) => {
        return payloadParser(response);
    });

    //We extract the quickReplies type message
    let quickReplies = replies.filter(reply => {
        return reply.type === "quickReplies";
    });

    console.log(replies);
    console.log(quickReplies);

}

sendMessage({ type: 'text', value: 'I want to book a room' })();


export const addWelcomeMessage = () => async dispatch => {
    const data = { event: 'Welcome' };
    const response = await axios.post('https://bba98cc7.ngrok.io/api/df_event_query', data);
    const replies = response.data.fulfillmentMessages.map((response) => {
        return payloadParser(response);
    });
    let quickReplies = replies.filter(reply => {
        return reply.type === "quickReplies";
    });
    // addQuickReplies(quickReplies);
    dispatch({
        type: ADD_WELCOME_MESSAGE,
        payload: {
            replies
        }
    });
    dispatch({
        type: ADD_QUICK_REPLIES,
        payload: {
            quickReplies
        }
    });
}

export const addUserMessage = (message) => {
    return {
        type: ADD_USER_MESSAGE,
        payload: {
            message
        }
    }
}

export const deleteQuickReplies = (arg) => {
    return {
        type: DELETE_QUICK_REPLIES,
        payload: {
            test: "test"
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

export const sendEventQueryMessage = (event) => async dispatch => {
    const data = { event };
    const response = await axios.post('https://bba98cc7.ngrok.io/api/df_event_query', data);
    const replies = response.data.fulfillmentMessages.map((response) => {
        return payloadParser(response);
    });
    let quickReplies = replies.filter(reply => {
        return reply.type === "quickReplies";
    });
    console.log(quickReplies);
    dispatch({
        type: SEND_EVENT_QUERY_MESSAGE,
        payload: {
            replies
        }
    });
    dispatch({
        type: ADD_QUICK_REPLIES,
        payload: {
            quickReplies
        }
    });
}

export const sendTextQueryMessage = (text) => async dispatch => {

    const data = { text, userId: '1827367493' };
    const response = await axios.post('https://bba98cc7.ngrok.io/api/df_text_query', data);
    const replies = response.data.fulfillmentMessages.map((response) => {
        return payloadParser(response);
    });
    let quickReplies = replies.filter(reply => {
        return reply.type === "quickReplies";
    });
    console.log(quickReplies);
    dispatch({
        type: SEND_USER_MESSAGE,
        payload: {
            replies
        }
    })
    dispatch({
        type: ADD_QUICK_REPLIES,
        payload: {
            quickReplies
        }
    });
}


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