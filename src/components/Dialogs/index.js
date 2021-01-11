import React from 'react';
import styles from './index.module.css';
import {DialogItem} from "./DialogItem";
import {Message} from "./Message";

const Dialogs = (props) => {

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {props.dialogsData.map((el)=> <DialogItem name={el.name} id={el.id} />)}
            </div>
            <div className={styles.messages}>
                {props.messageData.map((el)=> <Message message={el.message} id={el.id}/>)}
            </div>
        </div>
    )
};

export {
    Dialogs
}