import React from 'react'
import {connect} from 'react-redux'
import styles from './users.module.css'
import {
    follow,
    setCurrentPage,
    unfollow, toggleIsFollowingProgress, requestUsers
} from '../../redux/reducers/users-reducer'
import {Users} from './Users'
import {Preloader} from '../common/Preloader'
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from '../../redux/reducers/users-selectors'
import {UserType} from '../../types/types'
import {AppStateType} from '../../redux/redux-store'

type MapStatePropsType = {
    currentPage: number,
    totalUsersCount: number
    pageSize: number,
    isFetching: boolean,
    users: Array<UserType>,
    followingInProgress: Array<number>
}
type MapDispatchPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    getUsers: (currentPage: number, pageSize: number) => void,
    setCurrentPage: (pageNumber: number) => void,
}
type PropsType = MapStatePropsType & MapDispatchPropsType
class ContainerForAPI extends React.Component<PropsType> {
    constructor(props: any){
        super(props)
    }
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}
let mapStateToProps = (state: AppStateType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}
export const UsersContainer =
    connect<MapStatePropsType, MapDispatchPropsType, null, AppStateType>
    (mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsers: requestUsers
})(ContainerForAPI)