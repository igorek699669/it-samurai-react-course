import React from 'react'
import styles from './index.module.css'
import preloaderGif from '../../../assets/images/preloader.gif'

const Preloader = () => {
    return (
        <div className={styles.preloader}>
            <img src={preloaderGif}/>
        </div>
    )
}

export {
    Preloader
}