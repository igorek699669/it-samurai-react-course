import React from 'react';
import styles from './../index.module.css';


const Message = (props) => {
    return(
        <div className={styles.message}>
            {props.message}
        </div>
    )
};

export {
    Message
}