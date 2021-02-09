const SEND_MESSAGE = 'SEND_MESSAGE'
type DialogType ={
    id:  number | null,
    name:  string | null,
}
type MessageType ={
    id:  number | null,
    message:  string | null,
}
let initialState = {
    messageData: [
        {id: 1, message: 'hi1'},
        {id: 2, message: 'hi2'},
        {id: 3, message: 'hi3'},
    ] as Array <MessageType>,
    dialogsData: [
        {id: 1, name: 'dima1'},
        {id: 2, name: 'dima2'},
        {id: 3, name: 'dima3'},
        {id: 4, name: 'dima4'},
        {id: 5, name: 'dima5'},
    ] as Array <DialogType>
}
type InitialStateType = typeof initialState
export const dialogsReducer = (state = initialState, action: any): InitialStateType => {
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
type SendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE,
    newMessageBody: string
}
export let sendMessageCreator = (newMessageBody: string): SendMessageCreatorActionType => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    }
}