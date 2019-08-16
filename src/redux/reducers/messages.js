import { ADD_USER_MESSAGE, FETCH_MESSAGES, ADD_BOT_MESSAGE } from "../../actions/actionTypes";

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
        case ADD_BOT_MESSAGE: {
            const message = {
                isUser: false,
                replies: payload.replies,
                id: `message-${Math.random()}`
            }
            return ([...state, message]);
        }
        case FETCH_MESSAGES: {
            return [...state, ...payload.messages];
        }
        default:
            break;
    }

    return state;
}