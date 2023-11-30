import React, {useEffect, useState} from "react";
import classes from './ProfileInfo.module.css';


const ProfileStatusWithHooks = (props) =>{
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () =>{
        setEditMode(true);
    }

    const deactivateEditMode = ()=>{
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) =>{
        setStatus(e.currentTarget.value);
    }

    return (
        <div className={classes.status}>
            {!editMode && 
                <div>
                    <div className={classes.text} onDoubleClick={activateEditMode}>{props.status || "----"}</div>
                </div>
            }
            {editMode &&
                <div>
                    <input className={classes.input} onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} type="text" 
                        value={status}/>
                </div>
            }
        </div>
    );
    
}

export default ProfileStatusWithHooks;