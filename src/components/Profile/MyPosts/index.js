import React from 'react';
import classes from './index.module.css';
import {Post} from "./Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/state'


const MyPosts = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    let onChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text))
    }
    return (
        <div className="posts">
            <div className="header-text">
                my posts
            </div>
            <div className="add_post">
                <textarea ref={newPostElement} name="" onChange={onChange} value={props.newPostText}/>
                <button onClick={addPost} >Add post</button>
            </div>
            <div className="posts-wrapper">
                {props.postsData.map((el)=><Post id={el.id} message={el.message} likesCount={el.likesCount}/>)}
            </div>
        </div>
    )
};
export {
    MyPosts
}