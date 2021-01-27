import React from 'react';
import classes from './index.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/reducers/profile-reducer'
import {MyPosts} from './MyPosts'
import {connect} from 'react-redux'


const MapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}
const MapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText)=> {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}
const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts)
export {
    MyPostsContainer
}