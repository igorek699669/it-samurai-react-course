import {getAuthUserData} from './auth-reducer'

const SET_INITIALIZED = 'SET_INITIALIZED'

type initialStateType ={
    initialized: boolean
}
let initialState: initialStateType = {
    initialized: false,
}

export const appReducer = (state = initialState, action: any):initialStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}
type initializedActionType ={
    type: typeof SET_INITIALIZED
}
export let setInitialized = ():initializedActionType => {
    return {
        type: SET_INITIALIZED,
    }
}
export const initializeApp = () => (dispatch: any) => {
    let promise =  dispatch(getAuthUserData())
    promise.then(()=>{
        dispatch(setInitialized())
    })
}