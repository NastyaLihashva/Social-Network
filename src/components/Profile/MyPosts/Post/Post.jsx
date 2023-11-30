import React from "react";
import classes from './Post.module.css';

const Post = (props) =>{
    return(
        <div className={classes.item}>
            <div className={classes.text}>
                <img src='https://cdn-icons-png.flaticon.com/512/53/53133.png' alt='avatar'/>
                {props.message}
            </div>
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;