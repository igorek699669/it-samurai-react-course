import React from 'react'
import styles from './users.module.css'
import userImg from '../../assets/images/avatar.png'
import {NavLink} from 'react-router-dom'
import axios from 'axios'

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize )
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span onClick={() => props.onPageChanged(p)}
                                 className={props.currentPage === p ? styles.selectedPage: undefined}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={`/profile/${u.id}`}>
                                <img src={u.photos.small != null ? u.photos.small : userImg} className={styles.userPhoto}
                                     alt=""/>
                             </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id=> id===u.id)} onClick={() => {

                                    props.toggleIsFollowingProgress(true, u.id)
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "bc5e5c63-bada-4fd4-a13d-4670022075f3"
                                        }
                                    }).then(response => {
                                        if (response.data.resultCode ==0) {
                                            props.unfollow(u.id)
                                        }
                                        props.toggleIsFollowingProgress(false, u.id)
                                    })

                                }}>unfollow</button>
                                : <button disabled={props.followingInProgress.some(id=> id ===u.id)} onClick={() => {
                                    props.toggleIsFollowingProgress(true, u.id)
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{} , {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "bc5e5c63-bada-4fd4-a13d-4670022075f3"
                                        }
                                    }).then(response => {
                                        if (response.data.resultCode ==0) {
                                            props.follow(u.id)
                                        }
                                        props.toggleIsFollowingProgress(false, u.id)
                                    })

                                }}>follow</button>
                            }

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>
                                {u.name}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>
                        <span>
                            <div>
                                {'u.location.country'}
                            </div>
                            <div>
                                {'u.location.city'}
                            </div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export {
    Users
}