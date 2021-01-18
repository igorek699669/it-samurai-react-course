const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
let initialState = {
    postsData: [
        {id: 1, message: 'hi', likesCount: 12},
        {id: 2, message: 'hello', likesCount: 11},
    ],
    newPostText: 'itkama',
}
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            let stateCopy= {...state}
            stateCopy.postsData = [...state.postsData]
            stateCopy.postsData.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.text
            return stateCopy
        }
        default:
            return state
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