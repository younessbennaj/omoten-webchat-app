import { ADD_USER_MESSAGE } from "../../actions/actionTypes";

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
    }

    return state;
}