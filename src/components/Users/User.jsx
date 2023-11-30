import React from "react";
import classes from "./Users.module.css"
import { NavLink } from "react-router-dom";

const User = ({user, followingInProgress, unfollowThunkCreater, followThunkCreater}) =>{
    return(
        <div className={classes.user}>
            <div className={classes.left}>
                <div className="img">
                    <img src={user.photos.small != null ? user.photos.small : "https://cdn-icons-png.flaticon.com/512/53/53133.png"} 
                        alt="" className={classes.userPhoto}/>
                </div>
                <div className="button">
                    {user.followed 
                        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            unfollowThunkCreater(user.id)

                        }}>UNFOLLOW</button> 

                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            followThunkCreater(user.id)
                        }}>FOLLOW</button>}
                </div>
            </div>
            <div >
                <NavLink to={'/profile/' + user.id} className={classes.right}>
                    <div className={classes.info}>
                        <div className={classes.name}>{user.name}</div>
                        <div className={classes.status}>{user.status}</div>
                    </div>
                    <div className={classes.location}>
                        <div className={classes.city}>{"user.location.city"}</div>
                        <div className={classes.country}>{"user.location.country"}</div>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default User;