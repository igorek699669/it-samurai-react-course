import React from 'react'
import {connect} from 'react-redux'
import {Users} from './UsersC'
import {
    followCreator,
    setCurrentPageCreator,
    setUsersCreator, setUsersTotalCountCreator,
    unfollowCreator
} from '../../redux/reducers/users-reducer'

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setTotalUsersCount: (totalCount)=> {
            dispatch(setUsersTotalCountCreator(totalCount))
        },
        setCurrentPage: (pageNumber)=> {
            dispatch(setCurrentPageCreator(pageNumber))
        }

    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)