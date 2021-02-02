import {profileAPI} from '../../components/api/api'

const ADD_POST = 'ADD-POST'
const DELETE_POST = 'DELETE_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

let initialState = {
    postsData: [
        {id: 1, message: 'hi', likesCount: 12},
        {id: 2, message: 'hello', likesCount: 11}
    ],
    profile: null,
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
                        message: action.newPostText,
                        likesCount: 0
                    }
                ]
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
        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id !== action.postId)
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        default:
            return state
    }
}
export let addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
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
export let deletePost = (postId) => {
    return {
        type: DELETE_POST,
        postId
    }
}
export let savePhotoSuccess = (photos) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos
    }
}
export let getUserProfile = (userId) => async (dispatch) => {
    const data = await profileAPI.getProfile(userId)

    dispatch(setUserProfile(data))
}
export let getUserStatus = (userId) => async (dispatch) => {
    const status = await profileAPI.getStatus(userId)

    dispatch(setUserStatus(status))
}
export let updateUserStatus = (status) => async (dispatch) => {
    const data = await profileAPI.updateStatus(status)

    if (data.resultCode == 0) {
        dispatch(setUserStatus(status))
    }

}
export let savePhoto = (file) => async (dispatch) => {
    const data = await profileAPI.savePhoto(file)

    if (data.resultCode == 0) {
        dispatch(savePhotoSuccess(data.data.photos))
    }

}
