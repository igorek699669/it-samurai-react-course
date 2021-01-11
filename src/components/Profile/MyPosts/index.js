import React from 'react';
import classes from './index.module.css';
import {Post} from "./Post";
const MyPosts = (props) => {


    return (
        <div className="posts">
            <div className="header-text">
                my posts
            </div>
            <div className="add_post">
                <textarea name=""></textarea>
                <button>Add post</button>
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