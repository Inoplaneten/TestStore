import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToPropsToRedirect = state => ({
    isAdmin: state.auth.admin.isAuth,
    isUser: state.auth.user.isAuth
})

export const withAuthRedirect = Component => {
    const RedirectComponent = props => {
        if(!props.isAdmin && !props.isUser) {
            return <Redirect to='/auth'/>
        }
    
        return <Component {...props}/>
    }
    
    let ConnectedRedirectComponent = connect(mapStateToPropsToRedirect)(RedirectComponent)

    return ConnectedRedirectComponent;
}