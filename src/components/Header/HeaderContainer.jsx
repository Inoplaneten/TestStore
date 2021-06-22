import React from 'react';
import { connect } from 'react-redux';
import { Header } from '../Header/Header';
import { getAuthAdmin, getLoginAdmin } from '../../redux/selectors/authSelector';
import { getActiveMenu } from '../../redux/selectors/menuSelector';
import { setLogout } from '../../redux/redusers/authReduser';
import { setToggleMenuVisible } from '../../redux/redusers/menuReduser';

const HeaderContainer = props => {
    return (
        <Header {...props}/>
    )
};

const mapStateToProps = state => ({
    admin: {
        login: getLoginAdmin(state),
        isAuth: getAuthAdmin(state)
    },
    menu: {
        isActive: getActiveMenu(state)
    }
});

const mapDispatchToProps = {
    setLogout, 
    setToggleMenuVisible 
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);