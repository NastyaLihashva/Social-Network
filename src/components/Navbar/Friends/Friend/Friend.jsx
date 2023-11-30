import React from "react";
import classes from './../Friends.module.css';

const Friend = (props) =>{
    return(
        <div className={classes.item}>
            <img src='https://cdn-icons-png.flaticon.com/512/53/53133.png' alt='avatar'/>
            {props.name}
        </div>
    );
}

export default Friend;