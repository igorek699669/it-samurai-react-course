const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
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
    ],
    newMessageBody: ''
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messageData.push({id: 6, message: body})
            return state
        default:
            return state
    }
}
export let sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export let updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}