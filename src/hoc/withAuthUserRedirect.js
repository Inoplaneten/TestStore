import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAuthUser } from '../redux/selectors/authSelector';

const mapStateToPropsToRedirect = state => ({
    isUser: getAuthUser(state)
});

export const withAuthUserRedirect = Component => {
    const RedirectComponent = ({isUser, ...props}) => {
        if(isUser) {
            return <Redirect to='/'/>
        }
    
        return <Component {...props}/>
    }
    
    let ConnectedRedirectComponent = connect(mapStateToPropsToRedirect)(RedirectComponent)

    return ConnectedRedirectComponent;
};