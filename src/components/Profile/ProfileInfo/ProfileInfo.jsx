import React from 'react';
import classes from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = ({profile, status, updateStatus}) =>{
    if(!profile){
        return <div></div>
    }
    return (
        <div>
            <div className={classes.background}>
                <img src='https://kudann.ru/uploads/af315a318da415860ee72551a830a06f.png' alt='img'></img>
            </div>
            <div className={classes.description}>
                {profile.photos.small ? <img src={profile.photos.small} alt='avatar'/>
                : <img src='https://cdn-icons-png.flaticon.com/512/53/53133.png' alt='avatar'/>}
                <div className={classes.info}>
                    <div className={classes.name}>{profile.fullName}</div>
                    <ProfileStatus status={status} updateStatus={updateStatus}/>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;