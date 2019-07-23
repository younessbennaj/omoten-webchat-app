import { ADD_USER_MESSAGE, FETCH_MESSAGES } from './actionTypes';

export const addUserMessage = (message) => {
    return {
        type: ADD_USER_MESSAGE,
        payload: {
            message
        }
    }
}

export const fetchMessages = () => {
    return {
        type: FETCH_MESSAGES,
        payload: {
            messages: 'messages'
        }
    }
}