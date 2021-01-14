import React from 'react';
import classes from './index.module.css';
import {MyPosts} from "./MyPosts";
import {ProfileInfo} from "./ProfileInfo";
const Profile = (props) => {
    return (
        <div>

            <ProfileInfo/>

            <MyPosts
                addPost={props.addPost}
                newPostText={props.newPostText}
                postsData={props.postsData}
                changeNewPostText={props.changeNewPostText}
            />
        </div>
    )
};
export {
    Profile
}