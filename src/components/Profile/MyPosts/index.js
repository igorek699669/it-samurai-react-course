import React from 'react';
import classes from './index.module.css';
import {Post} from "./Post";
const MyPosts = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost()
    }
    let onChange = () => {
        let text = newPostElement.current.value;
        props.changeNewPostText(text)
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