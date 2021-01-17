import {profileReducer} from './reducers/profile-reducer'
import {dialogsReducer} from './reducers/dialogs-reducer'



let store ={
    _state:{
        profilePage:{
            postsData: [
                {id: 1, message: 'hi', likesCount: 12},
                {id: 2, message: 'hello', likesCount: 11},
            ],
            newPostText: 'itkama',
        },
        dialogsPage: {
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
        },
    },
    _callSubscriber () {
        console.log('state changed')
    },

    getState() {
        return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer
    },

    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }

}


export {
    store
}
window.store= store
