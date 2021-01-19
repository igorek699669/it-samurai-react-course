import React from 'react'
import {connect} from 'react-redux'
import {Users} from './Users'
import {followCreator, setUsersCreator, unfollowCreator} from '../../redux/reducers/users-reducer'

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) =>{
            dispatch(followCreator(userId))
        },
        unfollow: (userId) =>{
            dispatch(unfollowCreator(userId))
        },
        setUsers: (users)=> {
            dispatch(setUsersCreator(users))
        }

    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)