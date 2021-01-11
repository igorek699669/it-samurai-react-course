import React from 'react';
import styles from './../index.module.css';
import {NavLink} from 'react-router-dom'


const DialogItem = (props) => {
    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
};

export {
    DialogItem
}