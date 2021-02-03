import {authAPI, securityAPI} from '../../components/api/api'
import {stopSubmit} from 'redux-form'

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaUrl: action.url
            }
        default:
            return state
    }
}
export let setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        data: {
            userId,
            email,
            login,
            isAuth
        }
    }
}
export let getCaptchaUrlSuccess = (url) => {
    return {
        type: GET_CAPTCHA_URL_SUCCESS,
        url
    }
}
export const getAuthUserData = () => async (dispatch) => {
    const data = await authAPI.me()
    if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {

    const data = await authAPI.login(email, password, rememberMe, captcha)

    if (data.resultCode === 0) {
        dispatch(getAuthUserData())
    }
    else {
        if(data.resultCode===10) {
            dispatch(getCaptchaUrl())
        }
        let message = data.messages.length > 0 ? data.messages[0] : 'some error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}
export const logout = () => async (dispatch) => {
    const data = await authAPI.logout()

    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
export const getCaptchaUrl = () => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl()
    const captchaUrl = data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}
