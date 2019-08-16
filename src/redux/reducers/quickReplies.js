import { ADD_QUICK_REPLIES, DELETE_QUICK_REPLIES } from "../../actions/actionTypes";

export const quickReplies = (state = [], { payload, type }) => {
    switch (type) {
        case ADD_QUICK_REPLIES: {
            return [...payload.quickReplies];
        }
        case DELETE_QUICK_REPLIES: {
            return [];
        }
        default:
            break;
    }

    return state;
}