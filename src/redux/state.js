const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

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
        if (action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        }else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.text
            this._callSubscriber(this._state)
        }
    }

}
export let addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export let updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text: text
    }
}
export {
    store
}
window.store= store
