import { ADD_USER_MESSAGE, FETCH_MESSAGES, SEND_USER_MESSAGE, ADD_WELCOME_MESSAGE } from "../../actions/actionTypes";

export const messages = (state = [], { payload, type }) => {
    switch (type) {
        case ADD_USER_MESSAGE: {
            const message = {
                isUser: true,
                replies: [payload.message],
                id: `message-${Math.random()}`
            }
            return ([...state, message]);
        }
        case FETCH_MESSAGES: {
            return [...state, ...payload.messages];
        }
        case SEND_USER_MESSAGE: {
            const message = {
                isUser: false,
                replies: payload.replies,
                id: `message-${Math.random()}`
            }
            return ([...state, message]);
        }
        case ADD_WELCOME_MESSAGE: {
            console.log(payload.replies);
            const message = {
                isUser: false,
                replies: payload.replies,
                id: `message-${Math.random()}`
            }
            return ([...state, message]);
        }
    }

    return state;
}