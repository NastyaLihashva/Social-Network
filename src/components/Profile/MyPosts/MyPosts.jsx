import React from "react";
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const MyPosts = React.memo(props =>{
    let postsElements = props.postsData.map(post => (<Post message={post.message} likesCount={post.likesCount} />));

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return(
        <div>
            <span className={classes.line}></span>
            <h2>My posts</h2>
            <AddNewPostReduxForm onSubmit={onAddPost}/>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
});

const AddNewPostForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit} className={classes.new_post}>
            <div>
                <Field component={Textarea} name="newPostText" validate={[required, maxLength10]} id="" cols="30" rows="3" 
                    placeholder="Enter your post" />
            </div>
            <div>
                <button>new post</button>
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm({
    form: 'addNewPost'
})(AddNewPostForm)

export default MyPosts;