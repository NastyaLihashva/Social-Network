import React from "react"
import { Field, reduxForm } from "redux-form";
import { Input, Textarea } from "../../common/FormsControls/FormsControls";
import classes from './ProfileInfo.module.css';
import styles from './../../common/FormsControls/FormsControls.module.css';

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    console.log(error)
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <b>Full name: </b>
                <Field placeholder="Full name" name={"fullName"} component={Input} validate={[]} />
            </div>
            <div>
                <b>Looking for a job: </b>
                <Field placeholder="" name={"lookingForAJob"} component={Input} validate={[]}  type={"checkbox"}/>
            </div>
            <div>
                <b>My professional skills: </b>
                <Field placeholder="My professional skills" name={"lookingForAJobDescription"} component={Textarea} validate={[]}/>
            </div>
            <div>
                <b>About me: </b>
                <Field placeholder="About me" name={"aboutMe"} component={Textarea} validate={[]}/>
            </div>
            <div>
                <b>Contacts: </b>
                <div className={classes.contacts}>
                    {Object.keys(profile.contacts).map(key => {
                    return <div key={key}> {key}: 
                    <Field placeholder="Full name" name={"contacts." + key} component={Input} validate={[]} /></div>
                    })}
                </div>
            </div>
            <button>Save changes</button>
            { error && <div className={styles.form_summory_error}>{error}</div>} 
        </form>
    )
}


const ProfileDataFormReduxForm = reduxForm({
    form: 'edit-profile'
})(ProfileDataForm)


export default ProfileDataFormReduxForm;