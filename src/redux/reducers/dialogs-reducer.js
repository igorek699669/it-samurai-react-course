const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    messageData: [
        {id: 1, message: 'hi1'},
        {id: 2, message: 'hi2'},
        {id: 3, message: 'hi3'},
    ],
    dialogsData: [
        {id: 1, name: 'dima1'},
        {id: 2, name: 'dima2'},
        {id: 3, name: 'dima3'},
        {id: 4, name: 'dima4'},
        {id: 5, name: 'dima5'},
    ]
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messageData: [
                    ...state.messageData,
                    {id: 6, message: body}
                ]
            }
        default:
            return state
    }
}
export let sendMessageCreator = (newMessageBody) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    }
}