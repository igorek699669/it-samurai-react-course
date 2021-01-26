import React from 'react';
import styles from './index.module.css';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/reducers/dialogs-reducer'
import {Dialogs} from './Dialogs'
import {connect} from 'react-redux'
import {withAuthRedirect} from '../hoc/withAuthRedirect'

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onNewMessageChange: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        onSendMessageClick: () => {
            dispatch(sendMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(withAuthRedirect(Dialogs))

export {
    DialogsContainer
}