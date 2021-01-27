import React from 'react';
import styles from './index.module.css';
import {DialogItem} from "./DialogItem";
import {Message} from "./Message";
import {Field, reduxForm} from 'redux-form'
import {Textarea} from '../common/FormsControls/FormsControls'
import {maxLengthCreator, required} from '../../utils/validators/validators'


const maxLength100 = maxLengthCreator(100)
const Dialogs = (props) => {
    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {props.dialogsPage.dialogsData.map((el)=> <DialogItem name={el.name} id={el.id} />)}
            </div>
            <div className={styles.messages}>
                <div>
                    {props.dialogsPage.messageData.map((el)=> <Message message={el.message} id={el.id}/>)}
                </div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>

        </div>
    )
};
const AddMessageForm = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    validate={
                        [
                            required,
                            maxLength100
                        ]
                    }
                    name={"newMessageBody"}
                    placeholder='enter your message'></Field>
            </div>
            <div>
                <button>send</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)
export {
    Dialogs
}