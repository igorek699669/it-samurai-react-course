import React from 'react'
import styles from './users.module.css'
import {Pagination} from '../common/Pagination/Pagination'
import {UserItem} from './UserItem/UserItem'

const Users = (props) => {

    return (
        <div>
            <Pagination
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                onPageChanged = {props.onPageChanged}
                currentPage={props.currentPage}
                portionSize = {10}
            />
            {
                props.users.map(u => <UserItem
                    user={u}
                    followingInProgress={props.followingInProgress}
                    follow={props.follow}
                    unfollow={props.unfollow}
                    />
                )
            }
        </div>
    )
}

export {
    Users
}