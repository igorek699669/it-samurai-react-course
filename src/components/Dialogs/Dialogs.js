import React from 'react';
import styles from './index.module.css';
import {DialogItem} from "./DialogItem";
import {Message} from "./Message";

const Dialogs = (props) => {
    let newMessageBody = props.newMessageBody
    let onSendMessageClick = () => {
        props.onSendMessageClick()
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.onNewMessageChange(body)
    }
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {props.dialogsData.map((el)=> <DialogItem name={el.name} id={el.id} />)}
            </div>
            <div className={styles.messages}>
                <div>
                    {props.messageData.map((el)=> <Message message={el.message} id={el.id}/>)}
                </div>
                <div>
                    <div>
                        <textarea
                            onChange={onNewMessageChange}
                            value={newMessageBody}
                            placeholder='enter your message'></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>send</button>
                    </div>
                </div>
            </div>

        </div>
    )
};

export {
    Dialogs
}