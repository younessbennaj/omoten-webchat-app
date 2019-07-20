import { ADD_USER_MESSAGE } from "../../actions/actionTypes";

export default function (state, { payload, type }) {
    switch (type) {
        case ADD_USER_MESSAGE: {
            const message = {
                isUser: true,
                replies: [payload.message],
                id: `message-${Math.random()}`
            }
            return ([...state, ...[message]]);
        }
    }

    return [
        {
            isUser: false,
            id: `message-${Math.random()}`,
            replies: [
                {
                    type: 'text',
                    content: "Hello! How can I help you?"
                },
                {
                    type: 'quickReplies',
                    content: [
                        {
                            title: 'Book a room'
                        },
                        {
                            title: 'Dinning out'
                        },
                        {
                            title: 'Find a local service'
                        }
                    ]
                }
            ]
        },
        {
            isUser: true,
            id: `message-${Math.random()}`,
            replies: [
                {
                    type: 'text',
                    content: "I want to book a room"
                }
            ]
        }
    ]
}