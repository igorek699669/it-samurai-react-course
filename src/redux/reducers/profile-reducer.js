import {profileAPI} from '../../components/api/api'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'

let initialState = {
    postsData: [
        {id: 1, message: 'hi', likesCount: 12},
        {id: 2, message: 'hello', likesCount: 11},
    ],
    profile: null,
    newPostText: 'itkama',
    status: ''
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
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
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
export let setUserStatus = (status) => {
    return {
        type: SET_USER_STATUS,
        status
    }
}
export let getUserProfile = (userId) => (dispatch) =>{
    profileAPI.getProfile(userId).then(data=>{
        dispatch(setUserProfile(data))
    })
}
export let getUserStatus = (userId) => (dispatch) =>{
    profileAPI.getStatus(userId)
        .then(status=>{
            dispatch(setUserStatus(status))
    })
}
export let updateUserStatus = (status) => (dispatch) =>{
    profileAPI.updateStatus(status)
        .then(data=>{
            if(data.resultCode==0){
                dispatch(setUserStatus(status))
            }

    })
}
