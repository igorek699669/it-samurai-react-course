import React from 'react';
import classes from './index.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/reducers/profile-reducer'
import {MyPosts} from './MyPosts'
import {StoreContext} from '../../../StoreContext'


const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }
                    let onChange = (text) => {
                        store.dispatch(updateNewPostTextActionCreator(text))
                    }

                    return <MyPosts
                        updateNewPostText={onChange}
                        addPost={addPost}
                        postsData={state.profilePage.postsData}
                        newPostText={state.profilePage.newPostText}
                    />
                }
            }
        </StoreContext.Consumer>
    )
};
export {
    MyPostsContainer
}