import React from "react";
import classes from './../Dialog.module.css';
import { NavLink } from "react-router-dom";


const DialogItem = (props) =>{
    return(
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;