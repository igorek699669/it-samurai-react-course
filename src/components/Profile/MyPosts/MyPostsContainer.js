import React from 'react';
import classes from './index.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/reducers/profile-reducer'
import {MyPosts} from './MyPosts'


const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    let onChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }
    return (
        <MyPosts
            updateNewPostText={onChange}
            addPost={addPost}
            postsData={state.profilePage.postsData}
            newPostText={state.profilePage.newPostText}
        />
    )
};
export {
    MyPostsContainer
}