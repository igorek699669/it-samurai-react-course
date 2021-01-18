import React from 'react';
import classes from './index.module.css';
import {ProfileInfo} from "./ProfileInfo";
import {MyPostsContainer} from './MyPosts/MyPostsContainer'
const Profile = (props) => {
    return (
        <div>

            <ProfileInfo/>

            <MyPostsContainer />
        </div>
    )
};
export {
    Profile
}