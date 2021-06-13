import React from 'react';
import { connect } from 'react-redux';
import { Header } from '../Header/Header';
import { setLogout } from '../../redux/redusers/authReduser';
import { setToggleMenuVisible } from '../../redux/redusers/menuReduser';

const HeaderContainer = props => {
    return (
        <Header {...props}/>
    )
}

const mapStateToProps = state => ({
    admin: {
        login: state.auth.admin.login,
        isAuth: state.auth.admin.isAuth
    },
    menu: {
        isActive: state.menu.isActive
    }
})

const mapDispatchToProps = {
    setLogout, 
    setToggleMenuVisible 
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);