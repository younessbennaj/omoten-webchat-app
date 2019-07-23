import { ADD_USER_MESSAGE } from './actionTypes';

export const addUserMessage = (message) => {
    return {
        type: ADD_USER_MESSAGE,
        payload: {
            message
        }
    }
}