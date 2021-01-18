import React from 'react';
import styles from './index.module.css';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/reducers/dialogs-reducer'
import {Dialogs} from './Dialogs'
import {StoreContext} from '../../StoreContext'

const DialogsContainer = (props) => {


    return (
        <StoreContext.Consumer>
            {
                (store)=>{
                    let state = store.getState()

                    let newMessageBody =state.dialogsPage.newMessageBody

                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageCreator())
                    }

                    let onNewMessageChange = (body) => {
                        store.dispatch(updateNewMessageBodyCreator(body))
                    }
                    return <Dialogs
                        onNewMessageChange={onNewMessageChange}
                        onSendMessageClick={onSendMessageClick}
                        newMessageBody = {newMessageBody}
                        dialogsData = {state.dialogsPage.dialogsData}
                        messageData = {state.dialogsPage.messageData}
                    />
                }
            }
        </StoreContext.Consumer>
    )
};

export {
    DialogsContainer
}