import React from "react";
import classes from './Friends.module.css';
import Friend from "./Friend/Friend";

const Friends = (props) =>{
    let friendsArray = props.friends.map(friend => (<Friend name={friend.name}/>));
    return(
        <div className={classes.friends}>
            <div className={classes.title}>Friends</div>
            <div className={classes.friends_items}>
                {friendsArray}
            </div>
        </div>
    );
}

export default Friends;