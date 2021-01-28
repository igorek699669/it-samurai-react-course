import React from 'react';
import classes from './index.module.css';
import {NavLink} from 'react-router-dom'

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" alt=""/>
            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>logout</button></div>
                    : (<NavLink to={'/login'}>Login</NavLink>)}

            </div>
        </header>
    )
};
export {
    Header
}