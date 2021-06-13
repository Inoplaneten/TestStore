import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToPropsToRedirect = state => ({
    isUser: state.auth.user.isAuth
})

export const withAuthUserRedirect = Component => {
    const RedirectComponent = props => {
        if(props.isUser) {
            return <Redirect to='/'/>
        }
    
        return <Component {...props}/>
    }
    
    let ConnectedRedirectComponent = connect(mapStateToPropsToRedirect)(RedirectComponent)

    return ConnectedRedirectComponent;
}