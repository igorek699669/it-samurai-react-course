import {applyMiddleware, combineReducers, createStore, compose} from 'redux'
import {profileReducer} from './reducers/profile-reducer'
import {dialogsReducer} from './reducers/dialogs-reducer'
import {sidebarReducer} from './reducers/sidebar-reducer'
import {usersReducer} from './reducers/users-reducer'
import {authReducer} from './reducers/auth-reducer'
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import {appReducer} from './reducers/app-reducer'

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>



// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunkMiddleware)
))

export {
    store
}