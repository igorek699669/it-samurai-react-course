import React from 'react';
import classes from './index.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from './MyPosts/MyPostsContainer'
const Profile = (props) => {
    return (
        <div>
            <ProfileInfo
                isOwner={props.isOwner}
                 status={props.status}
                 profile={props.profile}
                 updateStatus = {props.updateStatus}
                savePhoto={props.savePhoto}
            />
            <MyPostsContainer />
        </div>
    )
};
export {
    Profile
}