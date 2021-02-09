import {profileAPI} from '../../components/api/api'
import {stopSubmit} from 'redux-form'
import {PhotosType, PostType, ProfileType} from '../../types/types'

const ADD_POST = 'ADD-POST'
const DELETE_POST = 'DELETE_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'


let initialState = {
    postsData: [
        {id: 1, message: 'hi', likesCount: 12},
        {id: 2, message: 'hello', likesCount: 11}
    ] as Array <PostType>,
    profile: null as ProfileType | null,
    status: '' as string
}
type InitialStateType = typeof initialState
export const profileReducer = (state = initialState, action: any): InitialStateType => {
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
                profile: {...state.profile, photos: action.photos} as ProfileType
            }

        default:
            return state
    }
}
type AddPostActionCreatorType = {
    type: typeof ADD_POST,
    newPostText: string
}
export let addPostActionCreator = (newPostText: string): AddPostActionCreatorType=> {
    return {
        type: ADD_POST,
        newPostText
    }
}

type SetUserProfileType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
}
export let setUserProfile = (profile: ProfileType): SetUserProfileType => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

type SetUserStatusType = {
    type: typeof SET_USER_STATUS,
    status: string
}
export let setUserStatus = (status: string):SetUserStatusType => {
    return {
        type: SET_USER_STATUS,
        status
    }
}


type DeletePostType = {
    type: typeof DELETE_POST,
    postId: number
}
export let deletePost = (postId: number): DeletePostType => {
    return {
        type: DELETE_POST,
        postId
    }
}

type SavePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: PhotosType
}
export let savePhotoSuccess = (photos:PhotosType) : SavePhotoSuccessType => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos
    }
}

export let getUserProfile = (userId: number) => async (dispatch: any) => {
    const data = await profileAPI.getProfile(userId)

    dispatch(setUserProfile(data))
}
export let getUserStatus = (userId: number) => async (dispatch: any) => {
    const status = await profileAPI.getStatus(userId)

    dispatch(setUserStatus(status))
}
export let updateUserStatus = (status:string) => async (dispatch:any) => {
    const data = await profileAPI.updateStatus(status)

    if (data.resultCode == 0) {
        dispatch(setUserStatus(status))
    }

}
export let savePhoto = (file:any) => async (dispatch:any) => {
    const data = await profileAPI.savePhoto(file)

    if (data.resultCode == 0) {
        dispatch(savePhotoSuccess(data.data.photos))
    }

}
export let saveProfile = (profile: ProfileType) => async (dispatch:any, getState: any) => {
    const data = await profileAPI.saveProfile(profile)
    const userId = getState().auth.userId
    if (data.resultCode == 0) {
        dispatch(getUserProfile(userId))
    }
    else{
        dispatch(stopSubmit('editProfile', {_error: data.messages[0]}))
        return Promise.reject(data.messages[0])
    }
}
