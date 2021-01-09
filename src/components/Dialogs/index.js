import React from 'react';
import styles from './index.module.css';
import {NavLink} from 'react-router-dom'

const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: 'dima1'},
        {id: 2, name: 'dima2'},
        {id: 3, name: 'dima3'},
        {id: 4, name: 'dima4'},
        {id: 5, name: 'dima5'},
    ];
    let messageData = [
        {id: 1, message: 'hi1'},
        {id: 2, message: 'hi2'},
        {id: 3, message: 'hi3'},
    ];
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsData.map((el)=> <DialogItem name={el.name} id={el.id} />)}
            </div>
            <div className={styles.messages}>
                {messageData.map((el)=> <Message message={el.message} id={el.id}/>)}
            </div>
        </div>
    )
};

const DialogItem = (props) => {
    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
};
const Message = (props) => {
    return(
        <div className={styles.message}>
            {props.message}
        </div>
    )
};

export {
    Dialogs
}