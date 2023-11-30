import React from "react";
import loader from "../../../assests/images/loader.gif";
import classes from './Preloader.module.css'

const Preloader = () => {
    return(
        <div className={classes.preloader}>
            <img src={loader} alt=''/>
        </div>
    )
}

export default Preloader;