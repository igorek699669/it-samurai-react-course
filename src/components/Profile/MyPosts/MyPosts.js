import React from 'react';
import classes from './index.module.css';
import {Post} from "./Post";
import {Field, reduxForm} from 'redux-form'

const MyPosts = (props) => {
    let addPost = (values) => {
        props.addPost(values.newPostText)
    }
    return (
        <div className="posts">
            <div className="header-text">
                my posts
            </div>
            <AddPostFormRedux onSubmit={addPost}/>
            <div className="posts-wrapper">
                {props.profilePage.postsData.map((el)=><Post
                    id={el.id}
                    message={el.message}
                    likesCount={el.likesCount}/>)}
            </div>
        </div>
    )
};
const AddPostForm = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit} className="add_post">
                <Field
                    name={'newPostText'}
                    component={'textarea'}
                />
            <button>Add post</button>
        </form>
    )
}
const AddPostFormRedux = reduxForm({form: 'addPost'})(AddPostForm)
export {
    MyPosts
}