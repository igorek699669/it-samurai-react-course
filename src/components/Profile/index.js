import React from 'react';
import classes from './index.module.css';
import {MyPosts} from "./MyPosts";
import {ProfileInfo} from "./ProfileInfo";
const Profile = (props) => {
    return (
        <div>

            <ProfileInfo/>

            <MyPosts
                dispatch={props.dispatch}
                newPostText={props.newPostText}
                postsData={props.postsData}
            />
        </div>
    )
};
export {
    Profile
}