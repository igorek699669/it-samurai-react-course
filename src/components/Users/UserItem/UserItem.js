import React from 'react'
import {NavLink} from 'react-router-dom'
import userImg from '../../../assets/images/avatar.png'
import styles from '../users.module.css'

const UserItem = ({user, ...props}) => {
    return (
        <div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={`/profile/${user.id}`}>
                                <img src={user.photos.small != null ? user.photos.small : userImg} className={styles.userPhoto}
                                     alt=""/>
                             </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button disabled={props.followingInProgress.some(id=> id===user.id)} onClick={() => {
                                    props.unfollow(user.id)
                                }}>unfollow</button>
                                : <button disabled={props.followingInProgress.some(id=> id ===user.id)} onClick={() => {
                                    props.follow(user.id)
                                }}>follow</button>
                            }

                        </div>
                    </span>
            <span>
                        <span>
                            <div>
                                {user.name}
                            </div>
                            <div>
                                {user.status}
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
        </div>
    )
}

export {UserItem}