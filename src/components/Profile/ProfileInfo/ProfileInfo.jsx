import React from 'react';
import classes from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import { useState } from 'react';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) =>{
    let [editMode, setEditMode] = useState(false);

    if(!profile){
        return <div></div>
    }

    const onPhotoSelected= (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) =>{
        saveProfile(formData)
            .then(() => {
                setEditMode(false);
            })
            .catch(() => {});
    }

    return (
        <div>
            {/*<div className={classes.background}>
                <img src='https://kudann.ru/uploads/af315a318da415860ee72551a830a06f.png' alt='img'></img>
    </div>*/}
            <div className={classes.description}>
                <div className={classes.photo_block}>
                    {profile.photos.large ? <img src={profile.photos.large} alt='avatar'/>
                    : <img src='https://cdn-icons-png.flaticon.com/512/53/53133.png' alt='avatar'/>}
                    {isOwner && <input className={classes.inputFile} type='file' onChange={onPhotoSelected}/>}
                </div>
                <div className={classes.info}>
                    <div className={classes.name}>{profile.fullName}</div>
                    <ProfileStatus status={status} updateStatus={updateStatus}/>
                    {editMode ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> : 
                    <ProfileData profile={profile} isOwner={isOwner} onEditMode={() => setEditMode(true)}/>}
                </div>
            </div>
        </div>
    );
}

const Contact = ({contactTitle, contactValue}) => {
    return(
        <div>
            {contactTitle}: {contactValue}
        </div>
    )
}

const ProfileData = ({profile, isOwner, onEditMode}) => {
    return(
        <div>
            <div>
                <b>Looking for a job: </b>{profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob && 
            <div>
                <b>My professional skills: </b>{profile.lookingForAJobDescription}
            </div>
            }
            <div>
                <b>About me: </b>{profile.aboutMe}
            </div>
            <div>
                <b>Contacts: </b>
                <div className={classes.contacts}>
                    {Object.keys(profile.contacts).map(key => <Contact contactTitle={key} contactValue={profile.contacts[key]}/>)}
                </div>
            </div>
            {isOwner && <button onClick={onEditMode}>Edit profile</button>}
        </div>
    )
}


export default ProfileInfo;