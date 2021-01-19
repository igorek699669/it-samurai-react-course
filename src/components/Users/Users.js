import React from 'react'
import styles from './users.module.css'

const Users = (props) => {
    console.log('1')
    if (props.users.length===0){
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
                    followed: false,
                    fullName: 'igor',
                    status: 'love football',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {

                    id: 2,
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
                    followed: true,
                    fullName: 'dmitry',
                    status: 'love football2',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {

                    id: 3,
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
                    followed: false,
                    fullName: 'sasha',
                    status: 'love football3',
                    location: {city: 'Kiev', country: 'Ukraine'}
                },
            ]
        )
    }

    return (
        <div>
            {
                props.users.map(u=><div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto} alt=""/>
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
                                {u.fullName}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>
                        <span>
                            <div>
                                {u.location.country}
                            </div>
                            <div>
                                {u.location.city}
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