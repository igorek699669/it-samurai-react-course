const UNFOLLOW = "UNFOLLOW"
const FOLLOW = "FOLLOW"
const SET_USERS = "SET-USERS"

let initialState = {
    users: []
}
export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export const followCreator = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}
export const unfollowCreator = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}
export const setUsersCreator = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

