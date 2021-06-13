import React from 'react';
import logo from '../../assets/img/logo.png';
import { NavLink } from 'react-router-dom';
import classes from './Logo.module.scss';

const Logo = () => {
    return (
        <NavLink
            to='/'
            exact
            className={classes.logo}
        >
            <img src={logo} alt='Velotime'/>
        </NavLink>
    )
}

export { Logo };