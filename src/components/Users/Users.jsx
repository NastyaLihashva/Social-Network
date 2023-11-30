import React from "react";
import classes from "./Users.module.css"
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, followingInProgress, unfollowThunkCreater, followThunkCreater, ...props}) =>{
    return(
        <div>
            <Paginator totalItemsCount={totalUsersCount} currentPage={currentPage} pageSize={pageSize} onPageChanged={onPageChanged}/>
            <h2>Users</h2>
            <span className={classes.line}></span>
            {props.users.map(u => <User user={u} followingInProgress={followingInProgress} 
                unfollowThunkCreater={unfollowThunkCreater} followThunkCreater = {followThunkCreater} 
                key={u.id}/>)
            }           
        </div>
    )
}

export default Users;