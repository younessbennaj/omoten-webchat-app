export default function () {
    return [
        {
            isUser: false,
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
            replies: [
                {
                    type: 'text',
                    content: "I want to book a room"
                }
            ]
        }
    ]
}