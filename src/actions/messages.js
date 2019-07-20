import { ADD_USER_MESSAGE } from './actionTypes';

export function addUserMessage(message) {
    return {
        type: ADD_USER_MESSAGE,
        payload: {
            message
        }
    }
}