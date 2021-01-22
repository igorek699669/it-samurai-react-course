const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    postsData: [
        {id: 1, message: 'hi', likesCount: 12},
        {id: 2, message: 'hello', likesCount: 11},
    ],
    profile: null,
    newPostText: 'itkama',
}
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                postsData: [...state.postsData,
                    {
                        id: 5,
                        message: state.newPostText,
                        likesCount: 0
                    }
                ],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.text
            }
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
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
export let setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}
