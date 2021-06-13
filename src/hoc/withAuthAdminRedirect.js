import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToPropsToRedirect = state => ({
    isAdmin: state.auth.admin.isAuth
})

export const withAuthAdminRedirect = Component => {
    const RedirectComponent = props => {
        if(props.isAdmin) {
            return <Redirect to='/'/>
        }
    
        return <Component {...props}/>
    }
    
    let ConnectedRedirectComponent = connect(mapStateToPropsToRedirect)(RedirectComponent)

    return ConnectedRedirectComponent;
}