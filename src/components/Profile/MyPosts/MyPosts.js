import React from 'react';
import classes from './index.module.css';
import {Post} from "./Post";
import {Field, reduxForm} from 'redux-form'
import {maxLengthCreator, required} from '../../../utils/validators/validators'
import {Textarea} from '../../common/FormsControls/FormsControls'

const maxLength10 = maxLengthCreator(10)

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
                    key={el.id}
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
                    component={Textarea}
                    placeholder={'post-message'}
                    validate={[
                        required,
                        maxLength10
                    ]}
                />
            <button>Add post</button>
        </form>
    )
}
const AddPostFormRedux = reduxForm({form: 'addPost'})(AddPostForm)
export {
    MyPosts
}