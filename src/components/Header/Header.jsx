import React from 'react';
import classes from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { Logo } from '../Logo/Logo';

const Header = ({admin, menu, setLogout, setToggleMenuVisible}) => {
    return (
        <header className={classes.header}>
            <div className='container'>
                <div className={classes.nav}>
                    <Logo/>
                    <nav className={`${classes.menu} ${menu.isActive ? classes.isActive : ''}`}>
                        <ul className={classes.menuList}>
                            <li className={classes.menuItem} onClick={setToggleMenuVisible}>
                                <NavLink 
                                    to='/'
                                    exact
                                    activeClassName={classes.active}
                                >
                                    Каталог
                                </NavLink>
                            </li>
                            <li className={classes.menuItem} onClick={setToggleMenuVisible}>
                                <NavLink 
                                    to='/add-product'
                                    exact
                                    activeClassName={classes.active}
                                >
                                    Добавить товар
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className={classes.rightNav}>
                        {admin.isAuth && 
                        <div className={classes.loginData}>
                            <span className={classes.loginDataName}>{admin.login}</span>
                            <button type='button' onClick={setLogout}>
                                Выйти
                            </button>
                        </div>}
                        <button type='button' className={`${classes.btnMenu} ${menu.isActive ? classes.isActive : ''}`} onClick={setToggleMenuVisible}>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export { Header };