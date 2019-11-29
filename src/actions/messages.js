import {
    ADD_USER_MESSAGE,
    FETCH_MESSAGES,
    ADD_QUICK_REPLIES,
    DELETE_QUICK_REPLIES,
    ADD_BOT_MESSAGE
} from './actionTypes';

import axios from 'axios';

//Ajouter le message de l'utilisateur 
export const addUserMessage = (message) => {
    return {
        type: ADD_USER_MESSAGE,
        payload: {
            message
        }
    }
}

//Envoyer le message de l'utilisateur à notre bot puis recevoir la réponse
export const sendMessage = (query) => async dispatch => {
    let apiUrl = `https://69fca11d.ngrok.io/api/df_${query.type}_query`;
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

    dispatch({
        type: ADD_BOT_MESSAGE,
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

//Supprimer les quickReplies proposé à l'utilisateur
export const deleteQuickReplies = (arg) => {
    return {
        type: DELETE_QUICK_REPLIES,
        payload: {
            test: "test"
        }
    }
}

//Récupérer le discussion depuis un historique (fictif pour le momment mais à étudier)
export const fetchMessages = () => async dispatch => {
    const response = await axios.get('https://my-json-server.typicode.com/younessbennaj/messages-database/messages');
    return dispatch({
        type: FETCH_MESSAGES,
        payload: {
            messages: response.data
        }
    })
}

//Permet de parser la réponse obtenue depuis DialogFlow pour obtenir un format exploitable facilement
//dans l'application (solution temporaire avant une solution backend plus aboutie).
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