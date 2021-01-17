import React from 'react';
import styles from './index.module.css';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/reducers/dialogs-reducer'
import {Dialogs} from './Dialogs'

const DialogsContainer = (props) => {
    let state = props.store.getState()

    let newMessageBody =state.dialogsPage.newMessageBody

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
       <Dialogs
           onNewMessageChange={onNewMessageChange}
           onSendMessageClick={onSendMessageClick}
           newMessageBody = {newMessageBody}
           dialogsData = {state.dialogsPage.dialogsData}
           messageData = {state.dialogsPage.messageData}
       />
    )
};

export {
    DialogsContainer
}