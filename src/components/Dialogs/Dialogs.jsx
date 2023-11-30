import React from "react";
import classes from './Dialog.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { required, maxLengthCreator } from "../../utils/validators/validators";

const maxLength100 = maxLengthCreator(100);

const Dialogs = (props) =>{
    let dialogsElements = props.dialogsData.map(dialog => (<DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />));
    let messagesElements = props.messagesData.map(message => (<Message message={message.message}  key={message.id} />));

    let addNewMessage = (values) =>{
        props.sendMessage(values.newMessageText);
    }

    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                <h2>Dialogs</h2>
                <span className={classes.line}></span>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <h2>Messages</h2>
                <span className={classes.line}></span>
                {messagesElements}
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}


const AddMessageForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength100]}name={"newMessageText"} id="" cols="30" rows="3" placeholder='Enter your message' />
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({
    form: 'addMessage'
})(AddMessageForm)


export default Dialogs;