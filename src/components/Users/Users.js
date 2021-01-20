import React from 'react'
import styles from './users.module.css'
import axios from 'axios'
import userImg from '../../assets/images/avatar.png'

const Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            })
        }
    }


    return (
        <div>
            <button onClick={getUsers}>get users</button>
            {
                props.users.map(u=><div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null? u.photos.small: userImg} className={styles.userPhoto} alt=""/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={()=>{props.unfollow(u.id)}}>unfollow</button>
                                : <button onClick={()=>{props.follow(u.id)}}>follow</button>
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
                                {"u.location.country"}
                            </div>
                            <div>
                                {"u.location.city"}
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