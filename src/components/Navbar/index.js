import React from 'react';
import classes from './index.module.css';
import {NavLink} from  'react-router-dom';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li className={classes.item}>
                    <NavLink to='/profile'>
                        profile
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to='/dialogs'>
                        messages
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="">
                        news
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="">
                        music
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="">
                        settings
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
};
export {
    Navbar
}